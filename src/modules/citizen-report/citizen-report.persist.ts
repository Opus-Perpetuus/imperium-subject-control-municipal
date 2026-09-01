/**
 * Normalize a citizen-report write before kirlet CRUD pick_body / insert.
 * Same rules as the Mongo plugin + core prepare_citizen_report_write:
 * persistable refs (not "[object Object]"), folio if name is empty,
 * drop leftover `images`, keep only persistable evidence ids.
 */
import type { KirletCtx, KirletRouteTable } from "@opus-perpetuus/imperium-core-kit";

export const CITIZEN_REPORT_REF_FIELDS = [
  "employee_taken_the_report",
  "assinged_to",
  "department",
  "cuadrilla",
  "jefe_de_cuadrilla",
  "citizen_report_problem",
  "reporting_medium",
  "borough",
  "delegado",
  "parent_report_id",
] as const;

const OBJECT_ID_HEX = /^[a-fA-F0-9]{24}$/;

const KNOWN_KEYS = new Set([
  "id",
  "_id",
  "name",
  "description",
  "is_active",
  "state",
  "ref",
  "search_field",
  "created_by",
  "custom_data",
  "payload",
  "citizen_name",
  "citizen_email",
  "citizen_phone",
  "citizen_street",
  "building_number_external",
  "building_number_internal",
  "neighborhood",
  "borough",
  "delegado",
  "report_description",
  "materials_used",
  "employee_taken_the_report",
  "assinged_to",
  "department",
  "cuadrilla",
  "jefe_de_cuadrilla",
  "priority",
  "status",
  "citizen_report_problem",
  "reporting_medium",
  "evidence_before_images",
  "evidence_after_images",
  "report_coordinates",
  "latitude",
  "longitude",
  "sequence",
  "parent_report_id",
  "source_instance_label",
  "source_instance_url",
  "public_submission",
]);

export function persistable_ref_id(value: unknown): string | null {
  if (value == null || value === "") return null;
  if (typeof value === "object") {
    const rec = value as { _id?: unknown; id?: unknown };
    const nested = rec._id ?? rec.id;
    if (nested !== value) return persistable_ref_id(nested);
    return null;
  }
  const text = String(value).trim();
  return text || null;
}

export function extract_objectid_hex(item: unknown): string | null {
  if (item == null || item === "") return null;
  if (typeof item === "string") {
    const id = item.trim();
    return OBJECT_ID_HEX.test(id) ? id : null;
  }
  if (typeof item === "object") {
    const nested =
      (item as { _id?: unknown; id?: unknown })._id ??
      (item as { id?: unknown }).id;
    if (nested == null || nested === "") return null;
    const id = String(nested).trim();
    return OBJECT_ID_HEX.test(id) ? id : null;
  }
  return null;
}

export function sanitize_evidence_array(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const out: string[] = [];
  for (const item of raw) {
    const id = extract_objectid_hex(item);
    if (id) out.push(id);
  }
  return out;
}

function parse_coord(value: unknown, min: number, max: number): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : Number(String(value).trim());
  if (!Number.isFinite(n) || n < min || n > max) return null;
  return Number(n.toFixed(6));
}

