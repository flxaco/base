module.exports = {
  server: './dist',
  host: '127.0.0.1',
  port: '3000',
  open: false,
  ui: false,
  ghostMode: false,
  files: ['./dist/*.html', './dist/css/*.css', './dist/js/*.js', './dist/images/*'],
  watchEvents: ['change', 'add'],
};
