import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { periodo_pages } from "./periodo.pages.ts";
import { periodo_tables } from "./periodo.tables.ts";

export const periodo_module = define_module({
  resource: "periodo",
  labels: {
    singular: "Periodos",
    plural: "Periodos",
    read: "Ver Periodos",
    write: "Editar Periodos",
  },
  routes: define_crud({
    resource: "periodo",
    table: "periodo",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "periodo",
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
      meses_por_periodo: { type: "number" },
      id_periodo: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: periodo_tables,
  pages: periodo_pages,
  menu: [],
});
