import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // permite acceso desde 127.0.0.1 o tu IP de red
    port: 5173    // asegura que siga usando el mismo puerto
  }
})
