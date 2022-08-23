/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#e7aa25",
        dark: "#121212",
        "soft-dark": "#1A1A1A",
        blue: "#3366ff",
      },
    },
  },
  plugins: [],
};
