import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { violation_payment_method_pages } from "./violation-payment-method.pages.ts";
import { violation_payment_method_tables } from "./violation-payment-method.tables.ts";

export const violation_payment_method_module = define_module({
  resource: "violation-payment-method",
  labels: {
    singular: "Métodos de pago",
    plural: "Métodos de pago",
    read: "Ver Métodos de pago",
    write: "Editar Métodos de pago",
  },
  routes: define_crud({
    resource: "violation-payment-method",
    table: "violation_payment_method",
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
  tables: violation_payment_method_tables,
  pages: violation_payment_method_pages,
  menu: [],
});