export function normalize_citizen_report_payload(
  payload: Record<string, unknown>,
): Record<string, unknown> {
  const normalized: Record<string, unknown> = { ...payload };
  delete normalized.images;
  for (const field of CITIZEN_REPORT_REF_FIELDS) {
    if (!Object.hasOwn(normalized, field)) continue;
    normalized[field] = persistable_ref_id(normalized[field]);
  }
  if (Object.hasOwn(normalized, "citizen_email")) {
    normalized.citizen_email = String(normalized.citizen_email ?? "")
      .trim()
      .toLowerCase();
  }
  if (Object.hasOwn(normalized, "citizen_phone")) {
    const raw = String(normalized.citizen_phone ?? "").trim();
    const plus = raw.startsWith("+");
    const digits = raw.replace(/\D/g, "");
    normalized.citizen_phone = digits ? (plus ? `+${digits}` : digits) : "";
  }
  if (Object.hasOwn(normalized, "evidence_before_images")) {
    normalized.evidence_before_images = sanitize_evidence_array(
      normalized.evidence_before_images,
    );
  }
  if (Object.hasOwn(normalized, "evidence_after_images")) {
    normalized.evidence_after_images = sanitize_evidence_array(
      normalized.evidence_after_images,
    );
  }
  if (Object.hasOwn(normalized, "evidences")) {
    const leftover = normalized.evidences;
    delete normalized.evidences;
    const before = normalized.evidence_before_images;
    const before_empty = !Array.isArray(before) || before.length === 0;
    if (before_empty && Array.isArray(leftover) && leftover.length > 0) {
      normalized.evidence_before_images = sanitize_evidence_array(leftover);
    }
  }
  if (Object.hasOwn(normalized, "report_coordinates")) {
    const raw = normalized.report_coordinates;
    if (!raw || typeof raw !== "object") {
      normalized.report_coordinates = null;
    } else {
      const coords = raw as { latitude?: unknown; longitude?: unknown };
      const latitude = parse_coord(coords.latitude, -90, 90);
      const longitude = parse_coord(coords.longitude, -180, 180);
      normalized.report_coordinates =
        latitude == null || longitude == null
          ? null
          : { latitude, longitude };
      if (normalized.latitude == null && latitude != null) {
        normalized.latitude = latitude;
      }
      if (normalized.longitude == null && longitude != null) {
        normalized.longitude = longitude;
      }
    }
  }
  return normalized;
}

export function strip_unknown_citizen_report_keys(
  payload: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (!KNOWN_KEYS.has(key)) continue;
    out[key] = value;
  }
  return out;
}

export function assign_citizen_report_folio(
  row: Record<string, unknown>,
  sequence: number,
): Record<string, unknown> {
  const next = { ...row, sequence };
  const name = String(next.name ?? "").trim();
  if (!name) next.name = `REPORTE/${sequence}`;
  if (!next.status) next.status = "pendiente";
  return next;
}

export function prepare_citizen_report_body(
  body: Record<string, unknown>,
  mode: "create" | "update",
): Record<string, unknown> {
  const normalized = strip_unknown_citizen_report_keys(
    normalize_citizen_report_payload(body),
  );
  if (mode === "create") {
    const name = String(normalized.name ?? "").trim();
    if (!name) delete normalized.name;
    if (!Number(normalized.sequence)) delete normalized.sequence;
  }
  return normalized;
}

function override_body(
  ctx: KirletCtx,
  body: Record<string, unknown>,
): KirletCtx {
  return {
    ...ctx,
    body: async <T = unknown>() => body as T,
  };
}

async function next_sequence(ctx: KirletCtx): Promise<number> {
  const rows = await ctx.data.findMany("citizen_report", { limit: 20_000 });
  let max = 0;
  for (const row of rows) {
    const n = Number(row.sequence);
    if (Number.isFinite(n) && n > max) max = n;
  }
  return max + 1;
}

export async function before_citizen_report_create(
  ctx: KirletCtx,
  row: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const sequence =
    Number(row.sequence) > 0 ? Number(row.sequence) : await next_sequence(ctx);
  return assign_citizen_report_folio(row, sequence);
}

type RouteFn = (
  ctx: KirletCtx,
) => Promise<unknown> | unknown;

function wrap_write(
  inner: RouteFn | undefined,
  mode: "create" | "update",
): RouteFn | undefined {
  if (!inner) return inner;
  return async (ctx: KirletCtx) => {
    const raw = ((await ctx.body<Record<string, unknown>>()) ?? {}) as Record<
      string,
      unknown
    >;
    const prepared = prepare_citizen_report_body(raw, mode);
    return inner(override_body(ctx, prepared));
  };
}

export function wrap_citizen_report_crud(
  routes: KirletRouteTable,
): KirletRouteTable {
  return routes.map((entry) => {
    const pattern = entry.pattern;
    const mode: "create" | "update" | null =
      pattern === "POST /citizen-report"
        ? "create"
        : pattern === "PATCH /citizen-report/:id"
          ? "update"
          : null;
    if (!mode || typeof entry.handler !== "function") return entry;
    return {
      ...entry,
      handler: wrap_write(entry.handler as RouteFn, mode),
    };
  });
}

export function persistable_ref_normalize(value: unknown): unknown {
  return persistable_ref_id(value);
}
