import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      colors: {
        primary: "#1a1a1a",
        secondary: "#6b6b6b",
        accent: "#2d2d2d",
        muted: "#f5f5f0",
        border: "#e5e5e0",
      },
      maxWidth: {
        article: "720px",
      },
      spacing: {
        section: "5rem",
      },
    },
  },
  plugins: [],
};

export default config;
