/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0c12",
          800: "#10131c",
          700: "#161b27",
          600: "#1f2533",
        },
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd3ff",
          300: "#8eb6ff",
          400: "#598dff",
          500: "#3b6bff",
          600: "#274bf5",
          700: "#1f3ae1",
          800: "#2032b6",
          900: "#21318f",
        },
        accent: {
          violet: "#8b5cf6",
          cyan: "#22d3ee",
          fuchsia: "#e879f9",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: ["'Clash Display'", "Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(15,23,42,0.05), 0 24px 60px -24px rgba(59,107,255,0.45)",
        card: "0 30px 80px -40px rgba(15,23,42,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-4%,0) rotate(8deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        aurora: "aurora-shift 18s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        "grid-pan": "grid-pan 8s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
