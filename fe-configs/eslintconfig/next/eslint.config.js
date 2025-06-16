import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import security from 'eslint-plugin-security';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  // =================================================================
  // 베이스 및 추천 설정 (Base & Recommended Configurations)
  // =================================================================
  js.configs.recommended,
  unicorn.configs['flat/recommended'],
  sonarjs.configs.recommended,
  security.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
    },
  },
  prettierConfig, // 항상 마지막에 위치하여 다른 규칙과 충돌 방지

  // =================================================================
  // 전역 설정 (Global Configurations)
  // =================================================================
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
      prettier: prettier,
      'simple-import-sort': simpleImportSort,
      unicorn: unicorn,
      sonarjs: sonarjs,
      security: security,
      'jsx-a11y': jsxA11y,
      'unused-imports': unusedImports,
      import: importPlugin,
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
      // ==================== PRETTIER 설정 (Code Formatting) ====================
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 100,
          bracketSpacing: true,
          arrowParens: 'avoid',
          endOfLine: 'lf',
        },
      ],

      // ==================== TYPESCRIPT 엄격한 타입 안전성 (Strict Type Safety) ====================
      '@typescript-eslint/no-unused-vars': 'off', // unused-imports가 처리
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksConditionals: true,
          checksVoidReturn: false, // React 이벤트 핸들러와의 호환성
        },
      ],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        { format: ['camelCase', 'UPPER_CASE', 'PascalCase'], selector: 'variable', leadingUnderscore: 'allow' },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], selector: 'interface' },
        { format: ['PascalCase'], selector: 'typeAlias' },
        { format: ['PascalCase'], selector: 'enum' },
        { format: ['UPPER_CASE'], selector: 'enumMember' },
      ],

      // ==================== 성능 및 최적화 (Performance & Optimization) ====================
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['error', 'as-needed'],

      // ==================== 코드 품질 및 일관성 (Code Quality & Consistency) ====================
      'no-implicit-coercion': 'error',
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft', 'state'] }],
      'no-nested-ternary': 'error',
      'complexity': ['warn', 12],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', 80],
      'max-lines': ['warn', 500],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-magic-numbers': ['warn', { ignore: [0, 1, -1], ignoreArrayIndexes: true, ignoreDefaultValues: true }],

      // ==================== REACT 현대적 패턴 강제 (Modern React Patterns) ====================
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
      ],
      'react/jsx-sort-props': [
        'error',
        { callbacksLast: true, shorthandFirst: true, reservedFirst: true },
      ],
      'react/self-closing-comp': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/no-array-index-key': 'warn',
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
      'react/hook-use-state': 'error',

      // ==================== REACT HOOKS 안전한 사용 (Safe Hook Usage) ====================
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'error',

      // ==================== IMPORT/EXPORT 정리 (Import/Export Sorting & Validation) ====================
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off', // TypeScript가 처리
      'import/order': 'off', // simple-import-sort가 처리
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Next.js, React, 3rd-party packages
            ['^next', '^react', '^@?\\w'],
            // Absolute imports (alias) for Next.js
            ['^(@|@/|app|components|pages|hooks|utils|lib|types|styles|assets)(/.*|$)'],
            // Relative imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$'],
            // Side effect imports
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // ==================== UNICORN 모던 JS 패턴 (Modern JavaScript Patterns) ====================
      'unicorn/filename-case': ['error', { cases: { kebabCase: true, pascalCase: true } }],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            props: false,
            ref: false,
            params: false,
            args: false,
            env: false,
            dev: false,
            prod: false,
          },
        },
      ],
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-module': 'off', // CommonJS 호환성
      'unicorn/no-null': 'off', // React에서 null 사용 빈번
      'unicorn/consistent-function-scoping': 'off', // 컴포넌트 내 함수 정의 허용
      'unicorn/prefer-top-level-await': 'off', // 일부 환경에서 지원하지 않음

      // ==================== SONARJS 버그 방지 및 성능 (Bug Detection & Performance) ====================
      'sonarjs/cognitive-complexity': ['warn', 15],
      'sonarjs/no-duplicate-string': ['error', { threshold: 4 }],
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-identical-expressions': 'error',

      // ==================== SECURITY 보안 (Security) ====================
      'security/detect-object-injection': 'warn',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-unsafe-regex': 'error',

      // ==================== NEXT.JS 특화 규칙 (Next.js Specific Rules) ====================
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'error',
    },
  },

  // =================================================================
  // 특정 파일 타입 오버라이드 (File-specific Overrides)
  // =================================================================
  {
    // Next.js 페이지/앱 디렉토리
    files: [
      'pages/**/*.{js,jsx,ts,tsx}',
      'app/**/*.{js,jsx,ts,tsx}',
      'src/pages/**/*.{js,jsx,ts,tsx}',
      'src/app/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      'unicorn/filename-case': 'off', // `[id].tsx` 같은 파일명 허용
      'import/no-default-export': 'off', // 페이지 컴포넌트는 default export 필수
      'react/function-component-definition': 'off', // 페이지 컴포넌트 유연성
    },
  },
  {
    // 테스트 파일
    files: [
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
      '**/__tests__/**',
      '**/__mocks__/**',
    ],
    rules: {
      'no-console': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'max-lines-per-function': 'off',
      'max-lines': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-magic-numbers': 'off',
      'unicorn/consistent-function-scoping': 'off',
    },
  },
  {
    // 설정 파일
    files: [
      '*.config.{js,mjs,ts}',
      'middleware.{js,ts}',
      'instrumentation.{js,ts}', // Next.js 13+ 계측 파일
    ],
    rules: {
      'no-console': 'off',
      'unicorn/filename-case': 'off',
      'import/no-default-export': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'unicorn/prefer-module': 'off',
      'no-magic-numbers': 'off',
    },
  },

  // =================================================================
  // 무시할 파일 및 디렉토리 (Ignores)
  // =================================================================
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'public/**',
      '*.min.js',
      '*.min.css',
      '.next/**',
      'out/**',
      'next-env.d.ts',
    ],
  },
];
