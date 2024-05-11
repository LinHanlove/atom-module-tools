import type { Directive, App } from 'vue'
import { copyText } from '@/public/Browser'

// 复制指令
const VCopy: Directive = {
  mounted(el, binding) {
    // 解构binding.value，设置默认值
    const { content = el.innerText, type = 'click', callback } = binding.value || {}
    const typeMap = ['click', 'dblclick']

    // 验证type是否有效
    if (typeMap.indexOf(type) === -1) {
      throw new Error(`The "type" parameter must be one of the following: ${typeMap.join(', ')}.`)
    }

    console.log(content, callback)

    // 给该元素注册事件
    const eventType = type
    el.addEventListener(eventType, () => {
      copyText(content)
        .then((res) => {
          // 如果存在回调函数，则执行它
          callback && callback(res)
        })
        .catch((error) => {
          console.error('Failed to copy text:', error)
        })
    })
  },
  unmounted(el, binding) {
    // 移除事件监听，使用在mounted中定义的eventType
    const eventType = binding.value?.type || 'click'
    el.removeEventListener(eventType, el[`_${eventType}Handler`])
  }
}

export function setVCopyDirective(app: App) {
  app.directive('copy', VCopy)
}

export default VCopy
