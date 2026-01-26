// eslint.config.mjs
import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

export default [
  // Ignore patterns
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'node_modules/**',
      '.cache/**',
      '.turbo/**',
      '.vercel/**',
      'coverage/**',
      'next-env.d.ts',
      '.env*.local',
      'public/sw.js',
      'public/workbox-*.js',
      'public/worker-*.js',
      'public/sw.js.map',
      'public/workbox-*.js.map',
      'public/worker-*.js.map',
    ],
  },
  // Base recommended config
  js.configs.recommended,
  // TypeScript configs
  ...tseslint.configs.recommended,
  // React plugin config
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': fixupPluginRules(nextPlugin),
      prettier: fixupPluginRules(prettierPlugin),
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules - disable react-in-jsx-scope for React 17+
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      // Prettier integration
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 100,
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],
    },
  },
];
