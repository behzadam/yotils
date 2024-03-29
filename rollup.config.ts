import type { OutputOptions, RollupOptions } from 'rollup';
import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString(),
);

const outputs: OutputOptions[] = [
  { file: pkg.main, format: 'cjs', exports: 'auto' },
  { file: pkg.module, format: 'es' },
  { file: pkg.browser, format: 'umd', name: pkg.name },
];

const config: RollupOptions = {
  input: './src/index.ts',
  output: outputs,
  plugins: [
    swc(
      defineRollupSwcOption({
        minify: true,
        sourceMaps: true,
      }),
    ),
  ],
};

export default config;
