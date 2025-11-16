# EchoID Aesthetic Overhaul - Implementation Tasks

## Phase 1: Design System & Foundation (Days 1-3)

### Task 1.1: Design Tokens Setup
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Create `src/styles/tokens.css` with CSS custom properties
  - [ ] Color palette (primary, neutral, semantic)
  - [ ] Typography scale
  - [ ] Spacing system
  - [ ] Shadow definitions
  - [ ] Border radius values
  - [ ] Animation durations and easings
- [ ] Update `tailwind.config.js` to use design tokens
  - [ ] Extend theme with custom colors
  - [ ] Configure typography plugin
  - [ ] Add custom spacing scale
  - [ ] Configure shadow utilities
- [ ] Test token application across components

**Acceptance Criteria**:
- All design tokens defined and accessible
- Tailwind config properly extends tokens
- No hardcoded colors/values in existing components

---

### Task 1.2: Global Styles Refactor
**Priority**: Critical
**Estimated Time**: 3 hours

- [ ] Update `app/globals.css`
  - [ ] Remove carnival-specific variables and animations
  - [ ] Add new base styles using design tokens
  - [ ] Update scrollbar styling
  - [ ] Add new utility classes (glass morphism, gradients)
  - [ ] Configure reduced motion support
- [ ] Update font loading
  - [ ] Replace Space Grotesk with Inter
  - [ ] Add JetBrains Mono for monospace
  - [ ] Optimize font loading (subset, preload)
- [ ] Test global styles across all pages

**Acceptance Criteria**:
- No carnival theme remnants
- New design system applied globally
- Fonts load optimally
- Reduced motion works correctly

---

### Task 1.3: Base Component Library
**Priority**: Critical
**Estimated Time**: 6 hours

- [ ] Create/update `src/components/ui/button.tsx`
  - [ ] Remove carnival variants
  - [ ] Add new variants (primary, secondary, outline, ghost, danger)
  - [ ] Implement hover/active/disabled states
  - [ ] Add loading state with spinner
  - [ ] Add size variants (sm, md, lg)
- [ ] Create/update `src/components/ui/card.tsx`
  - [ ] Glass morphism variant
  - [ ] Solid variant
  - [ ] Hover effects (lift, glow)
  - [ ] Responsive padding
- [ ] Create/update `src/components/ui/badge.tsx`
  - [ ] Verified badge with icon
  - [ ] Status badges (success, warning, error, info)
  - [ ] Skill badge
  - [ ] Pulse animation for verified
- [ ] Create/update `src/components/ui/input.tsx`
  - [ ] Text input with focus states
  - [ ] Search input with icon
  - [ ] Error state styling
  - [ ] Disabled state
- [ ] Test all components in isolation

**Acceptance Criteria**:
- All base components follow new design system
- Components are accessible (ARIA, keyboard nav)
- Hover/focus states work correctly
- Components are responsive

---

### Task 1.4: Remove Carnival Components
**Priority**: High
**Estimated Time**: 2 hours

- [ ] Delete `src/components/ui/ticket-button.tsx`
- [ ] Delete `src/components/ui/booth-card.tsx`
- [ ] Delete `src/components/ui/lights-progress.tsx`
- [ ] Remove carnival-specific animations from globals.css
- [ ] Update imports across codebase to use new components
- [ ] Run build to catch any missing imports

**Acceptance Criteria**:
- All carnival components removed
- No broken imports
- Build succeeds without errors

---

## Phase 2: Core Components (Days 4-7)

### Task 2.1: Navigation Components
**Priority**: Critical
**Estimated Time**: 5 hours

- [ ] Create `src/components/layout/Header.tsx`
  - [ ] Fixed position with glass morphism
  - [ ] Logo with gradient text
  - [ ] Navigation links
  - [ ] Wallet connection button
  - [ ] Mobile hamburger menu
  - [ ] Responsive behavior
- [ ] Create `src/components/layout/Footer.tsx`
  - [ ] Multi-column layout
  - [ ] Link sections
  - [ ] Social links
  - [ ] Copyright info
  - [ ] Responsive grid
