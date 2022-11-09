import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import { VitePluginFonts } from 'vite-plugin-fonts'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    }),
    Components(),
    VitePluginFonts({
      google: {
        families: [
          'Fira+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700',
          'Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/fonts.scss";`,
      },
    },
  },
})
