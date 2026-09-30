import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#070A12",
        navy: "#0D1220",
        deep: "#11182A",
        lavender: "#A8A4D8",
        ivory: "#F6F1E8",
        rose: "#D98D9B",
        champagne: "#D8C6A0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "sans-serif"],
        serif: ["var(--font-serif)", "Bodoni Moda", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
