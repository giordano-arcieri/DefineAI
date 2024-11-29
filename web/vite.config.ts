import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: "./src/App.tsx", // Use App.tsx as the popup entry point
        // background: "./src/background.ts", // Background script
        // content: "./src/content.ts", // Content script
      },
      output: {
        entryFileNames: "[name].js", // Outputs popup.js, background.js, content.js
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
