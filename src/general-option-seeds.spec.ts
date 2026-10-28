import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  GENERAL_OPTION_LIST_SEED_PATH,
  GENERAL_OPTION_LIST_SEEDS,
  general_option_list_options_source,
  push_general_option_seeds,
} from "./general-option-seeds";

describe("general option seeds", () => {
  test("optionsSource apunta al control del núcleo", () => {
    expect(general_option_list_options_source("subject-control-municipal/citizen-report", "priority")).toBe(
      "api://general-option-list-control/options?model_id=subject-control-municipal%2Fcitizen-report&list_key=priority&as=options",
    );
  });

  test("cada lista tiene clave y valores únicos", () => {
    for (const entry of GENERAL_OPTION_LIST_SEEDS) {
      expect(entry.model_id.startsWith("subject-control-municipal/")).toBe(true);
      for (const list of entry.lists) {
        expect(list.list_key.length).toBeGreaterThan(0);
        const values = list.options.map((o) => o.value);
        expect(new Set(values).size).toBe(values.length);
      }
    }
  });

  test("cubre B del inventario municipal", () => {
    const keys = GENERAL_OPTION_LIST_SEEDS.flatMap((e) =>
      e.lists.map((l) => `${e.model_id}:${l.list_key}`),
    );
    for (const want of [
      "subject-control-municipal/citizen-report:priority",
      "subject-control-municipal/citizen-report-problem:auto_priority",
      "subject-control-municipal/violation:service_type",
    ]) {
      expect(keys).toContain(want);
    }
  });

  test("forms B usan optionsSource sin options literales", () => {
    const report = readFileSync(
      new URL("./modules/citizen-report/citizen-report.pages.ts", import.meta.url),
      "utf8",
    );
    expect(report).toContain("general_option_list_options_source");
    expect(report).not.toMatch(/name: "priority"[\s\S]*?options:\s*\[/);
    const problem = readFileSync(
      new URL("./modules/citizen-report-problem/citizen-report-problem.pages.ts", import.meta.url),
      "utf8",
    );
    expect(problem).not.toMatch(/name: "auto_priority"[\s\S]*?options:\s*\[/);
    const violation = readFileSync(
      new URL("./modules/violation/violation.pages.ts", import.meta.url),
      "utf8",
    );
    expect(violation).not.toMatch(/name: "service_type"[\s\S]*?options:\s*\[/);
  });
});

describe("push_general_option_seeds", () => {
  const env = {
    CORE_DATA_URL: "http://core:3000/api/kirlets/data/x",
    SUBJECT_TECHNICAL_ID: "subject-control-municipal",
    CORE_SUBJECT_GATEWAY_SECRET: "s",
  };
  test("sin env no llama", async () => {
    let called = false;
    const r = await push_general_option_seeds({
      env: {},
      fetchImpl: (async () => {
        called = true;
        return new Response();
      }) as unknown as typeof fetch,
    });
    expect(r).toEqual({ pushed: false, reason: "core_not_configured" });
    expect(called).toBe(false);
  });
  test("POST entries a seed-defaults del núcleo", async () => {
    let url = "";
    let init: RequestInit | undefined;
    const fetchImpl = (async (u: string, i: RequestInit) => {
      url = u;
      init = i;
      return Response.json({ data: [{ inserted: 1 }] });
    }) as unknown as typeof fetch;
    const r = await push_general_option_seeds({ env, fetchImpl });
    expect(url).toBe(`http://core:3000${GENERAL_OPTION_LIST_SEED_PATH}`);
    expect(init?.method).toBe("POST");
    const body = JSON.parse(String(init?.body));
    expect(body.entries.length).toBe(GENERAL_OPTION_LIST_SEEDS.length);
    expect(r.pushed).toBe(true);
  });
});
