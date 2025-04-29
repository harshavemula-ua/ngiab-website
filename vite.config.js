import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: process.env.VITE_BASE_URL || '/',
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    css: {
      postcss: 'postcss.config.js',
    },
    server: {
      port: 3000,
    },
  };
});