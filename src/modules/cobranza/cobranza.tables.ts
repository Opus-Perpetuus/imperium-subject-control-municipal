import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const cobranza_tables: KirletTableDecl[] = [
  {
    name: "cobranza",
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
      { name: "reference", type: "text" },
      { name: "concept", type: "text" },
      { name: "total_amount", type: "real" },
      { name: "paid_amount", type: "real" },
      { name: "balance", type: "real" },
      { name: "status", type: "text" },
      { name: "source_module", type: "text" },
      { name: "source_id", type: "text" },
      { name: "currency", type: "text" },
    ],
    indexes: [
      { name: "idx_cobranza_name", columns: ["name"] },
      { name: "idx_cobranza_active", columns: ["is_active"] },
    ],
  },
];
