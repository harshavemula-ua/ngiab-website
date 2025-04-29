import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/',
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