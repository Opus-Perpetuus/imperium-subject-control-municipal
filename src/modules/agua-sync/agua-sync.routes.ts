import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { agua_sync_pages } from "./agua-sync.pages.ts";
import { agua_sync_tables } from "./agua-sync.tables.ts";

export const agua_sync_module = define_module({
  resource: "agua-sync",
  labels: {
    singular: "Sincronización",
    plural: "Sincronización",
    read: "Ver Sincronización",
    write: "Editar Sincronización",
  },
  routes: define_crud({
    resource: "agua-sync",
    table: "agua_sync",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "agua-syn",
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
      vigencia_actual: { type: "number" },
      periodo_actual: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: agua_sync_tables,
  pages: agua_sync_pages,
  menu: [],
});
