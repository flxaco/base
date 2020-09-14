const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, mode) => {
    console.log('*** Custom webpack running ****');
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/'
    );

    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }));

    config.module.rules.push({
      test: /\.css$/i,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            /* 
              Enable Source Maps
             */
            sourceMap: true,
            postcssOptions: {
              plugins: [
                postcssPresetEnv(),
                'postcss-nesting',
              ],
            },
          },
        },
      ],

      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
