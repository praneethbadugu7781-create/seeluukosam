/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#FAF8F5",
          primary: "#241719",
          secondary: "#746467",
          accent: "#A94B58",
          blush: "#F3E3E3",
          card: "rgba(255, 255, 255, 0.7)",
          cardHover: "rgba(255, 255, 255, 0.95)",
          border: "rgba(36, 23, 25, 0.08)",
          darkBg: "#180C0E",
          darkCard: "#241215",
          darkBorder: "rgba(243, 227, 227, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Bodoni Moda", "Georgia", "serif"],
        display: ["var(--font-serif)", "Bodoni Moda", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
        ultra: "0.28em",
      },
      boxShadow: {
        "studio-sm": "0 2px 10px rgba(36, 23, 25, 0.03)",
        "studio": "0 12px 36px -8px rgba(36, 23, 25, 0.06), 0 2px 8px -2px rgba(36, 23, 25, 0.02)",
        "studio-lg": "0 24px 60px -12px rgba(36, 23, 25, 0.1)",
        "glow-soft": "0 0 60px rgba(169, 75, 88, 0.12)",
      },
    },
  },
  plugins: [],
};
