/* eslint-disable */
module.exports = ctx => ({
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
      ctx.env === 'production'
        ? {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }
        : false,
  },
});
