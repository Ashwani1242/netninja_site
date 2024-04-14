/** @type {import('tailwindcss').Config} */
import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'


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


