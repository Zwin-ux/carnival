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
      },
      backgroundImage: {
        "brass-gradient": "linear-gradient(135deg, #f4c674 0%, #d3943f 45%, #8d3d2e 100%)",
        "aurora-gradient": "radial-gradient(circle at top, rgba(50,215,192,0.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(159,110,255,0.35), transparent 45%)",
        "grid-overlay": "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        marquee: "0 0 30px rgba(243, 198, 116, 0.45), inset 0 0 20px rgba(140, 50, 14, 0.35)",
        neon: "0 0 25px rgba(50, 215, 192, 0.35)",
        "panel-glow": "0 30px 60px rgba(0, 0, 0, 0.45)",
      },
      dropShadow: {
        marquee: "0 0 15px rgba(243, 198, 116, 0.8)",
        mint: "0 0 20px rgba(182, 249, 229, 0.6)",
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
      },
    },
  },
  plugins: [],
};

export default config;
