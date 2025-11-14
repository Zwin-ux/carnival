"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HoloBadge } from "./HoloBadge";

interface BoothCardProps {
  title: string;
  description: string;
  pricePerMin: number;
  trustScore: number;
  tags: string[];
  sessionCount: number;
  ownerName: string;
  onClick?: () => void;
  boothNumber?: number;
  isOpen?: boolean;
}

export function BoothCard({
  title,
  description,
  pricePerMin,
  trustScore,
  tags,
  sessionCount,
  ownerName,
  onClick,
  boothNumber,
  isOpen = true,
}: BoothCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      onClick={onClick}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.01,
            }
      }
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-graphite-700/60 bg-gradient-to-br from-graphite-900/80 to-graphite-800/60 p-6 text-ice-200 shadow-glass-layer transition-all hover:border-plasma-400/40 hover:shadow-depth-xl"
    >
      <div className="pointer-events-none absolute inset-px rounded-[26px] border border-white/5 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,242,255,0.12),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(255,91,225,0.12),transparent_45%)] opacity-50" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-data text-[0.65rem] uppercase tracking-[0.4em] text-mist-400">{ownerName}</p>
            <h3 className="font-heading text-2xl text-ice-100 drop-shadow-lg">{title}</h3>
          </div>
          {boothNumber && (
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-plasma-600/20 to-nova-500/30 font-data text-xs uppercase tracking-[0.4em] text-ice-100 shadow-plasma-glow">
              #{boothNumber}
            </div>
          )}
        </div>

        <p className="mt-4 line-clamp-3 text-sm text-ice-200/80">{description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <HoloBadge
            tone={isOpen ? "plasma" : "warning"}
            label={isOpen ? "Live Booth" : "Waitlist"}
            meta={`${sessionCount} sessions`}
            glow
          />
          <HoloBadge tone="graphite" label="Trust" meta={trustScore.toFixed(1)} />
        </div>
      </div>

      <div className="relative mt-8 flex items-end justify-between">
        <div>
          <p className="text-[0.65rem] font-data uppercase tracking-[0.45em] text-mist-400">Rate</p>
          <p className="font-data text-4xl text-plasma-400">
            {pricePerMin}
            <span className="text-base text-ice-300/70">/min</span>
          </p>
        </div>
        <motion.div
          aria-hidden
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.06, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  repeat: Infinity,
                  duration: 2.8,
                }
          }
          className="rounded-full border border-plasma-400/40 px-4 py-2 font-heading text-[0.65rem] uppercase tracking-[0.35em] text-plasma-200"
        >
          Spotlight
        </motion.div>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-ice-300/70">
        {tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-graphite-600/60 px-3 py-1 backdrop-blur-sm transition hover:border-nova-400/60 hover:text-nova-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
