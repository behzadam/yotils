import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  experimentalDts: true,
  splitting: true,
  clean: true,
  minify: true,
  treeshake: true,
  sourcemap: true,
  outDir: 'dist',
});
