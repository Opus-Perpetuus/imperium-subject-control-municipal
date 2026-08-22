import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { ruta_pages } from "./ruta.pages.ts";
import { ruta_tables } from "./ruta.tables.ts";

export const ruta_module = define_module({
  resource: "ruta",
  labels: {
    singular: "Rutas",
    plural: "Rutas",
    read: "Ver Rutas",
    write: "Editar Rutas",
  },
  routes: define_crud({
    resource: "ruta",
    table: "ruta",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "ruta",
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
      id_ruta: { type: "string", search: true },
      consecutivo: { type: "number" },
      vigencia: { type: "number" },
      periodo: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: ruta_tables,
  pages: ruta_pages,
  menu: [],
});
