import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { incidencia_pages } from "./incidencia.pages.ts";
import { incidencia_tables } from "./incidencia.tables.ts";

export const incidencia_module = define_module({
  resource: "incidencia",
  labels: {
    singular: "Incidencias",
    plural: "Incidencias",
    read: "Ver Incidencias",
    write: "Editar Incidencias",
  },
  routes: define_crud({
    resource: "incidencia",
    table: "incidencia",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "incidenc",
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
      id_incidencia: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: incidencia_tables,
  pages: incidencia_pages,
  menu: [],
});
