"use client";

import { motion, useReducedMotion } from "framer-motion";

interface LightsProgressProps {
  progress: number; // 0-100
  bulbCount?: number;
  ariaLabel?: string;
}

const bulbPalette = [
  "bg-brass-400",
  "bg-aurora-400",
  "bg-violet-400",
  "bg-ember-400",
  "bg-mint-400",
];

export function LightsProgress({ progress, bulbCount = 12, ariaLabel }: LightsProgressProps) {
  const activeBulbs = Math.round((progress / 100) * bulbCount);
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap justify-center gap-3" aria-label={ariaLabel}>
      {Array.from({ length: bulbCount }).map((_, index) => {
        const isActive = index < activeBulbs;
        const color = bulbPalette[index % bulbPalette.length];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isActive ? 1 : 0.25,
              scale: 1,
            }}
            transition={reduceMotion ? undefined : { delay: index * 0.05, duration: 0.25 }}
            className={`h-4 w-4 rounded-full ${isActive ? `${color} bulb` : "bg-ink-800"}`}
          />
        );
      })}
    </div>
  );
}
