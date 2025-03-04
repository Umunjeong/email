import { defineConfig } from "vite";
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
  plugins: [
    codecovVitePlugin({
      enableBundleAnalysis: import.meta.env.VITE_CODECOV_TOKEN !== undefined,
      bundleName: "umunjeong-email",
      uploadToken: import.meta.env.VITE_CODECOV_TOKEN,
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
