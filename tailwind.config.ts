import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007FFF",
        secondary: "#F2C641",
        tertiary: {
          dark: "#0C2340",
          light: "#007FFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
