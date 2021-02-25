module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          // Make sure to update .eslintrc as well
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@common': './src/components/common',
            '@forms': './src/components/Forms',
            '@helpers': './src/components/Helpers',
            '@image': './src/components/Image',
            '@layout': './src/components/Layout',
            '@config': './src/config',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
