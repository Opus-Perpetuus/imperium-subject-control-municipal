import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const violation_vehicle_type_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.violation-vehicle-type",
    path: "violation-vehicle-type",
    permission: "subject.control-municipal.violation-vehicle-type.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.violation-vehicle-type",
        owner: "subject-control-municipal",
        title: "Tipos de vehículo",
        props: {
          basePath: "violation-vehicle-type",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Tipos de vehículo",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "tipos de vehículo",
            singularLabel: "tipos de vehículo",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/violation-vehicle-type`,
            record: `${API}/violation-vehicle-type/:id`,
            create: { method: "POST", action: `${API}/violation-vehicle-type` },
            update: { method: "PATCH", action: `${API}/violation-vehicle-type/:id` },
            delete: { method: "DELETE", action: `${API}/violation-vehicle-type/:id` },
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
