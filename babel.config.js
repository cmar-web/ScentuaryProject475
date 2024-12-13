module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',  // The name you will use to import the env variables
          path: '.env',         // Path to the .env file
        },
      ],
    ],
  };
};