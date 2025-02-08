import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6004, // Set port to 6004
    strictPort: true, // Ensures it does NOT switch ports
  },
});
