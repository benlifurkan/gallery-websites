import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Icons({
      autoInstall: true,
    }),
  ],
});
