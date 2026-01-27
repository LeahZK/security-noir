import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/security-noir/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
