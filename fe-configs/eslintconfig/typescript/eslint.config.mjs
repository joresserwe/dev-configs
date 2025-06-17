import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';
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
  regexp.configs['flat/recommended'],
  promise.configs['flat/recommended'],
  unicorn.configs.recommended,
  sonarjs.configs.recommended,
  security.configs.recommended,
  importPlugin.configs.typescript,
  prettierConfig, // 항상 마지막에 위치하여 다른 규칙과 충돌 방지

  // =================================================================
  // 전역 설정 (Global Configurations)
  // =================================================================
  {
    files: ['**/*.{js,ts,mjs,cjs}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        EXPERIMENTAL_useProjectService: true,
      },
    },
    plugins: {
      'import': importPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    settings: {
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
      '@typescript-eslint/no-misused-promises': 'error',
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
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      'prefer-destructuring': [
        'error',
        { array: false, object: true },
        { enforceForRenamedProperties: false },
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
      'no-magic-numbers': ['off'], // 너무 제한적임

      // ==================== IMPORT/EXPORT 정리 (Import/Export Sorting & Validation) ====================
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'off',
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^.*\\u0000$'], // Type imports
            ['^node:'], // Node.js builtins
            [String.raw`^@?\w`], // External packages
            ['^@/'], // Internal packages
            [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`], // Parent imports
            [String.raw`^\./(?=.*/)(?!/?$)`, String.raw`^\.(?!/?$)`, String.raw`^\./?$`], // Other relative imports
            [String.raw`^.+\.s?css$`], // Style imports
            [String.raw`^\u0000`], // Side effect imports
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
      'unicorn/filename-case': ['error', { cases: { kebabCase: true, pascalCase: true } }],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            params: false,
            args: false,
            env: false,
            dev: false,
            prod: false,
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
      'unicorn/no-array-for-each': 'off',
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
      'security/detect-object-injection': 'off',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-unsafe-regex': 'error',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-eval-with-expression': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-possible-timing-attacks': 'warn',
    },
  },

  // =================================================================
  // 특정 파일 타입 오버라이드 (File-specific Overrides)
  // =================================================================
  {
    // 테스트 파일
    files: [
      '**/*.test.{js,ts}',
      '**/*.spec.{js,ts}',
      '**/__tests__/**',
      '**/__mocks__/**',
      '**/tests/**',
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
      '**/generated/**',
      '**/.turbo/**',
      '**/.cache/**',
      '**/*.generated.*',
    ],
  },
);
