"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

type FlowStepConfig = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  href?: string;
  subtitle?: string;
  badgeIcon?: LucideIcon;
};

interface FlowRailProps {
  steps: FlowStepConfig[];
}

export function FlowRail({ steps }: FlowRailProps) {
  return (
    <section id="flow" className="px-6 py-20">
      <motion.div
        className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0b041c] via-[#05020f] to-[#010008] p-[2px] shadow-[0_40px_140px_rgba(5,0,30,0.65)]"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOutExpo }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="rounded-[36px] bg-[#050111]/95 px-8 py-14 backdrop-blur-3xl md:px-16 md:py-20">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.55em] text-white/45">Identity Flow</p>
            <h2 className="font-heading mt-5 text-[2.25rem] font-semibold text-white md:text-[3rem]">
              Wallet → Avatar → Anchor in one interface.
            </h2>
            <p className="font-body mt-4 text-base text-white/70 md:text-lg">
              Three steady checkpoints keep the build predictable and easy to retrace.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <FlowStep key={step.title} index={index + 1} {...step} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

interface FlowStepProps extends FlowStepConfig {
  index: number;
}

function FlowStep({ title, description, icon: Icon, badgeIcon, subtitle, accent, index, href }: FlowStepProps) {
  const BadgeIcon = badgeIcon ?? Icon;
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.015 }}
      whileFocus={{ scale: 1.015 }}
      transition={{ duration: 0.35, ease: easeOutExpo }}
      tabIndex={0}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5/10 p-7 text-left shadow-[0_20px_70px_rgba(5,0,30,0.55)] backdrop-blur-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1FF]/70"
    >
      <span className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} aria-hidden />
      <div className="flex items-center gap-4">
        <span
          className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-white"
          style={{ background: accent }}
        >
          <Icon className="h-6 w-6 drop-shadow-[0_0_12px_rgba(8,0,20,0.3)]" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/45">
          Step {index.toString().padStart(2, "0")}
        </span>
      </div>
      {subtitle && (
        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
          <BadgeIcon className="h-3 w-3" aria-hidden />
          {subtitle}
        </span>
      )}
      <h3 className="font-heading mt-8 text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="font-body mt-3 text-[0.95rem] leading-relaxed text-white/75">
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00D1FF] transition hover:text-white"
        >
          Go to step
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(199,125,255,0.25),transparent_60%)] blur-3xl" />
      </div>
    </motion.article>
  );
}
