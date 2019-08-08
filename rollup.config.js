/* eslint-disable */

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { string } from 'rollup-plugin-string';
import { uglify } from 'rollup-plugin-uglify';

export default {
  plugins: [
    resolve(),
    commonjs(),
    string({
      include: '**/*.svg',
    }),
    babel({
      presets: [['@babel/preset-env', {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 'core-js@2',
      }]],
      babelrc: false,
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
