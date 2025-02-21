import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#111928",
        "dark-secondary": "#1F2839",
        main: "#1A3C61",
        accent: "#EDA51D",
        "accent-dark": "#EE9705",
      },
    },
  },
  plugins: [],
} satisfies Config;
