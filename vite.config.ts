import { defineConfig } from 'vite'
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './lib/main.ts'),
      name: 'AtomTools',
      fileName: 'atom-tools',
    }
  },
  plugins: [
    vue(), // 处理Vue文件
    dts({
      outDir: 'dist/types', // 指定输出类型声明文件的目录 
    }),
  ],
})


