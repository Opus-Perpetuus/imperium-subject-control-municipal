import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const cuadrillas_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.cuadrillas",
    path: "cuadrillas",
    permission: "subject.control-municipal.cuadrillas.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.cuadrillas",
        owner: "subject-control-municipal",
        title: "Cuadrillas",
        props: {
          basePath: "cuadrillas",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Cuadrillas",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "cuadrillas",
            singularLabel: "cuadrillas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/cuadrillas`,
            record: `${API}/cuadrillas/:id`,
            create: { method: "POST", action: `${API}/cuadrillas` },
            update: { method: "PATCH", action: `${API}/cuadrillas/:id` },
            delete: { method: "DELETE", action: `${API}/cuadrillas/:id` },
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