- [ ] Create `src/components/layout/Sidebar.tsx` (for dashboard)
  - [ ] Navigation items
  - [ ] Active state highlighting
  - [ ] Icons + labels
  - [ ] Collapsible on mobile
- [ ] Update `app/layout.tsx` to use new components

**Acceptance Criteria**:
- Header is fixed and responsive
- Footer displays correctly on all pages
- Sidebar works on dashboard
- Navigation is keyboard accessible

---

### Task 2.2: Progress & Stat Components
**Priority**: High
**Estimated Time**: 4 hours

- [ ] Create `src/components/ui/circular-progress.tsx`
  - [ ] SVG-based circular progress
  - [ ] Gradient stroke
  - [ ] Glow effect
  - [ ] Center text (score + label)
  - [ ] Animated progress
- [ ] Create `src/components/ui/linear-progress.tsx`
  - [ ] Horizontal progress bar
  - [ ] Gradient fill
  - [ ] Smooth animation
  - [ ] Optional label
- [ ] Create `src/components/ui/stat-card.tsx`
  - [ ] Number display (large)
  - [ ] Label (small)
  - [ ] Optional icon
  - [ ] Optional gradient text
- [ ] Test with various values and states

**Acceptance Criteria**:
- Progress components animate smoothly
- Stat cards display correctly
- Components are accessible
- Performance is good (60fps)

---

### Task 2.3: Modal & Toast Components
**Priority**: Medium
**Estimated Time**: 4 hours

- [ ] Create `src/components/ui/modal.tsx`
  - [ ] Overlay with backdrop blur
  - [ ] Glass morphism container
  - [ ] Close button
  - [ ] Keyboard support (ESC to close)
  - [ ] Focus trap
  - [ ] Enter/exit animations
- [ ] Create `src/components/ui/toast.tsx`
  - [ ] Toast container
  - [ ] Success/error/info/warning variants
  - [ ] Auto-dismiss
  - [ ] Close button
  - [ ] Slide in/out animations
  - [ ] Stack multiple toasts
- [ ] Update existing modals to use new component
- [ ] Test accessibility

**Acceptance Criteria**:
- Modals trap focus correctly
- Toasts stack and dismiss properly
- Keyboard navigation works
- Animations are smooth
- Reduced motion respected

---

### Task 2.4: Form Components
**Priority**: Medium
**Estimated Time**: 3 hours

- [ ] Create `src/components/ui/textarea.tsx`
  - [ ] Match input styling
  - [ ] Auto-resize option
  - [ ] Character count option
- [ ] Create `src/components/ui/select.tsx`
  - [ ] Custom dropdown
  - [ ] Search option
  - [ ] Keyboard navigation
- [ ] Create `src/components/ui/checkbox.tsx`
  - [ ] Custom styling
  - [ ] Checked/unchecked states
  - [ ] Indeterminate state
- [ ] Create `src/components/ui/radio.tsx`
  - [ ] Custom styling
  - [ ] Group support
- [ ] Test form validation and states

**Acceptance Criteria**:
- All form components styled consistently
- Validation states work
- Keyboard navigation functional
- Accessible labels and descriptions

---

## Phase 3: Landing Page (Days 8-10)

### Task 3.1: Hero Section
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Update `app/page.tsx` hero section
  - [ ] New headline: "Your Decentralized Identity, Verified On-Chain"
  - [ ] Subheadline with clear value prop
  - [ ] Primary CTA: "Create Your Identity"
  - [ ] Secondary CTA: "Explore Directory"
  - [ ] Remove carnival badges and decorations
  - [ ] Add gradient overlay background
  - [ ] Implement fade-in animation
- [ ] Optional: Add hero visual/animation
  - [ ] Network visualization
  - [ ] Abstract identity graphic
  - [ ] Particle effect
- [ ] Test responsiveness

**Acceptance Criteria**:
- Hero is visually striking
- CTAs are prominent
- Message is clear
- Responsive on all devices
- Animations are smooth

---

### Task 3.2: Features Section
**Priority**: High
**Estimated Time**: 3 hours

- [ ] Redesign features section
  - [ ] 3-4 feature cards in grid
  - [ ] Icons for each feature
  - [ ] Clear titles and descriptions
  - [ ] Remove carnival metaphors
  - [ ] Focus on identity/trust benefits
