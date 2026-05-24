import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#e8edf5",
          100: "#c5d0e6",
          200: "#9fb0d5",
          300: "#7890c4",
          400: "#5a77b8",
          500: "#3c5eac",
          600: "#2e4d96",
          700: "#1e3878",
          800: "#112459",
          900: "#0a1628",
          950: "#060e1a",
        },
        gold: {
          300: "#e4c98a",
          400: "#d4b87f",
          500: "#c9a96e",
          600: "#b8945a",
        },
        cream: {
          50:  "#fdfcf9",
          100: "#f9f7f2",
          200: "#f5f3ee",
          300: "#ede9e0",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["3rem", { lineHeight: "1.15", fontWeight: "500" }],
        "h1":      ["2.25rem", { lineHeight: "1.25", fontWeight: "500" }],
        "h2":      ["1.75rem", { lineHeight: "1.3",  fontWeight: "500" }],
        "h3":      ["1.35rem", { lineHeight: "1.4",  fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};

export default config;
