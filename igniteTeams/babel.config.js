module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  /**inserir este plugin */
  'plugins': [
    'module-resolver', {
      /**indicar qual é a pasta raiz */
      root: ['./src'],
      /**indicar uma alias, para cada pasta */
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@routes': './src/routes',
        '@screens': './src/screens',
        '@storage': './src/storage',
        '@theme': './src/theme',
        '@utils': './src/utils',
      },
    },
  ],
};
