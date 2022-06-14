import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    build: {
      minify: 'esbuild',
      rollupOptions: {}
    },
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
        },
      }
    }
  })
}