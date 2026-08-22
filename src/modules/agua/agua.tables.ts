import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const agua_tables: KirletTableDecl[] = [
  {
    name: "agua",
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
      { name: "vigencia_actual", type: "real" },
      { name: "periodo_actual", type: "real" },
    ],
    indexes: [
      { name: "idx_agua_name", columns: ["name"] },
      { name: "idx_agua_active", columns: ["is_active"] },
    ],
  },
];
