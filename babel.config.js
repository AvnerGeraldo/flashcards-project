module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "alias": {
            "@application": "./application",
            "@api": "./application/api",
            "@components": "./application/components",
            "@styled-components": "./application/components/styled",
            "@images": "./application/images",
            "@reducers": "./application/reducers",
            "@routes": "./application/routes",
            "@sagas": "./application/sagas",            
            "@screens": "./application/screens",
            "@utils": "./application/utils",
          },
          "extensions": [".ios.js", ".android.js", ".js", ".json"]
        }
      ],
    ]
  };
};
