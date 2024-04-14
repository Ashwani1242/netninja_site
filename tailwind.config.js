/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const { build, rollupVersion } = require('vite');
module.exports = {
  content: [
    "*",
    "/login.html",
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

