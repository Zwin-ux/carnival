# Complete System Overhaul - Design

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Startup Orchestrator                     │
│  (pnpm start → checks deps → starts services → seeds DB)    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ├──────────────────┬──────────────────┐
                              ▼                  ▼                  ▼
                    ┌──────────────────┐ ┌──────────────┐ ┌──────────────┐
                    │  Docker Compose  │ │   Prisma DB  │ │   Next.js    │
                    │   (Postgres)     │ │   (Migrate)  │ │   (Web App)  │
                    └──────────────────┘ └──────────────┘ └──────────────┘
                              │                  │                  │
                              └──────────────────┴──────────────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │   Express API    │
                                    │   (Port 3001)    │
                                    └──────────────────┘
```

## Component Design

### 1. Startup Script (`scripts/start.sh` / `start.ps1`)

**Purpose**: Single command to start entire application

**Flow**:
```
1. Check Prerequisites
   ├─ Docker installed?
   ├─ Docker running?
   ├─ Node.js installed?
   └─ pnpm installed?

2. Check Port Availability
   ├─ Port 3000 free?
   ├─ Port 3001 free?
   └─ Port 5432 free?

3. Start Docker Services
   ├─ docker compose up -d
   └─ Wait for Postgres ready

4. Setup Database
   ├─ pnpm db:generate
   ├─ pnpm db:push
   └─ pnpm db:seed (if empty)

5. Start Application
   ├─ Start API (background)
   └─ Start Web (foreground)

6. Health Check
   ├─ API responding?
   ├─ Database connected?
   └─ Web server ready?

7. Success Message
   └─ Show URLs and next steps
```

**Error Handling**:
- Each step checks for success
- Clear error messages with solutions
- Graceful cleanup on failure

### 2. Health Check System

**API Endpoint**: `GET /health`

**Response**:
```json
{
  "status": "healthy",
  "services": {
    "database": {
      "status": "connected",
      "latency": "5ms"
    },
    "api": {
      "status": "running",
      "version": "0.1.0"
    }
  },
  "timestamp": "2024-01-01T12:00:00Z"
}
```

**Frontend Health Check**:
```typescript
// components/HealthCheck.tsx
- Polls /health every 30s
- Shows banner if services down
- Provides restart instructions
```

### 3. Database Seed Data

**Seed Script**: `packages/db/seed.ts`

**Data Structure**:
```
Users (5)
├─ Alice (Expert: Web3, Rust)
├─ Bob (Expert: Security, Audits)
├─ Charlie (Expert: Career Coaching)
├─ Diana (Expert: Smart Contracts)
└─ Eve (Client only)

Booths (8)
├─ Web3 Architecture Consulting (Alice)
├─ Smart Contract Security Audit (Bob)
├─ Career Coaching (Charlie)
├─ Rust Mentorship (Alice)
├─ DeFi Protocol Review (Diana)
├─ Token Economics Design (Bob)
├─ DAO Governance Consulting (Charlie)
└─ NFT Strategy Session (Diana)

Sessions (12)
├─ 6 completed (with reviews)
├─ 3 in progress
└─ 3 pending

Reviews (6)
└─ Ratings 3-5 stars with comments
```

**Seed Strategy**:
- Check if data exists first
- Only seed if database is empty
- Use realistic data with variety
- Include edge cases (no reviews, new booths, etc.)

### 4. Builder/Admin Pages

**New Routes**:
```
/builder              → Booth creation/management hub
/builder/new          → Create new booth
/builder/[id]         → Edit existing booth
/builder/[id]/stats   → Booth analytics
```

**Builder Page Components**:

```typescript
// app/builder/page.tsx
- List of user's booths
- Quick stats (sessions, revenue, ratings)
- "Create New Booth" button
- Edit/Delete actions

// app/builder/new/page.tsx
- Booth creation form
  ├─ Title
  ├─ Description
  ├─ Tags (multi-select)
  ├─ Price per minute
  ├─ Availability toggle
  └─ Submit button

