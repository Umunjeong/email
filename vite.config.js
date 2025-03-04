import { defineConfig } from "vite";
import { codecovVitePlugin } from "@codecov/vite-plugin";

const token = process.env.VITE_CODECOV_TOKEN;

export default defineConfig({
  build: {
    target: "esnext",
    format: "esm",
  },
  plugins: [
    codecovVitePlugin({
      enableBundleAnalysis: token !== undefined,
      bundleName: "umunjeong-email",
      uploadToken: token,
    }),
  ],
  server: {
    port: 7777,
  },
  optimizeDeps: {
    include: ["@supabase/supabase-js"],
  },
  define: {
    "process.env": {},
  },
});
