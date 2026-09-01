import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { citizen_report_pages } from "./citizen-report.pages.ts";
import { citizen_report_tables } from "./citizen-report.tables.ts";
import {
  before_citizen_report_create,
  persistable_ref_normalize,
  wrap_citizen_report_crud,
} from "./citizen-report.persist.ts";

const ref_string = {
  type: "string" as const,
  search: true,
  normalize: persistable_ref_normalize,
};

export const citizen_report_module = define_module({
  resource: "citizen-report",
  labels: {
    singular: "Reportes",
    plural: "Reportes",
    read: "Ver Reportes",
    write: "Editar Reportes",
  },
  routes: wrap_citizen_report_crud(
    define_crud({
    resource: "citizen-report",
    table: "citizen_report",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "citizen-",
    hooks: {
      before_create: before_citizen_report_create,
    },
    fields: {
      name: { type: "string", search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      citizen_name: { type: "string", search: true },
      citizen_email: { type: "string", search: true },
      citizen_phone: { type: "string", search: true },
      citizen_street: { type: "string", search: true },
      building_number_external: { type: "string", search: true },
      building_number_internal: { type: "string", search: true },
      neighborhood: { type: "string", search: true },
      borough: ref_string,
      delegado: ref_string,
      report_description: { type: "string", search: true },
      materials_used: { type: "string", search: true },
      employee_taken_the_report: ref_string,
      assinged_to: ref_string,
      department: ref_string,
      cuadrilla: ref_string,
      jefe_de_cuadrilla: ref_string,
      priority: { type: "string", search: true },
      status: { type: "string", search: true },
      citizen_report_problem: ref_string,
      reporting_medium: ref_string,
      evidence_before_images: { type: "json" },
      evidence_after_images: { type: "json" },
      report_coordinates: { type: "json" },
      latitude: { type: "number" },
      longitude: { type: "number" },
      sequence: { type: "number" },
      parent_report_id: ref_string,
      source_instance_label: { type: "string", search: true },
      source_instance_url: { type: "string", search: true },
      public_submission: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  ),
  tables: citizen_report_tables,
  pages: citizen_report_pages,
  menu: [],
});
