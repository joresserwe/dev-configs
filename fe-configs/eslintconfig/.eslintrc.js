module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
    "shared-node-browser": true,
  },

  // typescript 사용시 활성화
  // parser: '@typescript-eslint/parser',

  parserOptions: {
    scmaVersisc: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  root: true,

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],

  plugins: [
    "react",
    "react-hooks",
    "import",
    "prettier",
    "@typescript-eslint",
    "simple-import-sort",
    // 'jsx-a11y',
    // '@emotion',
  ],

  ignorePatterns: [".eslintrc.js", "webpack.config.js"],

  globals: {},

  settings: {
    "import/resolver": { typescript: {} },
    react: { version: "detect" },
  },

  rules: {
    "prettier/prettier": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        selector: "variable",
        leadingUnderscore: "allow",
      },
      { format: ["camelCase", "PascalCase"], selector: "function" },
      { format: ["PascalCase"], selector: "interface" },
      { format: ["PascalCase"], selector: "typeAlias" },
    ],
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "private-static-field",
          "public-instance-field",
          "private-instance-field",
          "public-constructor",
          "private-constructor",
          "public-instance-method",
          "private-instance-method",
        ],
      },
    ],
    "no-implicit-coercion": "error",
    "no-warning-comments": [
      "warn",
      {
        terms: ["TODO", "FIXME", "XXX", "BUG"],
        location: "anywhere",
      },
    ],
    curly: ["error", "all"],
    eqeqeq: ["error", "always", { null: "ignore" }],

    /**
     * react
     */
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",

    /**
     * simple-import-sort
     */
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

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