- [ ] Update feature content
  - [ ] Decentralized Identity
  - [ ] On-Chain Verification
  - [ ] Trust Network
  - [ ] Privacy Control
- [ ] Add hover effects
- [ ] Test grid responsiveness

**Acceptance Criteria**:
- Features are clear and compelling
- Grid is responsive
- Hover effects work
- Content is professional

---

### Task 3.3: How It Works Section
**Priority**: High
**Estimated Time**: 3 hours

- [ ] Create 3-step process section
  - [ ] Step 1: Connect Wallet
  - [ ] Step 2: Create Profile
  - [ ] Step 3: Build Trust
- [ ] Add visual flow indicators
  - [ ] Arrows or lines connecting steps
  - [ ] Icons for each step
- [ ] Write clear, concise copy
- [ ] Add subtle animations (fade in on scroll)
- [ ] Test responsiveness

**Acceptance Criteria**:
- Process is easy to understand
- Visual flow is clear
- Animations enhance understanding
- Responsive layout

---

### Task 3.4: Stats & CTA Sections
**Priority**: Medium
**Estimated Time**: 2 hours

- [ ] Create stats section
  - [ ] Key metrics (profiles, attestations, etc.)
  - [ ] Animated counters
  - [ ] Stat cards with icons
- [ ] Create final CTA section
  - [ ] Compelling headline
  - [ ] Primary CTA button
  - [ ] Trust signals (verified, secure, etc.)
  - [ ] Background gradient
- [ ] Test animations and responsiveness

**Acceptance Criteria**:
- Stats are impressive and accurate
- Counters animate smoothly
- Final CTA is compelling
- Section is responsive

---

## Phase 4: Dashboard (Days 11-14)

### Task 4.1: Dashboard Layout
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Update `app/dashboard/page.tsx` structure
  - [ ] Remove carnival header and decorations
  - [ ] Add sidebar navigation (desktop)
  - [ ] Add bottom navigation (mobile)
  - [ ] Create main content area
  - [ ] Add page header with title
- [ ] Implement responsive layout
  - [ ] Sidebar visible on desktop
  - [ ] Bottom nav on mobile
  - [ ] Content area adjusts
- [ ] Test layout on all breakpoints

**Acceptance Criteria**:
- Layout is clean and organized
- Navigation is intuitive
- Responsive behavior works
- No carnival elements remain

---

### Task 4.2: Overview Tab
**Priority**: Critical
**Estimated Time**: 5 hours

- [ ] Redesign stats overview
  - [ ] 4 stat cards at top
  - [ ] Profile status
  - [ ] Attestation count
  - [ ] Anchor status
  - [ ] Trust score
- [ ] Create trust score section
  - [ ] Circular progress meter
  - [ ] Score breakdown
  - [ ] Next milestone indicator
- [ ] Add quick actions section
  - [ ] Edit profile
  - [ ] Request attestation
  - [ ] Anchor profile
- [ ] Create activity feed
  - [ ] Recent actions timeline
  - [ ] Icons for action types
  - [ ] Timestamps
- [ ] Test data loading and states

**Acceptance Criteria**:
- Stats display correctly
- Trust score meter works
- Quick actions are accessible
- Activity feed is readable
- Loading states work

---

### Task 4.3: Profile Tab
**Priority**: High
**Estimated Time**: 4 hours

- [ ] Update ProfileForm component
  - [ ] Use new input components
  - [ ] Update styling to match design system
  - [ ] Add form validation
  - [ ] Add success/error states
- [ ] Add profile preview
  - [ ] Show how profile appears to others
  - [ ] Live update as form changes
- [ ] Add avatar upload (if not exists)
  - [ ] File input
  - [ ] Preview
  - [ ] Validation
- [ ] Test form submission and validation

**Acceptance Criteria**:
- Form is styled correctly
- Validation works
- Preview updates live
- Submission succeeds
- Error handling works

---

### Task 4.4: Attestations Tab
**Priority**: High
**Estimated Time**: 4 hours

