import { describe, expect, test } from "bun:test";
import { create_kirlet_test_context } from "@opus-perpetuus/imperium-core-kit";
import { SUBJECT } from "../../subject.ts";

describe("contrato periodo_id", () => {
  test("guarda el id_periodo del catálogo y lo devuelve igual", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    try {
      const periodo_res = await server.fetch(
        new Request("http://t/periodo", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: "MENSUAL",
            id_periodo: "1",
            meses_por_periodo: 1,
          }),
        }),
      );
      expect(periodo_res.status).toBe(201);
      const periodo = (
        (await periodo_res.json()) as { data?: { id?: string; id_periodo?: string } }
      ).data;
      expect(periodo?.id_periodo).toBe("1");

      const created_res = await server.fetch(
        new Request("http://t/contrato", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: "10000002",
            periodo_id: periodo?.id_periodo,
          }),
        }),
      );
      expect(created_res.status).toBe(201);
      const created = (
        (await created_res.json()) as { data?: { id?: string; periodo_id?: string } }
      ).data;
      expect(created?.id).toBeTruthy();
      expect(created?.periodo_id).toBe("1");

      const got_res = await server.fetch(
        new Request(`http://t/contrato/${created!.id}`),
      );
      expect(got_res.status).toBe(200);
      const got = (
        (await got_res.json()) as { data?: { periodo_id?: string; name?: string } }
      ).data;
      expect(got?.name).toBe("10000002");
      expect(got?.periodo_id).toBe("1");
    } finally {
      server.stop();
    }
  });
});