// app/builder/[id]/page.tsx
- Edit booth form (same as new)
- Delete booth button
- View live booth link
```

### 5. Error Boundaries & Loading States

**Service Down Page**:
```typescript
// components/ServiceDownBanner.tsx
<GlassPanel tone="neon" padding="lg">
  <h2>Services Starting Up...</h2>
  <p>Waiting for database connection</p>
  <LoadingSpinner />
  <button onClick={retry}>Retry</button>
</GlassPanel>
```

**Empty State Components**:
```typescript
// components/EmptyState.tsx
- Icon
- Title
- Description
- Call-to-action button
- Used for: No booths, No sessions, No reviews
```

### 6. Navigation Enhancement

**Header Updates**:
```typescript
// components/Header.tsx
<nav>
  <Link href="/">Home</Link>
  <Link href="/booths">Booths</Link>
  <Link href="/builder">Builder</Link>  {/* NEW */}
  <Link href="/dashboard">Dashboard</Link>
  <WalletConnect />
</nav>
```

**Protected Routes**:
```typescript
// middleware.ts
- /dashboard → requires auth
- /builder → requires auth
- /builder/* → requires auth + ownership
```

## Data Flow

### Booth Creation Flow
```
User → Builder Page
  ↓
Fill Form
  ↓
Submit → API POST /v1/booths
  ↓
API validates + creates booth
  ↓
Returns booth data
  ↓
Redirect to /builder (show new booth)
```

### Session Booking Flow
```
User → Booth Detail Page
  ↓
Click "Book Session"
  ↓
API POST /v1/sessions
  ↓
Create pending session
  ↓
Expert accepts
  ↓
Session starts (timer)
  ↓
Session ends
  ↓
Client leaves review
  ↓
Review anchored on-chain (future)
```

## UI/UX Improvements

### Loading States
- Skeleton loaders for booth cards
- Spinner for form submissions
- Progress bar for session timer

### Error Messages
- Toast notifications for errors
- Inline validation for forms
- Helpful error pages with actions

### Empty States
- Friendly illustrations
- Clear call-to-action
- Helpful tips for new users

## Technical Decisions

### Why Docker Compose?
- Easy local development
- Consistent environment
- Simple service orchestration
- No manual Postgres setup

### Why Seed Data?
- Immediate value for developers
- Testing with realistic data
- Demo-ready application
- Reduces setup friction

### Why Health Checks?
- Early error detection
- Better debugging
- User-friendly error messages
- Service monitoring

### Why Builder Pages?
- Core feature for experts
- Missing from current app
- Enables booth management
- Completes user journey

## Performance Considerations

- Database queries optimized with indexes
- API responses cached where appropriate
- Frontend uses React Server Components
- Images lazy-loaded
- Code split by route

## Security Considerations

- Auth required for protected routes
- Input validation on all forms
- SQL injection prevention (Prisma)
- XSS prevention (React escaping)
- CSRF tokens for mutations

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader friendly

## Testing Strategy

### Unit Tests
- API route handlers
- Database queries
- Utility functions

### Integration Tests
- API endpoints
- Database operations
- Auth flow

### E2E Tests
- User flows (Playwright)
- Critical paths
- Error scenarios

## Deployment Considerations

### Development
- Docker Compose
- Hot reload
- Debug logging

### Production
- Managed Postgres (Railway/Supabase)
- Vercel/Railway deployment
- Environment variables
- Health monitoring

## Migration Path

### Phase 1: Fix Current Issues
1. Create startup script
2. Fix database connection
3. Add seed data
4. Test all pages

### Phase 2: Add Builder
1. Create builder routes
2. Add booth forms
3. Implement CRUD operations
4. Add validation

### Phase 3: Polish
1. Add error boundaries
2. Improve loading states
3. Add empty states
4. Update documentation

### Phase 4: Testing
1. Manual testing
2. Fix bugs
3. E2E tests
4. Performance check

## Success Metrics

- Time to first render: < 2s
- API response time: < 100ms
- Database query time: < 50ms
- Zero errors on startup
- All pages show content
- Navigation works smoothly

## Future Enhancements

- Real-time session updates (WebSockets)
- Video/audio integration
- Payment processing
- Advanced analytics
- Mobile app
- Blockchain anchoring (full implementation)
