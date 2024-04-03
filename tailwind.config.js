/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "*",
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ['"Istok Web"'],
        rubik:['"Rubik"']
      }
    },
  },
  plugins: [],
}

