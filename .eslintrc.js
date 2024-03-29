module.exports = {
  root: true,
  extends: ['blvd/react', 'prettier', 'prettier/@typescript-eslint', 'prettier/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
  overrides: [
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: { sourceType: 'script' },
      env: { node: true },
    },
  ],
};
