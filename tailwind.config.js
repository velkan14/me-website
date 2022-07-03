/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
  plugins: [],
};
