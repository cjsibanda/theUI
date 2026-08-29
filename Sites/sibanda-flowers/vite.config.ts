import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/sibanda-flowers/',
  plugins: [tailwindcss()]
})
