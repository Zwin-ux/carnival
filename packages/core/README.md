# @echoid/core

Core business logic and utilities for the EchoID Carnival platform.

## Overview

This package contains shared business logic, schemas, cryptographic utilities, and reputation calculations used across the EchoID Carnival application. It provides a centralized location for common functionality that needs to be accessed by both the API and web applications.

## Features

### 📋 Schemas (`schemas.ts`)
Zod validation schemas for:
- User authentication and profiles
- Expert listings and bookings
- Session management
- Reviews and ratings

### 🔐 Cryptography (`crypto.ts`)
Polkadot wallet integration utilities:
- Signature verification
- Message signing and validation
- Wallet address validation
- Cryptographic utilities using `@polkadot/util-crypto`

### ⭐ Reputation System (`reputation.ts`)
Expert reputation calculation engine:
- EWMA (Exponentially Weighted Moving Average) algorithm
- Rating aggregation
- Trust score calculations
- Historical performance tracking

### 🚩 Feature Flags (`flags.ts`)
Feature flag management for:
- Enabling/disabling features across environments
- A/B testing support
- Gradual feature rollouts

## Installation

This package is part of the EchoID Carnival monorepo and uses workspace dependencies:

```json
{
  "dependencies": {
    "@echoid/core": "workspace:*"
  }
}
```

## Usage

### Import schemas

```typescript
import { userSchema, expertSchema, sessionSchema } from '@echoid/core';

// Validate user data
const result = userSchema.safeParse(userData);
if (result.success) {
  console.log('Valid user:', result.data);
}
```

### Verify signatures

```typescript
import { verifySignature } from '@echoid/core';

const isValid = await verifySignature(
  message,
  signature,
  walletAddress
);
```

### Calculate reputation

```typescript
import { calculateReputation } from '@echoid/core';

const reputationScore = calculateReputation(
  previousScore,
  newRating,
  reviewCount
);
```

## Dependencies

- `@polkadot/util` - Polkadot utility functions
- `@polkadot/util-crypto` - Cryptographic utilities for Polkadot
- `@polkadot/wasm-crypto` - WebAssembly crypto implementation
- `zod` - TypeScript-first schema validation

## Development

### Type checking
```bash
pnpm typecheck
```

### Running tests
```bash
pnpm test
```

## Architecture

This package exports raw TypeScript files (not compiled) to enable:
- Faster development iteration
- Better TypeScript integration across packages
- Shared type definitions without separate `.d.ts` files

The package is consumed directly by the TypeScript compiler in dependent packages.

## Related Packages

- `@echoid/db` - Database client and Prisma schema
- `@echoid/ui` - Shared React UI components
- `@echoid/api` - REST API server
- `@echoid/web` - Next.js web application
