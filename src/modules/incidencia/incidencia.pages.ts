import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const incidencia_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.incidencia",
    path: "incidencia",
    permission: "subject.control-municipal.incidencia.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.incidencia",
        owner: "subject-control-municipal",
        title: "Incidencias",
        props: {
          basePath: "incidencia",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Incidencias",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "incidencias",
            singularLabel: "incidencias",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/incidencia`,
            record: `${API}/incidencia/:id`,
            create: { method: "POST", action: `${API}/incidencia` },
            update: { method: "PATCH", action: `${API}/incidencia/:id` },
            delete: { method: "DELETE", action: `${API}/incidencia/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "id_incidencia", label: "id incidencia", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "id_incidencia", component: "input-text", label: "id incidencia" },
            ],
          },
        },
      }),
  },
];
