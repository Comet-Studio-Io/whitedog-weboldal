/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Oracle", "regular"],
      },
      colors: {
        primary_gray: "#E1E1E1",
        text_gray: "#3C3B3B",
        text_gray_light: "#9C9D9C",
        text_gray_dark: "#696969",
      }
    },
  },
  plugins: [],
};
