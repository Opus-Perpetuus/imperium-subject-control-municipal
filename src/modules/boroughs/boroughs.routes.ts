import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { boroughs_pages } from "./boroughs.pages.ts";
import { boroughs_tables } from "./boroughs.tables.ts";

export const boroughs_module = define_module({
  resource: "boroughs",
  labels: {
    singular: "Delegaciones",
    plural: "Delegaciones",
    read: "Ver Delegaciones",
    write: "Editar Delegaciones",
  },
  routes: define_crud({
    resource: "boroughs",
    table: "boroughs",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "boroughs",
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
  tables: boroughs_tables,
  pages: boroughs_pages,
  menu: [],
});
