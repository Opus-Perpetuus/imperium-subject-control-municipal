import { describe, expect, test } from "bun:test";
import { create_kirlet_test_context } from "@opus-perpetuus/imperium-core-kit";
import { SUBJECT } from "../../subject.ts";

describe("citizen-report create persists", () => {
  test("POST then GET round-trips the payload fields", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    const payload = {
      citizen_name: "QA Persistencia Uno",
      citizen_email: "qa.persist.uno@example.com",
      citizen_phone: "3312345678",
      citizen_street: "Calle Prueba",
      report_description: "Fuga de agua en banqueta",
      priority: "BAJA",
      status: "pendiente",
      department: { _id: "dept-obras-1", name: "Obras" },
      citizen_report_problem: { _id: "prob-fuga-1", name: "Fuga" },
      reporting_medium: { _id: "med-ventana-1", name: "Ventanilla" },
      report_coordinates: { latitude: 20.622, longitude: -103.068 },
      images: [],
      evidence_before_images: ["", { _id: "" }],
    };

    const created_res = await server.fetch(
      new Request("http://t/citizen-report", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
    expect(created_res.status).toBe(201);
    const created_json = (await created_res.json()) as {
      data?: { id?: string; name?: string; citizen_name?: string; department?: unknown };
    };
    const created = created_json.data;
    expect(created?.id).toBeTruthy();
    expect(String(created?.id)).not.toBe("");
    expect(created?.citizen_name).toBe(payload.citizen_name);
    expect(created?.department).toBe(payload.department._id);
    expect(String(created?.name ?? "")).toBeTruthy();

    const got_res = await server.fetch(
      new Request(`http://t/citizen-report/${created!.id}`),
    );
    expect(got_res.status).toBe(200);
    const got_json = (await got_res.json()) as {
      data?: {
        id?: string;
        name?: string;
        citizen_name?: string;
        department?: unknown;
        citizen_email?: string;
        report_coordinates?: unknown;
      };
    };
    const got = got_json.data;
    expect(got?.id).toBe(created!.id);
    expect(got?.citizen_name).toBe(payload.citizen_name);
    expect(got?.citizen_email).toBe(payload.citizen_email);
    expect(got?.department).toBe(payload.department._id);
    expect(got?.name).toBe(created!.name);
    expect(got?.report_coordinates).toEqual(payload.report_coordinates);
    server.stop();
  });
});
