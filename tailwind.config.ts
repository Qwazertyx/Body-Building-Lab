import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff6b1a",
          50: "#fff4ec",
          100: "#ffe3d0",
          200: "#ffc199",
          300: "#ff9d5c",
          400: "#ff7d2e",
          500: "#ff6b1a",
          600: "#e85300",
          700: "#bf4400",
          800: "#993700",
          900: "#7a2e00",
        },
        neon: {
          DEFAULT: "#39ff88",
          soft: "#7dffb0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255,107,26,0.35)",
        "glow-neon": "0 0 20px rgba(57,255,136,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
