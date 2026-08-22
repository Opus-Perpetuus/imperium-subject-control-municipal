import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { citizen_report_problem_pages } from "./citizen-report-problem.pages.ts";
import { citizen_report_problem_tables } from "./citizen-report-problem.tables.ts";

export const citizen_report_problem_module = define_module({
  resource: "citizen-report-problem",
  labels: {
    singular: "Tipo de problema",
    plural: "Tipo de problema",
    read: "Ver Tipo de problema",
    write: "Editar Tipo de problema",
  },
  routes: define_crud({
    resource: "citizen-report-problem",
    table: "citizen_report_problem",
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
      auto_priority: { type: "string", search: true },
      department: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: citizen_report_problem_tables,
  pages: citizen_report_problem_pages,
  menu: [],
});
