import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const citizen_report_reporting_medium_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.citizen-report-reporting-medium",
    path: "citizen-report-reporting-medium",
    permission: "subject.control-municipal.citizen-report-reporting-medium.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.citizen-report-reporting-medium",
        owner: "subject-control-municipal",
        title: "Medio de reporte",
        props: {
          basePath: "citizen-report-reporting-medium",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Medio de reporte",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "medio de reporte",
            singularLabel: "medio de reporte",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/citizen-report-reporting-medium`,
            record: `${API}/citizen-report-reporting-medium/:id`,
            create: { method: "POST", action: `${API}/citizen-report-reporting-medium` },
            update: { method: "PATCH", action: `${API}/citizen-report-reporting-medium/:id` },
            delete: { method: "DELETE", action: `${API}/citizen-report-reporting-medium/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
            ],
          },
        },
      }),
  },
];
