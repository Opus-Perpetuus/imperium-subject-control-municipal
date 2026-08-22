import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const tarifa_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.tarifa",
    path: "tarifa",
    permission: "subject.control-municipal.tarifa.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.tarifa",
        owner: "subject-control-municipal",
        title: "Tarifas",
        props: {
          basePath: "tarifa",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Tarifas",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "tarifas",
            singularLabel: "tarifas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/tarifa`,
            record: `${API}/tarifa/:id`,
            create: { method: "POST", action: `${API}/tarifa` },
            update: { method: "PATCH", action: `${API}/tarifa/:id` },
            delete: { method: "DELETE", action: `${API}/tarifa/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "id_tarifa", label: "id tarifa", sortable: true, priority: 3 },
              { key: "vigencia", label: "vigencia", sortable: true, priority: 3 },
              { key: "cuota_minima", label: "cuota minima", sortable: true, priority: 3 },
              { key: "consumo_minimo", label: "consumo minimo", sortable: true, priority: 3 },
              { key: "consumo_maximo", label: "consumo maximo", sortable: true, priority: 3 },
              { key: "costo_mt3_excedente", label: "costo mt3 excedente", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "id_tarifa", component: "input-text", label: "id tarifa" },
              { name: "vigencia", component: "input-number", label: "vigencia" },
              { name: "cuota_minima", component: "input-number", label: "cuota minima" },
              { name: "consumo_minimo", component: "input-number", label: "consumo minimo" },
              { name: "consumo_maximo", component: "input-number", label: "consumo maximo" },
              { name: "costo_mt3_excedente", component: "input-number", label: "costo mt3 excedente" },
            ],
          },
        },
      }),
  },
];
