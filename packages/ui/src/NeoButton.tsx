"use client";

import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { cn } from "./utils/cn";

type NeoVariant = "plasma" | "nova" | "graphite" | "ghost";
type NeoSize = "sm" | "md" | "lg";

export interface NeoButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: NeoVariant;
  size?: NeoSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantMap: Record<NeoVariant, string> = {
  plasma:
    "bg-gradient-to-br from-plasma-600 via-plasma-400 to-nova-200 text-graphite-950 shadow-plasma-glow hover:shadow-plasma-glow",
  nova: "bg-gradient-to-br from-nova-500 via-nova-400 to-plasma-200 text-graphite-950 shadow-nova-glow hover:shadow-nova-glow",
  graphite:
    "bg-graphite-800/90 text-ice-200 border border-graphite-600/70 hover:border-plasma-400/40 hover:text-ice-50",
  ghost:
    "bg-transparent text-ice-300 border border-graphite-600/60 hover:border-plasma-400/70 hover:text-ice-100 backdrop-blur-sm",
};

const sizeMap: Record<NeoSize, string> = {
  sm: "text-[0.65rem] tracking-[0.32em] px-5 py-2",
  md: "text-[0.7rem] tracking-[0.35em] px-6 py-3",
  lg: "text-[0.8rem] tracking-[0.38em] px-8 py-4",
};

export const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(function NeoButton(
  {
    children,
    className,
    variant = "plasma",
    size = "md",
    iconLeft,
    iconRight,
    fullWidth = false,
    loading = false,
    disabled,
    type = "button",
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      data-variant={variant}
      data-size={size}
      type={type}
      disabled={isDisabled}
      className={cn(
        "relative inline-flex transform-gpu items-center justify-center gap-3 rounded-full font-heading uppercase",
        "transition-all duration-300 text-center overflow-hidden focus-visible:ring-2 focus-visible:ring-plasma-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-900",
        "hover:-translate-y-0.5",
        variantMap[variant],
        sizeMap[size],
        fullWidth && "w-full",
        isDisabled && "opacity-60 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        {iconLeft && <span className="text-lg">{iconLeft}</span>}
        <span className="font-heading tracking-[0.35em] text-[0.75em]">{children}</span>
        {iconRight && <span className="text-lg">{iconRight}</span>}
      </span>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-5 w-5 rounded-full border-2 border-overlay-medium border-t-transparent animate-spin" />
        </span>
      )}
    </button>
  );
});
