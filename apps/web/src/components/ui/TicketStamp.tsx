import { AnimatePresence, motion, type Variants, type Transition } from "framer-motion";
import { Ticket } from "lucide-react";

interface TicketStampProps {
  ticketId: string;
  description: string;
  stamping?: boolean;
  metaLabel?: string;
  className?: string;
}

const stampTransition: Transition = {
  duration: 0.6,
  ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
};

const stampVariants: Variants = {
  hidden: { scale: 0, rotate: -12, opacity: 0, y: -10 },
  visible: {
    scale: [0, 1.1, 1],
    rotate: [-12, 2, 0],
    opacity: [0, 1, 1],
    y: [0, -6, 0],
    transition: stampTransition,
  },
};

export function TicketStamp({ ticketId, description, stamping = false, metaLabel = "Midway Access", className = "" }: TicketStampProps) {
  return (
    <motion.div
      className={`relative rounded-3xl border border-dashed border-brass-300/60 bg-gradient-to-br from-chrome-950/80 to-chrome-900/50 px-6 py-7 shadow-[inset_0_0_20px_rgba(0,0,0,0.35)] ${className}`}
      whileHover={{ rotate: -1.5 }}
    >
      <div className="flex items-center justify-between text-sm text-chrome-100">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-steel-200/70">{metaLabel}</p>
              <p className="font-heading text-2xl text-chrome-50">{ticketId}</p>
            </div>
            <Ticket className="h-12 w-12 text-brass-300" />
      </div>
      <p className="mt-4 text-xs text-steel-200/70">{description}</p>

      <AnimatePresence>
        {stamping && (
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            variants={stampVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.6 }}
          >
            <span className="rounded-full border border-neon-pink/60 bg-neon-pink/20 px-6 py-3 text-sm font-data uppercase tracking-[0.5em] text-neon-pink">
              Stamped
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
