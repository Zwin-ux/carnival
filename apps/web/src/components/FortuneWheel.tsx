"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { servo } from "@/theme/motion";

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

const SEGMENT_COLORS = ["#ffd24d", "#05d9e8", "#ff2a6d", "#d300c5"];

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
      <GlassPanel className="text-center text-sm text-steel-200/80">
        No booths for this filter yet - toggle another tag to spin.
      </GlassPanel>
    );
  }

  const statBlocks = [
    { label: "Spins", value: totalSpins.toLocaleString() },
    { label: "Visits", value: totalVisits.toLocaleString() },
    { label: "Win Rate", value: `${conversion}%` },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-[0.6rem] font-data uppercase tracking-[0.45em] text-neon-pink/80">Servo cycle online</span>
        <h2 className="font-heading text-3xl text-chrome-100">Fortune Wheel</h2>
        <p className="text-xs text-steel-200/80">
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
            className={`rounded-full border px-4 py-1 text-[0.6rem] font-data uppercase tracking-[0.4em] transition-colors ${
              filter === key
                ? "border-brass-400/90 bg-brass-500/10 text-brass-100 shadow-[0_0_15px_rgba(255,198,26,0.25)]"
                : "border-steel-700/60 text-steel-200 hover:border-chrome-400/60 hover:text-chrome-100"
            }`}
          >
            {definition.label}
          </button>
        ))}
      </div>

      <div className="text-center text-xs text-steel-200/70">{filterDefinitions[filter]?.description}</div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <GlassPanel className="flex flex-col items-center gap-6 overflow-visible pt-10 pb-12 text-steel-100">
          <div className="relative flex items-center justify-center">
            <div className="absolute -top-10 flex flex-col items-center text-brass-200">
              <div className="h-12 w-1 rounded-full bg-gradient-to-b from-neon-cyan to-transparent" />
              <div
                className="mt-1 h-5 w-10 bg-gradient-to-r from-brass-300 to-brass-600 shadow-[0_0_25px_rgba(255,198,26,0.6)]"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />
            </div>

            <motion.div
              className="absolute -inset-10"
              variants={servo}
              initial="initial"
              animate="animate"
            >
              <div className="h-full w-full rounded-full border border-chrome-500/30 bg-gradient-to-br from-chrome-800/10 to-steel-900/40 opacity-40" />
            </motion.div>

            <motion.div
              className="relative h-80 w-80 rounded-full border border-chrome-500/40 bg-chrome-900/40 p-1 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
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
                className="relative flex h-full w-full items-center justify-center rounded-full"
                style={
                  wheelGradient
                    ? {
                        background: `conic-gradient(${wheelGradient})`,
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_65%)] opacity-70 mix-blend-screen" />
                {filteredBooths.map((slice, index) => (
                  <div
                    key={slice.id}
                    className="absolute inset-6 flex items-center justify-start"
                    style={{ transform: `rotate(${index * sliceAngle}deg)` }}
                  >
                    <span className="font-data text-[0.55rem] uppercase tracking-[0.3em] text-chrome-100/85">
                      {slice.title}
                    </span>
                  </div>
                ))}

                {filteredBooths.map((segment, index) => (
                  <motion.div
                    key={`${segment.id}-indicator`}
                    className="absolute inset-0"
                    style={{ rotate: `${(360 / filteredBooths.length) * index}deg`, transformOrigin: "center" }}
                  >
                    <motion.div
                      className="absolute top-0 left-1/2 w-1 h-12 -translate-x-1/2 origin-bottom rounded-full bg-neon-pink"
                      animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.08 }}
                    />
                  </motion.div>
                ))}

                <div className="absolute inset-12 rounded-full border border-white/10 bg-chrome-900/70 backdrop-blur-xl" />
                <div className="absolute inset-[70px] rounded-full border border-chrome-500/20 bg-gradient-to-br from-chrome-900/80 to-steel-900/60" />
                <div className="absolute inset-[95px] flex items-center justify-center rounded-full bg-gradient-to-br from-brass-400/30 to-neon-pink/20">
                  <span className="font-heading text-sm uppercase tracking-[0.4em] text-brass-100">EchoID</span>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-[0.65rem] uppercase tracking-[0.4em] text-steel-200/80">
            Let the servo decide your next expert drop-in.
          </p>
        </GlassPanel>

        <div className="flex flex-col gap-5">
          <GlassPanel className="space-y-4 text-steel-100">
            <p className="text-sm text-steel-200">
              Let fate pick your next expert. Spin the wheel and drop onto a booth with verifiable reputation data.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center text-xs font-data uppercase tracking-[0.3em] text-steel-200/80">
              {statBlocks.map((block) => (
                <div key={block.label} className="space-y-1">
                  <div className="text-[0.65rem] text-steel-400">{block.label}</div>
                  <div className="text-lg font-heading text-chrome-100">{block.value}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <button
            type="button"
            onClick={handleSpin}
            disabled={spinning}
            className={`btn-brass w-full justify-center text-[0.7rem] font-data uppercase tracking-[0.35em] ${
              spinning ? "pointer-events-none opacity-70" : ""
            }`}
          >
            {spinning ? "Calibrating Servo" : "Spin the Servo Wheel"}
          </button>

          <AnimatePresence>
            {winner && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
                <GlassPanel className="space-y-3 text-steel-100">
                  <p className="text-[0.6rem] font-data uppercase tracking-[0.4em] text-neon-pink">Winner</p>
                  <div>
                    <p className="font-heading text-2xl text-chrome-100">{winner.title}</p>
                    <p className="text-xs text-steel-200/80">Trust {winner.trustScore.toFixed(1)}</p>
                  </div>
                  <Link href={`/booth/${winner.slug}`} onClick={handleVisit} className="inline-flex">
                    <span className="inline-flex items-center rounded-full border border-neon-pink/40 px-5 py-2 text-[0.6rem] font-data uppercase tracking-[0.35em] text-neon-pink transition hover:bg-neon-pink/10">
                      Visit Booth
                    </span>
                  </Link>
                </GlassPanel>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
