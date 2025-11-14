"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TicketButton } from "@echoid/ui";

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
    description: "Entire midway",
    predicate: () => true,
  },
  trusted: {
    label: "High Trust (>=75)",
    description: "Legendary performers",
    predicate: (booth: WheelBooth) => booth.trustScore >= 75,
  },
  newcomer: {
    label: "Rising Talent (<40)",
    description: "Fresh faces earning stripes",
    predicate: (booth: WheelBooth) => booth.trustScore < 40,
  },
};

type AnalyticsSummary = WheelStatsSummary;

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
      tagFilters.map((theme) => [theme.key, {
        label: theme.label,
        description: theme.description,
        predicate: (booth: WheelBooth) => booth.tags.some((tag) => tag.toLowerCase() === theme.tag.toLowerCase()),
      }])
    );
    return { ...baseFilters, ...tagDefs } as Record<string, { label: string; description: string; predicate: (booth: WheelBooth) => boolean }>;
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

  if (filteredBooths.length === 0) {
    return (
      <div className="rounded-3xl border border-ink-800 bg-ink-900/70 p-6 text-center text-sm text-candy-200/60">
        No booths for this filter yet—toggle another tag to spin.
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-3xl border border-ink-800 bg-ink-900/80 p-6 shadow-panel-glow">
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Carnival Picker</p>
        <h2 className="text-3xl font-carnival text-brass-300">Spin for a Booth</h2>
        <p className="text-xs text-steel-400">
          Spun {totalSpins} times · {totalVisits} visits · {conversion}% conversion
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
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              filter === key
                ? "border-brass-400 bg-brass-400/20 text-brass-200"
                : "border-ink-700 text-candy-200/70 hover:border-brass-300/60"
            }`}
          >
            {definition.label}
          </button>
        ))}
      </div>

      <div className="text-center text-xs text-steel-400">{filterDefinitions[filter]?.description}</div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="relative flex items-center justify-center">
          <div className="absolute top-2 z-10 flex flex-col items-center">
            <div className="h-10 w-2 rounded-full bg-brass-400" />
            <div
              className="h-4 w-6 -mt-1 bg-brass-500"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          </div>

          <motion.div
            className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-ink-700 bg-ink-900"
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
            {filteredBooths.map((slice, index) => (
              <div
                key={slice.id}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `rotate(${index * sliceAngle}deg)` }}
              >
                <div
                  className={`flex h-full w-1/2 origin-left items-center justify-center text-xs ${
                    index % 2 === 0 ? "bg-aurora-400/20" : "bg-violet-400/20"
                  }`}
                  style={{
                    transform: `skewY(${90 - sliceAngle}deg)`,
                    borderRight: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="whitespace-nowrap rotate-90 px-2 text-candy-200 drop-shadow">
                    {slice.title}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-candy-200/70">
            Let fate pick your next expert. Spin the wheel and we’ll drop you onto a booth with verifiable reputation.
          </p>

          <TicketButton onClick={handleSpin} disabled={spinning} icon={<span>🎡</span>}>
            {spinning ? "Spinning..." : "Spin the Wheel"}
          </TicketButton>

          {winner && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-aurora-400/40 bg-ink-900/80 p-4 text-sm text-candy-200"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Winner</p>
              <p className="mt-1 text-xl font-carnival text-brass-300">{winner.title}</p>
              <p className="text-xs text-steel-300">Trust {winner.trustScore.toFixed(1)}</p>
              <Link
                href={`/booth/${winner.slug}`}
                onClick={handleVisit}
                className="mt-3 inline-block text-aurora-300 hover:text-aurora-200"
              >
                Visit booth →
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}


