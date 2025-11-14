# EchoID Carnival - Getting Started 🎪

## 🐳 Docker Setup (Recommended)

### Step 1: Start Docker Desktop

Make sure Docker Desktop is running on your machine.

### Step 2: Start the Stack

```bash
cd echoid-carnival

# Start all services (Postgres + API + Web)
docker compose up -d
```

Wait for all services to start (~30 seconds). You can check status with:

```bash
docker compose ps
```

### Step 3: Initialize Database

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# Seed demo data
pnpm db:seed
```

### Step 4: Open the App

- **Web**: http://localhost:3000
- **API Health Check**: http://localhost:3001/health

---

## 🎯 What You Should See

### Landing Page (http://localhost:3000)
- Carnival-themed hero with "EchoID Carnival" title
- "Rent-A-Brain" subtitle
- Featured booths grid showing:
  - Web3 Architecture Consulting (Alice)
  - Smart Contract Security Audit (Bob)
  - Career Coaching (Alice)

### Booths Page (http://localhost:3000/booths)
- List of all active booths
- Filter by tags (web3, security, audit, etc.)
- Trust scores displayed for each booth

### Booth Detail (http://localhost:3000/booth/web3-architecture-alice)
- Expert bio and description
- Trust score with badge (Legendary 92.5)
- Price per minute
- "Connect Wallet" button to book session

---

## 🔧 Troubleshooting

### Docker Services Won't Start

**Problem**: `unable to get image` error

**Solution**: Start Docker Desktop

```bash
# On Windows: Open Docker Desktop from Start Menu
# On Mac: Open Docker Desktop from Applications
```

### Database Connection Failed

**Problem**: `Error: P1012` or connection refused

**Solution**: Restart Postgres

```bash
docker compose restart postgres
```

### Prisma Client Not Found

**Problem**: `Cannot find module '@prisma/client'`

**Solution**: Generate client

```bash
pnpm db:generate
```

### Port Already in Use

**Problem**: `port 3000 is already allocated`

**Solution**: Stop conflicting services

```bash
# Option 1: Stop other services
docker ps  # Find conflicting containers
docker stop <container_id>

# Option 2: Change ports in docker-compose.yml
# Edit ports: "3001:3001" → "3002:3001"
```

---

## 🛠️ Development Workflow

### Making Code Changes

The Docker setup uses volumes for hot-reloading:

```bash
# Edit files in:
apps/web/app/**/*      # Next.js pages auto-reload
apps/web/src/**/*      # Components auto-reload
apps/api/src/**/*      # API auto-restarts
packages/**/*          # Shared code auto-reloads
```

### Viewing Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f web
docker compose logs -f api
docker compose logs -f postgres
```

### Restart Services

```bash
# All services
docker compose restart

# Specific service
docker compose restart api
```

### Stop Everything

```bash
# Stop but keep data
docker compose down

# Stop and remove all data (fresh start)
docker compose down -v
```

---

## 📊 Database Management

### Access PostgreSQL

```bash
# Using Docker
docker exec -it echoid-postgres psql -U echoid -d echoid_carnival

# Using psql from host
psql postgresql://echoid:carnival123@localhost:5432/echoid_carnival
```

### View Tables

```sql
\dt              -- List tables
\d users         -- Describe users table
SELECT * FROM users;
SELECT * FROM booths;
SELECT * FROM sessions;
SELECT * FROM reviews;
```

### Reset Database

```bash
# Option 1: Reset data only
docker compose down
docker volume rm echoid-carnival_postgres_data
docker compose up -d
pnpm db:push
pnpm db:seed

# Option 2: Quick reset
pnpm db:push --force-reset
pnpm db:seed
```

---

## 🧪 Testing

### Unit Tests

```bash
# Run all tests
pnpm test

# Run specific package tests
pnpm --filter @echoid/core test
pnpm --filter @echoid/api test
```

### E2E Tests (Playwright)

```bash
# Install Playwright browsers (first time)
cd apps/web
npx playwright install

# Run E2E tests
pnpm test:e2e

# Run with UI
pnpm test:e2e:ui
```

### Manual Testing Flow

1. **Browse Booths**: http://localhost:3000/booths
2. **View Booth**: Click "Web3 Architecture Consulting"
3. **Connect Wallet**: Click "Connect Wallet" (requires Polkadot extension)
4. **Book Session**: Click "Book 5-Minute Session"
5. **Watch Timer**: See countdown + progress bar
6. **End Session**: Click "End Session"
7. **Leave Review**: Rate 1-5 stars + comment
8. **Verify Hash**: Copy hash link → visit `/verify/[hash]`

---

## 🚢 Production Deployment

### Build Production Images

```bash
docker compose -f docker-compose.prod.yml build
```

### Environment Variables

Create `.env.production`:

```env
DATABASE_URL=postgresql://user:pass@production-db:5432/echoid
NEXT_PUBLIC_API_URL=https://api.echoid.com
NODE_ENV=production
```

### Deploy to Cloud

```bash
# Example: Deploy to Railway/Render/Fly.io
# 1. Push code to Git
# 2. Connect repo to platform
# 3. Set environment variables
# 4. Deploy!
```

---

## 📚 Next Steps

### For Developers

1. Read [ARCHITECTURE.md](./ARCHITECTURE.md) - System design
2. Read [API.md](./API.md) - API endpoints
3. Read [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) - Demo walkthrough

### For Contributors

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
2. Check [ROADMAP.md](./ROADMAP.md) - Future features
3. Browse [GitHub Issues](https://github.com/your-org/echoid-carnival/issues)

### For Designers

1. Read [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Carnival theme
2. Check [Figma](https://figma.com/...) - Design files
3. Review [tailwind.config.ts](./apps/web/tailwind.config.ts) - Design tokens

---

## 🎪 Have Fun!

You're now ready to explore the EchoID Carnival!

Questions? Check our [FAQ](./FAQ.md) or open an issue.

**Happy coding! 🚀**
