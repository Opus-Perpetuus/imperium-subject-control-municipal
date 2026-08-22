import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const states_tables: KirletTableDecl[] = [
  {
    name: "states",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "catalog_key", type: "text" },
      { name: "abbreviation", type: "text" },
      { name: "country", type: "text" },
      { name: "cfdi_c_estado", type: "text" },
      { name: "cfdi_c_pais", type: "text" },
      { name: "cfdi_fecha_inicio_vigencia", type: "text" },
      { name: "cfdi_fecha_fin_vigencia", type: "text" },
    ],
    indexes: [
      { name: "idx_states_name", columns: ["name"] },
      { name: "idx_states_active", columns: ["is_active"] },
    ],
  },
];
