import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { violation_offender_guarantee_pages } from "./violation-offender-guarantee.pages.ts";
import { violation_offender_guarantee_tables } from "./violation-offender-guarantee.tables.ts";

export const violation_offender_guarantee_module = define_module({
  resource: "violation-offender-guarantee",
  labels: {
    singular: "Garantías del infractor",
    plural: "Garantías del infractor",
    read: "Ver Garantías del infractor",
    write: "Editar Garantías del infractor",
  },
  routes: define_crud({
    resource: "violation-offender-guarantee",
    table: "violation_offender_guarantee",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "violatio",
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
  tables: violation_offender_guarantee_tables,
  pages: violation_offender_guarantee_pages,
  menu: [],
});
