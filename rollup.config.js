import fs from 'fs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs';

const move = (source, target) => ({
  writeBundle() {
    if (!fs.existsSync(source) || fs.existsSync(target)) return;

    fs.renameSync(source, target);
  },
});

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: 'lib/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named', // Disable warning for default imports
    },
  ],
  plugins: [
    del({ targets: ['lib/*', 'styles.css'] }),
    peerDepsExternal(),
    postcss({
      extract: 'styles.css',
      modules: {
        globalModulePaths: [/node_modules/],
      },
      use: [['sass', { sourceComments: true }]],
      plugins: [postcssPresetEnv()],
    }),
    babel({ exclude: /node_modules/, babelHelpers: 'runtime' }),
    commonjs(),
    resolve({ browser: true, extensions: ['.js', '.jsx', '.json'] }),
    json(),
    move('./lib/styles.css', './styles.css'),
  ],
};
