import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const violation_mobility_law_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.violation-mobility-law",
    path: "violation-mobility-law",
    permission: "subject.control-municipal.violation-mobility-law.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.violation-mobility-law",
        owner: "subject-control-municipal",
        title: "Reglamento de Movilidad",
        props: {
          basePath: "violation-mobility-law",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Reglamento de Movilidad",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "reglamento de movilidad",
            singularLabel: "reglamento de movilidad",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/violation-mobility-law`,
            record: `${API}/violation-mobility-law/:id`,
            create: { method: "POST", action: `${API}/violation-mobility-law` },
            update: { method: "PATCH", action: `${API}/violation-mobility-law/:id` },
            delete: { method: "DELETE", action: `${API}/violation-mobility-law/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "security_measure", label: "security measure", sortable: true, priority: 3 },
              { key: "fractions", label: "fractions", sortable: true, priority: 3 },
              { key: "umas_min", label: "umas min", sortable: true, priority: 3 },
              { key: "umas_max", label: "umas max", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "security_measure", component: "input-text", label: "security measure" },
              { name: "fractions", component: "input-text", label: "fractions" },
              { name: "umas_min", component: "input-number", label: "umas min" },
              { name: "umas_max", component: "input-number", label: "umas max" },
            ],
          },
        },
      }),
  },
];
