# EchoID QA Execution Plan

## 1. Scope & Priorities
- **Primary goal**: ensure every navigation path, CTA, and program function routes to a live experience without dead ends.
- **Coverage tiers**: (a) public marketing surface (`/`, scroll anchors, FlowRail cards), (b) builder workflow (`/builder`, wallet + avatar interactions), (c) operations cockpit (`/dashboard`, `/quests`, `/profile/[address]`), (d) API contracts powering the UI (e.g., session review endpoints under `apps/api`).
- **Definition of done**: CTA click, keyboard navigation, and direct URL entry all land on content that renders without client or server errors; API endpoints return validated payloads across success/error branches.

## 2. Routing & CTA Matrix
| Area | Trigger | Expected Target | Notes |
| --- | --- | --- | --- |
| Hero primary CTA | `Start Building` button → `/builder` | Loads builder page with wallet panel in view | Uses `Link` inside TicketButton; verify focus ring and keyboard activation. |
| Hero secondary CTA | Button label toggles `See Flow` (≥1024px) / `Scroll to Flow` (<1024px) | Smooth-scroll to `#flow` | Ensure `document.getElementById("flow")` exists and aria-label references flow overview. |
| FlowRail Step 1 | `href="/builder#connect"` | Focus on wallet card | Requires `id="connect"` (added). |
| FlowRail Step 2 | `href="/builder#avatar"` | Scroll into avatar canvas | Requires `id="avatar"`. |
| FlowRail Step 3 | `href="/dashboard#anchor"` | Activates dashboard anchor tab | `TabsContent` carries `id="anchor"`; confirm router retains hash.
| Dashboard anchor fallback | Direct-load `/dashboard#anchor` without wallet | Inline CTA link to `/builder#connect` plus updated copy | Expect text “Connect Polkadot.js to unlock anchoring.” and link label “Connect wallet in builder.” |
| Header nav | `/`, `/builder`, `/quests`, `#lore`, `/dashboard` | Standard Next.js routing | Add regression test to ensure `#lore` anchor exists in landing page. |
| Closing CTA | `/dashboard` | Opens Launch Deck/prize counter | `TicketButton` + Link usage. |
| Builder actions | Buttons within `LayerCanvas`, trait selectors | Local state updates only | Add smoke tests covering randomize, download, trait gating. |
| Dashboard tabs | `TabsTrigger` values `overview/profile/attestations/anchor` | Show associated panels without remount errors | Ensure `TabsContent` renders offscreen but mounted for hash linking.

## 3. Functional Scenario Suites
- **Connect Wallet** (`/builder`, `PolkadotConnect`):
  1. Happy path: extension installed → account list shown → `unlockGate("genesis-drop")` fires, trait cards enable.
  2. Missing extension: show fallback message; no JS errors.
  3. Disconnect + reconnect: ensure store resets preview + gates.
- **Craft Avatar**:
  1. Trait selection persists per category, toggles rarity lock states.
  2. `Randomize Genesis` disabled until wallet connected.
  3. `Download PNG` only active with rendered preview; file downloads unique name.
- **Anchor & Dashboard**:
  1. Profile absent: anchor tab shows CTA to create profile.
  2. Profile present, not anchored: `AnchorHashCard` visible; trust score updates after anchor.
  3. Hash submission failure (mock API 500) surfaces toast without crashing tabs.
- **Quests & API** (`apps/api`): extend `sessionReview.integration.test.ts` to cover:
  - Valid session review returns expected schema.
  - Expired session token yields 401 with error payload.
  - Malformed request body rejects with 422.

## 4. Automation & Tooling
1. **Static analysis**
   - `pnpm lint` at repo root to catch unused imports/aria issues.
   - `pnpm --filter @echoid/api test` to execute integration suites.
2. **Component/unit tests**
   - Target Zustand stores (`src/state/useAvatarStore.ts`) using Jest + `zustand/middleware`. Verify selectors respond to actions above.
3. **Playwright smoke** (`apps/echoid/e2e`):
   - Scenario 1: landing CTA mapping (`routing-smoke.spec.ts`).
   - Scenario 2: mocked `window.injectedWeb3` flow exercises builder ticket booth and persists wallet selection to `localStorage` before visiting `/quests`.
   - Scenario 3: direct-hash routes for `/dashboard#anchor` plus `/profile/[address]` use API fixtures to ensure UI hydration without depending on seeded data.
   - Command: `pnpm --filter echoid test:e2e` (starts Next dev server automatically via Playwright `webServer`).
4. **Accessibility**
   - Add `pnpm exec axe http://localhost:3000` or integrate `@axe-core/playwright` to fail builds on WCAG violations for routed pages.
5. **Monitoring hooks**
   - In `apps/api`, log route + status for `sessionReview` to detect spikes post deploy.

## 5. Execution Checklist per PR
1. Update routing matrix when adding/editing CTAs.
2. Run lint + targeted tests:
   ```powershell
   pnpm lint
   pnpm --filter @echoid/api test
   pnpm --filter echoid test:e2e
   ```
3. For UI changes, ensure the E2E smoke above passes (runs from repo root; no additional commands needed).
4. Attach Lighthouse summary for affected routes (desktop + mobile) to pull request.
5. Record manual spot-check results in PR description (who ran it, what path, timestamp).

Maintaining this plan ensures the neon landing, builder, and dashboard experiences remain link-complete and functionally trustworthy as the carnival evolves.
