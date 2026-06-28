import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion"],
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
