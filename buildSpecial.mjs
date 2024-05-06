/**
 * vite目前并不能构建多个特殊库，但是可以通过配置多个lib来解决
 * github并没有找到解决办法，但是目前这种方式或许是最优的解决方式
 */

import { build } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

/**
 * 在 ES 模块中，__dirname 不是一个全局变量，因为它是 CommonJS 模块的一部分。
 */
const __dirname = fileURLToPath(new URL('.', import.meta.url))

/**
 * @Array 特殊构建库的根路径
 * 规定：必须由大写组成文件夹，其文件夹内必须统一由main.ts导出具体的模块
 */
const libMapRootPath = ['Vue', 'WeChat']

const libraries = libMapRootPath.map((name) => {
  return {
    entry: resolve(__dirname, `./lib/special/${name}/main.ts`),
    name: `AtomTools${name}`,
    filename: 'index'
  }
})

libraries.forEach(async (lib) => {
  const config = {
    configFile: false,
    base: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'lib')
      }
    },
    build: {
      // 必须要逐个指定 lib 配置，否则会出现部分配置不生效的情况
      lib: {
        entry: lib.entry,
        name: lib.name,
        fileName: lib.filename // 使用模板字符串
      },
      rollupOptions: {
        output: {
          // 确保格式是 UMD
          format: 'umd',
          name: lib.name,
          // 指定输出目录
          dir: resolve(__dirname, `dist/${lib.name}`)
        }
      }
    }
  }

  try {
    console.log('Built...')
    await build(config)
    console.log(`Built library: ${lib.name}`)
  } catch (error) {
    console.error(`Error building library: ${lib.name}`, error)
  }
})
