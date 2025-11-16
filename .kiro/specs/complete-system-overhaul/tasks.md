# Complete System Overhaul - Implementation Tasks

## Phase 1: Fix Database & Startup (Priority: CRITICAL)

### Task 1.1: Create Unified Startup Script
**File**: `echoid-carnival/scripts/start.sh` & `start.ps1`
- [ ] Check Docker installed and running
- [ ] Check Node.js and pnpm installed
- [ ] Check ports 3000, 3001, 5432 available
- [ ] Start Docker Compose services
- [ ] Wait for Postgres to be ready
- [ ] Run Prisma generate
- [ ] Run Prisma push
- [ ] Check if database is empty
- [ ] Run seed script if empty
- [ ] Start API server in background
- [ ] Start Web server in foreground
- [ ] Display success message with URLs

**Acceptance**: Running `pnpm start` starts everything successfully

### Task 1.2: Enhance Database Seed Script
**File**: `echoid-carnival/packages/db/seed.ts`
- [ ] Add check for existing data
- [ ] Create 5 demo users (Alice, Bob, Charlie, Diana, Eve)
- [ ] Create 8 diverse booths with different tags
- [ ] Create 12 sessions (completed, in-progress, pending)
- [ ] Create 6 reviews with varied ratings
- [ ] Add realistic descriptions and data
- [ ] Log seed progress to console

**Acceptance**: Database has realistic demo data after seeding

### Task 1.3: Add Health Check Endpoint
**File**: `echoid-carnival/apps/api/src/routes/health.ts`
- [ ] Create `/health` endpoint
- [ ] Check database connection
- [ ] Check API status
- [ ] Return JSON with service status
- [ ] Add latency measurements
- [ ] Handle errors gracefully

**Acceptance**: `curl http://localhost:3001/health` returns service status

### Task 1.4: Add Frontend Health Check
**File**: `echoid-carnival/apps/web/src/components/HealthCheck.tsx`
- [ ] Create health check component
- [ ] Poll `/health` endpoint every 30s
- [ ] Show banner if services down
- [ ] Provide restart instructions
- [ ] Add retry button
- [ ] Style with carnival theme

**Acceptance**: Banner shows when API is down, hides when up

---

## Phase 2: Add Builder Pages (Priority: HIGH)

### Task 2.1: Create Builder Hub Page
**File**: `echoid-carnival/apps/web/app/builder/page.tsx`
- [ ] Require authentication
- [ ] Fetch user's booths
- [ ] Display booth list with stats
- [ ] Add "Create New Booth" button
- [ ] Add edit/delete actions
- [ ] Show empty state if no booths
- [ ] Add loading state

**Acceptance**: User sees their booths and can navigate to create/edit

### Task 2.2: Create Booth Creation Page
**File**: `echoid-carnival/apps/web/app/builder/new/page.tsx`
- [ ] Create booth form component
- [ ] Add fields: title, description, tags, price, active
- [ ] Add client-side validation
- [ ] Handle form submission
- [ ] Call API to create booth
- [ ] Show success/error messages
- [ ] Redirect to builder hub on success
- [ ] Style with carnival theme

**Acceptance**: User can create a new booth successfully

### Task 2.3: Create Booth Edit Page
**File**: `echoid-carnival/apps/web/app/builder/[id]/page.tsx`
- [ ] Fetch booth data by ID
- [ ] Pre-fill form with existing data
- [ ] Add update functionality
- [ ] Add delete functionality
- [ ] Confirm before delete
- [ ] Handle ownership validation
- [ ] Show 404 if booth not found
- [ ] Redirect after update/delete

**Acceptance**: User can edit and delete their own booths

### Task 2.4: Add Builder API Endpoints
**File**: `echoid-carnival/apps/api/src/routes/booths.ts`
- [ ] POST `/v1/booths` - Create booth
- [ ] PUT `/v1/booths/:id` - Update booth
- [ ] DELETE `/v1/booths/:id` - Delete booth
- [ ] Add authentication middleware
- [ ] Add ownership validation
- [ ] Add input validation (Zod)
- [ ] Generate slug from title
- [ ] Handle errors properly

