/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base : "./",
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
*/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'word-scramble',
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: path.resolve(__dirname, 'word-scramble', 'src', 'App.jsx'),
    },
  },
});
