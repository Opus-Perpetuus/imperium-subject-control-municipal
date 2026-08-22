import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const contrato_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.contrato",
    path: "contrato",
    permission: "subject.control-municipal.contrato.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.contrato",
        owner: "subject-control-municipal",
        title: "Contratos",
        props: {
          basePath: "contrato",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Contratos",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "contratos",
            singularLabel: "contratos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/contrato`,
            record: `${API}/contrato/:id`,
            create: { method: "POST", action: `${API}/contrato` },
            update: { method: "PATCH", action: `${API}/contrato/:id` },
            delete: { method: "DELETE", action: `${API}/contrato/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "contrato", label: "contrato", sortable: true, priority: 3 },
              { key: "contribuyente", label: "contribuyente", sortable: true, priority: 3 },
              { key: "colonia", label: "colonia", sortable: true, priority: 3 },
              { key: "id_ruta", label: "id ruta", sortable: true, priority: 3 },
              { key: "saldo", label: "saldo", sortable: true, priority: 3 },
              { key: "tomada", label: "tomada", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "contrato", component: "input-text", label: "contrato" },
              { name: "contribuyente", component: "input-text", label: "contribuyente" },
              { name: "colonia", component: "input-text", label: "colonia" },
              { name: "id_ruta", component: "input-text", label: "id ruta" },
              { name: "saldo", component: "input-number", label: "saldo" },
              { name: "tomada", component: "input-checkbox", label: "tomada" },
              { name: "calle", component: "input-text", label: "calle" },
              { name: "poblacion", component: "input-text", label: "poblacion" },
              { name: "exterior", component: "input-text", label: "exterior" },
              { name: "interior", component: "input-text", label: "interior" },
              { name: "consecutivo_ruta", component: "input-number", label: "consecutivo ruta" },
              { name: "id_tarifa", component: "input-text", label: "id tarifa" },
              { name: "serie_medidor", component: "input-text", label: "serie medidor" },
              { name: "vigencia_anterior", component: "input-number", label: "vigencia anterior" },
              { name: "periodo_anterior", component: "input-number", label: "periodo anterior" },
              { name: "lectura_anterior", component: "input-number", label: "lectura anterior" },
              { name: "promedio", component: "input-number", label: "promedio" },
              { name: "adeudo", component: "input-number", label: "adeudo" },
              { name: "recibe_lectura", component: "input-checkbox", label: "recibe lectura" },
              { name: "sincronizada", component: "input-checkbox", label: "sincronizada" },
              { name: "sincronizado_simapa", component: "input-checkbox", label: "sincronizado simapa" },
              { name: "latitud", component: "input-number", label: "latitud" },
              { name: "longitud", component: "input-number", label: "longitud" },
            ],
          },
        },
      }),
  },
];
