// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '/@/': new URL('src/', import.meta.url).pathname,
    },
  },
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  }
});
