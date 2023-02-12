import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Make-React-Apps/to_do_list/',
  plugins: [react()],
});
