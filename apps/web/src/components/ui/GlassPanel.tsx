import type { PropsWithChildren } from "react";

type PanelTone = "chrome" | "brass" | "steel" | "ink" | "neon";
type PanelPadding = "none" | "sm" | "md" | "lg";

interface GlassPanelProps extends PropsWithChildren {
  className?: string;
  tone?: PanelTone;
  padding?: PanelPadding;
  interactive?: boolean;
}

const cn = (...classes: Array<string | undefined | null | false>) => classes.filter(Boolean).join(" ");

const toneMap: Record<PanelTone, string> = {
  chrome: "border-chrome-300/25 shadow-[0_25px_55px_rgba(0,0,0,0.55)]",
  brass: "border-brass-400/30 shadow-[0_30px_60px_rgba(0,0,0,0.5)]",
  steel: "border-steel-400/30 shadow-[0_35px_70px_rgba(0,0,0,0.6)]",
  ink: "border-chrome-900/40 shadow-[0_35px_70px_rgba(0,0,0,0.65)]",
  neon: "border-neon-cyan/40 shadow-[0_35px_70px_rgba(5,217,232,0.35)]",
};

const paddingMap: Record<PanelPadding, string> = {
  none: "",
  sm: "p-4 sm:p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
};

export function GlassPanel({
  children,
  className = "",
  tone = "chrome",
  padding = "md",
  interactive = false,
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border",
        "bg-gradient-to-br from-chrome-800/35 via-steel-800/30 to-chrome-950/60",
        "before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-10 before:pointer-events-none",
        "backdrop-blur-2xl",
        paddingMap[padding],
        toneMap[tone],
        interactive && "transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 rounded-3xl border border-white/10 opacity-80 pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl opacity-40 blur-3xl bg-gradient-to-br from-brass-400/15 via-transparent to-neon-pink/15 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
