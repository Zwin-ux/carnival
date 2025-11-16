"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet2,
  Sparkles,
  Layers3,
  ShieldCheck,
  CircuitBoard,
  Gamepad2,
  Eye,
  Star,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TicketButton } from "@/components/ui/ticket-button";
import { BoothCard, BoothCardContent } from "@/components/ui/booth-card";
import { FlowRail } from "@/components/flow/FlowRail";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOutExpo },
};

const flows = [
  {
    title: "Connect Wallet",
    description: "Link Polkadot.js once and cache a signer for the build.",
    icon: Wallet2,
    accent: "linear-gradient(90deg,#FF6FD8 0%,#C77DFF 100%)",
    href: "/builder#connect",
    subtitle: "Wallet connect",
    badgeIcon: Wallet2,
  },
  {
    title: "Craft Avatar",
    description: "Choose layered traits and preview updates instantly.",
    icon: Layers3,
    accent: "linear-gradient(90deg,#C77DFF 0%,#7F5BFF 100%)",
    href: "/builder#avatar",
    subtitle: "Avatar preview",
    badgeIcon: Eye,
  },
  {
    title: "Mint & Anchor",
    description: "Hash metadata, upload to IPFS, and anchor proofs on-chain.",
    icon: CircuitBoard,
    accent: "linear-gradient(90deg,#00D1FF 0%,#5BC0FF 100%)",
    href: "/dashboard#anchor",
    subtitle: "Anchor proofs",
    badgeIcon: ShieldCheck,
  },
];

const features = [
  {
    title: "Neon Glass Shell",
    description: "Framer Motion transitions, glassmorphic panels, and animated particle depth.",
    icon: Sparkles,
  },
  {
    title: "Gamified Reputation",
    description: "XP rings, quest gates, and attestations that light up every booth.",
    icon: Gamepad2,
  },
  {
    title: "On-Chain Integrity",
    description: "sha256 metadata anchoring with Polkadot signer flow—client only, no custodial keys.",
    icon: ShieldCheck,
  },
];

const stats = [
  { label: "Deterministic Traits", value: "15", accent: "from-[#FF6FD8] to-[#C77DFF]" },
  { label: "Quest Tracks", value: "12", accent: "from-[#00D1FF] to-[#5BC0FF]" },
  { label: "Latency Budget", value: "<150ms", accent: "from-[#00D1FF] to-[#C77DFF]" },
];

