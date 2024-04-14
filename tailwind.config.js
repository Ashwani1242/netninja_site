/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
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


