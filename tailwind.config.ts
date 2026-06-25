import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1A",
          900: "#0A1628",
          800: "#0F2040",
          700: "#162B55",
        },
        sapphire: {
          600: "#1640B8",
          500: "#1B4FD8",
          400: "#3B6FE8",
        },
        crimson: {
          700: "#991B1B",
          600: "#B91C1C",
          500: "#DC2626",
          400: "#EF4444",
        },
        teal: {
          800: "#065F5A",
          700: "#0B6B66",
          600: "#0F766E",
          500: "#14918A",
        },
        aqua: {
          700: "#0A7272",
          600: "#0D9488",
          500: "#14B8A6",
        },
        paper: "#F7F9FC",
        ink: "#0A1628",
        muted: "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "7xl": ["4.5rem", { lineHeight: "1.05" }],
        "8xl": ["6rem", { lineHeight: "1" }],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "draw-line": "drawLine 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      boxShadow: {
        "enterprise": "0 4px 24px rgba(10,22,40,0.12), 0 1px 4px rgba(10,22,40,0.08)",
        "enterprise-lg": "0 8px 48px rgba(10,22,40,0.16), 0 2px 8px rgba(10,22,40,0.08)",
        "glow-sapphire": "0 0 0 3px rgba(27,79,216,0.25)",
        "glow-crimson": "0 0 0 3px rgba(220,38,38,0.2)",
        "glow-teal": "0 0 0 3px rgba(15,118,110,0.2)",
        "glow-aqua": "0 0 0 3px rgba(13,148,136,0.2)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
