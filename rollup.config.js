import rm from 'rimraf'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy-watch'
import csso from 'csso'
import svg from 'rollup-plugin-svg'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'

rm.sync(path.resolve('dist/**/*'))

const packageName = 'vue-next-select'
const pascalCasePackageName = 'VueNextSelect'

const input = 'src/index.vue'
const formats = ['es', 'iife', 'cjs']

if (process.env.DEVELOPMENT) formats.splice(2)

const configs = []
formats.forEach(format => {
  const config = {
    input,
    external: ['vue'],
    plugins: [
      json(),
      vue(),
      svg({ base64: true }),
      resolve(),
      globals(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.vue'],
      }),
    ],
    output: {
      globals: {
        vue: 'Vue',
      },
      format,
      name: pascalCasePackageName,
      extend: true,
      exports: 'auto',
    },
  }

  configs.push({
    ...config,
    output: {
      ...config.output,
      file: path.resolve(`dist/${packageName}.${format}.js`),
    },
  })

  configs.push({
    ...config,
    plugins: [...config.plugins, terser()],
    output: {
      ...config.output,
      file: path.resolve(`dist/${packageName}.${format}.prod.js`),
    },
  })
})

const isWatchMode = process.env.npm_config_argv ? JSON.parse(process.env.npm_config_argv).original.includes('--watch') : false;
configs[configs.length - 1].plugins.push(
  copy({
    watch: isWatchMode ? ['src/index.css'] : false,
    copyOnce: isWatchMode === false,
    verbose: true,
    targets: [
      {
        src: 'src/index.css',
        dest: 'dist',
        rename: (name, extension) => `${name}.min.${extension}`,
        transform: content => csso.minify(content).css,
      },
      { src: 'src/index.css', dest: 'dist' },
    ],
  }),
)

export default configs
