"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TrustMeterProps {
  score: number; // 0-10
  maxScore?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animated?: boolean;
}

/**
 * Carnival "Ring the Bell" style trust score meter
 * Visualizes trust scores as a strength meter game
 */
export function TrustMeter({
  score,
  maxScore = 10,
  size = "md",
  showLabel = true,
  animated = true,
}: TrustMeterProps) {
  const [displayScore, setDisplayScore] = useState(0);

  // Animate score counting up
  useEffect(() => {
    if (!animated) {
      setDisplayScore(score);
      return;
    }

    const duration = 1000;
    const steps = 30;
    const increment = score / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score, animated]);

  const percentage = (displayScore / maxScore) * 100;

  // Determine level and color based on score
  const getLevel = () => {
    if (score >= 9) return { label: "LEGENDARY", color: "from-brass-400 to-brass-300", glow: "brass-400" };
    if (score >= 7) return { label: "EXPERT", color: "from-mint-400 to-mint-300", glow: "mint-400" };
    if (score >= 5) return { label: "TRUSTED", color: "from-cyan-400 to-cyan-300", glow: "cyan-400" };
    if (score >= 3) return { label: "RELIABLE", color: "from-candy-400 to-candy-300", glow: "candy-400" };
    return { label: "ROOKIE", color: "from-rust-400 to-rust-300", glow: "rust-400" };
  };

  const level = getLevel();

  const sizes = {
    sm: { height: "h-32", width: "w-12", bell: "text-lg", label: "text-xs" },
    md: { height: "h-48", width: "w-16", bell: "text-2xl", label: "text-sm" },
    lg: { height: "h-64", width: "w-20", bell: "text-4xl", label: "text-base" },
  };

  const sizeConfig = sizes[size];

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Bell at top */}
      <motion.div
        animate={
          percentage >= 90
            ? {
                rotate: [-5, 5, -5],
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{ repeat: percentage >= 90 ? Infinity : 0, duration: 0.5 }}
        className={`${sizeConfig.bell} ${percentage >= 90 ? "text-brass-400 drop-shadow-[0_0_10px_rgba(184,134,11,0.8)]" : "text-brass-600/40"}`}
      >
        🔔
      </motion.div>

      {/* Strength meter pole */}
      <div className="relative flex flex-col items-center">
        {/* Background pole */}
        <div
          className={`${sizeConfig.height} ${sizeConfig.width} bg-gradient-to-b from-ink-700 to-ink-800 border-2 border-brass-600/30 rounded-lg relative overflow-hidden`}
        >
          {/* Level markers */}
          <div className="absolute inset-0 flex flex-col-reverse justify-evenly px-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-0.5 bg-brass-600/30" />
            ))}
          </div>

          {/* Filled meter (from bottom) */}
          <motion.div
            initial={{ height: "0%" }}
            animate={{ height: `${Math.min(percentage, 100)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${level.color} border-t-2 border-${level.glow}`}
            style={{
              boxShadow: percentage > 0 ? `0 0 20px rgba(184, 134, 11, 0.4)` : "none",
            }}
          />

          {/* Puck indicator */}
          <motion.div
            initial={{ bottom: "0%" }}
            animate={{ bottom: `${Math.min(percentage, 100)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-3 bg-${level.glow} rounded-full border-2 border-ink-900 shadow-lg`}
          />
        </div>

        {/* Score display */}
        <div className="mt-3 text-center">
          <motion.div
            key={displayScore.toFixed(1)}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className={`font-carnival text-2xl ${percentage >= 90 ? `text-${level.glow} drop-shadow-lg` : "text-candy-200"}`}
          >
            {displayScore.toFixed(1)}
          </motion.div>
          {showLabel && (
            <div
              className={`${sizeConfig.label} font-bold tracking-wider ${percentage >= 90 ? `text-${level.glow}` : "text-candy-200/60"}`}
            >
              {level.label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Compact inline trust score badge
 */
interface TrustBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export function TrustBadge({ score, size = "md" }: TrustBadgeProps) {
  const getLevel = () => {
    if (score >= 9) return { label: "LEGENDARY", bg: "bg-brass-500", text: "text-ink-900" };
    if (score >= 7) return { label: "EXPERT", bg: "bg-mint-400", text: "text-ink-900" };
    if (score >= 5) return { label: "TRUSTED", bg: "bg-cyan-400", text: "text-ink-900" };
    if (score >= 3) return { label: "RELIABLE", bg: "bg-candy-400", text: "text-ink-900" };
    return { label: "ROOKIE", bg: "bg-rust-500", text: "text-candy-200" };
  };

  const level = getLevel();

  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 ${level.bg} ${level.text} ${sizes[size]} rounded-full font-bold border-2 border-ink-900/20 shadow-lg`}
    >
      <span className="font-carnival">{score.toFixed(1)}</span>
      <span className="text-[0.7em] opacity-80">{level.label}</span>
    </div>
  );
}
