'use strict';

module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'jest', 'import', '@typescript-eslint/eslint-plugin'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'camelcase': 'off',
    'no-restricted-syntax': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/prefer-default-export': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
