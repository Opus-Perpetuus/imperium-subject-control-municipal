import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-municipal";

export const lectura_pages: KirletPageDecl[] = [
  {
    id: "control-municipal.lectura",
    path: "lectura",
    permission: "subject.control-municipal.lectura.read",
    build: () =>
      build_feature_shell_page({
        id: "control-municipal.lectura",
        owner: "subject-control-municipal",
        title: "Lecturas",
        props: {
          basePath: "lectura",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Lecturas",
            subtitle: "Submenú de control-municipal",
            pluralLabel: "lecturas",
            singularLabel: "lecturas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/lectura`,
            record: `${API}/lectura/:id`,
            create: { method: "POST", action: `${API}/lectura` },
            update: { method: "PATCH", action: `${API}/lectura/:id` },
            delete: { method: "DELETE", action: `${API}/lectura/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "contrato", label: "contrato", sortable: true, priority: 3 },
              { key: "lectura_actual", label: "lectura actual", sortable: true, priority: 3 },
              { key: "consumo_mts3", label: "consumo mts3", sortable: true, priority: 3 },
              { key: "importe", label: "importe", sortable: true, priority: 3 },
              { key: "fecha_lectura", label: "fecha lectura", sortable: true, priority: 3 },
              { key: "contrato_id", label: "contrato id", sortable: true, priority: 3 },
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
              { name: "lectura_actual", component: "input-number", label: "lectura actual" },
              { name: "consumo_mts3", component: "input-number", label: "consumo mts3" },
              { name: "importe", component: "input-number", label: "importe" },
              { name: "fecha_lectura", component: "input-text", label: "fecha lectura" },
              { name: "contrato_id", component: "input-text", label: "contrato id" },
              { name: "vigencia", component: "input-number", label: "vigencia" },
              { name: "periodo", component: "input-number", label: "periodo" },
              { name: "lectura_anterior", component: "input-number", label: "lectura anterior" },
              { name: "mts3_cobrados", component: "input-number", label: "mts3 cobrados" },
              { name: "id_tarifa", component: "input-text", label: "id tarifa" },
              { name: "id_impedimento", component: "input-text", label: "id impedimento" },
              { name: "id_incidencia", component: "input-text", label: "id incidencia" },
              { name: "id_lecturista", component: "input-text", label: "id lecturista" },
              { name: "id_ruta", component: "input-text", label: "id ruta" },
              { name: "observaciones", component: "input-text", label: "observaciones" },
              { name: "latitud", component: "input-number", label: "latitud" },
              { name: "longitud", component: "input-number", label: "longitud" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "sincronizado_simapa", component: "input-checkbox", label: "sincronizado simapa" },
            ],
          },
        },
      }),
  },
];
