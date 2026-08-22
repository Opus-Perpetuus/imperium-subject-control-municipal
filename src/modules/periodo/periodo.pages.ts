import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const periodo_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.periodo",
    path: "periodo",
    permission: "subject.control-municipal.periodo.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.periodo",
        owner: "subject-control-municipal",
        title: "Periodos",
        props: {
          basePath: "periodo",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Periodos",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "periodos",
            singularLabel: "periodos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/periodo`,
            record: `${API}/periodo/:id`,
            create: { method: "POST", action: `${API}/periodo` },
            update: { method: "PATCH", action: `${API}/periodo/:id` },
            delete: { method: "DELETE", action: `${API}/periodo/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "meses_por_periodo", label: "meses por periodo", sortable: true, priority: 3 },
              { key: "id_periodo", label: "id periodo", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "meses_por_periodo", component: "input-number", label: "meses por periodo" },
              { name: "id_periodo", component: "input-text", label: "id periodo" },
            ],
          },
        },
      }),
  },
];
