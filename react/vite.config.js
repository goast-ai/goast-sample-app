import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Uncomment if you want to send the crash to Sentry
    //   sentryVitePlugin({
    //   org: "<Your-Org-Id>",
    //   project: "javascript-react"
    // })
  ],

  build: {
    sourcemap: true
  }
})