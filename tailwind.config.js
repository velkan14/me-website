/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = defaultTheme;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            strong: {
              color: theme("colors.dark"),
            },
            "ol > li::marker": {
              color: theme("colors.dark"),
            },
            "ul > li::marker": {
              color: theme("colors.dark"),
            },
          },
        },
      }),
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      pink: "#EF476F",
      yellow: "#FFD166",
      green: "#06D6A0",
      blue: "#118AB2",
      dark: "#073B4C",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
