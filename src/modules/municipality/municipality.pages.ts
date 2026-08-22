import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const municipality_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.municipality",
    path: "municipality",
    permission: "subject.control-municipal.municipality.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.municipality",
        owner: "subject-control-municipal",
        title: "Municipios",
        props: {
          basePath: "municipality",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Municipios",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "municipios",
            singularLabel: "municipios",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/municipality`,
            record: `${API}/municipality/:id`,
            create: { method: "POST", action: `${API}/municipality` },
            update: { method: "PATCH", action: `${API}/municipality/:id` },
            delete: { method: "DELETE", action: `${API}/municipality/:id` },
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
