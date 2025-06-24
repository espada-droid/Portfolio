import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/Portfolio/', // ✅ HARD-CODE THIS to your GitHub repo name
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: (assetInfo) => {
          if ((assetInfo as { name: string }).name === 'notFound') return '404.html';
          return '[name].js';
        },
      },
    },
  },
});
