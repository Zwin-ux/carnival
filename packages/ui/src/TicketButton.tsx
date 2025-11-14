"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface TicketButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  "aria-label"?: string;
}

export function TicketButton({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
  type = "button",
  icon,
  "aria-label": ariaLabel,
}: TicketButtonProps) {
  const reduceMotion = useReducedMotion();

  const variants = {
    primary:
      "bg-brass-500 text-ink-950 border-2 border-brass-700 hover:bg-brass-400 shadow-marquee",
    secondary:
      "bg-ink-900 text-candy-200 border-2 border-ink-700 hover:border-brass-400 hover:text-brass-200",
    danger: "bg-rust-500 text-candy-200 border-2 border-rust-600 hover:bg-rust-400",
    ghost:
      "bg-transparent text-candy-200 border border-steel-500 hover:border-brass-400 hover:text-brass-300",
  };

  const hoverAnimation = reduceMotion
    ? undefined
    : {
        scale: disabled ? 1 : 1.035,
        rotate: disabled ? 0 : -0.6,
      };

  const tapAnimation = reduceMotion
    ? undefined
    : {
        scale: disabled ? 1 : 0.97,
        rotate: disabled ? 0 : 0.8,
      };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      data-variant={variant}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      className={`
        relative inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-wide
        transition-all duration-200 rounded-[18px] ${variants[variant]}
        ${disabled ? "opacity-45 cursor-not-allowed" : "hover:drop-shadow-marquee"}
        ${className}`}
      style={{
        clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
      }}
    >
      {/* Ticket perforation on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col items-center justify-evenly opacity-40">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-current" />
        ))}
      </div>

      {/* "ADMIT ONE" watermark for primary buttons */}
      {variant === "primary" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-4xl font-bold opacity-10 select-none rotate-[-5deg]">
            ADMIT ONE
          </span>
        </div>
      )}

      {/* Marquee border effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 marquee-border from-brass-400 to-candy-300" />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        {children}
      </span>
    </motion.button>
  );
}
