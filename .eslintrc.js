module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['import'],
  rules: {
    'vue/multi-word-component-names': 'off',
    eqeqeq: 2,
    'no-underscore-dangle': ['error', { allow: ['__name'] }],
    'no-else-return': 2,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'all',
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore', // https://github.com/prettier/prettier/issues/5844
      },
    ],
  },
};
