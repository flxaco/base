module.exports = {
  verbose: true,
  timeout: 500,
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa'],
  },
  rules: {
    // Axe is very strict about which aria attributes/roles are allowed on which
    // HTML elements, creating a lot of false positives.
    'aria-allowed-attr': { enabled: false },
    // This test was found to be extremely flakey with list items created by JS.
    listitem: { enabled: false },
  },
  reporter: 'v2',
  elementRef: true,
};
