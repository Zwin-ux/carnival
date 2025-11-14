"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TicketButton } from "@echoid/ui";
import { CarnivalLights } from "./CarnivalLights";

interface MidwayHeroProps {
  primaryCtaHref: string;
  secondaryCtaHref: string;
}

export function MidwayHero({ primaryCtaHref, secondaryCtaHref }: MidwayHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-aurora-gradient opacity-40" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "repeating-linear-gradient(-45deg, rgba(212,167,54,0.3) 0px, rgba(212,167,54,0.3) 40px, transparent 40px, transparent 80px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/10 via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-6xl text-center space-y-8">
        <div className="flex justify-center">
          <CarnivalLights count={20} size="md" className="animate-float" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
          className="text-xs font-semibold uppercase tracking-[0.7em] text-steel-300"
        >
          Web3 Midway · Proof-of-Vibes
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-carnival bg-gradient-to-r from-brass-300 via-candy-200 to-mint-200 bg-clip-text text-transparent drop-shadow-marquee tracking-wide"
        >
          EchoID Carnival
        </motion.h1>

        <p className="text-2xl font-carnival text-candy-200 drop-shadow">
          Rent-A-Brain Sessions with Credentialed Experts
        </p>

        <p className="mx-auto max-w-2xl text-lg text-candy-200/80">
          Spin up a booth, sign verifiable reviews, and anchor your trust trail on Polkadot. Every booking fuels the
          carnival marquee.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={primaryCtaHref}>
            <TicketButton variant="primary" className="px-10 py-4 text-lg" icon={<span>🎟</span>}>
              Browse Booths
            </TicketButton>
          </Link>
          <Link href={secondaryCtaHref}>
            <TicketButton variant="secondary" className="px-10 py-4 text-lg">
              Dashboard
            </TicketButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

