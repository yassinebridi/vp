import { VitePluginNode } from 'vite-plugin-node';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [
    ...VitePluginNode({
      server: 'nest',
      tsCompiler: 'swc',
      appPath: './src/main.ts',
      port: 4000,
    }),
  ],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: '/src',
      },
    ],
  },
};

export default config;
