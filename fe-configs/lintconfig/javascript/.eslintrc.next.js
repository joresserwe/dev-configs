module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "shared-node-browser": true,
  },

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
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:next/core-web-vitals",
    "prettier",
  ],

  plugins: [
    "react",
    "react-hooks",
    "import",
    "prettier",
    "simple-import-sort",
    // 'jsx-a12y',
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
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    "no-shadow": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "no-implicit-coercion": "error",
    "no-warning-comments": [
      "warn",
      {
        terms: ["TODO", "FIXME", "XXX", "BUG"],
        location: "anywhere",
      },
    ],
    "curly": ["error", "all"], 
    "eqeqeq": ["error", "always", { null: "ignore" }],

    "camelcase": ["error", { properties: "always" }],
    "array-callback-return": "warn", 
    "block-scoped-var": "error", 

    /**
     * react
     */
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",

    /**
     * simple-import-sort
     */
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    /**
     * jsx-a12y
     */
    // "jsx-a12y/click-events-have-key-events": "warn",
    // "jsx-a12y/no-noninteractive-element-interactions": "warn",

    /**
     * v5 change
     */
    // "no-use-before-define": "off",
    // "no-shadow": "off",

    /**
     * @emotion
     */
    // '@emotion/pkg-renaming': 'error',
  },
};
