import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D4A373",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
