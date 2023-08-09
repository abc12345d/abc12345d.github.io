import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "abc12345d.github.io",
  plugins: [svgr(), react()],assetsInclude: ['**/*.md']
  
});


