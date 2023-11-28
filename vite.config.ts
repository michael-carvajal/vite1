import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  optimizeDeps: { include: ["swiper/react"], exclude: ["swiper/types"] },
});
