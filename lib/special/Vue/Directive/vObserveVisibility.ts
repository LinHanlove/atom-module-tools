import type { Directive, App } from 'vue'

// v-observe-visibility 指令
const vObserveVisibility: Directive = {
  mounted(el, binding) {
    const { callback, options } = binding.value || {}
    const {
      root = null, // 视口作为参照物
      rootMargin = '0px', // 视口边缘到目标元素边缘之间的距离
      threshold = 0 // 目标元素进入视口的最小比例
    } = options || {}

    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 执行回调函数，传入可见性状态
          callback?.(entry.isIntersecting)
        })
      },
      {
        root,
        rootMargin,
        threshold
      }
    )

    // 开始观察元素的可见性变化
    observer.observe(el)

    // 保存 IntersectionObserver 实例的引用，以便后续可以停止观察
    el.observerVisibility = observer

    // 保存回调函数的引用
    el._observeVisibilityCallback = callback
  },
  beforeUnmount(el) {
    // 获取之前保存的 IntersectionObserver 实例
    const observer = el.observerVisibility

    // 停止观察并删除引用
    if (observer) {
      observer.unobserve(el)
      delete el.observerVisibility
    }

    // 删除保存的回调函数引用
    delete el._observeVisibilityCallback
  }
}

export function setVObserveVisibilityDirective(app: App) {
  app.directive('observe-visibility', vObserveVisibility)
}

export default vObserveVisibility
