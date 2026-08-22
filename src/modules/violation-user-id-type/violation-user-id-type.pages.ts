import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const violation_user_id_type_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.violation-user-id-type",
    path: "violation-user-id-type",
    permission: "subject.control-municipal.violation-user-id-type.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.violation-user-id-type",
        owner: "subject-control-municipal",
        title: "Identificaciones válidas",
        props: {
          basePath: "violation-user-id-type",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Identificaciones válidas",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "identificaciones válidas",
            singularLabel: "identificaciones válidas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/violation-user-id-type`,
            record: `${API}/violation-user-id-type/:id`,
            create: { method: "POST", action: `${API}/violation-user-id-type` },
            update: { method: "PATCH", action: `${API}/violation-user-id-type/:id` },
            delete: { method: "DELETE", action: `${API}/violation-user-id-type/:id` },
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
