import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@animations': path.resolve(__dirname, './src/animations'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    // Manual chunking keeps the heavy animation/3D libraries out of the
    // main bundle so the first paint (loader + hero) stays fast.
    rollupOptions: {
      output: {
        manualChunks: {
          vendor_react: ['react', 'react-dom'],
          vendor_motion: ['gsap', 'framer-motion', 'aos', 'lenis'],
          vendor_3d: ['three', '@react-three/fiber'],
          vendor_media: ['lottie-react', '@tsparticles/react', '@tsparticles/slim'],
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
});
