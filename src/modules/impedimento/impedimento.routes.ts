import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { impedimento_pages } from "./impedimento.pages.ts";
import { impedimento_tables } from "./impedimento.tables.ts";

export const impedimento_module = define_module({
  resource: "impedimento",
  labels: {
    singular: "Impedimentos",
    plural: "Impedimentos",
    read: "Ver Impedimentos",
    write: "Editar Impedimentos",
  },
  routes: define_crud({
    resource: "impedimento",
    table: "impedimento",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "impedime",
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
      id_impedimento: { type: "string", search: true },
      asignar_auditoria: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: impedimento_tables,
  pages: impedimento_pages,
  menu: [],
});
