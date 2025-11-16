# Complete System Overhaul Spec

## Overview

This spec addresses the critical issues with the EchoID Carnival application where pages are empty, navigation appears broken, and the system is difficult to start.

## Problem

- **Empty Pages**: Booths, dashboard, and builder pages show no content
- **Database Issues**: Docker services not running, no seed data
- **Missing Features**: No booth creation/management interface
- **Poor UX**: No error messages, loading states, or empty states
- **Confusing Setup**: Unclear how to start the application

## Solution

A comprehensive overhaul that:
1. Fixes database setup with automated startup
2. Adds missing builder/admin pages
3. Improves error handling and UX
4. Provides clear documentation

## Documents

- **[requirements.md](./requirements.md)** - Detailed requirements and success criteria
- **[design.md](./design.md)** - Architecture and technical design
- **[tasks.md](./tasks.md)** - Implementation tasks broken down by phase

## Quick Start (After Implementation)

```bash
cd echoid-carnival
pnpm start
```

That's it! The startup script will:
- Check prerequisites
- Start Docker services
- Setup database
- Seed demo data
- Start API and Web servers
- Open browser to http://localhost:3000

## Key Features

### 1. Unified Startup
- Single command to start everything
- Automatic dependency checking
- Database auto-seeding
- Health checks

### 2. Builder Pages
- Create new booths
- Edit existing booths
- Manage booth settings
- View booth analytics

### 3. Better UX
- Loading states
- Empty states
- Error boundaries
- Toast notifications
- Helpful error messages

### 4. Complete Navigation
- Home → Booths → Builder → Dashboard
- All pages show content
- Protected routes
- Mobile responsive

## Implementation Phases

### Phase 1: Fix Database & Startup (CRITICAL)
**Time**: 2-3 hours
- Create startup script
- Enhance seed data
- Add health checks
- Fix database connection

### Phase 2: Add Builder Pages (HIGH)
**Time**: 3-4 hours
- Builder hub page
- Booth creation form
- Booth editing
- API endpoints

### Phase 3: Improve Error Handling (MEDIUM)
**Time**: 2 hours
- Error boundaries
- Empty states
- Loading states
- Toast notifications

### Phase 4: Navigation & UX (MEDIUM)
**Time**: 2 hours
- Update header
- Protected routes
- Improve existing pages
- Mobile responsiveness

### Phase 5: Documentation (LOW)
**Time**: 1-2 hours
- Update docs
- Add scripts
- Testing checklist
- Demo video

### Phase 6: Polish (LOW)
**Time**: 2 hours
- Performance optimization
- Accessibility
- Final polish

**Total Time**: 12-15 hours

## Priority

1. **Do First**: Phase 1 (fixes immediate issues)
2. **Do Second**: Phase 2 (adds missing features)
3. **Do Later**: Phases 3-4 (improves UX)
4. **Optional**: Phases 5-6 (polish)

## Success Criteria

- [ ] `pnpm start` starts everything successfully
- [ ] All pages show content (not empty)
- [ ] Navigation works between all pages
- [ ] Users can create and manage booths
- [ ] Clear error messages when things go wrong
- [ ] Documentation is accurate and helpful

## Testing

After implementation, test:
1. Fresh start from scratch
2. Create a booth
3. Edit a booth
4. Book a session
5. Leave a review
6. Navigate between pages
7. Stop services and restart

## Notes

- Focus on Phase 1 first - it unblocks everything
- Phase 2 is the most valuable new feature
- Phases 3-6 can be done incrementally
- Each phase is independently valuable

## Next Steps

1. Review this spec
2. Start with Phase 1, Task 1.1 (startup script)
3. Work through tasks in order
4. Test after each phase
5. Deploy when Phase 1-2 are complete

## Questions?

- Check [requirements.md](./requirements.md) for detailed requirements
- Check [design.md](./design.md) for technical architecture
- Check [tasks.md](./tasks.md) for implementation details
