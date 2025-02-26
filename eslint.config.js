import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import tsdoc from 'eslint-plugin-tsdoc';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.test.ts'],
    plugins: {
      '@typescript-eslint': tseslint,
      tsdoc: tsdoc,
      import: importPlugin,
      jest: jestPlugin,
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'tsdoc/syntax': 'warn',
      'import/no-unresolved': 'error',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.test.ts'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
];
