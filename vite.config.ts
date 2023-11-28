import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite1/",
  plugins: [react()],
  optimizeDeps: { include: ["swiper/react", "swiper/types"] },
});
