const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

const { config, configs } = require('typescript-eslint');

module.exports = config(...configs.recommended, eslintPluginPrettierRecommended, {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  ignores: ['eslint.config.*'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'],
          ['^(@/.*|$)'],
          ['^\\u0000'],
          ['^.+\\.?(css)$'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
});
