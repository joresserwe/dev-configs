/**
 * Biome이 대체하지 못하는 특화 Plugin 설정
 */
import nextPlugin from '@next/eslint-plugin-next';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import security from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';
import biomeConfig from 'eslint-config-biome';

export default tseslint.config(
  biomeConfig,
  security.configs.recommended,
  ...tanstackQuery.configs['flat/recommended'],
  {
    plugins: {
      'better-tailwindcss': betterTailwindcss,
    },
    rules: {
      ...betterTailwindcss.configs.recommended.rules,
    },
    settings: {
      'better-tailwindcss': {
        // 프로젝트의 Tailwind CSS 진입점 파일 경로를 지정하세요.
        entryPoint: 'src/global.css',
      },
    },
  },

  // =================================================================
  // 전역 설정 (규칙 최소화)
  // =================================================================
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        projectService: true
      },
    },
    plugins: {
      '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: true,
      },
    },
    rules: {
      // ==================== NEXT.JS 특화 규칙 (Next.js Specific Rules) ====================
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-css-tags': 'error',
      '@next/next/no-unwanted-polyfillio': 'error',
      '@next/next/no-page-custom-font': 'error',
      '@next/next/no-document-import-in-page': 'error',
      
    },
  },
);
