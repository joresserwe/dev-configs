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

    // @ts- 주석 사용 금지
    '@typescript-eslint/ban-ts-comment': 'off',
    // @ts-ignore 주석 금지
    '@typescript-eslint/ban-ts-ignore': 'off',
    // 사용하지 않은 변수 금지 (const {a, ...rest} 와 같을 때 rest 부분은 무시)
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    // 객체 리터럴에 대한 타입 단언 금지 ({} as Type 등 as 사용)
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    // 상위 Scope 변수 이름이 중복 금지
    '@typescript-eslint/no-shadow': 'warn',
    // 특정 타입 사용 금지 (예: {}, object)
    '@typescript-eslint/ban-types': 'warn',
    // Any 타입 금지
    '@typescript-eslint/no-explicit-any': 'warn',
    // 모듈 경계의 반환 타입을 명시적으로 지정하지 않아도 됨
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    //
    '@typescript-eslint/no-parameter-properties': 'off',
    // require문 사용 금지
    '@typescript-eslint/no-var-requires': 'warn',
    // Optinal Chaning(?.) 이후 ! 금지
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    // Type 추론 가능할 경우 명시적 타입 선언 금지
    '@typescript-eslint/no-inferrable-types': 'warn',
    // 명명 규칙
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],

    // Array 생성 방법이 default가 아닌지 (array-simple: Type[]);
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    // member는 아래와 같은 순서로 짜야됨
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],

    /**
     * All
     */
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
