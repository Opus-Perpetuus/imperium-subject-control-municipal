import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { agua_reportes_pages } from "./agua-reportes.pages.ts";
import { agua_reportes_tables } from "./agua-reportes.tables.ts";

export const agua_reportes_module = define_module({
  resource: "agua-reportes",
  labels: {
    singular: "Reportes",
    plural: "Reportes",
    read: "Ver Reportes",
    write: "Editar Reportes",
  },
  routes: define_crud({
    resource: "agua-reportes",
    table: "agua_reportes",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "agua-rep",
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
  tables: agua_reportes_tables,
  pages: agua_reportes_pages,
  menu: [],
});