export default function Home() {
  const [isLargeViewport, setIsLargeViewport] = useState(false);

  const handleScrollToFlow = useCallback(() => {
    const section = document.getElementById("flow");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setIsLargeViewport(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const secondaryCtaText = isLargeViewport ? "See Flow" : "Scroll to Flow";
  const secondaryCtaAriaLabel = isLargeViewport
    ? "See the three-step flow overview"
    : "Scroll to the flow overview section";

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050014] via-[#02000A] to-[#000008] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#3b0c5c,transparent_60%)] opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,#001b30,transparent_50%)] opacity-80" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <section className="relative isolate flex min-h-screen flex-col justify-center px-6 pb-20 pt-28 text-center sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12"
        >
          <Badge className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-[11px] uppercase tracking-[0.35em] text-[#00D1FF] shadow-[0_0_16px_rgba(0,209,255,0.35)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00D1FF]" />
            Polkadot Native Trust
          </Badge>

          <div className="relative w-full max-w-4xl">
            <div className="absolute -inset-12 mx-auto h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,#5B2FFF,transparent_65%)] opacity-70 blur-[150px]" aria-hidden />
            <div className="relative rounded-[36px] border border-white/10 bg-white/5/10 px-8 py-12 shadow-[0_30px_120px_rgba(5,0,30,0.75)] backdrop-blur-3xl sm:px-12">
              <h1 className="font-heading text-[2.75rem] font-semibold leading-tight text-white md:text-6xl lg:text-[4.75rem]">
                Ship a Polkadot-ready identity.
                <span className="block bg-[linear-gradient(135deg,#C77DFF_0%,#00D1FF_100%)] bg-clip-text text-transparent">
                  Connect, customize, and anchor in one place.
                </span>
              </h1>
              <p className="font-body mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-[1.25rem]">
                Use your Polkadot wallet to build an avatar, package metadata, and anchor proofs without juggling extra tools.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <TicketButton
                  asChild
                  variant="primary"
                  size="lg"
                  className="rounded-full px-10 text-base shadow-[0_0_30px_rgba(199,125,255,0.45)] transition hover:scale-[1.02]"
                >
                  <Link href="/builder">Start Building</Link>
                </TicketButton>
                <button
                  type="button"
                  onClick={handleScrollToFlow}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00D1FF]/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 shadow-[0_0_30px_rgba(0,209,255,0.25)] transition hover:scale-[1.02] hover:border-[#00D1FF]/70 hover:text-white"
                  aria-label={secondaryCtaAriaLabel}
                >
                  {secondaryCtaText}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-5xl gap-4 rounded-[32px] border border-white/10 bg-[#050111]/70 p-6 backdrop-blur-2xl sm:p-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
                <span className={`inline-flex rounded-full bg-gradient-to-r ${stat.accent} px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85`}>
                  {stat.label}
                </span>
                <p className="font-heading text-2xl md:text-[2.4rem]">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <FlowRail steps={flows} />

      <section id="features" className="px-6 py-24">
        <motion.div
          className="mx-auto max-w-6xl"
          {...fadeUp}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5/15 p-10 shadow-[0_30px_90px_rgba(5,0,30,0.45)] backdrop-blur-2xl">
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#00D1FF]">
                <Activity className="h-4 w-4" />
                Cinematic UX Stack
              </span>
              <h2 className="font-heading mt-6 text-[2.25rem] font-semibold text-white">
                Neon glassmorphism, particle fields, and deterministic trait minting.
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                Bonelli ID fuses shadcn/ui with Tailwind v4 tokens. Every component respects reduced-motion preferences, keeps contrast accessible, and renders under 150 ms interactions.
              </p>
              <div className="font-body mt-7 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/60">
                <span className="rounded-full border border-white/15 px-4 py-2">Framer Motion v12</span>
                <span className="rounded-full border border-white/15 px-4 py-2">Zustand orchestrations</span>
                <span className="rounded-full border border-white/15 px-4 py-2">Tailwind v4 tokens</span>
                <span className="rounded-full border border-white/15 px-4 py-2">Polkadot.js anchors</span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map(({ title, description, icon: Icon }) => (
                <BoothCard key={title} awning awningColor="violet" glow className="border-white/10 bg-[#070217]/80 p-6 shadow-[0_20px_60px_rgba(5,0,30,0.45)]">
                  <BoothCardContent className="space-y-4 text-left">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="font-body text-base text-white/70">
                      {description}
                    </p>
                  </BoothCardContent>
                </BoothCard>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-32">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-white/10 bg-[#050212]/85 p-12 text-center shadow-[0_30px_100px_rgba(5,0,30,0.5)] backdrop-blur-2xl"
          {...fadeUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4">
            <Star className="h-10 w-10 text-[#C77DFF]" />
            <h2 className="font-heading text-[2.25rem] font-semibold text-white md:text-[2.75rem]">
              Ready for hackathons. Poised for mainnet.
            </h2>
            <p className="font-body max-w-3xl text-base text-white/70 md:text-lg">
              Generate layered PNG traits, push them to IPFS, and anchor the hashes with the same signer flow. The repo ships with every piece you see here.
            </p>
          </div>

          <div className="mx-auto flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <TicketButton
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full border border-white/20 bg-white/90 px-10 text-base text-[#050212] shadow-[0_0_35px_rgba(255,255,255,0.2)] transition hover:scale-[1.02]"
            >
              <Link href="/dashboard">Open the Prize Counter</Link>
            </TicketButton>
            <Link
              href="/quests"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              View Daily Quests
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
