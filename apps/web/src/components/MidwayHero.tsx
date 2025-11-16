"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { HoloBadge, NeoButton } from "@echoid/ui";
import { GlassPanel } from "@/components/ui/GlassPanel";

interface MidwayHeroProps {
  primaryCtaHref: string;
  secondaryCtaHref: string;
}

const FEATURE_MODULES = [
  {
    title: "Top Credentialed Experts",
    copy: "Each booth is anchored by on-chain attestations, trust scores, and verifiable reviews.",
    icon: ShieldCheck,
  },
  {
    title: "Live Sessions",
    copy: "Spin up private rooms with wallet-gated controls and streaming telemetry in under 60 seconds.",
    icon: Activity,
  },
];

const HERO_STATS = [
  { label: "Experts Online", value: "148", meta: "+18 today" },
  { label: "Sessions Verified", value: "2,914", meta: "Hashes pinned" },
];

const ORB_SLICES = ["Credibility Grid", "Live Sessions", "Fortune Vector", "Attested Reviews"];

function HeroOrb({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="hero-grid relative mx-auto aspect-square w-full max-w-[520px] rounded-full"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 360],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                repeat: Infinity,
                duration: 36,
                ease: "linear",
              }
        }
      >
        <div
          className="absolute inset-0 rounded-full border border-plasma-400/30"
          style={{
            background: "conic-gradient(from 0deg, #35f2ff, #0ed4f7, #ff5be1, #963cff, #35f2ff)",
            boxShadow: "0 0 60px rgba(53,242,255,0.35)",
          }}
        />
        <div className="absolute inset-8 rounded-full border border-white/10 bg-graphite-900/50 backdrop-blur-3xl" />
        <div className="absolute inset-20 rounded-full bg-gradient-to-br from-plasma-500/30 via-transparent to-nova-400/20 blur-3xl" />
        {ORB_SLICES.map((slice, index) => (
          <motion.div
            key={slice}
            className="absolute inset-6 flex items-center justify-center"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotateZ: [0, 8, -6, 0],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    repeat: Infinity,
                    duration: 12 + index * 2,
                    ease: "easeInOut",
                  }
            }
            style={{ transform: `rotate(${index * (360 / ORB_SLICES.length)}deg)` }}
          >
            <span className="rounded-full border border-white/10 bg-graphite-900/70 px-4 py-2 text-[0.6rem] font-data uppercase tracking-[0.35em] text-ice-200/80 backdrop-blur-md">
              {slice}
            </span>
          </motion.div>
        ))}
        <div className="absolute inset-0 rounded-full border border-nova-400/30 animate-pulse-glow" />
      </motion.div>

      <GlassPanel tone="neon" padding="sm" className="absolute -bottom-6 left-1/2 w-64 -translate-x-1/2 text-left">
        <p className="text-[0.65rem] font-data uppercase tracking-[0.4em] text-mist-400">Fortune Wheel</p>
        <p className="text-3xl font-heading text-ice-100">
          92% <span className="text-base text-ice-300/70">match rate</span>
        </p>
        <p className="text-xs text-ice-300/70">Adaptive routing across trust tiers and credential types.</p>
      </GlassPanel>
    </div>
  );
}

export function MidwayHero({ primaryCtaHref, secondaryCtaHref }: MidwayHeroProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden px-4 py-24 hero-grid">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-6 accent-spine">
          <HoloBadge tone="plasma" label="Mission" meta="Layered trust fabric" glow />

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.69, 0.35, 1] }}
              className="font-heading text-4xl leading-tight text-ice-100 md:text-6xl"
            >
              <motion.span
                className="bg-gradient-to-r from-plasma-500 via-nova-400 to-plasma-300 bg-[length:200%_100%] bg-clip-text text-transparent"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 10,
                        repeat: Infinity,
                      }
                }
              >
                EchoID Lobby
              </motion.span>{" "}
              where verifiable credentials power live intelligence.
            </motion.h1>

            <p className="text-lg text-ice-300/85">
              Build holographic credibility. Pair your on-chain reputation with live advisory sessions, motion-rich
              dashboards, and glassmorphism UI that keeps plasma cyan at the core.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={primaryCtaHref} className="w-full sm:w-auto">
              <NeoButton variant="plasma" size="lg" fullWidth iconRight={<Sparkles className="h-4 w-4" />}>
                Browse Booths
              </NeoButton>
            </Link>
            <Link href={secondaryCtaHref} className="w-full sm:w-auto">
              <NeoButton variant="graphite" size="lg" fullWidth iconRight={<Zap className="h-4 w-4" />}>
                Dashboard
              </NeoButton>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURE_MODULES.map(({ title, copy, icon: Icon }) => (
              <GlassPanel key={title} tone="steel" padding="sm" className="text-left">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-plasma-400" />
                  <p className="font-heading text-sm text-ice-100">{title}</p>
                </div>
                <p className="mt-2 text-xs text-ice-300/70">{copy}</p>
              </GlassPanel>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {HERO_STATS.map((stat) => (
              <GlassPanel key={stat.label} tone="neon" padding="sm" interactive className="text-left">
                <p className="text-[0.65rem] font-data uppercase tracking-[0.4em] text-mist-400">{stat.label}</p>
                <p className="text-3xl font-heading text-ice-100">{stat.value}</p>
                <p className="text-xs text-ice-300/70">{stat.meta}</p>
              </GlassPanel>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <HeroOrb reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  );
}
