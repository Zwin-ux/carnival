'use client';

import { motion } from 'framer-motion';

interface CarnivalLightsProps {
  count?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LIGHT_COLORS = [
  'bg-brass-400',
  'bg-candy-300',
  'bg-mint-300',
  'bg-cyan-400',
  'bg-rust-400',
];

export function CarnivalLights({ count = 20, className = '', size = 'md' }: CarnivalLightsProps) {
  const lights = Array.from({ length: count }, (_, i) => ({
    color: LIGHT_COLORS[i % LIGHT_COLORS.length],
    delay: i * 0.1,
  }));

  const sizeClasses = {
    sm: 'w-2 h-3',
    md: 'w-3 h-4',
    lg: 'w-4 h-6',
  };

  return (
    <div className={`flex gap-2 py-2 ${className}`}>
      {lights.map((light, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.9, 1, 0.9],
            filter: ['brightness(0.8)', 'brightness(1.3)', 'brightness(0.8)'],
          }}
          transition={{
            delay: light.delay,
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          className={`
            ${sizeClasses[size]}
            ${light.color}
            rounded-full
            shadow-lg
            animate-bulb-glow
          `}
          style={{
            boxShadow: `0 0 8px currentColor, 0 0 12px currentColor`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Bunting flags component for decoration
 */
interface BuntingProps {
  count?: number;
  className?: string;
}

export function Bunting({ count = 15, className = '' }: BuntingProps) {
  const flags = Array.from({ length: count }, (_, i) => ({
    color: LIGHT_COLORS[i % LIGHT_COLORS.length],
  }));

  return (
    <div className={`flex items-start ${className}`}>
      {/* Connecting rope */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-brass-600/30" />

      {/* Flags */}
      {flags.map((flag, i) => (
        <motion.div
          key={i}
          initial={{ rotate: -5 }}
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{
            delay: i * 0.05,
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
          }}
          className={`
            w-6 h-8
            ${flag.color}
            clip-triangle
            border-b-4 border-transparent
          `}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            marginLeft: i === 0 ? '0' : '-4px',
          }}
        />
      ))}
    </div>
  );
}
