# Changelog

## 2025-11-13 – Credential loop polish
- Added server-side pending review routing plus the `/dashboard/review/[sessionId]` flow so completed sessions immediately pipe into the signing UI.
- Enriched `/v1/verify/:hash` responses with structured Merkle proofs, anchor metadata, validation hints, and schema-level hash parsing.
- Hardened wallet session handling (toast feedback, redirects, optional success redirect on `ReviewForm`).
- Introduced `apps/api` Jest + ts-jest harness with an integration test that covers session creation ? activation ? completion ? signed review anchoring.
- Documented Railway launch requirements and verified `pnpm db:generate` for CI/CD.
- Refreshed the @echoid/ui design tokens plus TicketButton/LightsProgress/TrustRibbon components for the brass-and-neon treatment, added the new `TrustBeacon`, and re-skinned booth/booking/dashboard flows with responsive layouts, motion that respects `prefers-reduced-motion`, and celebratory UX copy.
