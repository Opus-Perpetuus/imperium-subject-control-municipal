import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const lecturista_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.lecturista",
    path: "lecturista",
    permission: "subject.control-municipal.lecturista.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.lecturista",
        owner: "subject-control-municipal",
        title: "Lecturistas",
        props: {
          basePath: "lecturista",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Lecturistas",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "lecturistas",
            singularLabel: "lecturistas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/lecturista`,
            record: `${API}/lecturista/:id`,
            create: { method: "POST", action: `${API}/lecturista` },
            update: { method: "PATCH", action: `${API}/lecturista/:id` },
            delete: { method: "DELETE", action: `${API}/lecturista/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "id_lecturista", label: "id lecturista", sortable: true, priority: 3 },
              { key: "dispositivo", label: "dispositivo", sortable: true, priority: 3 },
              { key: "user_id", label: "user id", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "id_lecturista", component: "input-text", label: "id lecturista" },
              { name: "dispositivo", component: "input-text", label: "dispositivo" },
              { name: "user_id", component: "input-text", label: "user id" },
            ],
          },
        },
      }),
  },
];
