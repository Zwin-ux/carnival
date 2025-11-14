#!/bin/bash
# EchoID Carnival - Unix/Mac Setup Script
# Run this with: ./setup.sh

set -e

echo "🎪 EchoID Carnival - Quick Setup"
echo "================================"
echo ""

# Check if Docker is running
echo "Checking Docker..."
if ! docker ps > /dev/null 2>&1; then
    echo "✗ Docker is not running!"
    echo ""
    echo "Please start Docker Desktop and run this script again."
    exit 1
fi
echo "✓ Docker is running"
echo ""

# Start Postgres
echo "Starting PostgreSQL..."
docker compose up -d postgres

echo "Waiting for Postgres to be healthy..."
for i in {1..30}; do
    if [ "$(docker inspect --format='{{.State.Health.Status}}' echoid-postgres 2>/dev/null)" == "healthy" ]; then
        echo "✓ Postgres is healthy"
        echo ""
        break
    fi
    sleep 1
done

# Generate Prisma client
echo "Generating Prisma client..."
pnpm db:generate
echo "✓ Prisma client generated"
echo ""

# Push database schema
echo "Pushing database schema..."
pnpm db:push
echo "✓ Schema pushed"
echo ""

# Seed database
echo "Seeding database with demo data..."
pnpm db:seed
echo "✓ Database seeded"
echo ""

# Success message
echo "================================"
echo "✅ Setup Complete!"
echo ""

echo "Next steps:"
echo "  1. Run: pnpm dev"
echo "  2. Open: http://localhost:3000"
echo ""

echo "Or run everything in Docker:"
echo "  docker compose up"
echo ""

echo "Happy coding! 🚀"
