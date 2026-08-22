import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { lectura_campo_pages } from "./lectura-campo.pages.ts";
import { lectura_campo_tables } from "./lectura-campo.tables.ts";

export const lectura_campo_module = define_module({
  resource: "lectura-campo",
  labels: {
    singular: "Captura de campo",
    plural: "Captura de campo",
    read: "Ver Captura de campo",
    write: "Editar Captura de campo",
  },
  routes: define_crud({
    resource: "lectura-campo",
    table: "lectura_campo",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "lectura-",
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
      vigencia_actual: { type: "number" },
      periodo_actual: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: lectura_campo_tables,
  pages: lectura_campo_pages,
  menu: [],
});
