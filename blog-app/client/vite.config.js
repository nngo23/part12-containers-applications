import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      host: "localhost",
    },
    proxy: {
      "/api": {
        target: "http://blogapp-backend:3003",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./testSetup.js",
  },
  build: {
    outDir: path.join(__dirname, "..", "server", "public"),
    emptyOutDir: true,
  },
});
