module.exports = {
  src_folders: ['packages'],
  output_folder: 'dist/logs/nightwatch',
  custom_commands_path: ['./node_modules/nightwatch-accessibility/commands'],
  custom_assertions_path: ['./node_modules/nightwatch-accessibility/assertions'],
  test_settings: {
    default: {
      filter: '**/tests/*Test.js',
      exclude: [
        './accordion/node_modules',
      ],
      launch_url: 'http://127.0.0.1:3000',
      selenium_host: '127.0.0.1',
      selenium_port: '4444',
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'dist/logs/nightwatch',
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};
