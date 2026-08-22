import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { violation_city_zone_pages } from "./violation-city-zone.pages.ts";
import { violation_city_zone_tables } from "./violation-city-zone.tables.ts";

export const violation_city_zone_module = define_module({
  resource: "violation-city-zone",
  labels: {
    singular: "Zonas de Ciudad",
    plural: "Zonas de Ciudad",
    read: "Ver Zonas de Ciudad",
    write: "Editar Zonas de Ciudad",
  },
  routes: define_crud({
    resource: "violation-city-zone",
    table: "violation_city_zone",
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
  tables: violation_city_zone_tables,
  pages: violation_city_zone_pages,
  menu: [],
});
