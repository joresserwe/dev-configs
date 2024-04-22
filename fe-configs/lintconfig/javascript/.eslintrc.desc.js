/**
  * reference: https://github.com/toss/slash/blob/main/.eslintrc.js
  */
module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
    'shared-node-browser': true, // node, browser 양쪽에서 사용 될 때 유용
  },

  // eslint는 기본으로 AST로 parsing 후 분석된다.
  parser: '@typescript-eslint/parser', // typescript 사용시 적용된다.

  parserOptions: {
    scmaVersisc: 'latest',
    sourceType: 'module', // import, export 구문을 지원한다
    ecmaFeatures: {
      jsx: true,
    }, // JSX 구문을 사용할 수 있게 한다.
  },

  root: true,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    "plugin:next/core-web-vitals", // next 엄격모드
    'prettier',
  ],

  plugins: [
    'react',
    'react-hooks',
    'import',
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
    // 'jsx-a11y', // React a11y 규칙
    // '@emotion', // Styled component 와 같은 Css-in-js
  ],

  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],

  globals: {},

  settings: {
    'import/resolver': { typescript: {} },
    react: { version: 'detect' },
  },

  rules: {
    /**
     * Prettier
     */
    'prettier/prettier': ['error'],
    // 사용하지 않은 변수 금지 (const {a, ...rest} 와 같을 때 rest 부분은 무시)
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    // 상위 Scope 변수 이름이 중복 금지
    "no-shadow": "warn",
    // var 금지
    "no-var": "error", // var 사용 금지
    // 재할당하지 않는 변수에 대해 const 사용 권장
    "prefer-const": "error",     
    // +value, !!value와 같은 형변환 금지
    'no-implicit-coercion': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ],
    // if,for,while등 1줄일 경우에도 중괄호 사용
    curly: ['error', 'all'],
    // null 비교시에만 == 사용 가능
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    "camelcase": ["error", { properties: "always" }],
    "array-callback-return": "warn", // 배열 메서드 콜백에 항상 반환 값이 있어야 함
    "block-scoped-var": "error", // var 변수가 블록 스코프를 벗어나지 못하게 함

    
    /**
     * React
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    "react/self-closing-comp": "error",
    // react 17 이하 주석
     "react/react-in-jsx-scope": "off",
     "react/jsx-uses-react": "off",

    /**
     * Simple-import-sort
     */
    // import문 정렬이 안되어 있다면
    'simple-import-sort/imports': 'error',
    // export문 정렬 안되어 있다면
    'simple-import-sort/exports': 'error',

    /**
     * jsx-a11y
     */
    // "jsx-a11y/click-events-have-key-events": "warn",
    // "jsx-a11y/no-noninteractive-element-interactions": "warn",

    /**
     * v4 change
     */
    // "no-use-before-define": "off",
    // "no-shadow": "off",

    /**
     * @emotion
     */
    // '@emotion/pkg-renaming': 'error',
  },
};
