import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Unimport from 'unimport/unplugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tfd-tools/',
  plugins: [
    vue(),
    vueDevTools(),
      Unimport.vite({
        dts: './src/unimport.d.ts' ,
        dirs: [
          './composables/*'
        ],
        presets: [
          'vue',
          'pinia',
        ],
        addons: {
          vueTemplate: true
        }
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
