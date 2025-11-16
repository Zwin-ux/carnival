# EchoID Carnival - Web3 Expert Marketplace 🎪

**The first decentralized marketplace with portable, verifiable reputation powered by Polkadot & KILT Protocol.**

> 🏆 Built for the Polkadot Hackathon - Showcasing "radically open, radically useful" Web3 applications

A carnival-themed expert booking platform where Web3 meets real utility: cryptographically signed reviews, KILT attestations for verifiable credentials, and on-chain reputation anchoring.

## 🌟 Polkadot Integration Highlights

### 🔐 Wallet-Based Identity
- **Polkadot.js Extension** integration for seamless authentication
- Challenge-response signature verification (no passwords!)
- Multi-account support with wallet selector

### 🎓 KILT Protocol Attestations
- **Verifiable Credentials** for expert qualifications
- **Session Completion** attestations (proof of consultation)
- **Trust Milestones** (Legendary, Veteran, Trusted badges)
- Portable reputation - credentials work across platforms!

### ⛓️ On-Chain Review Anchoring
- **Merkle Tree** batching of review hashes
- **Blockchain anchoring** for immutable proof
- Public verification with block explorer links
- Mathematically provable review authenticity

### ✅ Core Features

- ✅ **Polkadot Wallet Auth**: Sign-in with any Polkadot wallet
- ✅ **KILT Attestations**: Verifiable expert credentials
- ✅ **On-Chain Anchoring**: Reviews anchored to blockchain
- ✅ **Booth Marketplace**: Browse/book Web3 expert sessions
- ✅ **Session Timer**: Real-time 5-minute sessions with server reconciliation
- ✅ **Midway Lobby Experience**: Animated hero + Fortune Wheel mini-game for playful booking discovery
- ✅ **Signed Reviews**: Cryptographically verifiable feedback
- ✅ **Trust Score**: EWMA reputation algorithm (0-100 scale)
- ✅ **Public Verification**: Anyone can verify review authenticity
- ✅ **Carnival Theme**: Beautiful, accessible UI

## 🎪 Why EchoID for Polkadot Hackathon?

### User-Centric & Radically Useful
**Problem:** Finding trusted Web3 experts is hard. Reputation is locked in centralized platforms.

**Solution:** EchoID creates portable, verifiable reputation using KILT credentials. Experts own their credentials. Reviews are cryptographically provable. Trust is decentralized.

**Real-World Impact:**
- Developers find audited smart contract experts
- Projects hire credentialed Polkadot developers
- Users verify expert qualifications before booking
- Reputation travels across platforms (no vendor lock-in)

### Radically Open
- Open source monorepo architecture
- Standard Polkadot APIs (no proprietary protocols)
- Public verification endpoints
- Composable packages (reusable across projects)
- Comprehensive documentation

### Deep Polkadot Ecosystem Integration
1. **Polkadot.js** - Wallet authentication & signatures
2. **KILT Protocol** - Verifiable credentials (parachain integration)
3. **On-Chain Anchoring** - Blockchain verification
4. **Substrate Ready** - Architecture prepared for custom pallets

## 🏗️ Architecture

```
echoid-carnival/
├── apps/
│   ├── web/          # Next.js 15 web app
│   └── api/          # Express REST API
├── packages/
│   ├── core/         # Schemas, crypto, attestations, merkle trees
│   ├── db/           # Prisma schema + client
│   └── ui/           # Carnival-themed components
└── docs/             # Documentation
```

## 🚀 Quick Start (Docker - Recommended)

### Prerequisites

- Docker & Docker Compose
- pnpm 9+ (for database operations from host)

### Option A: Docker Compose (One Command!)

```bash
# Start entire stack (Postgres + API + Web)
docker compose up

# Or run in background
docker compose up -d
```

That's it! The stack will:
1. Start PostgreSQL on port 5432
2. Start API on port 3001
3. Start Web on port 3000

### Initialize Database

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# Seed demo data (2 experts, 3 booths)
pnpm db:seed
```

### Access the App

- **Web**: http://localhost:3000
- **API**: http://localhost:3001
- **Database**: `localhost:5432` (user: echoid, password: carnival123)

### Useful Docker Commands

```bash
pnpm docker:up        # Start stack in background
pnpm docker:down      # Stop stack
pnpm docker:dev       # Start with logs
pnpm docker:logs      # View logs
pnpm docker:clean     # Remove all containers & volumes
pnpm docker:restart   # Restart services
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL 16+

### 1. Install Dependencies

```bash
cd echoid-carnival
pnpm install
```

### 2. Start PostgreSQL