- [ ] Update AttestationViewer component
  - [ ] Use new card components
  - [ ] Update styling
  - [ ] Add given/received toggle
  - [ ] Add filters (if needed)
- [ ] Update AttestationForm component
  - [ ] Use new form components
  - [ ] Update styling
  - [ ] Add validation
- [ ] Create attestation cards
  - [ ] From/to user info
  - [ ] Message
  - [ ] Timestamp
  - [ ] Verification status
- [ ] Test attestation flow

**Acceptance Criteria**:
- Attestations display correctly
- Toggle works
- Form submission works
- Cards are styled properly
- Data loads correctly

---

### Task 4.5: Anchor Tab
**Priority**: Medium
**Estimated Time**: 3 hours

- [ ] Update AnchorHashCard component
  - [ ] Use new card component
  - [ ] Update styling
  - [ ] Add status indicators
  - [ ] Add transaction details
- [ ] Add anchor history
  - [ ] List of past anchors
  - [ ] Block numbers
  - [ ] Timestamps
  - [ ] View on explorer links
- [ ] Test anchor functionality

**Acceptance Criteria**:
- Anchor card displays correctly
- Status is clear
- History is readable
- Links work
- Blockchain interaction works

---

## Phase 5: Directory/Explore (Days 15-17)

### Task 5.1: Page Layout & Search
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Update `app/explore/page.tsx` layout
  - [ ] Remove carnival header
  - [ ] Add clean page title
  - [ ] Prominent search bar
  - [ ] Filter buttons
  - [ ] Results count
- [ ] Implement search functionality
  - [ ] Search input with icon
  - [ ] Real-time filtering
  - [ ] Clear button
  - [ ] Loading state
- [ ] Add filter buttons
  - [ ] Verified only
  - [ ] By skills
  - [ ] By reputation
  - [ ] Sort options
- [ ] Test search and filters

**Acceptance Criteria**:
- Search works in real-time
- Filters apply correctly
- UI is responsive
- Loading states work
- Results update smoothly

---

### Task 5.2: Profile Cards Grid
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Redesign profile cards
  - [ ] Use new card component
  - [ ] Avatar
  - [ ] Handle + address
  - [ ] Bio snippet (2 lines max)
  - [ ] Skills tags (max 3 visible)
  - [ ] Reputation score with progress bar
  - [ ] Verified badge
- [ ] Implement hover effects
  - [ ] Lift animation
  - [ ] Glow effect
  - [ ] Border highlight
- [ ] Create responsive grid
  - [ ] 3 columns (desktop)
  - [ ] 2 columns (tablet)
  - [ ] 1 column (mobile)
- [ ] Test grid with various data

**Acceptance Criteria**:
- Cards are visually appealing
- Hover effects work smoothly
- Grid is responsive
- Data displays correctly
- Links work

---

### Task 5.3: Empty & Loading States
**Priority**: Medium
**Estimated Time**: 2 hours

- [ ] Create empty state component
  - [ ] Icon
  - [ ] Message
  - [ ] CTA (if applicable)
- [ ] Create loading skeleton
  - [ ] Card skeleton
  - [ ] Grid of skeletons
  - [ ] Shimmer animation
- [ ] Implement pagination or infinite scroll
  - [ ] Load more button or auto-load
  - [ ] Loading indicator
  - [ ] End of results message
- [ ] Test various states

**Acceptance Criteria**:
- Empty state is helpful
- Loading skeletons match card layout
- Pagination/scroll works
- Performance is good

---

## Phase 6: Profile Page (Days 18-20)

### Task 6.1: Profile Hero Section
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Update `app/profile/[address]/page.tsx` hero
  - [ ] Large avatar
  - [ ] Handle (prominent)
  - [ ] Address (monospace)
  - [ ] Verified badge
  - [ ] Quick stats row
    - [ ] Attestations count
    - [ ] Anchors count
    - [ ] Joined date
  - [ ] Action buttons
    - [ ] Attest
    - [ ] Share
    - [ ] Copy address
- [ ] Add gradient background
- [ ] Test responsiveness

**Acceptance Criteria**:
- Hero is visually striking
- Information is clear
- Actions are accessible
- Responsive layout works
- Verified badge displays correctly

