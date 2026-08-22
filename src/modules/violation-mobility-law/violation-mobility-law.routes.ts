import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { violation_mobility_law_pages } from "./violation-mobility-law.pages.ts";
import { violation_mobility_law_tables } from "./violation-mobility-law.tables.ts";

export const violation_mobility_law_module = define_module({
  resource: "violation-mobility-law",
  labels: {
    singular: "Reglamento de Movilidad",
    plural: "Reglamento de Movilidad",
    read: "Ver Reglamento de Movilidad",
    write: "Editar Reglamento de Movilidad",
  },
  routes: define_crud({
    resource: "violation-mobility-law",
    table: "violation_mobility_law",
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
      security_measure: { type: "string", search: true },
      fractions: { type: "string", search: true },
      umas_min: { type: "number" },
      umas_max: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: violation_mobility_law_tables,
  pages: violation_mobility_law_pages,
  menu: [],
});
