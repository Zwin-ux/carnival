# @echoid/ui

Shared React UI component library for EchoID Carnival.

## Overview

This package contains reusable, carnival-themed React components that provide a consistent design language across the EchoID Carnival platform. All components are built with Framer Motion for smooth animations and interactions.

## Features

### 🎪 Carnival-Themed Components
- Vibrant, playful design system
- Consistent visual language
- Accessibility-focused
- Fully responsive

### ✨ Animation Support
- Built with Framer Motion
- Smooth transitions and interactions
- Performance-optimized
- Configurable animation properties

### 🎨 Component Library

#### `TicketButton`
A ticket-styled button component for primary actions.
- Carnival ticket aesthetic
- Hover and press animations
- Customizable colors and text
- Loading states

#### `BoothCard`
Card component styled like a carnival booth for displaying experts.
- Expert profile display
- Trust score integration
- Interactive hover effects
- Booking CTA

#### `TrustRibbon`
Decorative ribbon component displaying trust scores and ratings.
- Visual reputation indicator
- Star ratings display
- Color-coded trust levels
- Animated on appearance

#### `TimerDisplay`
Countdown timer with carnival light aesthetic.
- Session countdown timer
- Animated digits
- Color changes for urgency
- Auto-formatting

#### `LightsProgress`
Progress indicator styled like carnival light bulbs.
- Step-based progress tracking
- Light-up animation
- Configurable steps
- Visual feedback

## Installation

This package is part of the EchoID Carnival monorepo:

```json
{
  "dependencies": {
    "@echoid/ui": "workspace:*"
  }
}
```

## Usage

### Import components

```typescript
import {
  TicketButton,
  BoothCard,
  TrustRibbon,
  TimerDisplay,
  LightsProgress
} from '@echoid/ui';
```

### TicketButton Example

```tsx
<TicketButton
  onClick={() => console.log('Clicked!')}
  variant="primary"
>
  Book Now
</TicketButton>
```

### BoothCard Example

```tsx
<BoothCard
  expert={{
    name: "Dr. Jane Smith",
    specialty: "Web3 Security",
    trustScore: 4.8,
    rate: "100 DOT/hour"
  }}
  onBook={() => handleBooking()}
/>
```

### TrustRibbon Example

```tsx
<TrustRibbon
  score={4.8}
  reviews={127}
  level="gold"
/>
```

### TimerDisplay Example

```tsx
<TimerDisplay
  endTime={new Date('2025-01-10T15:00:00')}
  onExpire={() => handleExpiration()}
/>
```

### LightsProgress Example

```tsx
<LightsProgress
  currentStep={2}
  totalSteps={5}
  labels={['Book', 'Confirm', 'Pay', 'Session', 'Review']}
/>
```

## Styling

Components use Tailwind CSS classes and can be customized via:
- Props for colors and variants
- Tailwind configuration
- CSS custom properties
- className overrides

## Design Principles

### Carnival Theme
- **Playful**: Fun, engaging interactions
- **Colorful**: Vibrant color palette
- **Inviting**: Approachable and friendly
- **Clear**: Easy to understand and use

### Accessibility
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

### Performance
- Lazy loading support
- Optimized animations
- Minimal re-renders
- Tree-shakeable exports

## Dependencies

- `react` - React library (v19+)
- `framer-motion` - Animation library
- Tailwind CSS (via consuming apps)

## Development

### Type checking
```bash
pnpm typecheck
```

### Component Development

When creating new components:
1. Create component file in `src/`
2. Export from `src/index.ts`
3. Add TypeScript types
4. Include prop documentation
5. Follow carnival theme guidelines

### Example Component Template

```tsx
import { motion } from 'framer-motion';

interface MyComponentProps {
  /** Description of prop */
  title: string;
  /** Optional variant */
  variant?: 'primary' | 'secondary';
}

export function MyComponent({ title, variant = 'primary' }: MyComponentProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`carnival-component ${variant}`}
    >
      {title}
    </motion.div>
  );
}
```

## Architecture

This package exports raw TypeScript/TSX files (not compiled) to enable:
- Faster development iteration
- Better tree-shaking in consuming apps
- Shared TypeScript types
- Source map support

Components are consumed directly by the bundler (Next.js, Vite, etc.) in the consuming application.

## Theming

### Color Palette
The carnival theme uses:
- **Primary**: Vibrant reds and golds
- **Secondary**: Deep blues and purples
- **Accent**: Bright yellows and oranges
- **Trust**: Green gradients for high scores
- **Warning**: Amber for timers/alerts

### Typography
- Headings: Bold, playful fonts
- Body: Clear, readable sans-serif
- Accents: Decorative carnival-style fonts

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

When adding new components:
1. Follow the carnival theme
2. Include Framer Motion animations
3. Add comprehensive prop types
4. Ensure accessibility
5. Test responsive behavior

## Related Packages

- `@echoid/core` - Shared business logic
- `@echoid/db` - Database client
- `@echoid/web` - Next.js app consuming these components