---

### Task 6.2: Profile Tabs
**Priority**: High
**Estimated Time**: 5 hours

- [ ] Create tabs navigation
  - [ ] About
  - [ ] Attestations
  - [ ] Activity
- [ ] Implement About tab
  - [ ] Bio
  - [ ] Skills grid
  - [ ] Social links
  - [ ] Blockchain info (anchor block, hash)
- [ ] Implement Attestations tab
  - [ ] Given/received toggle
  - [ ] Attestation list
  - [ ] Attestation cards
  - [ ] Request attestation button (if viewing others)
- [ ] Implement Activity tab
  - [ ] Timeline of actions
  - [ ] Action cards
  - [ ] Timestamps
  - [ ] Icons for action types
- [ ] Test tab switching and data loading

**Acceptance Criteria**:
- Tabs switch smoothly
- Content displays correctly in each tab
- Data loads properly
- Layout is responsive
- Actions work

---

### Task 6.3: Profile Actions & Sidebar
**Priority**: Medium
**Estimated Time**: 3 hours

- [ ] Create action buttons
  - [ ] Attest button (opens modal)
  - [ ] Share button (copy link)
  - [ ] Copy address button
- [ ] Create sidebar (desktop)
  - [ ] Blockchain info card
  - [ ] Social links card
  - [ ] Trust score card
- [ ] Implement attest modal
  - [ ] Form to give attestation
  - [ ] Validation
  - [ ] Submission
- [ ] Test all actions

**Acceptance Criteria**:
- Actions work correctly
- Sidebar displays on desktop
- Modal opens and closes
- Attestation submission works
- Copy functions work

---

## Phase 7: Polish & Testing (Days 21-24)

### Task 7.1: Animation Polish
**Priority**: Medium
**Estimated Time**: 4 hours

- [ ] Review all page transitions
  - [ ] Fade in animations
  - [ ] Stagger effects
  - [ ] Scroll animations
- [ ] Add micro-interactions
  - [ ] Button hover effects
  - [ ] Card hover effects
  - [ ] Input focus effects
- [ ] Optimize animation performance
  - [ ] Use transform and opacity
  - [ ] Add will-change where needed
  - [ ] Test on lower-end devices
- [ ] Implement reduced motion support
  - [ ] Test with prefers-reduced-motion
  - [ ] Ensure functionality without animations

**Acceptance Criteria**:
- Animations are smooth (60fps)
- Micro-interactions feel polished
- Reduced motion works
- Performance is good

---

### Task 7.2: Accessibility Audit
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Run Lighthouse accessibility audit
  - [ ] Fix any issues found
  - [ ] Aim for 100 score
- [ ] Run axe DevTools scan
  - [ ] Fix critical issues
  - [ ] Address warnings
- [ ] Test keyboard navigation
  - [ ] Tab through all pages
  - [ ] Ensure logical tab order
  - [ ] Test all interactive elements
- [ ] Test with screen reader
  - [ ] NVDA or JAWS
  - [ ] Ensure all content is accessible
  - [ ] Fix any issues
- [ ] Check color contrast
  - [ ] Use contrast checker tool
  - [ ] Ensure 4.5:1 minimum
  - [ ] Fix any failing combinations

**Acceptance Criteria**:
- Lighthouse accessibility score 95+
- No critical axe issues
- Full keyboard navigation works
- Screen reader can access all content
- Color contrast meets WCAG AA

---

### Task 7.3: Performance Optimization
**Priority**: High
**Estimated Time**: 4 hours

- [ ] Run Lighthouse performance audit
  - [ ] Identify bottlenecks
  - [ ] Fix issues
- [ ] Optimize images
  - [ ] Convert to WebP
  - [ ] Add lazy loading
  - [ ] Optimize sizes
- [ ] Optimize fonts
  - [ ] Subset fonts
  - [ ] Preload critical fonts
  - [ ] Use font-display: swap
- [ ] Code splitting
  - [ ] Dynamic imports for heavy components
  - [ ] Route-based splitting
- [ ] CSS optimization
  - [ ] Purge unused CSS
  - [ ] Minimize CSS
