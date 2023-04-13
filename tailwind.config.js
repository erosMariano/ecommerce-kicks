/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4A69E2",
        yellow: "#FFA52F",
        white: "#FFFFFF",
        fa_white: "#FAFAFA",
        gray: "#E7E7E3",
        gray_main: "#70706E",
        dark_gray: "#232321",
      },
    },
  },
  plugins: [],
};
