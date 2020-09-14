/* eslint-disable */

const env = 'production';

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-color-function': {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-css-variables': {},
    'postcss-inline-svg': {},
    'postcss-object-fit-images': {},
    cssnano:
    {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }
  },
};
