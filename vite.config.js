import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://element-plus.org/en-US/guide/quickstart.html#on-demand-import
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 打包的時候出現超過 500 KIB 的解決方法
  // 加大限制 chunkSizeWarningLimit
  build: {
    chunkSizeWarningLimit: 1600,
    // 打包配置 - 將大塊分解成小塊?
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
