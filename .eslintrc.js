module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts', 'js'] }],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
}
