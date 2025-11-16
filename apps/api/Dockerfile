# Multi-stage build for EchoID API

# Stage 1: Dependencies
FROM node:20-bullseye-slim AS deps
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/api/package.json ./apps/api/
COPY packages/core/package.json ./packages/core/
COPY packages/db/package.json ./packages/db/

# Install native build tools required by some npm packages (node-gyp)
# (python3, make, build-base) so `pnpm install` can compile native modules.
RUN apt-get update && apt-get install -y --no-install-recommends \
	python3 \
	python3-dev \
	build-essential \
	ca-certificates \
	&& ln -sf $(which python3) /usr/bin/python || true \
	&& rm -rf /var/lib/apt/lists/*

# Install production dependencies only (avoid dev-only native modules that fail to compile)
# We moved `prisma` into `packages/db` dependencies so we can run Prisma generate without
# installing the full dev dependency set in the image.
RUN pnpm install --workspace-root --prod

# Stage 2: Builder
FROM node:20-bullseye-slim AS builder
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/pnpm-lock.yaml ./

# Copy source code
COPY apps/api ./apps/api
COPY packages ./packages
COPY package.json pnpm-workspace.yaml turbo.json tsconfig.json ./

# Generate Prisma client
# Ensure the @echoid/db package has its production deps installed locally
# This makes the `prisma` CLI available where the package expects it.
RUN pnpm install --filter @echoid/db --prod
RUN pnpm --filter @echoid/db db:generate

# Build
# Install TypeScript globally so the `tsc` CLI is available for the build
# without pulling devDependencies for the whole workspace.
RUN npm install -g typescript
# Run TypeScript compiler directly against the api project tsconfig so we don't
# depend on a package-local TypeScript installation (pnpm would try to run
# the local `node_modules/typescript/bin/tsc` otherwise).
RUN tsc -p apps/api/tsconfig.json

# Stage 3: Production
FROM node:20-bullseye-slim AS runner
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app

ENV NODE_ENV=production

# Copy built artifacts
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/package.json ./apps/api/
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3001

CMD ["node", "apps/api/dist/index.js"]
