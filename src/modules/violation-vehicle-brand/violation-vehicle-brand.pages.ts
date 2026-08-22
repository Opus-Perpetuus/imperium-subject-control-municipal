import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const violation_vehicle_brand_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.violation-vehicle-brand",
    path: "violation-vehicle-brand",
    permission: "subject.control-municipal.violation-vehicle-brand.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.violation-vehicle-brand",
        owner: "subject-control-municipal",
        title: "Marcas de vehículos",
        props: {
          basePath: "violation-vehicle-brand",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Marcas de vehículos",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "marcas de vehículos",
            singularLabel: "marcas de vehículos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/violation-vehicle-brand`,
            record: `${API}/violation-vehicle-brand/:id`,
            create: { method: "POST", action: `${API}/violation-vehicle-brand` },
            update: { method: "PATCH", action: `${API}/violation-vehicle-brand/:id` },
            delete: { method: "DELETE", action: `${API}/violation-vehicle-brand/:id` },
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
