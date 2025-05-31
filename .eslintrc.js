/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
      'standard',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'expo',
      'prettier'
    ],
    plugins: [
      '@typescript-eslint',
      'react',
      'react-native'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: 'detect' } },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react-native/no-color-literals': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'react-native/no-inline-styles': 'off',
      }  
  };
  