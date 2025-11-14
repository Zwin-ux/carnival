"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HoloBadge, NeoButton } from "@echoid/ui";

interface WheelBooth {
  id: string;
  title: string;
  slug: string;
  trustScore: number;
  tags: string[];
}

interface WheelStatsSummary {
  totalSpins: number;
  totalVisits: number;
  perFilter: Record<string, { spins: number; visits: number }>;
}

interface TagFilterConfig {
  key: string;
  label: string;
  description: string;
  tag: string;
}

interface FortuneWheelProps {
  booths: WheelBooth[];
  initialStats: WheelStatsSummary;
  tagFilters: TagFilterConfig[];
}

const baseFilters = {
  all: {
    label: "All Booths",
    description: "Entire lobby",
    predicate: () => true,
  },
  trusted: {
    label: "Trust >= 75",
    description: "Legendary performers",
    predicate: (booth: WheelBooth) => booth.trustScore >= 75,
  },
  newcomer: {
    label: "Rising Talent",
    description: "Fresh faces earning stripes",
    predicate: (booth: WheelBooth) => booth.trustScore < 40,
  },
};

type AnalyticsSummary = WheelStatsSummary;

const SEGMENT_COLORS = ["#35f2ff", "#0ed4f7", "#ff5be1", "#963cff"];

