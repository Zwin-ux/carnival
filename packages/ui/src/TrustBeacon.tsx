"use client";

import { motion, useReducedMotion } from "framer-motion";
import { calculateInitialTrustScore, getTrustBadge } from "@echoid/core";
import { GlassPanel } from "./GlassPanel";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <GlassPanel depth="md" padding="lg" accent="graphite" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-data uppercase tracking-[0.2em] text-mist-400">{headline}</p>
            <p className="font-heading text-2xl text-ice-100">
              {badge.level} {badge.emoji}
            </p>
          </div>
          <div className="text-right text-sm text-ice-300/80">
            <p>
              Sessions <span className="text-plasma-300 font-semibold">{sessionCount}</span>
            </p>
            <p>
              Avg rating <span className="text-nova-200 font-semibold">{averageRating.toFixed(1)}</span>
            </p>
          </div>
        </div>

        <TrustRibbon score={score} label="Trust curve" sessionCount={sessionCount} averageRating={averageRating} />

        <LightsProgress progress={score} ariaLabel="Trust beacons" />
      </GlassPanel>
    </motion.div>
  );
}
