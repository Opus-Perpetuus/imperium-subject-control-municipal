import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { cobranza_pages } from "./cobranza.pages.ts";
import { cobranza_tables } from "./cobranza.tables.ts";

export const cobranza_module = define_module({
  resource: "cobranza",
  labels: {
    singular: "Cobranza",
    plural: "Cobranza",
    read: "Ver Cobranza",
    write: "Editar Cobranza",
  },
  routes: define_crud({
    resource: "cobranza",
    table: "cobranza",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "cobranza",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      reference: { type: "string", search: true },
      concept: { type: "string", search: true },
      total_amount: { type: "number" },
      paid_amount: { type: "number" },
      balance: { type: "number" },
      status: { type: "string", search: true },
      source_module: { type: "string", search: true },
      source_id: { type: "string", search: true },
      currency: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: cobranza_tables,
  pages: cobranza_pages,
  menu: [],
});
