import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { violation_vehicle_brand_pages } from "./violation-vehicle-brand.pages.ts";
import { violation_vehicle_brand_tables } from "./violation-vehicle-brand.tables.ts";

export const violation_vehicle_brand_module = define_module({
  resource: "violation-vehicle-brand",
  labels: {
    singular: "Marcas de vehículos",
    plural: "Marcas de vehículos",
    read: "Ver Marcas de vehículos",
    write: "Editar Marcas de vehículos",
  },
  routes: define_crud({
    resource: "violation-vehicle-brand",
    table: "violation_vehicle_brand",
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
  tables: violation_vehicle_brand_tables,
  pages: violation_vehicle_brand_pages,
  menu: [],
});