```bash
# Using Docker (easiest)
docker run -d \
  --name echoid-postgres \
  -e POSTGRES_USER=echoid \
  -e POSTGRES_PASSWORD=carnival123 \
  -e POSTGRES_DB=echoid_carnival \
  -p 5432:5432 \
  postgres:16-alpine
```

### 3. Setup Database

```bash
pnpm db:generate
pnpm db:push
pnpm db:seed
```

### 4. Run Development Servers

```bash
pnpm dev
```

This starts:
- **Web**: http://localhost:3000
- **API**: http://localhost:3001

## 📖 Demo Flow

1. **Browse Booths**: Visit http://localhost:3000/booths
2. **View Booth**: Click any booth to see details and trust score
3. **Verify Review**: Use `/verify/[hash]` to cryptographically verify reviews
4. **Dashboard**: View your booths, sessions, and reviews (requires wallet)

## 🎨 Carnival Aesthetic

The UI uses a **carnival-industrial** theme:

- **Colors**: Brass gold, subdued candy pink, mint green, warm cyan
- **Effects**: Bulb glow, marquee borders, CRT scanlines
- **Typography**: Monospace for prices/timers, sans-serif for content
- **Animation**: Subtle 120-180ms transitions, respects `prefers-reduced-motion`

### Design Tokens

```css
--ink-900: #0c0c10        /* Deep background */
--brass-500: #b8860b      /* Primary gold */
--candy-300: #ffd7e0      /* Soft pink */
--mint-300: #b6f2d6       /* Fresh green */
--cyan-400: #46b6e6       /* Bright blue */
--rust-500: #b04b3a       /* Warm red */
```

## 🧪 Testing

### Unit Tests

```bash
pnpm test
```

### E2E Tests (Playwright)

```bash
# Coming soon
pnpm test:e2e
```

## 📚 API Endpoints

Base URL: `http://localhost:3001/v1`

### Booths
- `GET /booths` - List booths (filterable by tags, price)
- `GET /booths/:slug` - Get booth details
- `POST /booths` - Create booth
- `PATCH /booths/:id` - Update booth

### Sessions
- `POST /sessions/start` - Create pending session
- `POST /sessions/activate` - Start timer
- `POST /sessions/heartbeat` - Keep session alive
- `POST /sessions/end` - End session

### Reviews
- `POST /reviews` - Submit signed review (updates trust score)
- `GET /reviews/:sessionId` - Get review by session

### Verification
- `GET /verify/:hash` - Verify review by hash

## 🔒 Security

### Review Verification

1. **Client** signs review payload with wallet
2. **Server** validates signature + computes SHA-256 hash
3. **Anyone** can verify using public `/verify/:hash` endpoint

```typescript
// Canonical review payload
{
  sessionId: string,
  fromUserId: string,
  toUserId: string,
  rating: 1-5,
  comment: string,
  timestamp: number
}
```

### Trust Score Algorithm

EWMA (Exponentially Weighted Moving Average):

```typescript
newScore = alpha * normalizedRating + (1 - alpha) * oldScore
// alpha = 0.3, clamped to 0-100
```

## 🎯 Roadmap & Future Features

### ✅ Hackathon Release (Current)
- Polkadot wallet authentication
- KILT attestations for credentials
- On-chain review anchoring
- Cryptographic verification

### 🚧 Post-Hackathon
- Real payment processing (currently mock escrow)
- Video/audio sessions (WebRTC integration)
- Advanced profile features
- Mobile app (React Native)
- Multi-chain support

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js 15 App Router |
| **Language** | TypeScript 5.6 |
| **Database** | PostgreSQL + Prisma 6 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | Framer Motion |
| **API** | Express.js |
| **Web3** | Polkadot API |
| **Validation** | Zod |
| **Monorepo** | Turborepo + pnpm |

## 📦 Scripts Reference

```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm build            # Build all apps for production
pnpm lint             # Lint all packages
pnpm typecheck        # TypeScript check

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push schema to database
pnpm db:seed          # Seed demo data
pnpm db:studio        # Open Prisma Studio

# Testing
pnpm test             # Run all tests
pnpm test:unit        # Unit tests only
pnpm test:e2e         # E2E tests (Playwright)
```

## 🚢 Deployment

### Environment Variables

Required for production:

```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_API_URL="https://api.echoid.xyz"
```

### Build & Start

```bash
pnpm build
pnpm start
```

## 🗺️ Roadmap

### Week 2+
- [ ] Real KILT attestation integration
- [ ] Payment rails (test tokens)
- [ ] Video/audio sessions (WebRTC)
- [ ] Advanced search & filters
- [ ] User reputation history
- [ ] Booth availability calendar

## 📄 License

MIT

## 🤝 Contributing

This is a hackathon MVP. Contributions welcome after initial release!

---

Built with ❤️ for the EchoID Carnival 🎪

