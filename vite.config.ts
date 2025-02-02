import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";

export default defineConfig(() => {
  return {
    base: "./",
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
          dev: {
            logLevel: ["error"],
          },
        },
      }),
    ],
    preview: {
      port: 8080,
      strictPort: true,
    },
    server: {
      port: 8080,
      strictPort: true,
      host: true,
      origin: "http://0.0.0.0:8080",
    },
  };
});
