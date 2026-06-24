import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    watch: {
      ignored: ['**/*.mp4', '**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/dist/**', '**/node_modules/**']
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        contact: resolve(__dirname, 'contact.html'),
        'crimson-signature': resolve(__dirname, 'crimson-signature.html'),
        'engineered-stride': resolve(__dirname, 'engineered-stride.html'),
        'kinematic-form': resolve(__dirname, 'kinematic-form.html'),
        'procedural-nexus': resolve(__dirname, 'procedural-nexus.html'),
        'refined-pulse': resolve(__dirname, 'refined-pulse.html'),
        'web-momentum': resolve(__dirname, 'web-momentum.html'),
        'sneaker-factory': resolve(__dirname, 'sneaker-factory.html'),
        'threshold-of-dread': resolve(__dirname, 'threshold-of-dread.html'),
      },
    },
  },
});
