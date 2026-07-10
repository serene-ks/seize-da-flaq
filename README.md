# SEIZE DA FLAQ — Landing Page

National-level CTF landing page for Cyberonites Club. React (Vite) + Tailwind, cinematic/GSAP-driven, config-first content.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Folder Structure & Conventions

```
src/
  assets/           images/ videos/ audio/ fonts/ lottie/ — raw media, never imported directly by more than one component without going through a shared constant
  components/       small reusable UI atoms (Button, Badge, GlowCard, Modal…)
  layout/           structural wrappers (Navbar, Footer, PageShell)
  sections/         one file per landing-page section (Hero.jsx, Countdown.jsx…) — this is where SRS section order lives
  hooks/            reusable stateful logic (useLenis, usePrefersReducedMotion, useCountdown…)
  animations/       GSAP plugin registration + shared timelines/easings — never call gsap.registerPlugin outside animations/gsapConfig.js
  utils/            pure, framework-agnostic helper functions (countdown math, formatters)
  constants/         eventConfig.js — THE single source of truth for event content (see below)
  styles/           globals.css — Tailwind layers + hand-written utility classes that don't fit Tailwind's config
  pages/            reserved for future multi-page routing (not used yet — this is a one-page site)
```

**Naming:** components are `PascalCase.jsx`, hooks are `useCamelCase.js`, everything else is `camelCase.js`.

## Content is Config-Driven

**`src/constants/eventConfig.js` is the only file that should contain event facts** — dates, stats, categories, sponsorship tiers, contact links. Components read from it; they never hardcode a number or a date string. This means:

- Changing the countdown target date is a one-line edit (`countdown.targetDate`).
- If `countdown.targetDate` is `null`, the Countdown component automatically shows "Mission Date Will Be Announced Soon."
- If the countdown's target date has passed, it automatically shows "Mission Has Begun" instead of negative numbers.
- Updating a stat, sponsorship price, or social link never requires touching a section component.

## Animation Architecture

- **GSAP** — all plugin registration happens once, in `src/animations/gsapConfig.js`. Section components import `gsap`/`ScrollTrigger` from there, never straight from `'gsap'`, so registration can't be duplicated or missed.
- **Framer Motion** — used for component-level interaction (cards, buttons, hover/tap states) rather than page-load choreography.
- **AOS** — used sparingly for simple scroll-fade content where a full GSAP timeline would be overkill.
- **Lenis** — mounted once in `App.jsx` via `useLenis()`. Automatically disabled when the OS-level `prefers-reduced-motion` is set.
- **Reduced motion** is a first-class citizen: `usePrefersReducedMotion()` is available to any component that wants to skip non-essential motion, and a global CSS media query (`globals.css`) collapses all animation durations to near-zero as a safety net.

## Performance Strategy

- Route-level code is minimal (single page), so the optimization target is **initial bundle weight** and **animation frame budget**:
  - Heavy libraries (GSAP/Framer/AOS/Lenis, Three.js, Lottie/tsParticles) are split into separate vendor chunks (`vite.config.js` → `manualChunks`) so the loader + hero can paint before the rest downloads.
  - Three.js / React Three Fiber is marked optional per the SRS — it only ships if a later milestone's visual actually needs it, and will be lazy-loaded (`React.lazy`) rather than bundled eagerly.
  - Images/video will be served in modern formats (WebP/AVIF, MP4/WebM) and lazy-loaded below the fold using `react-intersection-observer`.
  - GSAP timelines will be built once (via `useLayoutEffect` + cleanup) and scoped with `gsap.context()` so nothing leaks or reruns unnecessarily.

## Accessibility Strategy

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a real heading hierarchy (one `h1`, ordered `h2`/`h3` per section).
- Visible focus states everywhere (`:focus-visible` styled in `globals.css`, never suppressed with `outline: none`).
- A skip-to-content link is present in `index.html` for keyboard users.
- `prefers-reduced-motion` is respected globally, not just as an afterthought.
- Color choices from the token system maintain WCAG-AA contrast for body text on `void`/`navy` backgrounds; accent colors (`neon-pink`, `neon-cyan`, etc.) are reserved for large text, icons, and decorative glows — never small body copy on their own.
- ESLint's `jsx-a11y` plugin is enabled (`.eslintrc.cjs`) and runs as part of `npm run lint`.

## Design Tokens (Tailwind)

| Token | Value | Use |
|---|---|---|
| `void` | `#050505` | primary background |
| `navy` | `#07111F` | alternate section background |
| `neon-pink` | `#FF4DB8` | primary accent, CTAs |
| `neon-purple` | `#6A00FF` | secondary accent, gradients |
| `neon-cyan` | `#00EAFF` | tertiary accent, links, focus ring |
| `neon-orange` | `#FF8A00` | warnings/highlights, countdown |
| Hero type | Bebas Neue | hero headline only |
| Section titles | Orbitron | all `h2`/`h3` |
| Body | Poppins | paragraphs, UI copy |

## Branding Decisions (locked in)

- **Tagline:** primary = *"Every Flag is a Mission. Every Mission Changes the City."* — secondary/subtitle = *"No Rules. Just Flags."*
- **Logo:** wordmark (3D metal "SEIZE DA FLAQ") in navbar/hero; hexagonal badge emblem reserved for favicon/secondary placements.
- **Team stat:** headline figure is 200–250 teams (Master Reference Doc target), not the brochure's 150+.
- **No GLA University branding** — Cyberonites Club only, per Master Reference Doc.
- **GTA references are atmosphere only** — no reproduction of GTA/Rockstar logos, characters, or box-art-style illustration anywhere on the site.