**Acceptance**: API endpoints work for booth CRUD operations

---

## Phase 3: Improve Error Handling (Priority: MEDIUM)

### Task 3.1: Add Error Boundaries
**File**: `echoid-carnival/apps/web/src/components/ErrorBoundary.tsx`
- [ ] Create error boundary component
- [ ] Catch React errors
- [ ] Display friendly error message
- [ ] Add "Try Again" button
- [ ] Log errors to console
- [ ] Style with carnival theme

**Acceptance**: Errors show friendly message instead of crash

### Task 3.2: Add Empty State Components
**File**: `echoid-carnival/apps/web/src/components/EmptyState.tsx`
- [ ] Create reusable empty state component
- [ ] Add icon prop
- [ ] Add title and description props
- [ ] Add action button prop
- [ ] Style with carnival theme
- [ ] Use in booths, dashboard, builder pages

**Acceptance**: Empty states look good and provide clear actions

### Task 3.3: Improve Loading States
**Files**: Various page components
- [ ] Add skeleton loaders for booth cards
- [ ] Add spinner for form submissions
- [ ] Add loading state for dashboard
- [ ] Add loading state for builder
- [ ] Use Suspense where appropriate
- [ ] Style consistently

**Acceptance**: Loading states are smooth and informative

### Task 3.4: Add Toast Notifications
**File**: Already using `sonner`, enhance usage
- [ ] Success toasts for booth create/update/delete
- [ ] Error toasts for API failures
- [ ] Info toasts for helpful tips
- [ ] Consistent styling
- [ ] Proper positioning

**Acceptance**: User gets feedback for all actions

---

## Phase 4: Navigation & UX (Priority: MEDIUM)

### Task 4.1: Update Header Navigation
**File**: `echoid-carnival/apps/web/src/components/Header.tsx`
- [ ] Add "Builder" link
- [ ] Show only when authenticated
- [ ] Highlight active route
- [ ] Add mobile menu (if needed)
- [ ] Test all navigation links

**Acceptance**: All nav links work and show correct pages

### Task 4.2: Add Protected Route Middleware
**File**: `echoid-carnival/apps/web/middleware.ts`
- [ ] Create Next.js middleware
- [ ] Protect `/dashboard` routes
- [ ] Protect `/builder` routes
- [ ] Redirect to home if not authenticated
- [ ] Show "Connect Wallet" message

**Acceptance**: Protected routes require authentication

### Task 4.3: Improve Booth Detail Page
**File**: `echoid-carnival/apps/web/app/booth/[slug]/page.tsx`
- [ ] Add better error handling
- [ ] Add 404 page for invalid slugs
- [ ] Improve booking flow
- [ ] Add session status display
- [ ] Add expert info section
- [ ] Add reviews section

**Acceptance**: Booth detail page is complete and functional

### Task 4.4: Improve Dashboard Page
**File**: `echoid-carnival/apps/web/app/dashboard/page.tsx`
- [ ] Add empty states for each section
- [ ] Add loading states
- [ ] Improve stats display
- [ ] Add quick actions
- [ ] Add filters/sorting
- [ ] Improve mobile layout

**Acceptance**: Dashboard is informative and easy to use

---

## Phase 5: Documentation & Testing (Priority: LOW)

### Task 5.1: Update Documentation
**Files**: Various docs
- [ ] Update `GETTING_STARTED.md` with new startup command
- [ ] Update `README.md` with features list
- [ ] Add `BUILDER_GUIDE.md` for booth creation
- [ ] Add troubleshooting section
- [ ] Add screenshots/GIFs
- [ ] Update environment variables docs

**Acceptance**: Documentation is accurate and helpful

