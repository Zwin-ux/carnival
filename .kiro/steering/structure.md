# EchoID Project Structure

## Repository Organization

This is a multi-project repository containing both the frontend application and blockchain components:

```
/
├── echoid/                 # Main Next.js application
├── echoid-node/           # Custom Substrate node
├── substrate-node/        # Alternative Substrate node template
├── polkadot-sdk-stable/   # Polkadot SDK reference
└── prisma/               # Shared database schema
```

## Main Application Structure (echoid/)

```
echoid/
├── app/                   # Next.js App Router
│   ├── dashboard/         # User dashboard pages
│   ├── profile/          # Profile pages
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── ProfileForm.tsx
│   │   ├── AttestationForm.tsx
│   │   └── DailyLoginModal.tsx
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript definitions
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Key Directories

### `/app` - Next.js App Router
- **Pages**: Route-based file structure
- **API Routes**: Backend endpoints in `/api`
- **Layouts**: Shared layouts and metadata

### `/src/components` - React Components
- **UI Components**: Reusable shadcn/ui components
- **Feature Components**: Business logic components (forms, modals)
- **Gamification**: XP bars, achievement cards, level badges

### `/src/lib` - Utilities
- **Database**: Prisma client configuration
- **Blockchain**: Polkadot API utilities
- **Utils**: Helper functions and constants

### Blockchain Nodes
- **echoid-node/**: Custom Substrate node with EchoID pallet
- **substrate-node/**: Standard Substrate node template
- **polkadot-sdk-stable/**: Full Polkadot SDK for reference

## File Naming Conventions

- **Components**: PascalCase (e.g., `ProfileForm.tsx`)
- **Pages**: lowercase with hyphens (e.g., `dashboard/page.tsx`)
- **API Routes**: lowercase with hyphens (e.g., `api/xp/award/route.ts`)
- **Utilities**: camelCase (e.g., `gameUtils.ts`)
- **Types**: PascalCase interfaces (e.g., `Profile`, `Attestation`)

## Configuration Files

- **next.config.js**: Next.js configuration
- **tailwind.config.js**: Tailwind CSS with carnival theme
- **tsconfig.json**: TypeScript configuration with path aliases
- **prisma/schema.prisma**: Database schema
- **package.json**: Dependencies managed with pnpm

## Development Workflow

1. **Frontend Development**: Work in `/echoid` directory
2. **Database Changes**: Update `/prisma/schema.prisma`
3. **Blockchain Development**: Work in `/echoid-node` or `/substrate-node`
4. **Shared Types**: Define in `/src/types` for consistency

## Import Patterns

Use path aliases for clean imports:
```typescript
import { Button } from "@/components/ui/button"
import { ProfileForm } from "@/components/ProfileForm"
import { gameUtils } from "@/lib/gameUtils"
```

## Asset Organization

- **Static Assets**: `/public` directory
- **Icons**: Lucide React icons preferred
- **Images**: Optimize for web, use Next.js Image component
- **Fonts**: System fonts with fallbacks