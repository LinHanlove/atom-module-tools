import type { Directive, App } from 'vue'

// v-resize 指令
const vResize: Directive = {
  mounted(el, binding) {
    const callback = binding.value

    console.log(callback)

    // 创建 ResizeObserver 实例
    const resizeObserver = new ResizeObserver((entries) => {
      console.log(entries, '---')

      // 触发回调函数，传递每一个变化的 Entry 的内容尺寸
      entries.forEach((entry) => {
        callback(entry.contentRect)
      })
    })

    // 开始观察元素的尺寸变化
    resizeObserver.observe(el)

    // 保存 ResizeObserver 实例的引用，以便后续可以停止观察
    el.resizeObserver = resizeObserver
  },
  unmounted(el: { resizeObserver: any }) {
    // 获取之前保存的 ResizeObserver 实例
    const resizeObserver = el.resizeObserver

    // 如果存在 ResizeObserver 实例，则停止观察并删除引用
    if (resizeObserver) {
      resizeObserver.unobserve(el)
      delete el.resizeObserver
    }
  }
}

export function setVResizeDirective(app: App) {
  app.directive('resize', vResize)
}

export default vResize
