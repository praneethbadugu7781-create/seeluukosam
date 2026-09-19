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
        ivory: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F3EDE1",
          300: "#E9DEC9",
          400: "#DDD0B6",
        },
        wine: {
          50: "#FCF2F4",
          100: "#F8E0E4",
          200: "#F1BFC8",
          300: "#E691A0",
          400: "#D35B72",
          500: "#BC3450",
          600: "#9F233C",
          700: "#7E192D",
          800: "#5C1220",
          900: "#3B0A13",
          950: "#22040A",
        },
        blush: {
          50: "#FFF5F6",
          100: "#FDE8EB",
          200: "#FBD5DB",
          300: "#F7B5C1",
          400: "#EF889B",
          500: "#E15872",
        },
        gold: {
          100: "#FAF4DC",
          200: "#F5E9B8",
          300: "#EED888",
          400: "#E4C455",
          500: "#C9A030",
          600: "#A88320",
          700: "#806214",
        },
        peach: {
          50: "#FEF7F2",
          100: "#FCEEE4",
          200: "#F8DAC7",
          300: "#F2BD9E",
          400: "#E9996F",
        },
      },
      fontFamily: {
        brand: ["var(--font-italiana)", "Italiana", "Cinzel", "serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "Outfit", "-apple-system", "sans-serif"],
        script: ["var(--font-alex)", "Alex Brush", "cursive"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      boxShadow: {
        "luxury-sm": "0 2px 12px -2px rgba(92, 18, 32, 0.05), 0 1px 3px rgba(0,0,0,0.03)",
        "luxury": "0 10px 32px -5px rgba(92, 18, 32, 0.08), 0 4px 14px -2px rgba(92, 18, 32, 0.04)",
        "luxury-lg": "0 20px 50px -10px rgba(92, 18, 32, 0.16), 0 8px 24px -4px rgba(92, 18, 32, 0.08)",
        "glow-wine": "0 0 35px rgba(159, 35, 60, 0.35)",
        "glow-gold": "0 0 35px rgba(201, 160, 48, 0.35)",
        "card-luxury": "0 20px 40px -15px rgba(59, 10, 19, 0.07), 0 0 0 1px rgba(230, 145, 160, 0.2)",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 3s infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(15px)" },
          "100%": { opacity: "0.8", filter: "blur(25px)" },
        },
      },
    },
  },
  plugins: [],
};
