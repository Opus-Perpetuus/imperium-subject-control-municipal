import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const agua_reportes_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.agua-reportes",
    path: "agua-reportes",
    permission: "subject.control-municipal.agua-reportes.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.agua-reportes",
        owner: "subject-control-municipal",
        title: "Reportes",
        props: {
          basePath: "agua-reportes",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Reportes",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "reportes",
            singularLabel: "reportes",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/agua-reportes`,
            record: `${API}/agua-reportes/:id`,
            create: { method: "POST", action: `${API}/agua-reportes` },
            update: { method: "PATCH", action: `${API}/agua-reportes/:id` },
            delete: { method: "DELETE", action: `${API}/agua-reportes/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "vigencia_actual", label: "vigencia actual", sortable: true, priority: 3 },
              { key: "periodo_actual", label: "periodo actual", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "vigencia_actual", component: "input-number", label: "vigencia actual" },
              { name: "periodo_actual", component: "input-number", label: "periodo actual" },
            ],
          },
        },
      }),
  },
];
