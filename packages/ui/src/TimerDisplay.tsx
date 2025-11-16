"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimerDisplayProps {
  durationSec: number;
  onComplete?: () => void;
  autoStart?: boolean;
}

export function TimerDisplay({
  durationSec,
  onComplete,
  autoStart = false,
}: TimerDisplayProps) {
  const [remainingSec, setRemainingSec] = useState(durationSec);
  const [isRunning, setIsRunning] = useState(autoStart);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setRemainingSec((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onComplete]);

  const minutes = Math.floor(remainingSec / 60);
  const seconds = remainingSec % 60;
  const progress = (remainingSec / durationSec) * 100;

  const getColor = () => {
    if (progress > 60) return "text-mint-300";
    if (progress > 30) return "text-brass-400";
    return "text-rust-400";
  };

  return (
    <div className="text-center">
      <motion.div
        animate={{ scale: remainingSec <= 10 && isRunning ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 1, repeat: remainingSec <= 10 ? Infinity : 0 }}
        className={`text-7xl font-mono font-bold ${getColor()} mb-4`}
      >
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </motion.div>

      <div className="h-4 bg-ink-700 rounded-full overflow-hidden max-w-md mx-auto">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          className={`h-full ${
            progress > 60
              ? "bg-mint-400"
              : progress > 30
              ? "bg-brass-500"
              : "bg-rust-500"
          } rounded-full`}
        />
      </div>

      {!isRunning && remainingSec > 0 && (
        <button
          onClick={() => setIsRunning(true)}
          className="mt-4 px-6 py-2 bg-brass-500 hover:bg-brass-400 text-ink-900 font-bold rounded-lg"
        >
          Start Timer
        </button>
      )}
    </div>
  );
}
