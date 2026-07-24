import type { Config } from "tailwindcss";

/**
 * Tailwind maps semantic tokens to CSS variables. The *values* of those
 * variables are defined once in `config/theme.ts` and injected at runtime by
 * <ThemeVars/> (see app/layout.tsx). So to re-brand the site you only ever
 * touch theme.ts — never this file.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // rgb(var(...-rgb) / <alpha-value>) form so opacity modifiers like
        // `bg-accent/12` work. Values come from config/theme.ts via <ThemeVars>.
        bg: "rgb(var(--c-bg-rgb) / <alpha-value>)",
        "bg-soft": "rgb(var(--c-bg-soft-rgb) / <alpha-value>)",
        surface: "rgb(var(--c-surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--c-surface-2-rgb) / <alpha-value>)",
        border: "rgb(var(--c-border-rgb) / <alpha-value>)",
        ink: "rgb(var(--c-ink-rgb) / <alpha-value>)",
        muted: "rgb(var(--c-muted-rgb) / <alpha-value>)",
        faint: "rgb(var(--c-faint-rgb) / <alpha-value>)",
        accent: "rgb(var(--c-accent-rgb) / <alpha-value>)",
        "accent-2": "rgb(var(--c-accent-2-rgb) / <alpha-value>)",
        "accent-ink": "rgb(var(--c-accent-ink-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "22px",
        phone: "44px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,20,30,0.04), 0 8px 24px rgba(10,20,30,0.06)",
        card: "0 2px 6px rgba(10,20,30,0.05), 0 20px 50px rgba(10,20,30,0.08)",
        glass: "0 8px 30px rgba(10,20,30,0.12)",
        phone:
          "0 4px 12px rgba(10,20,30,0.10), 0 40px 90px -20px rgba(10,20,30,0.35)",
      },
      backgroundImage: {
        accent: "linear-gradient(135deg, var(--c-accent), var(--c-accent-2))",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
