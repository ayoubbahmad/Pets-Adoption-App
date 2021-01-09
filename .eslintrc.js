module.exports = {
  plugins: ['react', 'react-native', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    useJSXTextNode: false,
  },
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-native/no-raw-text': 0, // Avoid false positive, wait for fix
  },
};
