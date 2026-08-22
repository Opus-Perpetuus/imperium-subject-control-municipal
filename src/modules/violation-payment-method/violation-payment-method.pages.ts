import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const violation_payment_method_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.violation-payment-method",
    path: "violation-payment-method",
    permission: "subject.control-municipal.violation-payment-method.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.violation-payment-method",
        owner: "subject-control-municipal",
        title: "Métodos de pago",
        props: {
          basePath: "violation-payment-method",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Métodos de pago",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "métodos de pago",
            singularLabel: "métodos de pago",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/violation-payment-method`,
            record: `${API}/violation-payment-method/:id`,
            create: { method: "POST", action: `${API}/violation-payment-method` },
            update: { method: "PATCH", action: `${API}/violation-payment-method/:id` },
            delete: { method: "DELETE", action: `${API}/violation-payment-method/:id` },
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
