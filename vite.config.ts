import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib')
    }
  },
  build: {
    target: 'es2015',
    sourcemap: true, // 映射文件
    minify: true, // 压缩方式

    lib: {
      entry: resolve(__dirname, './lib/main.ts'),
      name: 'AtomTools',
      fileName: 'atom-tools'
    },
    rollupOptions: {}
  },
  plugins: [
    vue(), // 处理Vue文件
    commonjs(), // 处理CommonJS模块
    dts({
      include: ['src/**/*', 'lib/**/*'],
      copyDtsFiles: true, // 自动把目录下的所有d.ts文件复制到dist文件夹
      outDir: 'dist/types' // 指定输出类型声明文件的目录
    })
  ]
})
