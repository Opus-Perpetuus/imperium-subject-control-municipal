import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { tarifa_pages } from "./tarifa.pages.ts";
import { tarifa_tables } from "./tarifa.tables.ts";

export const tarifa_module = define_module({
  resource: "tarifa",
  labels: {
    singular: "Tarifas",
    plural: "Tarifas",
    read: "Ver Tarifas",
    write: "Editar Tarifas",
  },
  routes: define_crud({
    resource: "tarifa",
    table: "tarifa",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "tarifa",
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
      id_tarifa: { type: "string", search: true },
      vigencia: { type: "number" },
      cuota_minima: { type: "number" },
      consumo_minimo: { type: "number" },
      consumo_maximo: { type: "number" },
      costo_mt3_excedente: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: tarifa_tables,
  pages: tarifa_pages,
  menu: [],
});
