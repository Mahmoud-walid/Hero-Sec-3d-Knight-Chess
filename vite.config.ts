import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // for Production
  build: {
    outDir: "build",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    chunkSizeWarningLimit: 2000,
  },
});