- [ ] Test on slow connections
  - [ ] Throttle network
  - [ ] Ensure good experience

**Acceptance Criteria**:
- Lighthouse performance score 90+
- FCP < 1.5s
- LCP < 2.5s
- TTI < 3.5s
- CLS < 0.1

---

### Task 7.4: Cross-Browser Testing
**Priority**: High
**Estimated Time**: 3 hours

- [ ] Test on Chrome
  - [ ] Desktop
  - [ ] Mobile
- [ ] Test on Firefox
  - [ ] Desktop
  - [ ] Mobile
- [ ] Test on Safari
  - [ ] Desktop (if available)
  - [ ] Mobile (iOS)
- [ ] Test on Edge
  - [ ] Desktop
- [ ] Fix any browser-specific issues
  - [ ] CSS inconsistencies
  - [ ] JavaScript errors
  - [ ] Layout issues

**Acceptance Criteria**:
- Works on all major browsers
- No critical bugs
- Layout is consistent
- Functionality works

---

### Task 7.5: Responsive Testing
**Priority**: High
**Estimated Time**: 3 hours

- [ ] Test on mobile devices
  - [ ] iPhone (various sizes)
  - [ ] Android (various sizes)
- [ ] Test on tablets
  - [ ] iPad
  - [ ] Android tablets
- [ ] Test on desktop
  - [ ] Various screen sizes
  - [ ] 1920x1080
  - [ ] 1366x768
  - [ ] 2560x1440
- [ ] Fix any responsive issues
  - [ ] Layout breaks
  - [ ] Text overflow
  - [ ] Image sizing
  - [ ] Navigation issues

**Acceptance Criteria**:
- Works on all breakpoints
- No layout breaks
- Content is readable
- Navigation is usable

---

### Task 7.6: Final QA & Bug Fixes
**Priority**: Critical
**Estimated Time**: 4 hours

- [ ] Create QA checklist
  - [ ] All pages
  - [ ] All features
  - [ ] All user flows
- [ ] Test all user flows
  - [ ] Wallet connection
  - [ ] Profile creation
  - [ ] Profile editing
  - [ ] Attestation giving/receiving
  - [ ] Profile anchoring
  - [ ] Profile search
  - [ ] Profile viewing
- [ ] Fix any bugs found
- [ ] Test fixes
- [ ] Final review
  - [ ] Visual consistency
  - [ ] Functionality
  - [ ] Performance
  - [ ] Accessibility

**Acceptance Criteria**:
- All user flows work
- No critical bugs
- Visual consistency across app
- Performance targets met
- Accessibility standards met

---

### Task 7.7: Documentation
**Priority**: Medium
**Estimated Time**: 3 hours

- [ ] Update README
  - [ ] New design system info
  - [ ] Component usage
  - [ ] Development guide
- [ ] Create design system documentation
  - [ ] Color palette
  - [ ] Typography
  - [ ] Components
  - [ ] Usage examples
- [ ] Create migration guide (if needed)
  - [ ] Breaking changes
  - [ ] How to update custom code
- [ ] Update any other docs

**Acceptance Criteria**:
- README is up to date
- Design system is documented
- Migration guide is clear (if needed)
- Docs are helpful

---

## Summary

**Total Estimated Time**: 16-24 days (128-192 hours)

**Critical Path**:
1. Design System & Foundation (Phase 1)
2. Core Components (Phase 2)
3. Landing Page (Phase 3)
4. Dashboard (Phase 4)
5. Directory (Phase 5)
6. Profile Page (Phase 6)
7. Polish & Testing (Phase 7)

**Key Milestones**:
- Day 3: Design system complete
- Day 7: Core components complete
- Day 10: Landing page complete
- Day 14: Dashboard complete
- Day 17: Directory complete
- Day 20: Profile page complete
- Day 24: Final polish and testing complete

**Dependencies**:
- Phase 2 depends on Phase 1
- Phases 3-6 depend on Phases 1-2
- Phase 7 depends on all previous phases

**Risk Mitigation**:
- Start with foundation to avoid rework
- Test components in isolation before integration
- Regular accessibility and performance checks
- Buffer time for unexpected issues
