import confetti from 'canvas-confetti';

/**
 * Carnival-themed confetti celebration utility
 * Uses carnival color palette for authentic carnival atmosphere
 */

const CARNIVAL_COLORS = [
  '#b8860b', // brass
  '#d4a736', // brass-light
  '#ffd7e0', // candy
  '#b6f2d6', // mint
  '#46b6e6', // cyan
  '#b04b3a', // rust
];

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
  angle?: number;
}

/**
 * Standard carnival confetti burst
 * Perfect for: Session bookings, review submissions
 */
export function celebrateSuccess(options: ConfettiOptions = {}) {
  const defaults = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  };

  confetti({
    ...defaults,
    ...options,
    colors: CARNIVAL_COLORS,
    ticks: 200,
    gravity: 1,
    decay: 0.94,
    startVelocity: 30,
  });
}

/**
 * Ticket stub celebration - confetti from sides
 * Perfect for: Attestation earned, milestone achieved
 */
export function celebrateTicket() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: CARNIVAL_COLORS,
    ticks: 300,
  };

  // Left side burst
  confetti({
    ...defaults,
    particleCount: count / 2,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    startVelocity: 45,
  });

  // Right side burst
  confetti({
    ...defaults,
    particleCount: count / 2,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    startVelocity: 45,
  });
}

/**
 * Grand prize celebration - multiple bursts
 * Perfect for: Large payments received, trust score milestone
 */
export function celebrateGrandPrize() {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: CARNIVAL_COLORS,
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: CARNIVAL_COLORS,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}

/**
 * Ring the bell celebration - upward burst
 * Perfect for: Trust score increases, level ups
 */
export function celebrateBell() {
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.8 },
    angle: 90,
    startVelocity: 60,
    colors: ['#d4a736', '#ffd7e0', '#b6f2d6'],
    ticks: 250,
    gravity: 1.2,
  });
}

/**
 * Carnival firework - radial burst from point
 * Perfect for: Session completed, payment confirmed
 */
export function celebrateFirework(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 100,
    spread: 360,
    origin: { x, y },
    colors: CARNIVAL_COLORS,
    startVelocity: 25,
    ticks: 200,
    gravity: 0.8,
    scalar: 1.2,
  });
}
