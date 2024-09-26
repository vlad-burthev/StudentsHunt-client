import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
      svgrOptions: {},
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: any, filePath: any) => {
          // Добавляем глобальные импорты только если это не файлы normalize или reset
          if (
            !filePath.includes("_normalize.scss") &&
            !filePath.includes("_reset.scss")
          ) {
            return `@use "src/assets/styles/variable" as *;\n${content}`;
          }
          return content; // Не добавляем импорт
        },
      },
    },
  },
});
