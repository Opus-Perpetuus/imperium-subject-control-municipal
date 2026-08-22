import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const impedimento_tables: KirletTableDecl[] = [
  {
    name: "impedimento",
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
      { name: "id_impedimento", type: "text" },
      { name: "asignar_auditoria", type: "boolean" },
    ],
    indexes: [
      { name: "idx_impedimento_name", columns: ["name"] },
      { name: "idx_impedimento_active", columns: ["is_active"] },
    ],
  },
];
