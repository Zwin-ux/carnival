# Complete System Overhaul - Requirements

## Problem Statement

The EchoID Carnival application has multiple critical issues:

1. **Empty Pages**: Booths page, dashboard, and builder pages show no content
2. **Database Not Running**: Docker services are not started, causing empty data
3. **Navigation Broken**: Links work but pages are empty due to missing data
4. **No Seed Data**: Database needs to be populated with demo data
5. **Unclear Setup**: Users don't know how to start the application properly

## Goals

1. **Fix Database Setup**: Ensure Docker services start correctly and database is seeded
2. **Create Comprehensive Startup Script**: One command to start everything
3. **Add Health Checks**: Verify all services are running before showing pages
4. **Improve Error Messages**: Show helpful messages when services are down
5. **Add Builder/Admin Pages**: Create missing booth creation and management pages
6. **Fix Navigation**: Ensure all nav links work with proper data

## Success Criteria

- [ ] Single command starts all services (Docker + DB + API + Web)
- [ ] Database automatically seeds with demo data on first run
- [ ] All pages show content (home, booths, dashboard, builder)
- [ ] Navigation works between all pages
- [ ] Clear error messages when services are down
- [ ] Health check endpoint shows service status
- [ ] Documentation updated with correct startup instructions

## User Stories

### As a Developer
- I want to run one command to start the entire application
- I want to see clear error messages if something is wrong
- I want the database to auto-seed with demo data
- I want to know which services are running/failing

### As a User
- I want to see booths on the booths page
- I want to see my dashboard with my data
- I want to create new booths easily
- I want navigation to work smoothly

## Technical Requirements

### Database
- PostgreSQL running in Docker
- Prisma schema properly migrated
- Seed script with realistic demo data
- Connection health checks

### API
- Express server running on port 3001
- Health check endpoint at `/health`
- Auth endpoints working
- Database connection verified

### Frontend
- Next.js running on port 3000
- All pages rendering with data
- Error boundaries for missing services
- Loading states for async data

### DevOps
- Docker Compose orchestration
- Startup script that checks dependencies
- Graceful error handling
- Service restart capabilities

## Out of Scope

- Production deployment configuration
- Advanced monitoring/logging
- Performance optimization
- Security hardening (beyond basics)

## Dependencies

- Docker Desktop installed and running
- Node.js 18+ installed
- pnpm package manager
- Polkadot.js extension (for wallet features)

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Docker not installed | High | Check in startup script, show install instructions |
| Port conflicts | Medium | Check ports before starting, suggest alternatives |
| Database migration fails | High | Add rollback capability, clear error messages |
| Seed data conflicts | Low | Clear existing data before seeding |

## Timeline

- Phase 1: Fix database and startup (1-2 hours)
- Phase 2: Add builder pages (2-3 hours)
- Phase 3: Improve error handling (1 hour)
- Phase 4: Documentation and testing (1 hour)

**Total Estimated Time**: 5-7 hours

## Acceptance Tests

1. Run `pnpm start` → All services start successfully
2. Visit `http://localhost:3000` → See homepage with booths
3. Click "Booths" → See list of demo booths
4. Click "Dashboard" → See dashboard (after wallet connect)
5. Click "Create Booth" → See booth creation form
6. Submit booth → Booth appears in list
7. Stop Docker → See helpful error message
8. Restart → Everything works again
