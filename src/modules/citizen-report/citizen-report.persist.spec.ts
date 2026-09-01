import { describe, expect, test } from "bun:test";
import {
  assign_citizen_report_folio,
  persistable_ref_id,
  prepare_citizen_report_body,
  sanitize_evidence_array,
} from "./citizen-report.persist.ts";

describe("citizen-report persist", () => {
  test("persistable_ref_id keeps nested _id and uuid", () => {
    expect(persistable_ref_id({ _id: "69af40c25059cf0bfda2ca90", name: "Obras" })).toBe(
      "69af40c25059cf0bfda2ca90",
    );
    const uuid = "550e8400-e29b-41d4-a716-446655440000";
    expect(persistable_ref_id(uuid)).toBe(uuid);
    expect(persistable_ref_id("")).toBeNull();
  });

  test("sanitize_evidence_array drops empty ObjectId slots", () => {
    expect(
      sanitize_evidence_array(["", { _id: "" }, null, "507f1f77bcf86cd799439011"]),
    ).toEqual(["507f1f77bcf86cd799439011"]);
  });

  test("prepare_citizen_report_body strips images and unknown keys", () => {
    const out = prepare_citizen_report_body(
      {
        images: [],
        extra_noise: "nope",
        citizen_name: "Ana",
        department: { _id: "dept-1", name: "Obras" },
        report_coordinates: { latitude: 20.622, longitude: -103.068 },
        evidence_before_images: ["", { _id: "" }],
        name: "",
      },
      "create",
    );
    expect(out.images).toBeUndefined();
    expect(out.extra_noise).toBeUndefined();
    expect(out.name).toBeUndefined();
    expect(out.citizen_name).toBe("Ana");
    expect(out.department).toBe("dept-1");
    expect(out.report_coordinates).toEqual({
      latitude: 20.622,
      longitude: -103.068,
    });
    expect(out.evidence_before_images).toEqual([]);
  });

  test("assign_citizen_report_folio fills empty name from sequence", () => {
    const row = assign_citizen_report_folio({ citizen_name: "Ana" }, 42);
    expect(row.sequence).toBe(42);
    expect(row.name).toBe("REPORTE/42");
    expect(row.status).toBe("pendiente");
  });
});
