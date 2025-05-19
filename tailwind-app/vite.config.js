import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // agrega esta linea
export default defineConfig({
  plugins: [
    tailwindcss(),// agrega tailwind al array de plugings
  ],
})