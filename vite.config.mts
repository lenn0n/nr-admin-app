import { defineConfig } from "vitest/config";
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias: [
      {find: "@/", replacement: path.resolve(__dirname, './') },
      {find: "@hooks/", replacement: path.resolve(__dirname, './app/hooks/') },
      {find: "@utils/", replacement: path.resolve(__dirname, './app/utils/') },
      //  "@/*": ["./*"],
      // "@hooks/*": ["./app/hooks/*"],
      // "@utils/*": ["./app/utils/*"],
    ]
  },
});