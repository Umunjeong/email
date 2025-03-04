import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { codecovRemixVitePlugin } from "@codecov/remix-vite-plugin";


export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    codecovRemixVitePlugin({
      enableBundleAnalysis: true,
      bundleName: "example-remix-bundle",
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
