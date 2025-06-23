import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/Portfolio-Publish-Final/' : '/',
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
        entryFileNames: (assetInfo: any) => {
          if (assetInfo.name === 'notFound') return '404.html';
          return '[name].js';
        },
      },
    },
  },
});
