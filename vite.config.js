import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      png: {
        quality: 85,
      },
      webp: {
        quality: 85,
      },
    }),
    ...(mode === 'production'
      ? [
          viteCompression({
            algorithm: 'brotliCompress',
            deleteOriginFile: false,
          }),
        ]
      : []),
  ],
}));
