import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // This maps the '@' alias to the 'src' directory of your sub-module
      // assuming the sub-module is a direct dependency or local package.
      // Adjust the path accordingly based on your actual project structure.
      "@": path.resolve(__dirname, "./sub-module/src"),
      "@sub-module": path.resolve(__dirname, "./Sub-Module/src"),
      // If you have other aliases, you can
    },
  },
});
