import { terser } from 'rollup-plugin-terser'
import sizeCheck from 'rollup-plugin-filesize-check'
import { nodeResolve } from '@rollup/plugin-node-resolve';

const opts = {
  keep_classnames: true,
  module: true,
}

export default [
  {
    input: 'src/index.js',
    output: [{ file: 'builds/one/change-hands.cjs', format: 'umd', name: 'changeHands' }],
    plugins: [nodeResolve(), terser(opts), sizeCheck({ expect: 40, warn: 15 })],
  },
  {
    input: 'src/index.js',
    output: [{ file: 'builds/one/change-hands.mjs', format: 'esm' }],
    plugins: [nodeResolve(), terser(opts), sizeCheck({ expect: 40, warn: 15 })],
  }
]
