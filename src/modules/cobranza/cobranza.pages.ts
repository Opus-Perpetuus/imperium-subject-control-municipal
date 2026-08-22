import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const cobranza_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.cobranza",
    path: "cobranza",
    permission: "subject.control-municipal.cobranza.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.cobranza",
        owner: "subject-control-municipal",
        title: "Cobranza",
        props: {
          basePath: "cobranza",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Cobranza",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "cobranza",
            singularLabel: "cobranza",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/cobranza`,
            record: `${API}/cobranza/:id`,
            create: { method: "POST", action: `${API}/cobranza` },
            update: { method: "PATCH", action: `${API}/cobranza/:id` },
            delete: { method: "DELETE", action: `${API}/cobranza/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "reference", label: "reference", sortable: true, priority: 3 },
              { key: "concept", label: "concept", sortable: true, priority: 3 },
              { key: "total_amount", label: "total amount", sortable: true, priority: 3 },
              { key: "paid_amount", label: "paid amount", sortable: true, priority: 3 },
              { key: "balance", label: "balance", sortable: true, priority: 3 },
              { key: "status", label: "status", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "reference", component: "input-text", label: "reference" },
              { name: "concept", component: "input-text", label: "concept" },
              { name: "total_amount", component: "input-number", label: "total amount" },
              { name: "paid_amount", component: "input-number", label: "paid amount" },
              { name: "balance", component: "input-number", label: "balance" },
              { name: "status", component: "input-text", label: "status" },
              { name: "source_module", component: "input-text", label: "source module" },
              { name: "source_id", component: "input-text", label: "source id" },
              { name: "currency", component: "input-text", label: "currency" },
            ],
          },
        },
      }),
  },
];