export function FortuneWheel({ booths, initialStats, tagFilters }: FortuneWheelProps) {
  const reduceMotion = useReducedMotion();
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [stats, setStats] = useState<AnalyticsSummary>(initialStats);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const filterDefinitions = useMemo(() => {
    const tagDefs = Object.fromEntries(
      tagFilters.map((theme) => [
        theme.key,
        {
          label: theme.label,
          description: theme.description,
          predicate: (booth: WheelBooth) => booth.tags.some((tag) => tag.toLowerCase() === theme.tag.toLowerCase()),
        },
      ])
    );
    return { ...baseFilters, ...tagDefs } as Record<
      string,
      { label: string; description: string; predicate: (booth: WheelBooth) => boolean }
    >;
  }, [tagFilters]);

  useEffect(() => {
    if (!filterDefinitions[filter]) {
      setFilter("all");
    }
  }, [filter, filterDefinitions]);

  const filteredBooths = useMemo(() => {
    const definition = filterDefinitions[filter] ?? filterDefinitions.all;
    return booths.filter(definition.predicate).slice(0, 8);
  }, [booths, filter, filterDefinitions]);

  const sliceAngle = filteredBooths.length ? 360 / filteredBooths.length : 0;

  const formatStats = (summary: AnalyticsSummary) => {
    const totalSpins = summary.totalSpins;
    const totalVisits = summary.totalVisits;
    const conversion = totalSpins ? Math.round((totalVisits / totalSpins) * 100) : 0;
    return { totalSpins, totalVisits, conversion };
  };

  const { totalSpins, totalVisits, conversion } = formatStats(stats);

  const sendAnalytics = async (event: "spin" | "visit") => {
    try {
      const res = await fetch(`${apiUrl}/v1/analytics/wheel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filter, event }),
      });
      if (!res.ok) return;
      const data = (await res.json()) as AnalyticsSummary;
      setStats(data);
    } catch (error) {
      console.error("Failed to stream wheel analytics", error);
    }
  };

  const handleSpin = async () => {
    if (spinning || filteredBooths.length === 0) return;
    setSpinning(true);
    await sendAnalytics("spin");
    const targetIndex = Math.floor(Math.random() * filteredBooths.length);
    const turns = 4;
    const offset = sliceAngle * (targetIndex + Math.random() * 0.7);
    const newRotation = rotation - (turns * 360 + offset);
    setRotation(newRotation);
    setTimeout(() => {
      setWinnerIndex(targetIndex);
      setSpinning(false);
    }, reduceMotion ? 400 : 2400);
  };

  const handleVisit = async () => {
    await sendAnalytics("visit");
  };

  const winner = winnerIndex !== null ? filteredBooths[winnerIndex] : null;

  const wheelGradient = filteredBooths.length
    ? filteredBooths
        .map((_, index) => {
          const start = index * sliceAngle;
          const end = start + sliceAngle;
          const color = SEGMENT_COLORS[index % SEGMENT_COLORS.length];
          return `${color} ${start}deg ${end}deg`;
        })
        .join(", ")
    : undefined;

  if (filteredBooths.length === 0) {
    return (
      <div className="text-center text-sm text-ice-300/70">
        No booths for this filter yet - toggle another tag to spin.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <HoloBadge tone="plasma" label="Fortune Wheel" meta="Holographic spin" glow />
        <h2 className="font-heading text-3xl text-ice-100">Spin for a Booth</h2>
        <p className="text-xs text-ice-300/70">
          Spun {totalSpins} times - {totalVisits} visits - {conversion}% conversion
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {Object.entries(filterDefinitions).map(([key, definition]) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setFilter(key);
              setWinnerIndex(null);
            }}
            className={`rounded-full border px-4 py-1 text-[0.65rem] font-data uppercase tracking-[0.3em] transition-colors ${
              filter === key
                ? "border-plasma-400/60 bg-plasma-500/5 text-plasma-200"
                : "border-graphite-700/60 text-ice-300/80 hover:border-plasma-400/40 hover:text-ice-100"
            }`}
          >
            {definition.label}
          </button>
        ))}
      </div>

      <div className="text-center text-xs text-ice-300/80">{filterDefinitions[filter]?.description}</div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute -top-5 flex flex-col items-center text-plasma-300">
            <div className="h-10 w-1 rounded-full bg-gradient-to-b from-plasma-400 to-transparent" />
            <div className="mt-1 h-3 w-6 bg-plasma-400" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
          </div>

          <motion.div
            className="relative h-72 w-72 rounded-full border border-plasma-400/30 p-1"
            animate={{ rotate: rotation }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 2.2,
                    ease: "easeOut",
                  }
            }
          >
            <div
              className="relative flex h-full w-full items-center justify-center rounded-full bg-graphite-900/60"
              style={
                wheelGradient
                  ? {
                      background: `conic-gradient(${wheelGradient})`,
                    }
                  : undefined
              }
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_60%)] opacity-60 mix-blend-screen" />
              {filteredBooths.map((slice, index) => (
                <div
                  key={slice.id}
                  className="absolute inset-6 flex items-center justify-start"
                  style={{ transform: `rotate(${index * sliceAngle}deg)` }}
                >
                  <span className="font-data text-[0.55rem] uppercase tracking-[0.25em] text-ice-100/80">
                    {slice.title}
                  </span>
                </div>
              ))}
              <div className="absolute inset-10 rounded-full border border-white/10 bg-graphite-900/80 backdrop-blur-xl" />
              <div className="absolute inset-[55px] rounded-full border border-plasma-400/30 bg-graphite-900/90" />
              <div className="absolute inset-[85px] flex items-center justify-center rounded-full bg-gradient-to-br from-plasma-500/40 to-nova-500/40">
                <span className="font-heading text-sm uppercase tracking-[0.4em] text-ice-100/80">EchoID</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-ice-300/75">
            Let fate pick your next expert. Spin the wheel and we&apos;ll drop you onto a booth with verifiable reputation.
          </p>

          <NeoButton onClick={handleSpin} disabled={spinning} loading={spinning} variant="plasma">
            {spinning ? "Spinning" : "Spin the Wheel"}
          </NeoButton>

          {winner && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-2xl border border-plasma-400/30 p-5 text-sm text-ice-200"
            >
              <p className="text-[0.6rem] font-data uppercase tracking-[0.4em] text-mist-400">Winner</p>
              <p className="mt-1 font-heading text-2xl text-ice-100">{winner.title}</p>
              <p className="text-xs text-ice-300/70">Trust {winner.trustScore.toFixed(1)}</p>
              <Link href={`/booth/${winner.slug}`} onClick={handleVisit} className="mt-4 inline-flex">
                <NeoButton variant="graphite" size="sm">
                  Visit Booth
                </NeoButton>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
