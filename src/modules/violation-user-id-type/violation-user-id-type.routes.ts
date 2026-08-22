import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { violation_user_id_type_pages } from "./violation-user-id-type.pages.ts";
import { violation_user_id_type_tables } from "./violation-user-id-type.tables.ts";

export const violation_user_id_type_module = define_module({
  resource: "violation-user-id-type",
  labels: {
    singular: "Identificaciones válidas",
    plural: "Identificaciones válidas",
    read: "Ver Identificaciones válidas",
    write: "Editar Identificaciones válidas",
  },
  routes: define_crud({
    resource: "violation-user-id-type",
    table: "violation_user_id_type",
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
  tables: violation_user_id_type_tables,
  pages: violation_user_id_type_pages,
  menu: [],
});
