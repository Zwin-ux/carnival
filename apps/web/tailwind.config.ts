import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          1000: "#010205",
          950: "#05060a",
          900: "#070a12",
          850: "#0a0f19",
          800: "#0c101c",
          700: "#121a2d",
          600: "#192235",
          500: "#222c42",
          400: "#2d3850",
          300: "#3b4863",
        },
        plasma: {
          600: "#35f2ff",
          500: "#21e7ff",
          400: "#0ed4f7",
          300: "#0bb4df",
          200: "#0c90c6",
          100: "#0a6a9f",
        },
        nova: {
          600: "#ff89f5",
          500: "#ff5be1",
          400: "#f73ed4",
          300: "#d632c6",
          200: "#b42cd0",
          100: "#963cff",
        },
        mist: {
          500: "#8fa3b8",
          400: "#9db4c7",
          300: "#b3c6d7",
          200: "#c7d6e4",
          100: "#dfe5ef",
        },
        ice: {
          500: "#f2fbff",
          400: "#dfefff",
          300: "#c3daee",
          200: "#a8c4dc",
          100: "#8eaac5",
        },
        overlay: {
          light: "rgba(255,255,255,0.08)",
          medium: "rgba(255,255,255,0.12)",
          strong: "rgba(12,16,28,0.65)",
        },
        status: {
          success: "#3ad0b2",
          warning: "#ffc857",
          danger: "#ff5c7a",
        },
        ink: {
          950: "#030309",
          900: "#090b15",
          850: "#101324",
          800: "#171a2d",
          700: "#232742",
        },
        brass: {
          700: "#7a4410",
          600: "#a4591b",
          500: "#d3943f",
          400: "#f4c674",
          300: "#ffe2a8",
        },
        ember: {
          500: "#ff5c31",
          400: "#ff7a45",
          300: "#ff9f71",
        },
        aurora: {
          500: "#0bb8a7",
          400: "#32d7c0",
          300: "#74f0d9",
        },
        candy: {
          400: "#ff9cc6",
          300: "#ffc1d8",
          200: "#ffdfea",
        },
        mint: {
          400: "#7ff5d1",
          300: "#b6f9e5",
          200: "#d8fff2",
        },
        cyan: {
          500: "#1f9fde",
          400: "#45bdee",
          300: "#7bd5ff",
        },
        violet: {
          500: "#9f6eff",
          400: "#c79bff",
          300: "#ead8ff",
        },
        rust: {
          600: "#8d3d2e",
          500: "#b04b3a",
          400: "#da6b53",
        },
        steel: {
          500: "#3f4a61",
          400: "#56607a",
          300: "#7a82a0",
        },
      },
      fontFamily: {
        carnival: ["Righteous", "Impact", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        heading: ["var(--font-heading)", "var(--font-geist-sans)", "sans-serif"],
        data: ["var(--font-data)", "var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "brass-gradient": "linear-gradient(135deg, #f4c674 0%, #d3943f 45%, #8d3d2e 100%)",
        "aurora-gradient": "radial-gradient(circle at top, rgba(50,215,192,0.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(159,110,255,0.35), transparent 45%)",
        "grid-overlay": "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "plasma-gradient": "linear-gradient(120deg, #35f2ff 0%, #0ed4f7 45%, #0b9be0 100%)",
        "nova-gradient": "linear-gradient(140deg, #ff5be1 0%, #d632c6 55%, #963cff 100%)",
        "graphite-noise":
          "linear-gradient(180deg, rgba(5,6,10,0.95) 0%, rgba(12,16,28,0.98) 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='70' cy='50' r='1'/%3E%3Ccircle cx='90' cy='90' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        "luminous-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "particle-field":
          "radial-gradient(circle at 20% 20%, rgba(53,242,255,0.2), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255,91,225,0.18), transparent 50%)",
      },
      boxShadow: {
        marquee: "0 0 30px rgba(243, 198, 116, 0.45), inset 0 0 20px rgba(140, 50, 14, 0.35)",
        neon: "0 0 25px rgba(50, 215, 192, 0.35)",
        "panel-glow": "0 30px 60px rgba(0, 0, 0, 0.45)",
        "glass-layer": "inset 0 0 0 1px rgba(255, 255, 255, 0.12), 0 25px 70px rgba(5, 6, 10, 0.65)",
        "depth-xl": "0 40px 80px rgba(0, 0, 0, 0.6)",
        "plasma-glow": "0 0 45px rgba(53, 242, 255, 0.45)",
        "nova-glow": "0 0 50px rgba(255, 91, 225, 0.38)",
      },
      dropShadow: {
        marquee: "0 0 15px rgba(243, 198, 116, 0.8)",
        mint: "0 0 20px rgba(182, 249, 229, 0.6)",
        plasma: "0 0 25px rgba(53, 242, 255, 0.7)",
        nova: "0 0 25px rgba(255, 91, 225, 0.65)",
      },
      animation: {
        "marquee": "marquee 2s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "bulb-glow": "bulb-glow 2s ease-in-out infinite",
        "flip": "flip 0.6s ease-in-out",
        "ring": "ring 0.5s ease-out",
        "confetti": "confetti 1s ease-out",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "swing": "swing 1s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.2s ease-in-out infinite",
        "tilt-glow": "tilt-glow 6s ease-in-out infinite",
        "grid-flow": "grid-flow 14s linear infinite",
        "particle-drift": "particle-drift 18s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px currentColor, 0 0 10px currentColor" },
          "100%": { boxShadow: "0 0 10px currentColor, 0 0 20px currentColor" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bulb-glow": {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.3)" },
        },
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
        ring: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.1) rotate(-5deg)" },
          "75%": { transform: "scale(1.1) rotate(5deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        confetti: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-100px) scale(0)", opacity: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(53,242,255,0.35), 0 0 35px rgba(53,242,255,0.15)" },
          "50%": { boxShadow: "0 0 25px rgba(255,91,225,0.45), 0 0 45px rgba(53,242,255,0.25)" },
        },
        "tilt-glow": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(6deg) rotateY(-4deg)" },
          "100%": { transform: "rotateX(0deg) rotateY(0deg)" },
        },
        "grid-flow": {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "200px 200px, -200px -200px" },
        },
        "particle-drift": {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(10px, -20px, 0) scale(1.05)" },
          "100%": { transform: "translate3d(-5px, -35px, 0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
