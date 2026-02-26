import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração local: sem Mocha, sem Cloudflare. Só Vite + React.
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
