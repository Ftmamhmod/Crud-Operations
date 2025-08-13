import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
<<<<<<< HEAD
});
=======
  build: {

    chunkSizeWarningLimit: 1500,
    reportCompressedSize: false,
    emptyOutDir: true,
    rollupOptions: {
      onwarn(warning, warn) {

        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
      output: {
        manualChunks: {

          react: ['react', 'react-dom'],
          tailwind: ['tailwindcss'],
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'tailwindcss'
    ],
    exclude: ['@rollup/rollup-linux-x64-gnu']
  }
});
>>>>>>> 1f8a00aa15f543f12de7e413648dccd793c67587
