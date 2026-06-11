import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marhey: ["var(--font-marhey)"],
        gloomieSaturday: ["var(--font-gloomie-saturday)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
