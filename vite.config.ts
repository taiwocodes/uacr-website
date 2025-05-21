import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})