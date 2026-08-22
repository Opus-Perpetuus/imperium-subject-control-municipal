import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const impedimento_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.impedimento",
    path: "impedimento",
    permission: "subject.control-municipal.impedimento.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.impedimento",
        owner: "subject-control-municipal",
        title: "Impedimentos",
        props: {
          basePath: "impedimento",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Impedimentos",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "impedimentos",
            singularLabel: "impedimentos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/impedimento`,
            record: `${API}/impedimento/:id`,
            create: { method: "POST", action: `${API}/impedimento` },
            update: { method: "PATCH", action: `${API}/impedimento/:id` },
            delete: { method: "DELETE", action: `${API}/impedimento/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "id_impedimento", label: "id impedimento", sortable: true, priority: 3 },
              { key: "asignar_auditoria", label: "asignar auditoria", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "id_impedimento", component: "input-text", label: "id impedimento" },
              { name: "asignar_auditoria", component: "input-checkbox", label: "asignar auditoria" },
            ],
          },
        },
      }),
  },
];
