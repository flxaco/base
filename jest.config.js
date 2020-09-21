module.exports = {
  bail: 1,
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
  },
};
