import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { agua_module } from "./modules/agua/agua.routes.ts";
import { agua_reportes_module } from "./modules/agua-reportes/agua-reportes.routes.ts";
import { agua_sync_module } from "./modules/agua-sync/agua-sync.routes.ts";
import { lectura_campo_module } from "./modules/lectura-campo/lectura-campo.routes.ts";
import { lecturista_module } from "./modules/lecturista/lecturista.routes.ts";
import { impedimento_module } from "./modules/impedimento/impedimento.routes.ts";
import { periodo_module } from "./modules/periodo/periodo.routes.ts";
import { incidencia_module } from "./modules/incidencia/incidencia.routes.ts";
import { lectura_module } from "./modules/lectura/lectura.routes.ts";
import { tarifa_module } from "./modules/tarifa/tarifa.routes.ts";
import { contrato_module } from "./modules/contrato/contrato.routes.ts";
import { ruta_module } from "./modules/ruta/ruta.routes.ts";
import { cuadrillas_module } from "./modules/cuadrillas/cuadrillas.routes.ts";
import { citizen_report_module } from "./modules/citizen-report/citizen-report.routes.ts";
import { citizen_report_reporting_medium_module } from "./modules/citizen-report-reporting-medium/citizen-report-reporting-medium.routes.ts";
import { citizen_report_problem_module } from "./modules/citizen-report-problem/citizen-report-problem.routes.ts";
import { municipality_module } from "./modules/municipality/municipality.routes.ts";
import { boroughs_module } from "./modules/boroughs/boroughs.routes.ts";
import { states_module } from "./modules/states/states.routes.ts";
import { violation_module } from "./modules/violation/violation.routes.ts";
import { violation_user_id_type_module } from "./modules/violation-user-id-type/violation-user-id-type.routes.ts";
import { violation_vehicle_brand_module } from "./modules/violation-vehicle-brand/violation-vehicle-brand.routes.ts";
import { violation_mobility_law_module } from "./modules/violation-mobility-law/violation-mobility-law.routes.ts";
import { violation_vehicle_type_module } from "./modules/violation-vehicle-type/violation-vehicle-type.routes.ts";
import { violation_payment_method_module } from "./modules/violation-payment-method/violation-payment-method.routes.ts";
import { violation_offender_guarantee_module } from "./modules/violation-offender-guarantee/violation-offender-guarantee.routes.ts";
import { violation_city_zone_module } from "./modules/violation-city-zone/violation-city-zone.routes.ts";
import { cobranza_module } from "./modules/cobranza/cobranza.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-control-municipal",
  name: "Control municipal",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-control-municipal:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "control-municipal.root",
    label: "Control municipal",
    order: 0,
  },
  modules: [agua_module, agua_reportes_module, agua_sync_module, lectura_campo_module, lecturista_module, impedimento_module, periodo_module, incidencia_module, lectura_module, tarifa_module, contrato_module, ruta_module, cuadrillas_module, citizen_report_module, citizen_report_reporting_medium_module, citizen_report_problem_module, municipality_module, boroughs_module, states_module, violation_module, violation_user_id_type_module, violation_vehicle_brand_module, violation_mobility_law_module, violation_vehicle_type_module, violation_payment_method_module, violation_offender_guarantee_module, violation_city_zone_module, cobranza_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
