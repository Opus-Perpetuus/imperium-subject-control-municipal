import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const citizen_report_problem_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.citizen-report-problem",
    path: "citizen-report-problem",
    permission: "subject.control-municipal.citizen-report-problem.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.citizen-report-problem",
        owner: "subject-control-municipal",
        title: "Tipo de problema",
        props: {
          basePath: "citizen-report-problem",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Tipo de problema",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "tipo de problema",
            singularLabel: "tipo de problema",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/citizen-report-problem`,
            record: `${API}/citizen-report-problem/:id`,
            create: { method: "POST", action: `${API}/citizen-report-problem` },
            update: { method: "PATCH", action: `${API}/citizen-report-problem/:id` },
            delete: { method: "DELETE", action: `${API}/citizen-report-problem/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "auto_priority", label: "auto priority", sortable: true, priority: 3 },
              { key: "department", label: "department", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "auto_priority", component: "input-text", label: "auto priority" },
              { name: "department", component: "input-text", label: "department" },
            ],
          },
        },
      }),
  },
];
