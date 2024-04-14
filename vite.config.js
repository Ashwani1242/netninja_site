import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'pages/login/index.html'),
        sign_up: resolve(__dirname, 'pages/sign-up/index.html'),
        user_dashboard: resolve(__dirname, 'pages/user-dashboard/index.html'),
      }
    }
  }
}