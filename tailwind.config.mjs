import plugin from "tailwindcss/plugin";

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alegreya"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        copy: "#2A1F18",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".small-caps": {
          fontVariant: "small-caps",
        },
      });
    }),
  ],
};
