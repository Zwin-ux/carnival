import { CSSProperties, ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "./utils/cn";

type GlassDepth = "sm" | "md" | "lg";
type Accent = "none" | "plasma" | "nova" | "graphite";
type Padding = "none" | "sm" | "md" | "lg";

export interface GlassPanelProps extends ComponentPropsWithoutRef<"div"> {
  depth?: GlassDepth;
  accent?: Accent;
  padding?: Padding;
  interactive?: boolean;
}

const depthMap: Record<GlassDepth, string> = {
  sm: "shadow-[0_18px_45px_rgba(2,3,5,0.45)]",
  md: "shadow-glass-layer",
  lg: "shadow-depth-xl",
};

const paddingMap: Record<Padding, string> = {
  none: "",
  sm: "p-4 sm:p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
};

const accentProps: Record<Accent, CSSProperties | undefined> = {
  none: undefined,
  plasma: {
    boxShadow: "0 0 45px rgba(53,242,255,0.25)",
    borderColor: "rgba(53,242,255,0.28)",
  },
  nova: {
    boxShadow: "0 0 45px rgba(255,91,225,0.25)",
    borderColor: "rgba(255,91,225,0.28)",
  },
  graphite: {
    borderColor: "rgba(143,163,184,0.35)",
  },
};

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(function GlassPanel(
  { className, depth = "md", accent = "none", padding = "md", interactive = false, style, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "glass-panel",
        paddingMap[padding],
        depthMap[depth],
        interactive &&
          "transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:shadow-depth-xl focus-visible:-translate-y-1",
        className
      )}
      style={{ ...accentProps[accent], ...style }}
      {...props}
    />
  );
});
