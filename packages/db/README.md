# @echoid/db

Database client and ORM package for EchoID Carnival.

## Overview

This package provides the Prisma-based database client, schema definitions, and database utilities for the EchoID Carnival platform. It handles all database operations including user management, expert profiles, sessions, bookings, and reviews.

## Features

### 🗄️ Prisma ORM
- Type-safe database client
- Auto-generated TypeScript types
- Migration management
- Query optimization

### 📊 Database Schema
Core entities:
- **Users** - User accounts with wallet integration
- **Experts** - Expert profiles with specializations
- **Sessions** - Expert availability and session slots
- **Bookings** - User bookings for expert sessions
- **Reviews** - Rating and review system
- **Transactions** - Blockchain transaction records

### 🔐 Authentication (`auth.ts`)
- User authentication utilities
- Session management helpers
- Token validation

### 🛠️ SQL Utilities (`sql.ts`)
- Raw SQL query helpers
- Direct PostgreSQL access
- Custom query utilities

## Installation

This package is part of the EchoID Carnival monorepo:

```json
{
  "dependencies": {
    "@echoid/db": "workspace:*"
  }
}
```

## Usage

### Import the Prisma client

```typescript
import { prisma } from '@echoid/db';

// Query users
const users = await prisma.user.findMany();

// Create a booking
const booking = await prisma.booking.create({
  data: {
    userId: '...',
    sessionId: '...',
    status: 'PENDING'
  }
});
```

### Use generated types

```typescript
import type { User, Expert, Booking } from '@echoid/db';

function processUser(user: User) {
  console.log(user.walletAddress);
}
```

### Authentication helpers

```typescript
import { validateSession, createAuthToken } from '@echoid/db';

const session = await validateSession(token);
const newToken = createAuthToken(userId);
```

## Database Setup

### Prerequisites
- PostgreSQL 14+
- Node.js 18+
- pnpm package manager

### Initial setup

1. Set up your database connection in the root `.env` file:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/echoid_carnival"
```

2. Generate Prisma client:
```bash
pnpm db:generate
```

3. Push schema to database:
```bash
pnpm db:push
```

4. Seed the database (optional):
```bash
pnpm db:seed
```

## Available Scripts

### `pnpm db:generate`
Generate Prisma client from schema

### `pnpm db:push`
Push schema changes to database (development)

### `pnpm db:seed`
Seed database with sample data

### `pnpm db:studio`
Open Prisma Studio (database GUI)

## Schema Location

The Prisma schema is located at:
```
packages/db/prisma/schema.prisma
```

## Development

### Testing database connection

```bash
pnpm tsx scripts/test-conn.ts
```

### Modifying the schema

1. Edit `prisma/schema.prisma`
2. Run `pnpm db:push` to apply changes
3. Run `pnpm db:generate` to update types

### Migrations (Production)

For production deployments, use migrations instead of `db:push`:

```bash
npx prisma migrate dev --name your_migration_name
npx prisma migrate deploy  # for production
```

## Database Structure

### Core Tables

- `User` - User accounts and profiles
- `Expert` - Expert profiles and specializations
- `Session` - Available time slots for experts
- `Booking` - User bookings for sessions
- `Review` - User reviews and ratings
- `Transaction` - Blockchain transaction logs

### Relationships

```
User ←→ Expert (1:1)
Expert ←→ Session (1:N)
Session ←→ Booking (1:N)
User ←→ Booking (1:N)
Booking ←→ Review (1:1)
```

## Dependencies

- `@prisma/client` - Prisma client runtime
- `postgres` - PostgreSQL driver for Node.js
- `prisma` (dev) - Prisma CLI and schema management
- `tsx` (dev) - TypeScript execution for scripts

## Environment Variables

Required environment variables:

```env
DATABASE_URL=postgresql://user:password@host:port/database
```

## Docker Support

The database can be run locally using Docker Compose (see root `docker-compose.yml`):

```bash
docker compose up db -d
```

## Troubleshooting

### Connection issues
- Verify `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Check network connectivity

### Schema sync issues
```bash
pnpm db:generate  # Regenerate client
pnpm db:push      # Sync schema
```

### Type errors after schema changes
```bash
pnpm db:generate  # Update generated types
```

## Related Packages

- `@echoid/core` - Shared business logic and schemas
- `@echoid/api` - REST API using this database client
- `@echoid/web` - Next.js app using this database client
