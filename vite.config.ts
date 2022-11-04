import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