### Task 5.2: Add Package Scripts
**File**: `echoid-carnival/package.json`
- [ ] Add `pnpm start` script (runs startup script)
- [ ] Add `pnpm stop` script (stops all services)
- [ ] Add `pnpm restart` script
- [ ] Add `pnpm logs` script (shows logs)
- [ ] Add `pnpm reset` script (clears data)
- [ ] Document all scripts

**Acceptance**: All scripts work as expected

### Task 5.3: Manual Testing Checklist
- [ ] Start application from scratch
- [ ] Verify all pages load with data
- [ ] Test booth creation flow
- [ ] Test booth editing flow
- [ ] Test booth deletion flow
- [ ] Test session booking flow
- [ ] Test review submission flow
- [ ] Test wallet connection
- [ ] Test navigation between pages
- [ ] Test error scenarios
- [ ] Test on different browsers
- [ ] Test mobile responsiveness

**Acceptance**: All features work without errors

### Task 5.4: Create Demo Video/GIF
- [ ] Record startup process
- [ ] Record booth creation
- [ ] Record session booking
- [ ] Record review submission
- [ ] Edit and compress
- [ ] Add to README

**Acceptance**: Demo shows key features clearly

---

## Phase 6: Polish & Optimization (Priority: LOW)

### Task 6.1: Performance Optimization
- [ ] Add database indexes
- [ ] Optimize queries (use `select` to limit fields)
- [ ] Add API response caching
- [ ] Optimize images
- [ ] Code split large components
- [ ] Lazy load non-critical components

**Acceptance**: Pages load in < 2 seconds

### Task 6.2: Accessibility Improvements
- [ ] Add ARIA labels
- [ ] Test keyboard navigation
- [ ] Test screen reader
- [ ] Improve focus management
- [ ] Add skip links
- [ ] Check color contrast

**Acceptance**: App is accessible to all users

### Task 6.3: Mobile Responsiveness
- [ ] Test on mobile devices
- [ ] Fix layout issues
- [ ] Improve touch targets
- [ ] Add mobile menu if needed
- [ ] Test on different screen sizes

**Acceptance**: App works well on mobile

### Task 6.4: Final Polish
- [ ] Fix any remaining bugs
- [ ] Improve animations
- [ ] Refine copy/text
- [ ] Add helpful tooltips
- [ ] Improve error messages
- [ ] Add loading indicators

**Acceptance**: App feels polished and professional

---

## Estimated Time

| Phase | Tasks | Time |
|-------|-------|------|
| Phase 1: Database & Startup | 4 tasks | 2-3 hours |
| Phase 2: Builder Pages | 4 tasks | 3-4 hours |
| Phase 3: Error Handling | 4 tasks | 2 hours |
| Phase 4: Navigation & UX | 4 tasks | 2 hours |
| Phase 5: Documentation | 4 tasks | 1-2 hours |
| Phase 6: Polish | 4 tasks | 2 hours |
| **Total** | **24 tasks** | **12-15 hours** |

## Priority Order

1. **Phase 1** (CRITICAL) - Nothing works without this
2. **Phase 2** (HIGH) - Core missing feature
3. **Phase 3** (MEDIUM) - Improves UX significantly
4. **Phase 4** (MEDIUM) - Completes user experience
5. **Phase 5** (LOW) - Nice to have
6. **Phase 6** (LOW) - Polish

## Dependencies

- Phase 2 depends on Phase 1 (need working database)
- Phase 3 can be done in parallel with Phase 2
- Phase 4 depends on Phase 2 (need builder pages)
- Phase 5 depends on all previous phases
- Phase 6 depends on all previous phases

## Quick Wins (Do First)

1. Task 1.1: Startup script (fixes immediate problem)
2. Task 1.2: Seed data (makes pages show content)
3. Task 2.1: Builder hub (adds missing feature)
4. Task 3.2: Empty states (improves UX quickly)

## Notes

- Focus on Phase 1 first - it unblocks everything else
- Phase 2 is the most important new feature
- Phases 3-4 improve UX but aren't critical
- Phases 5-6 can be done later if time is limited
