"use client";

import { motion, useReducedMotion } from "framer-motion";
import { calculateInitialTrustScore, getTrustBadge } from "@echoid/core";
import { LightsProgress } from "./LightsProgress";
import { TrustRibbon } from "./TrustRibbon";

interface TrustBeaconProps {
  ratings: number[];
  sessionCount: number;
  averageRating: number;
  headline?: string;
}

export function TrustBeacon({ ratings, sessionCount, averageRating, headline = "Verifiable Reputation" }: TrustBeaconProps) {
  const score = ratings.length ? calculateInitialTrustScore(ratings) : 0;
  const badge = getTrustBadge(score);
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="space-y-4 rounded-3xl border border-ink-800 bg-ink-900/80 p-6 shadow-panel-glow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-steel-300">{headline}</p>
          <p className="text-2xl font-carnival text-brass-300">{badge.level} {badge.emoji}</p>
        </div>
        <div className="text-right text-sm text-steel-300">
          <p>
            Sessions <span className="text-mint-300 font-semibold">{sessionCount}</span>
          </p>
          <p>
            Avg rating <span className="text-candy-200 font-semibold">{averageRating.toFixed(1)}</span>
          </p>
        </div>
      </div>

      <TrustRibbon score={score} label="Trust curve" sessionCount={sessionCount} averageRating={averageRating} />

      <LightsProgress progress={score} ariaLabel="Trust beacons" />
    </motion.section>
  );
}
