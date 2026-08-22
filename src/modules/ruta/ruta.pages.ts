import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const ruta_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.ruta",
    path: "ruta",
    permission: "subject.control-municipal.ruta.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.ruta",
        owner: "subject-control-municipal",
        title: "Rutas",
        props: {
          basePath: "ruta",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Rutas",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "rutas",
            singularLabel: "rutas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/ruta`,
            record: `${API}/ruta/:id`,
            create: { method: "POST", action: `${API}/ruta` },
            update: { method: "PATCH", action: `${API}/ruta/:id` },
            delete: { method: "DELETE", action: `${API}/ruta/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "id_ruta", label: "id ruta", sortable: true, priority: 3 },
              { key: "consecutivo", label: "consecutivo", sortable: true, priority: 3 },
              { key: "vigencia", label: "vigencia", sortable: true, priority: 3 },
              { key: "periodo", label: "periodo", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "id_ruta", component: "input-text", label: "id ruta" },
              { name: "consecutivo", component: "input-number", label: "consecutivo" },
              { name: "vigencia", component: "input-number", label: "vigencia" },
              { name: "periodo", component: "input-number", label: "periodo" },
            ],
          },
        },
      }),
  },
];
