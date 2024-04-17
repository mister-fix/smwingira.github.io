import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      '@assets': path.resolve(__dirname, './app/assets'),
      '@components': path.resolve(__dirname, './app/components'),
      '@styles': path.resolve(__dirname, './app/styles'),
      '@utils': path.resolve(__dirname, './app/utils'),
    },
  },
  build: {
    cssCodeSplit: false,
    manifest: false,
    sourcemap: true,
  },
});
