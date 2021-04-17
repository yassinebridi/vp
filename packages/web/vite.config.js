import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@adapters", replacement: "/src/adapters" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@design-system", replacement: "/src/design-system" },
    ],
  },
});
