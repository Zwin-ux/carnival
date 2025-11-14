"use client";

import { motion, useReducedMotion } from "framer-motion";

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
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
      className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/80 p-5 shadow-panel-glow transition-colors hover:border-brass-400"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-grid-overlay" />

      <div className="relative mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-steel-400">{ownerName}</p>
          <h3 className="text-2xl font-carnival text-candy-200 drop-shadow-marquee">{title}</h3>
        </div>
        {boothNumber && (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brass-500 to-ember-400 font-mono text-ink-950 shadow-marquee">
            #{boothNumber}
          </span>
        )}
      </div>

      <p className="relative mb-4 line-clamp-3 text-sm text-candy-200/70">{description}</p>

      <div className="relative mb-4 flex flex-wrap items-center gap-3 text-sm text-steel-300">
        <span className="inline-flex items-center gap-1 rounded-full border border-aurora-400/30 px-3 py-1 text-aurora-300">
          {isOpen ? "Open Booth" : "Waitlist"}
        </span>
        <span className="font-mono text-cyan-300">Trust {trustScore.toFixed(1)}</span>
        <span className="font-mono text-mint-300">{sessionCount} sessions</span>
      </div>

      <div className="relative mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-steel-400">Rate</p>
          <p className="text-3xl font-mono text-aurora-300">
            {pricePerMin}
            <span className="text-base text-aurora-300/70">/min</span>
          </p>
        </div>
        <motion.div
          aria-hidden
          animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
          transition={reduceMotion ? undefined : { repeat: Infinity, duration: 2.4 }}
          className="rounded-full border border-brass-500/40 px-3 py-1 text-xs uppercase tracking-widest text-brass-200"
        >
          Spotlight
        </motion.div>
      </div>

      <div className="relative mt-auto flex flex-wrap gap-2">
        {tags.slice(0, 5).map((tag) => (
          <span key={tag} className="rounded-full border border-steel-500/40 px-3 py-1 text-xs text-candy-200/80">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
