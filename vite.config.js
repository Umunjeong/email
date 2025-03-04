import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "<bundle project name>",
      uploadToken: process.env.CODECOV_TOKEN,
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
