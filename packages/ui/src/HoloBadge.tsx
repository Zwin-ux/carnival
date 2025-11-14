import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "./utils/cn";

type HoloTone = "plasma" | "nova" | "graphite" | "success" | "warning" | "danger";

export interface HoloBadgeProps extends ComponentPropsWithoutRef<"div"> {
  tone?: HoloTone;
  icon?: ReactNode;
  label: string;
  meta?: string;
  glow?: boolean;
  interactive?: boolean;
}

const toneMap: Record<HoloTone, string> = {
  plasma: "bg-plasma-400/15 text-plasma-200 border-plasma-400/40 shadow-plasma-glow",
  nova: "bg-nova-400/15 text-nova-200 border-nova-400/40 shadow-nova-glow",
  graphite: "bg-graphite-800/80 text-ice-200 border-graphite-500/50",
  success: "bg-status-success/10 text-status-success border-status-success/30",
  warning: "bg-status-warning/10 text-status-warning border-status-warning/30",
  danger: "bg-status-danger/10 text-status-danger border-status-danger/30",
};

export function HoloBadge({
  tone = "plasma",
  icon,
  label,
  meta,
  glow = false,
  interactive = false,
  className,
  ...props
}: HoloBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em]",
        "backdrop-blur-md font-data",
        glow && "drop-shadow-plasma",
        interactive && "transition duration-300 hover:-translate-y-0.5 hover:drop-shadow-plasma",
        toneMap[tone],
        className
      )}
      {...props}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{label}</span>
      {meta && <span className="text-[0.55rem] tracking-[0.25em] text-ice-300/70">{meta}</span>}
    </div>
  );
}
