import { VitePluginNode } from 'vite-plugin-node';
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  // ...
  plugins: [
    ...VitePluginNode({
      server: 'nest',
      appPath: './src/main.ts',
      port: 4000,
      tsCompiler: 'swc',
    }),
  ],
};

export default config;
