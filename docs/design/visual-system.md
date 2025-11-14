# EchoID Carnival Visual System v2

Living reference for the layered gunmetal redesign rolling across apps in the monorepo. Use it to align Tailwind tokens, CSS utilities, and UI components across product surfaces.

## Objectives
- Anchor every screen in graphite gradients (#05060a -> #0c101c) with luminous grid/noise overlays.
- Elevate plasma cyan (#35f2ff) and magenta nova (#ff5be1 -> #963cff) as primary and secondary energy lines.
- Replace carnival bulbs with glassmorphism surfaces, neon edge glows, and holographic micro-interactions.
- Standardise typography: Oxanium for headings, Geist Sans for body, Space Grotesk for data labels.

## Token & Utility Map

| Token | Usage | Notes |
| --- | --- | --- |
| `graphite.950 / 800 / 600` | Base backgrounds, section dividers | Default body gradient lives in `:root --gradient-graphite`. |
| `plasma.600`, `plasma-gradient` | Primary CTAs, highlights | Use `bg-[var(--gradient-plasma)]` for animated fills. |
| `nova.*` | Secondary CTAs, alerts | Pair with `drop-shadow-nova` for glow cues. |
| `mist.500` | Borders, captions | Soft gray-blue (#8fa3b8) mandated for utility outlines. |
| `overlay.light/medium` | Glass overlays | Backdrop filters reference these translucent whites (8-12%). |
| Shadows `shadow-glass-layer`, `shadow-depth-xl` | Panels, stacked cards | Replace legacy marquee/bulb glows. |
| Animations `pulse-glow`, `grid-flow`, `particle-drift` | Hero, dashboard canvases only | Respect `prefers-reduced-motion`; utilities provided in Tailwind. |

Utilities added in `app/globals.css`:
- `.glass-panel`, `.holo-toolbar`, `.accent-spine`, `.hero-grid`, `.glow-corner`, `.holo-chip`.
- Scrollbars now mirror plasma -> nova gradients.
- `@layer utilities` exposes `.grid-accent`, `.plasma-outline`, `.holo-section`.

## Typography
- **Headings:** Oxanium via `font-heading`. Deploy for H1-H3 + CTA numerics.
- **Body:** Geist Sans remains `font-sans` default.
- **Data / labels:** Space Grotesk via `font-data` for trust readouts, timers, chips.
- Apply increased tracking on uppercase navigational text (`tracking-[0.35em]` is the new default for labels).

## New UI Primitives (`packages/ui`)
1. **GlassPanel** - glassmorphism container with depth/accent controls. Props: `depth`, `accent`, `padding`, `interactive`.
2. **NeoButton** - plasma/nova/graphite capsule button with gradient fills, loading spinner, optional icons.
3. **HoloBadge** - capsule chips for status, trust, filters; tones include `plasma`, `nova`, `graphite`, `success`, `warning`, `danger`.

Update checklist when adopting elsewhere:
- Import from `@echoid/ui`.
- Prefer `GlassPanel` for cards/modals to guarantee blur + border treatment.
- Replace `TicketButton` gradually with `NeoButton` variants (legacy kept for fallback experiences).

## Motion & Interaction Language
- `pulse-glow`: Plasma <-> nova breathing glow for edges and hero orb outlines.
- `tilt-glow`: Subtle 3D tilt, currently applied to neon cards; avoid on dense data tables.
- `grid-flow` & `particle-drift`: Micro texture reserved for hero + dashboard backgrounds per spec.
- Hover states default to `hover:-translate-y-0.5` + gradient tilt; pair with accent strokes instead of drop shadows.
- `prefers-reduced-motion` enforced globally (animations collapse to 0.01ms).

## Page / Component Adoption Status

| Surface | Status | Notes |
| --- | --- | --- |
| Landing hero (`MidwayHero`) | DONE | Uses hero grid, holo orb, NeoButtons, Oxanium headings. |
| Fortune Wheel | DONE | Conic-gradient orb, filter badges, glass winner card. |
| Booth cards (`@echoid/ui`) | DONE | Updated to holographic chips + graphite shells. |
| Dashboard | DONE | GlassPanel shells, NeoButton CTAs, holo stats. |
| Booth detail (`BoothExperience`) | DONE | Session controls + reviews now on glass + monotype headings. |
| Modal flows (SessionControls, ReviewForm) | DONE | Adopt NeoButton CTAs, plasma badges, compact copy. |

## Rollout Checklist
1. **Tokens** - Reference `apps/web/tailwind.config.ts` and `app/globals.css` before editing local palettes.
2. **Components** - Pull from `@echoid/ui`; avoid bespoke glass markup in app code.
3. **Docs** - Extend this file with new modules (e.g., `NeoButton` patterns, analytics cards) as they land.
4. **QA** - Re-run accessibility checks on plasma/nova combinations (ensure AA on graphite backgrounds).
5. **Performance** - Limit backdrop filters to hero, dashboard, floating toolbars; degrade gracefully on mobile via `@supports` if necessary.
6. **Fallbacks** - New `@supports not (backdrop-filter)` and mobile blur reductions live in `app/globals.css`; mirror them when adding bespoke glass layers elsewhere.

## Performance & Accessibility QA Notes
- **Mobile GPU spot-check**: In Chrome DevTools, emulate a mid-tier Android device and enable performance throttling (CPU x4, GPU low). Verify that glass panels degrade to solid graphite via the `@supports not (backdrop-filter)` rule and that scroll remains >= 45 FPS on `/dashboard`, `/booths`, and `/booth/[slug]`.
- **Blur budget**: Limit concurrent `GlassPanel` instances with `backdrop-filter` to three per viewport on mobile. For stacked sections (e.g., dashboard grids), prefer `accent="graphite"` which keeps the blur subtle.
- **Contrast audit**: Plasma (`#35f2ff`) and nova (`#ff5be1`) badges were checked against graphite-900 backgrounds using WCAG relative luminance calculations (contrast ratio ~4.1:1). Continue to use text-opacity utilities to stay above AA.
- **Verification flow**: `/verify/[hash]` now uses GlassPanel + HoloBadge—run a quick contrast check on the nova failure state and ensure screen readers announce pass/fail rows (they use `<span>` pairs with readable text).

## References
- Tailwind config: `apps/web/tailwind.config.ts`
- Global utilities: `apps/web/app/globals.css`
- Fonts: `apps/web/src/lib/fonts.ts`
- UI primitives: `packages/ui/src/{GlassPanel,NeoButton,HoloBadge,BoothCard}.tsx`

Keep this document versioned with any subsequent theme passes or component additions to maintain parity with Figma and code.
