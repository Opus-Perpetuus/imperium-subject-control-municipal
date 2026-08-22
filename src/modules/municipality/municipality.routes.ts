import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { municipality_pages } from "./municipality.pages.ts";
import { municipality_tables } from "./municipality.tables.ts";

export const municipality_module = define_module({
  resource: "municipality",
  labels: {
    singular: "Municipios",
    plural: "Municipios",
    read: "Ver Municipios",
    write: "Editar Municipios",
  },
  routes: define_crud({
    resource: "municipality",
    table: "municipality",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "municipa",
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
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: municipality_tables,
  pages: municipality_pages,
  menu: [],
});
