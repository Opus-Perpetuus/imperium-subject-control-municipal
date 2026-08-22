import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const agua_sync_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.agua-sync",
    path: "agua-sync",
    permission: "subject.control-municipal.agua-sync.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.agua-sync",
        owner: "subject-control-municipal",
        title: "Sincronización",
        props: {
          basePath: "agua-sync",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Sincronización",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "sincronización",
            singularLabel: "sincronización",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/agua-sync`,
            record: `${API}/agua-sync/:id`,
            create: { method: "POST", action: `${API}/agua-sync` },
            update: { method: "PATCH", action: `${API}/agua-sync/:id` },
            delete: { method: "DELETE", action: `${API}/agua-sync/:id` },
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
