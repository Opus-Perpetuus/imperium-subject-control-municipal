import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const lectura_campo_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.lectura-campo",
    path: "lectura-campo",
    permission: "subject.control-municipal.lectura-campo.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.lectura-campo",
        owner: "subject-control-municipal",
        title: "Captura de campo",
        props: {
          basePath: "lectura-campo",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Captura de campo",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "captura de campo",
            singularLabel: "captura de campo",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/lectura-campo`,
            record: `${API}/lectura-campo/:id`,
            create: { method: "POST", action: `${API}/lectura-campo` },
            update: { method: "PATCH", action: `${API}/lectura-campo/:id` },
            delete: { method: "DELETE", action: `${API}/lectura-campo/:id` },
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
