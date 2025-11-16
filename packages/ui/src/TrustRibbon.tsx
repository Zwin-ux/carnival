"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getTrustBadge } from "@echoid/core";

interface TrustRibbonProps {
  score: number; // 0-100
  label?: string;
  sessionCount?: number;
  averageRating?: number;
}

const gradientByLevel: Record<string, string> = {
  Legendary: "from-brass-400 via-amber-400 to-ember-400",
  Trusted: "from-aurora-400 via-mint-400 to-cyan-400",
  Reliable: "from-cyan-500 via-violet-400 to-mint-400",
  Building: "from-candy-400 via-violet-400 to-cyan-400",
  New: "from-ink-800 via-ink-700 to-steel-500",
};

export function TrustRibbon({ score, label = "Trust Score", sessionCount, averageRating }: TrustRibbonProps) {
  const badge = getTrustBadge(score);
  const gradient = gradientByLevel[badge.level] ?? "from-brass-400 to-ember-400";
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-3 rounded-2xl bg-ink-900/70 p-5 ring-1 ring-ink-700 shadow-panel-glow">
      <div className="flex items-center justify-between gap-3 text-sm uppercase tracking-tight">
        <span className="text-steel-300">{label}</span>
        <span className="font-carnival text-lg text-brass-300 flex items-center gap-1">
          {badge.emoji}
          {score.toFixed(1)}
        </span>
      </div>

      <div className="relative h-3 overflow-hidden rounded-full bg-ink-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={reduceMotion ? undefined : { duration: 1.4, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${gradient}`}
        />
        <div className="absolute inset-0 bg-grid-overlay opacity-30" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-steel-300">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-brass-500/40 px-3 py-1 text-[11px] uppercase tracking-widest text-brass-200">
            {badge.emoji} {badge.level}
          </span>
          {typeof averageRating === "number" && (
            <span>
              Avg rating: <span className="text-candy-200 font-semibold">{averageRating.toFixed(1)}</span>
            </span>
          )}
        </div>
        {typeof sessionCount === "number" && (
          <span>
            Sessions: <span className="text-mint-300 font-semibold">{sessionCount}</span>
          </span>
        )}
      </div>
    </div>
  );
}
