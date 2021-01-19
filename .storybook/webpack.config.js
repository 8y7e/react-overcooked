const sass = require('sass');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true,
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              'postcss-flexbugs-fixes',
              ['postcss-preset-env', {
                autoprefixer: { flexbox: 'no-2009' },
                stage: 3,
              }],
              'postcss-normalize',
            ],
          },
          sourceMap: true,
        },
      },

      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,

          implementation: sass,

          sassOptions: {
            outputStyle: 'expanded',
            sourceComments: true,
          },
        },
      },
    ],
  });

  return config;
};
