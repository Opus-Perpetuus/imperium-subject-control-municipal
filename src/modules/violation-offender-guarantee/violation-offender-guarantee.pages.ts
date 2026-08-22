import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const violation_offender_guarantee_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.violation-offender-guarantee",
    path: "violation-offender-guarantee",
    permission: "subject.control-municipal.violation-offender-guarantee.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.violation-offender-guarantee",
        owner: "subject-control-municipal",
        title: "Garantías del infractor",
        props: {
          basePath: "violation-offender-guarantee",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Garantías del infractor",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "garantías del infractor",
            singularLabel: "garantías del infractor",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/violation-offender-guarantee`,
            record: `${API}/violation-offender-guarantee/:id`,
            create: { method: "POST", action: `${API}/violation-offender-guarantee` },
            update: { method: "PATCH", action: `${API}/violation-offender-guarantee/:id` },
            delete: { method: "DELETE", action: `${API}/violation-offender-guarantee/:id` },
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
