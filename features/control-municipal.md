# Control municipal

Entrada de primer nivel del menú principal de Imperium con tres carpetas
(Reporte ciudadano, Infracciones, Agua potable) y la página Cobranza. Queda
probado que la app publica ese menú y su manifiesto con
`subject-control-municipal`.

## Sub-features

La app hace la acción de `menu`. Escribe: no.
La app hace la acción de `manifest`. Escribe: no.

- `menu`: `GET /menu` responde 200 con `data[0].id` igual a
  `control-municipal.root`.
- `manifest`: `GET /manifest` responde 200 con
  `technicalId: "subject-control-municipal"`.

### Archivos y contratos

- `src/subject.ts`: `define_subject` de `subject-control-municipal`, sin
  `dependsOn`.
- `manifest.json`: menú, páginas y permisos que emite `bun run manifest:emit`.
- `GET /menu` y `GET /manifest` de la app en `http://127.0.0.1:3207`.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-control-municipal.menu` | `GET /menu` | sin definir | pedir el menú | 200, `data[0].id` = `control-municipal.root` | no | `arnes menu` |
| `subject-control-municipal.manifest` | `GET /manifest` | sin definir | pedir el manifiesto | 200, `technicalId` = `subject-control-municipal` | no | `arnes manifest` |

## How to get to it (user POV)

- Menú principal de Imperium → Control municipal.

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-control-municipal`, la receta sale
  `omitida`.

- **Abrir.** `GET /menu`; el resultado de `menu` es `control-municipal.root`
  con las carpetas `control-municipal.folder.citizen-report-menu-root`,
  `control-municipal.folder.violation-menu-management-root`,
  `control-municipal.folder.agua-menu-root` y la página
  `control-municipal.cobranza`.
- **Proof.** `evidence/control-municipal/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- Sin base QA nombrada no corre ninguna receta que mute.
- `omitida` no cuenta como probada.
