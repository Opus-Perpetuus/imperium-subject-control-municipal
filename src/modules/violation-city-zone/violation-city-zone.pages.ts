import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const violation_city_zone_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.violation-city-zone",
    path: "violation-city-zone",
    permission: "subject.control-municipal.violation-city-zone.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.violation-city-zone",
        owner: "subject-control-municipal",
        title: "Zonas de Ciudad",
        props: {
          basePath: "violation-city-zone",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Zonas de Ciudad",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "zonas de ciudad",
            singularLabel: "zonas de ciudad",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/violation-city-zone`,
            record: `${API}/violation-city-zone/:id`,
            create: { method: "POST", action: `${API}/violation-city-zone` },
            update: { method: "PATCH", action: `${API}/violation-city-zone/:id` },
            delete: { method: "DELETE", action: `${API}/violation-city-zone/:id` },
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
