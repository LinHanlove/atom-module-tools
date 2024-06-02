import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
      '@/docs': resolve(__dirname, 'docs/src')
    }
  },
  server: {
    port: 5000,
    open: true,
    // 热更新
    fs: {
      strict: false
    }
  },
  build: {
    target: 'es2015',
    sourcemap: true, // 映射文件
    minify: true, // 压缩方式
    lib: {
      entry: resolve(__dirname, './lib/public/main.ts'),
      name: 'AtomTools',
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        dir: 'dist/AtomTools'
      }
    }
  },

  plugins: [
    vue(), // 处理Vue单文件组件
    vueJsx(), // 处理Vue JSX
    commonjs(), // 处理CommonJS模块
    dts({
      include: ['lib/**/*'],
      copyDtsFiles: true, // 自动把目录下的所有d.ts文件复制到dist文件夹
      outDir: 'dist/types' // 指定输出类型声明文件的目录
    })
  ]
})
