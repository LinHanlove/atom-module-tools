import { defineConfig } from 'vite'
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
// import commonjs from '@rollup/plugin-commonjs';


export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
    },
  },
  build: {
    target: 'es2015',
    sourcemap: true,// 映射文件
    minify: "esbuild",// 压缩方式
    lib: {
      entry: resolve(__dirname, './lib/main.ts'),
      name: 'AtomTools',
      fileName: 'atom-tools',
    },
    rollupOptions: {
      // // 构建兼容微信小程序
      // output: {
      //   // 微信小程序不支持ES模块
      //   format: 'es',
      // }
    }
  },
  plugins: [
    vue(), // 处理Vue文件
    // commonjs(),// 处理CommonJS模块
    dts({
      outDir: 'dist/types', // 指定输出类型声明文件的目录 
    }),
  ],
})


