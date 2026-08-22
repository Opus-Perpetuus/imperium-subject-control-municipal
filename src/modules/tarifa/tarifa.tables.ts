import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const tarifa_tables: KirletTableDecl[] = [
  {
    name: "tarifa",
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
      { name: "id_tarifa", type: "text" },
      { name: "vigencia", type: "real" },
      { name: "cuota_minima", type: "real" },
      { name: "consumo_minimo", type: "real" },
      { name: "consumo_maximo", type: "real" },
      { name: "costo_mt3_excedente", type: "real" },
    ],
    indexes: [
      { name: "idx_tarifa_name", columns: ["name"] },
      { name: "idx_tarifa_active", columns: ["is_active"] },
    ],
  },
];
