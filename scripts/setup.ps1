# EchoID Carnival - Windows Setup Script
# Run this with: ./setup.ps1

Write-Host "EchoID Carnival - Quick Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Check if Docker is running
Write-Host "Checking Docker Desktop..." -ForegroundColor Yellow
try {
    docker ps > $null 2>&1
    Write-Host "Docker is running" -ForegroundColor Green
} catch {
    Write-Host "Docker Desktop is not running!" -ForegroundColor Red
    Write-Host "Please start Docker Desktop and run this script again." -ForegroundColor Yellow
    Write-Host "Press Windows Key -> Type 'Docker Desktop' -> Open it" -ForegroundColor Yellow
    exit 1
}

# Start Postgres
Write-Host "Starting PostgreSQL..." -ForegroundColor Yellow
docker compose up -d postgres

Write-Host "Waiting for Postgres to be healthy..." -ForegroundColor Yellow
$maxAttempts = 30
$attempt = 0
while ($attempt -lt $maxAttempts) {
    $health = docker inspect --format='{{.State.Health.Status}}' echoid-postgres 2>$null
    if ($health -eq "healthy") {
        Write-Host "Postgres is healthy" -ForegroundColor Green
        break
    }
    Start-Sleep -Seconds 1
    $attempt++
}

if ($attempt -eq $maxAttempts) {
    Write-Host "Postgres failed to start. Check logs: docker logs echoid-postgres" -ForegroundColor Red
    exit 1
}

# Generate Prisma client
Write-Host "Generating Prisma client..." -ForegroundColor Yellow
pnpm db:generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to generate Prisma client" -ForegroundColor Red
    exit 1
}
Write-Host "Prisma client generated" -ForegroundColor Green

# Push database schema
Write-Host "Pushing database schema..." -ForegroundColor Yellow
pnpm db:push
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push schema" -ForegroundColor Red
    exit 1
}
Write-Host "Schema pushed" -ForegroundColor Green

# Seed database
Write-Host "Seeding database with demo data..." -ForegroundColor Yellow
pnpm db:seed
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to seed database" -ForegroundColor Red
    exit 1
}
Write-Host "Database seeded" -ForegroundColor Green

# Success message
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green

Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Run: pnpm dev" -ForegroundColor White
Write-Host "  2. Open: http://localhost:3000" -ForegroundColor White

Write-Host "Or run everything in Docker:" -ForegroundColor Cyan
Write-Host "  docker compose up" -ForegroundColor White

Write-Host "Happy coding!" -ForegroundColor Magenta
