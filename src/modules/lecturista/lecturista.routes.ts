import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { lecturista_pages } from "./lecturista.pages.ts";
import { lecturista_tables } from "./lecturista.tables.ts";

export const lecturista_module = define_module({
  resource: "lecturista",
  labels: {
    singular: "Lecturistas",
    plural: "Lecturistas",
    read: "Ver Lecturistas",
    write: "Editar Lecturistas",
  },
  routes: define_crud({
    resource: "lecturista",
    table: "lecturista",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "lecturis",
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
      id_lecturista: { type: "string", search: true },
      dispositivo: { type: "string", search: true },
      user_id: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: lecturista_tables,
  pages: lecturista_pages,
  menu: [],
});
