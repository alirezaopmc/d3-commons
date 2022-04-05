import { babel } from '@rollup/plugin-babel';
import commonJs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.ts'];

const blah = () => {
  return [
    {
      input: `src/index.ts`,
      output: [
        { file: `dist/d3-commons.cjs.js`, format: 'cjs' },
        { file: `dist/d3-commons.esm.js`, format: 'esm' },
        { file: `dist/d3-commons.umd.js`, format: 'umd', name: 'd3-commons' },
      ],
      plugins: [
        nodeResolve({ extensions }),
        babel({
          exclude: /node_modules/,
          extensions,
          babelHelpers: 'bundled',
          configFile: path.resolve(__dirname, 'babel.config.json'),
        }),
        commonJs(),
        terser()
      ],
    },
  ];
};

export default function rollup(options) {
  let builds = [ ...blah(options) ];

  return builds;
}