import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { citizen_report_reporting_medium_pages } from "./citizen-report-reporting-medium.pages.ts";
import { citizen_report_reporting_medium_tables } from "./citizen-report-reporting-medium.tables.ts";

export const citizen_report_reporting_medium_module = define_module({
  resource: "citizen-report-reporting-medium",
  labels: {
    singular: "Medio de reporte",
    plural: "Medio de reporte",
    read: "Ver Medio de reporte",
    write: "Editar Medio de reporte",
  },
  routes: define_crud({
    resource: "citizen-report-reporting-medium",
    table: "citizen_report_reporting_medium",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "citizen-",
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
  tables: citizen_report_reporting_medium_tables,
  pages: citizen_report_reporting_medium_pages,
  menu: [],
});
