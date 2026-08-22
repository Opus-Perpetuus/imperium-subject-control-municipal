import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { violation_vehicle_type_pages } from "./violation-vehicle-type.pages.ts";
import { violation_vehicle_type_tables } from "./violation-vehicle-type.tables.ts";

export const violation_vehicle_type_module = define_module({
  resource: "violation-vehicle-type",
  labels: {
    singular: "Tipos de vehículo",
    plural: "Tipos de vehículo",
    read: "Ver Tipos de vehículo",
    write: "Editar Tipos de vehículo",
  },
  routes: define_crud({
    resource: "violation-vehicle-type",
    table: "violation_vehicle_type",
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
  tables: violation_vehicle_type_tables,
  pages: violation_vehicle_type_pages,
  menu: [],
});
