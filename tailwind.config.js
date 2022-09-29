/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Oracle'],
      },
      colors: {
        'primary-gray': '#E1E1E1',
        'text-gray-regular': '#696969',
        'text-gray-dark': '#3C3B3B',
        'text-gray-light': '#9C9D9C',
        'secondary': '#434E47',
      }
    },
  },
  plugins: [],
};
