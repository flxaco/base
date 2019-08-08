/* eslint-disable import/no-extraneous-dependencies */

/**
 * @file
 * Defines tasks from imported functions.
 */

import {
  task, watch, series, parallel,
} from 'gulp';
import browserSync from 'browser-sync';
import run from 'gulp-run-command';
import bsConf from './browser-sync.conf';

// Files to watch for changes.
const watchFiles = {
  css: ['packages/*/src/**/*.css', 'packages/*/src/**/*.svg', 'kss/**/*.css'],

  assets: ['packages/*/src/**/*.{svg,jpg,png,gif,woff,woff2}'],

  js: ['packages/*/src/**/*.js', 'kss/kss.es6.js'],

  styleguide: ['packages/*/src/**/*.twig', 'packages/*/src/**/*.json', 'kss/homepage.md'],
};

// Watch options.
const watchOptions = {
  usePolling: false,
};

/**
 * Declare Browsersync runner.
 * @param {function} cb - Callback to signal completion.
 */
const bs = (cb) => {
  browserSync.init(bsConf, cb());
};
bs.description = 'Start Browsersync';
task('browsersync', bs);

/**
 * Declare kss:assets script runner.
 */
const kssAssets = run('npm run kss:assets');
kssAssets.description = 'Runs npm script kss:assets';
task('kss:assets', kssAssets);

/**
 * Declare kss:css script runner.
 */
const kssCss = run('npm run kss:css');
kssCss.description = 'Runs npm script kss:css';
task('kss:css', kssCss);

/**
 * Declare kss:js script runner.
 */
const kssJs = run('npm run kss:js');
kssJs.description = 'Runs npm script kss:js';
task('kss:js', kssJs);

/**
 * Declare kss:build script runner.
 */
const kssBuild = run('npm run kss:build');
kssBuild.description = 'Runs npm script kss:build';
task('kss:build', kssBuild);

/**
 * File watchers functions.
 * @return {function} exec
 */
const css = () => watch(watchFiles.css, watchOptions, series('kss:css', 'kss:build'));
const assets = () => watch(watchFiles.assets, watchOptions, series('kss:assets'));
const js = () => watch(watchFiles.js, watchOptions, series('kss:js'));
const kss = () => watch(watchFiles.styleguide, watchOptions, series('kss:build'));

/**
 * Declare watch runner.
 */
const watcher = parallel(assets, css, js, kss);
watcher.description = 'Watch styles, js and styleguide files and rebuild as needed on change';
task('watch', watcher);

/**
 * Declare default runner.
 */
const runner = series('kss:assets', 'kss:css', 'kss:js', 'kss:build', 'browsersync', 'watch');
runner.description = 'Initial build, start Browsersync and begin watching for changes';
task('default', runner);
