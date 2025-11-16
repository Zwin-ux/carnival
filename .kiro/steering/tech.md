# EchoID Technical Stack

## Frontend Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with custom carnival theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## Backend Stack

- **API**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis
- **Logging**: Winston
- **Authentication**: Polkadot.js wallet integration

## Blockchain Stack

- **Framework**: Substrate
- **SDK**: Polkadot SDK
- **Custom Pallet**: EchoID pallet for identity anchoring
- **Network**: Westend Testnet (development)
- **Wallet Support**: Polkadot.js extension

## Key Libraries

- **Blockchain**: @polkadot/api, @polkadot/extension-dapp
- **UI**: @radix-ui components, lucide-react icons
- **Gamification**: canvas-confetti, react-hot-toast
- **Data Visualization**: recharts, react-force-graph
- **Validation**: Zod schemas

## Development Commands

```bash
# Install dependencies
pnpm install

# Database setup
pnpm prisma generate
pnpm prisma db push
pnpm prisma db seed

# Development
pnpm dev          # Start Next.js dev server
pnpm build        # Build for production
pnpm start        # Start production server

# Testing
pnpm test         # Run Jest tests
pnpm test:watch   # Run tests in watch mode
pnpm test:coverage # Generate coverage report

# Linting
pnpm lint         # Run ESLint
```

## Blockchain Development

```bash
# Build Substrate node
cargo build --package solochain-template-node --release

# Run development chain
./target/release/solochain-template-node --dev

# Purge chain state
./target/release/solochain-template-node purge-chain --dev

# Generate Rust docs
cargo +nightly doc --open
```

## Architecture Patterns

- **App Router**: Next.js 13+ app directory structure
- **Component Composition**: Radix UI primitives with custom styling
- **Server Components**: Default server-side rendering with client components for interactivity
- **API Routes**: RESTful endpoints in `/api` directory
- **Database**: Prisma schema with gamification models (XP, achievements, quests)
- **State Management**: React hooks and context for wallet connection
- **Styling**: Utility-first CSS with custom design system

## Environment Variables

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string (optional)
- `NEXT_PUBLIC_WS_PROVIDER`: Substrate node WebSocket endpoint