import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ✅ Ensures output directory matches Vercel's expectation
    emptyOutDir: true
  }
});
