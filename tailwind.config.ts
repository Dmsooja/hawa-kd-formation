import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const Unfonts = require("unplugin-fonts");

const config: Config = {
  content: [
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "2rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "deep-blue": "#272C56",
        "light-blue": "#F6F8FD",
        red: "#F41717",
        transparent: "transparent"
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        headings: ["var(--font-headings)"],
        copy: ["var(--font-copy)"],
        display: ["Lexend", ...fontFamily.sans],
        code: ["ui-monospace", ...fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
