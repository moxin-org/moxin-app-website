import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        warm: "rgb(var(--c-warm) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        seal: "#C53030",
        "seal-dark": "#9B2C2C",
        gold: "#D4A853",
        "gold-dark": "#B8942E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["Noto Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "stamp-press": "stampPress 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "ink-spread": "inkSpread 1.2s ease-out forwards",
        "brush-reveal": "brushReveal 1s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        stampPress: {
          "0%": { transform: "scale(1.3) rotate(-2deg)", opacity: "0" },
          "50%": { transform: "scale(0.95) rotate(0.5deg)", opacity: "0.8" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        inkSpread: {
          "0%": { clipPath: "circle(0% at 50% 50%)" },
          "100%": { clipPath: "circle(100% at 50% 50%)" },
        },
        brushReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        fadeUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
