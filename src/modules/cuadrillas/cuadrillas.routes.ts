import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { cuadrillas_pages } from "./cuadrillas.pages.ts";
import { cuadrillas_tables } from "./cuadrillas.tables.ts";

export const cuadrillas_module = define_module({
  resource: "cuadrillas",
  labels: {
    singular: "Cuadrillas",
    plural: "Cuadrillas",
    read: "Ver Cuadrillas",
    write: "Editar Cuadrillas",
  },
  routes: define_crud({
    resource: "cuadrillas",
    table: "cuadrillas",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "cuadrill",
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
  tables: cuadrillas_tables,
  pages: cuadrillas_pages,
  menu: [],
});
