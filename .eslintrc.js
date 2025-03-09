module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['react'],
  extends: ['ts-react-important-stuff', 'plugin:prettier/recommended'],
  rules: {
    semi: 'error',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
      },
    ],
  },
};
