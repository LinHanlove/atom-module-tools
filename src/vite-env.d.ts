/// <reference types="vite/client" />

// 导入vue 类型声明，解决.tsx .vue 类型推断问题
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // 有一些文档里import的是ComponentOptions,但是版本貌似比较低了
  const component: DefineComponent<{}, {}, any>
  export default component
}
