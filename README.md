# Portfolio — Angel Oropeza

Astro 5 · Tailwind v4 · GSAP + Lenis · ES/EN (`/es`, `/en`). Identity: **Tinta y Papel** (ver `docs/DESIGN.md`).

```bash
npm run dev      # http://localhost:4321
npm run build    # astro check + build
```

## Cómo editar contenido

| Qué | Dónde |
|---|---|
| Nombre, email, LinkedIn, GitHub, timeline | `src/data/profile.ts` |
| Proyectos (copy ES/EN, stack, links, estado) | `src/data/projects.ts` |
| Tecnologías e iconos | `src/data/stack.ts` (iconos: `devicon:*` / `simple-icons:*`, o SVG local en `src/icons/`) |
| Imágenes de proyecto | `src/assets/projects/<slug>/` → `cover.webp`, `shot-2.webp`, `shot-3.webp`; extras con otro nombre (`art-*`, `icon-*`) |
| Formación (planes del IPN, semestres) | `src/data/education.ts` |
| Copy de cada sección | `src/i18n/sections/*.ts` |

Un proyecto con `backend: true` y `highlights` (cifras contadas en el código) aparece en la sección Backend. Un proyecto **sin** `cover.webp` recibe automáticamente una tarjeta tipográfica (`ProjectArt`). Para añadir uno: agrega la entrada en `projects.ts` y, si hay imágenes, la carpeta con su slug.

## Reglas de contenido

- Solo datos verificables: sin métricas, años de experiencia ni URLs inventadas.
- Proyectos de cliente: solo páginas públicas o maquetas con datos de demostración. Nunca nombres, placas, precios o credenciales reales.
- Imágenes: WebP ≤ ~100 KB, 16:10 para capturas de escritorio.
- Crédito: retrato e ilustraciones de BASE por el equipo BASE.
