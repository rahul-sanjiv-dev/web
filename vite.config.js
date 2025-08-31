import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web/',   // 👈 Must match your GitHub repo name
  build: {
    outDir: 'dist',   // Default output directory for production build
  },
  server: {
    port: 5173,       // Local dev server port (optional)
    open: true        // Opens browser automatically on dev
  }
})
