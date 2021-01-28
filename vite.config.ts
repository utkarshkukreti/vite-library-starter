import { defineConfig } from 'vite'

import * as pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: pkg.umdName,
    },
    sourcemap: true,
  },
})
