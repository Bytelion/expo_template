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
            '@Forms': './src/components/common/Forms',
            '@Helpers': './src/components/common/Helpers',
            '@Image': './src/components/common/Image',
            '@Layout': './src/components/common/Layout',
            '@theme': './src/components/common/theme',
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
