"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { TicketStamp } from "@/components/ui/TicketStamp";
import { ServoLever } from "@/components/ui/ServoLever";

export function OnboardingShowcase() {
  const [demoStamp, setDemoStamp] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setDemoStamp((prev) => !prev), 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="holo-section px-4">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,1fr]">
        <GlassPanel tone="steel" padding="lg" className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-data uppercase tracking-[0.4em] text-neon-cyan/80">
            <Sparkles className="h-4 w-4 text-neon-cyan" />
            Onboarding
          </div>
          <h2 className="font-heading text-3xl text-chrome-50">Web3-ready in three moves</h2>
          <p className="text-sm text-steel-200/80">
            Stamp your ticket with Polkadot credentials, pull the servo lever to lock a session, and anchor your review to keep the trust graph alive.
          </p>
          <div className="grid gap-3 text-xs text-steel-200/80">
            {["Connect wallet", "Book live session", "Sign attested review"].map((step, index) => (
              <motion.div
                key={step}
                className="flex items-center gap-3 rounded-2xl border border-chrome-400/20 bg-chrome-900/40 px-4 py-3"
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 3 + index, repeat: Infinity }}
              >
                <span className="text-[0.6rem] font-data uppercase tracking-[0.4em] text-brass-200">
                  0{index + 1}
                </span>
                <p className="font-semibold text-chrome-100">{step}</p>
              </motion.div>
            ))}
          </div>
        </GlassPanel>

        <div className="space-y-5">
          <TicketStamp
            ticketId="ECHO-777"
            description="Link Polkadot.js, verify your DID, and stamp the midway ticket."
            stamping={demoStamp}
          />

          <GlassPanel tone="brass" padding="lg" className="space-y-4">
            <ServoLever
              label="Demo lever pull"
              ctaLabel="Book Ghost Session"
              onPull={() => setDemoStamp(true)}
              disabled={false}
            />
            <p className="text-center text-xs text-chrome-900/80">Mechanical easing simulates the servo calibration.</p>
          </GlassPanel>

          <GlassPanel tone="neon" padding="lg" className="space-y-3 text-center text-chrome-50">
            <ShieldCheck className="mx-auto h-10 w-10 text-neon-cyan" />
            <p className="text-[0.6rem] font-data uppercase tracking-[0.4em] text-neon-cyan/80">Attested review</p>
            <p className="text-sm text-steel-200/75">
              Review payloads are signed, hashed, and verified in the same panel you just rehearsed in demo mode.
            </p>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
