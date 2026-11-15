import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://rng22.github.io/portfolio/ (GitHub Pages project site)
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
