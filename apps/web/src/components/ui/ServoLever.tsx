import { motion, type Transition } from "framer-motion";

interface ServoLeverProps {
  label?: string;
  ctaLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  onPull?: () => void;
  className?: string;
}

const leverSpring: Transition = { type: "spring", stiffness: 220, damping: 16 };

export function ServoLever({
  label = "Pull lever to verify",
  ctaLabel = "Engage Lever",
  disabled = false,
  loading = false,
  onPull,
  className = "",
}: ServoLeverProps) {
  return (
    <motion.button
      type="button"
      disabled={disabled || loading}
      onClick={onPull}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`relative flex w-full flex-col items-center gap-4 rounded-3xl border border-chrome-300/30 bg-gradient-to-b from-chrome-900/60 to-chrome-950/80 px-6 py-6 text-center text-sm text-chrome-50 transition ${
        disabled ? "cursor-not-allowed opacity-70" : "hover:border-brass-400/50"
      } ${className}`}
    >
      <p className="text-[0.6rem] font-data uppercase tracking-[0.5em] text-steel-200/80">{label}</p>
      <div className="relative h-32 w-24">
        <motion.div
          className="absolute bottom-0 left-1/2 h-28 w-5 -translate-x-1/2 origin-bottom rounded-full bg-gradient-to-b from-chrome-200 to-chrome-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          animate={{ rotate: disabled ? -5 : loading ? -28 : -15 }}
          transition={leverSpring}
        />
        <motion.div
          className="absolute bottom-4 left-0 right-0 mx-auto h-8 w-20 rounded-full bg-gradient-to-r from-brass-400 to-brass-600 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
          animate={{ y: loading ? 2 : 0 }}
          transition={leverSpring}
        />
      </div>
      <span className="btn-brass w-full justify-center text-xs font-data uppercase tracking-[0.4em]">
        {loading ? "Calibrating..." : ctaLabel}
      </span>
    </motion.button>
  );
}
