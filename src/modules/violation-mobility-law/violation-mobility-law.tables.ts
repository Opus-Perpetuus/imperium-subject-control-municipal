import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const violation_mobility_law_tables: KirletTableDecl[] = [
  {
    name: "violation_mobility_law",
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
      { name: "security_measure", type: "text" },
      { name: "fractions", type: "text" },
      { name: "umas_min", type: "real" },
      { name: "umas_max", type: "real" },
    ],
    indexes: [
      { name: "idx_violation_mobility_law_name", columns: ["name"] },
      { name: "idx_violation_mobility_law_active", columns: ["is_active"] },
    ],
  },
];
