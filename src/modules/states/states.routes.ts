import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { states_pages } from "./states.pages.ts";
import { states_tables } from "./states.tables.ts";

export const states_module = define_module({
  resource: "states",
  labels: {
    singular: "Estados",
    plural: "Estados",
    read: "Ver Estados",
    write: "Editar Estados",
  },
  routes: define_crud({
    resource: "states",
    table: "states",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "states",
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
      catalog_key: { type: "string", search: true },
      abbreviation: { type: "string", search: true },
      country: { type: "string", search: true },
      cfdi_c_estado: { type: "string", search: true },
      cfdi_c_pais: { type: "string", search: true },
      cfdi_fecha_inicio_vigencia: { type: "string", search: true },
      cfdi_fecha_fin_vigencia: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: states_tables,
  pages: states_pages,
  menu: [],
});
