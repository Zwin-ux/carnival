# Railway Deployment Notes

These updates make the verification loop production-ready on Railway. Use this checklist when promoting a build:

## Required environment variables
- `DATABASE_URL` – Managed Postgres connection string.
- `AUTH_JWT_SECRET` – Shared HMAC secret so web + API can validate wallet sessions.
- `NEXT_PUBLIC_API_URL` – Public HTTPS URL for the API service (used by Next.js at build and runtime).
- `NEXT_PUBLIC_WS_PROVIDER` – Polkadot/KILT websocket endpoint (defaults to Spiritnet but Railway should set it explicitly).
- `NEXT_PUBLIC_CHAIN_ATTESTATION`, `NEXT_PUBLIC_KILT_INTEGRATION`, `NEXT_PUBLIC_MOCK_ESCROW` – Feature flags expected by the web app; keep them in sync with the API features you plan to demo.

Optional overrides:
- `AUTH_JWT_EXPIRY` – Token lifetime (defaults to `12h`).
- `AUTH_CHALLENGE_TTL` – Challenge message expiry in seconds (defaults to `300`).

## Build pipeline steps
1. Run `pnpm install --frozen-lockfile` at the repo root.
2. Generate the Prisma client once before building services:
   ```bash
   pnpm db:generate
   ```
   This primes `packages/db` so both the API and Next.js builds can import `@echoid/db` without hitting Prisma at runtime.
3. Build each Railway service:
   - Web: `pnpm --filter @echoid/web build`
   - API: `pnpm --filter @echoid/api build`

## Verification smoke test
After deploy, hit the API health check plus the new verification route:
```bash
curl "$NEXT_PUBLIC_API_URL/health"
curl "$NEXT_PUBLIC_API_URL/v1/verify/<payload-hash>"
```
The verification response should now include `verification.hashMatches`, `verification.signatureValid`, and a `merkle` object describing anchor status or actionable errors.
