import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const states_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.states",
    path: "states",
    permission: "subject.control-municipal.states.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.states",
        owner: "subject-control-municipal",
        title: "Estados",
        props: {
          basePath: "states",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Estados",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "estados",
            singularLabel: "estados",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/states`,
            record: `${API}/states/:id`,
            create: { method: "POST", action: `${API}/states` },
            update: { method: "PATCH", action: `${API}/states/:id` },
            delete: { method: "DELETE", action: `${API}/states/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "catalog_key", label: "catalog key", sortable: true, priority: 3 },
              { key: "abbreviation", label: "abbreviation", sortable: true, priority: 3 },
              { key: "country", label: "country", sortable: true, priority: 3 },
              { key: "cfdi_c_estado", label: "cfdi c estado", sortable: true, priority: 3 },
              { key: "cfdi_c_pais", label: "cfdi c pais", sortable: true, priority: 3 },
              { key: "cfdi_fecha_inicio_vigencia", label: "cfdi fecha inicio vigencia", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "catalog_key", component: "input-text", label: "catalog key" },
              { name: "abbreviation", component: "input-text", label: "abbreviation" },
              { name: "country", component: "input-text", label: "country" },
              { name: "cfdi_c_estado", component: "input-text", label: "cfdi c estado" },
              { name: "cfdi_c_pais", component: "input-text", label: "cfdi c pais" },
              { name: "cfdi_fecha_inicio_vigencia", component: "input-text", label: "cfdi fecha inicio vigencia" },
              { name: "cfdi_fecha_fin_vigencia", component: "input-text", label: "cfdi fecha fin vigencia" },
            ],
          },
        },
      }),
  },
];
