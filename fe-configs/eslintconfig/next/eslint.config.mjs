import js from '@eslint/js'; 
import nextPlugin from '@next/eslint-plugin-next';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import prettierConfig from 'eslint-config-prettier';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import regexp from 'eslint-plugin-regexp';
import security from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // =================================================================
  // 베이스 및 추천 설정 (Base & Recommended Configurations)
  // =================================================================
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  react.configs.flat.recommended,
  regexp.configs['flat/recommended'],
  promise.configs['flat/recommended'],
  unicorn.configs.recommended,
  sonarjs.configs.recommended,
  security.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  ...tanstackQuery.configs['flat/recommended'],
  reactHooks.configs['recommended-latest'],
  importPlugin.configs.typescript,
  {
    plugins: {
      'better-tailwindcss': betterTailwindcss,
    },
    rules: {
      ...betterTailwindcss.configs.recommended.rules,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/global.css', // Tailwind CSS 4: CSS 기반 설정 파일 경로
      },
    },
  },
  prettierConfig, // 항상 마지막에 위치하여 다른 규칙과 충돌 방지

  // =================================================================
  // 전역 설정 (Global Configurations)
  // =================================================================
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        EXPERIMENTAL_useProjectService: true,
      },
    },
    plugins: {
      'import': importPlugin,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: true,
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // ==================== TYPESCRIPT 엄격한 타입 안전성 (Strict Type Safety) ====================
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
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
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { 
          prefer: 'type-imports', 
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'property',
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'objectLiteralProperty',
          format: null,
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: true,
          allowNumber: true,
          allowNullableObject: true,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',

      // ==================== 성능 및 최적화 (Performance & Optimization) ====================
      'no-console': [
        'error',
        { 
          allow: ['warn', 'error', 'info'],
        },
      ],
      'no-debugger': 'error',
      'no-alert': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*'],
              message: 'Use absolute imports instead of relative imports.',
            },
          ],
          paths: [
            {
              name: 'lodash',
              message: 'Use lodash-es instead for better tree-shaking.',
            },
            {
              name: 'moment',
              message: 'Use date-fns or dayjs instead for better performance.',
            },
          ],
        },
      ],

      // ==================== 코드 품질 및 일관성 (Code Quality & Consistency) ====================
      'no-implicit-coercion': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['draft', 'state', 'acc', 'accumulator', 'req', 'res'],
        },
      ],
      'no-nested-ternary': 'error',
      complexity: ['warn', 15],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', 100],
      'max-lines': ['warn', 500],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-magic-numbers': [
        'off', // 너무 제한적임
      ],

      // ==================== REACT 현대적 패턴 강제 (Modern React Patterns) ====================
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'error',
        { 
          props: 'never', 
          children: 'never',
          propElementValues: 'always',
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          reservedFirst: true,
          locale: 'auto',
        },
      ],
      'react/self-closing-comp': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/no-array-index-key': 'error',
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'react/jsx-no-constructed-context-values': 'error',
      'react/hook-use-state': 'error',
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
      'react/no-unstable-nested-components': 'error',
      'react/jsx-handler-names': [
        'off', // 너무 제한적임
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/void-dom-elements-no-children': 'error',

      // ==================== IMPORT/EXPORT 정리 (Import/Export Sorting & Validation) ====================
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'off',
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Type imports
            ['^.*\\u0000$'],
            // Node.js builtins prefixed with `node:`
            ['^node:'],
            // React and Next.js
            ['^react', '^next'],
            // External packages
            [String.raw`^@?\w`],
            // Internal packages starting with @/
            ['^@/'],
            // Parent imports
            [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
            // Other relative imports
            [String.raw`^\./(?=.*/)(?!/?$)`, String.raw`^\.(?!/?$)`, String.raw`^\./?$`],
            // Style imports
            [String.raw`^.+\.s?css$`],
            // Side effect imports
            [String.raw`^\u0000`],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/no-cycle': ['error', { maxDepth: 1 }],
      'import/no-self-import': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-mutable-exports': 'error',

      // ==================== UNICORN 모던 JS 패턴 (Modern JavaScript Patterns) ====================
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
          ignore: [
            String.raw`^\[.*\]\.(js|jsx|ts|tsx)$`, // Next.js dynamic routes
            String.raw`^_.*\.(js|jsx|ts|tsx)$`, // Next.js special files
          ],
        },
      ],
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
            ctx: false,
            req: false,
            res: false,
            err: false,
            e: false,
            i: false,
            j: false,
            k: false,
          },
        },
      ],
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-module': 'off',
      'unicorn/no-null': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/no-array-for-each': 'off', // forEach는 때로 더 명확함
      'unicorn/explicit-length-check': 'error',
      'unicorn/prefer-export-from': 'error',
      'unicorn/prefer-ternary': 'off',

      // ==================== SONARJS 버그 방지 및 성능 (Bug Detection & Performance) ====================
      'sonarjs/cognitive-complexity': ['warn', 20],
      'sonarjs/no-duplicate-string': ['error', { threshold: 5 }],
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/no-collapsible-if': 'error',
      'sonarjs/no-nested-template-literals': 'error',

      // ==================== SECURITY 보안 (Security) ====================
      'security/detect-object-injection': 'off', // 너무 많은 false positive
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-unsafe-regex': 'error',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-eval-with-expression': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-possible-timing-attacks': 'warn',

      // ==================== NEXT.JS 특화 규칙 (Next.js Specific Rules) ====================
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-css-tags': 'error',
      '@next/next/no-unwanted-polyfillio': 'error',
      '@next/next/no-page-custom-font': 'error',
      '@next/next/no-document-import-in-page': 'error',

      // ==================== TANSTACK QUERY (React Query) ====================
      '@tanstack/query/exhaustive-deps': 'error',
      '@tanstack/query/stable-query-client': 'error',
    },
  },

  // =================================================================
  // 특정 파일 타입 오버라이드 (File-specific Overrides)
  // =================================================================
  {
    // Next.js App Router
    files: ['**/app/**/*.{js,jsx,ts,tsx}', '**/src/app/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'unicorn/filename-case': 'off',
      'import/no-default-export': 'off',
      'react/function-component-definition': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
      ],
    },
  },
  {
    // Pages Router
    files: ['**/pages/**/*.{js,jsx,ts,tsx}', '**/src/pages/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'unicorn/filename-case': 'off',
      'import/no-default-export': 'off',
      'react/function-component-definition': 'off',
    },
  },
  {
    // 테스트 파일
    files: [
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
      '**/__tests__/**',
      '**/__mocks__/**',
      '**/tests/**',
      '**/*.stories.{js,jsx,ts,tsx}',
      '**/test-utils/**',
    ],
    rules: {
      'no-console': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'max-lines-per-function': 'off',
      'max-lines': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-magic-numbers': 'off',
      'unicorn/consistent-function-scoping': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'security/detect-non-literal-fs-filename': 'off',
      'promise/prefer-await-to-then': 'off',
    },
  },
  {
    // 설정 파일
    files: [
      '*.config.{js,mjs,cjs,ts}',
      '**/config/*.{js,mjs,cjs,ts}',
      'middleware.{js,ts}',
      'instrumentation.{js,ts}',
      'postcss.config.{js,mjs,cjs}',
      'tailwind.config.{js,ts}',
      'next.config.{js,mjs,ts}',
      'vitest.config.{js,mjs,ts}',
      'jest.config.{js,mjs,ts}',
      'playwright.config.{js,mjs,ts}',
    ],
    rules: {
      'no-console': 'off',
      'unicorn/filename-case': 'off',
      'import/no-default-export': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'unicorn/prefer-module': 'off',
      'no-magic-numbers': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  {
    // Type definition files
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'import/no-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    // MDX files
    files: ['**/*.mdx'],
    rules: {
      'react/jsx-no-undef': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },

  // =================================================================
  // 무시할 파일 및 디렉토리 (Ignores)
  // =================================================================
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/public/**',
      '**/*.min.js',
      '**/*.min.css',
      '**/.next/**',
      '**/out/**',
      '**/next-env.d.ts',
      '**/.contentlayer/**',
      '**/.vercel/**',
      '**/generated/**',
      '**/.turbo/**',
      '**/.cache/**',
      '**/storybook-static/**',
      '**/*.generated.*',
      '**/*.mjs',
    ],
  },
);
