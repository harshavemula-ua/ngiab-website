import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig(() => {
  return {
    base: process.env.VITE_BASE_URL || '/',
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-0L6FFE4674',
      },
    })],
    css: {
      postcss: 'postcss.config.js',
    },
    server: {
      port: 3000,
      proxy: {
        '/api/docker': {
          target: 'https://hub.docker.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/docker/, '/v2'),
          secure: false,
        }
      }
    },
  };
});