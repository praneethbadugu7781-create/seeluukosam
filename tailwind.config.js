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
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
        brand: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        script: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        "luxury-sm": "0 2px 12px -2px rgba(92, 18, 32, 0.05), 0 1px 3px rgba(0,0,0,0.03)",
        "luxury": "0 10px 32px -5px rgba(92, 18, 32, 0.08), 0 4px 14px -2px rgba(92, 18, 32, 0.04)",
        "luxury-lg": "0 20px 50px -10px rgba(92, 18, 32, 0.16), 0 8px 24px -4px rgba(92, 18, 32, 0.08)",
      },
    },
  },
  plugins: [],
};
