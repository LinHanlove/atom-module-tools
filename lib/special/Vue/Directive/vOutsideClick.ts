import type { Directive, App } from 'vue'

// v-outside-click 指令
const vOutsideClick: Directive = {
  mounted(el, binding) {
    const callback = binding.value

    // 注册点击事件监听器到 document
    const handler = (e: Event) => {
      // 检查点击事件是否发生在 el 外部
      if (!el.contains(e.target as Node)) {
        // 如果是，则执行回调函数
        callback && callback(e)
      }
    }

    // 将事件监听器添加到 el 上，以便可以在 unmounted 钩子中引用
    el.outsideClickHandler = handler

    // 绑定全局点击事件监听器
    document.addEventListener('click', handler)
  },
  updated(el) {
    // 如果组件更新且绑定值改变，可能需要重新定义回调
    el.outsideClickHandler = () => {
      const callback = el._outsideClickCallback
      callback && callback()
    }
  },
  unmounted(el) {
    // 解绑点击事件监听器
    document.removeEventListener('click', el.outsideClickHandler)
    // 删除引用，避免内存泄漏
    delete el.outsideClickHandler
  }
}

export function setVOutsideClickDirective(app: App) {
  app.directive('outside-click', vOutsideClick)
}

export default vOutsideClick
