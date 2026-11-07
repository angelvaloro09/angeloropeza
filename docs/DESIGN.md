# Portfolio — Identity & Architecture

## 1. Identity: "Tinta y Papel" (Ink & Paper)

Source: the hand-drawn avatar by the BASE team (monochrome crayon ink on cream paper) and the BASE brand
language (cream, ink, hand-drawn marks). The portfolio must feel like a **sketchbook of someone who builds
things**: warm paper, confident black ink line, one hot accent, imperfect hand-made details.

### Tokens
| Token | Light (paper) | Dark (night paper) | Use |
|---|---|---|---|
| `--bg` | `#F7F5F0` | `#141312` | page |
| `--surface` | `#FFFFFF` | `#1D1B19` | cards |
| `--ink` | `#17171A` | `#F2EEE6` | text, 1.5px borders, hard shadows |
| `--muted` | `#6B6760` | `#9A958B` | secondary text (AA on bg) |
| `--line` | `rgba(23,23,26,.14)` | `rgba(242,238,230,.14)` | hairlines |
| `--accent` | `#E0584A` (brick, from BASE illustration) | `#F0705F` | highlights, hover, marker underline |
| `--accent-soft` | `#F7D9D3` | `#3A211D` | tag backgrounds |

Old blue (`#1e6ef3`) is retired. Accent only for emphasis; never large fills except one band.

### Type
- Display: **Space Grotesk** 700, tight tracking. Accent words in **Instrument Serif _italic_** (Halo-style sans+serif-italic pairing).
- Body: **Inter** 400/500. Labels/meta: **JetBrains Mono** 400 (small, `.75–.875rem`).
- Self-host or keep Google Fonts with `display=swap`; add Instrument Serif.
- Breakpoints = Tailwind defaults, mobile-first (sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536); verified at 360/390/412/768/1024/1440.
- Fluid type: `--step--1 … --step-5` in `global.css`. Anything sized for the first view also caps by height: `min(<n>vw, <n>svh)`, with a `vh` fallback declared before it.
- Sections (non-hero): vertical rhythm `--section-y` / `--section-gap`; headings `.h-section` (h2), `.h-case` (case/index h3), `.h-card`/`.h-card-sm` (card h3), `.h-contact`. Interactive links/buttons keep a ≥44px hit area (`min-height: 44px`).
- Hero + tech band form one `min-height: 100svh` block (`.hero-shell`), band pinned to the bottom; hero top padding = `--nav-h` + a small `svh` clamp.

### Signature devices (what makes it *this* portfolio)
1. **Avatar sticker** — `public/brand/avatar-noanoa.jpeg`, `mix-blend-mode: multiply` on paper (light), framed in a paper-colored rounded "sticker" with ink border in dark. Slight rotation (-3°), hover wobble.
2. **Hand-drawn marks** (inline SVG, ink stroke, sparse, never a pattern): squiggle underline, asterisk, loop scribble, offset rectangle, arrow. Component `src/components/ui/Doodle.astro` with `kind` prop. Max ~4 per viewport.
3. **Paper grain** — fixed full-page SVG `feTurbulence` noise at ~4% opacity (pointer-events none).
4. **Cards = sticky notes** — 1.5px ink border, `border-radius: 14px`, hard offset shadow `4px 4px 0 var(--ink)`, alternating ±0.6° rotation, hover: straighten + lift.
5. **Marker highlight** — key words get an accent-soft brush underline (SVG, animated draw on reveal).
6. **Dot-separated metadata** (3px dot, 40% opacity) instead of chips for secondary info.
7. **Custom cursor** (desktop, fine pointer only): small ink dot that becomes a "Ver" label over project rows.

## 2. Page architecture (per language, `/es` `/en`)

1. **Hero** — giant name, serif-italic role, tagline, two CTAs ("Ver proyectos" / "Hablemos"), avatar sticker with doodles, scroll hint (wheel loop). Under it: **marquee of tech icons** (edge-to-edge, mask fade, pauses on hover).
2. **Proof strip** — 4 stats as sticky notes (projects, technologies, years, freelance clients) — counts from data.
3. **Work (featured)** — large cards with real cover images (screenshots / design comps / BASE illustrations), kind · year, stack as real icons, links (code if public, "live" if public site, "private" otherwise). Desktop: Halo-style row list with hover-follow preview *or* sticky stacked cards — decide in Phase 3 after a prototype; mobile: stacked cards.
4. **Case highlights** — 2–3 projects get deeper blocks (BASE Studio, UPIICSCode, Etchio) with 2–3 screenshots and a one-line "what I did".
5. **More projects** — compact list: Java Cafe, PoliMusic, Passwords Manager, Sun, etc. (final set depends on capture report).
6. **Stack** — bento grid by group; each tech = real logo (colored on hover, ink-monochrome by default), name, optional level/"uso" note. No fake percentage bars.
7. **Path** — timeline with BASE ("equipo BASE" illustration credit) and club/freelance milestones.
8. **Contact** — giant mailto, socials, avatar peeking, footer.

## 3. Data model (`src/data/`)
Split `profile.ts` into `profile.ts`, `projects.ts`, `stack.ts`.
```ts
type Project = {
  slug; title; year; kind: L; summary: L; role?: L;
  stack: TechId[];            // ids into stack.ts, never raw strings
  cover: ImageMetadata;       // import from src/assets/projects/<slug>/cover.webp (Astro <Image/>)
  shots?: ImageMetadata[];
  links: { repo?: string; live?: string };
  visibility: 'public' | 'private';
  client?: boolean;           // freelance
  featured: boolean; case?: boolean;
};
type Tech = { id; name; icon: string /* astro-icon name */; group: GroupId; since?: string };
```
Images live in `src/assets/projects/` (optimized by Astro) — NOT `public/` — except favicon/avatar.

## 4. Tech icons
`astro-icon` + `@iconify-json/devicon` (colored, preferred) with `@iconify-json/simple-icons` fallback. Build-time inline SVG, zero runtime JS. Missing brands (Assembly, CMake, Maven…) → simple-icons or a mono-letter glyph consistent with the set. List to cover: TypeScript, JavaScript, React, Next.js, Astro, Node, NestJS, Java, Spring, Maven, PostgreSQL/SQL, C, C++, CMake, Rust, Assembly, Flutter, Dart, Expo/React Native, Git, Docker, Python, Figma, Tailwind, GSAP, Supabase.

## 5. Quality bars (audit checklist)
- `npm run build` (astro check + build) clean; no TS errors.
- Lighthouse a11y ≥ 95; contrast AA for muted/accent text; focus visible; marquee pausable + respects `prefers-reduced-motion`; custom cursor only `(pointer: fine)`.
- Images: `<Image>` with width/height, `loading=lazy` below fold, cover < 120KB after optimization.
- Responsive 390 / 768 / 1024 / 1440 verified in a real browser, no horizontal overflow.
- No client-confidential data in any image (names, plates, prices, credentials). Client work shows public pages or fake-data comps only.
- ES/EN parity for every string.

