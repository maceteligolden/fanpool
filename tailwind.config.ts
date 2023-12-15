import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
      },
      screens: {
        "2xl": "1392px",
      },
    },
    colors: {
      white: "#fff",
      black: {
        900: "#1C1D22",
        500: "#22252C",
        300: "#2E313A",
      },
      purple: {
        900: "#463E4F",
        500: "#D5B0FF",
      },
    },
    fontFamily: {
      graphik: ["Graphik", "san-serif"],
      "red-hat": ['"Red Hat Display"', "san-serif"],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.5rem",
      "4xl": "3rem",
      "5xl": "4rem",
    },
  },
  plugins: [],
};
export default config;
