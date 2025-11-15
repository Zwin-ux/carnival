import type { Variants } from "framer-motion";

export const servo: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export const marquee: Variants = {
  initial: { x: "100%" },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
