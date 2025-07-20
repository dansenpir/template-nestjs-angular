import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/main.ts',
      exportName: 'viteNodeApp',
      tsCompiler: 'esbuild',
      swcOptions: {},
    }),
  ],
  build: {
    target: 'es2022',
    outDir: 'dist',
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
      fileName: 'main',
    },
    rollupOptions: {
      external: [
        'express',
        '@nestjs/common',
        '@nestjs/core',
        '@nestjs/platform-express',
      ],
    },
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
});
