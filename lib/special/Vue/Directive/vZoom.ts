import type { Directive, App } from 'vue'

interface ZoomOptions {
  minScale?: number
  maxScale?: number
  step?: number
}

const vZoom: Directive = {
  mounted(el, binding) {
    const options = binding.value as ZoomOptions
    const minScale = options.minScale || 0.1
    const maxScale = options.maxScale || Infinity
    const step = options.step || 0.1
    let scale = 1 // 初始缩放级别

    const setScale = (newScale: number) => {
      // 限制缩放级别在最小和最大值之间
      scale = Math.max(minScale, Math.min(maxScale, newScale))
      el.style.transform = `scale(${scale})`
    }

    const mouseWheelHandler = (event: WheelEvent) => {
      event.preventDefault()
      const deltaScale = event.deltaY > 0 ? -step : step
      setScale(scale + deltaScale)
    }

    const clickHandler = () => {
      // 点击事件放大到 2 倍，但不超过最大缩放级别
      setScale(Math.min(scale * 2, maxScale))
    }

    el.addEventListener('wheel', mouseWheelHandler)
    el.addEventListener('click', clickHandler)

    // 保存事件监听器引用，以便后续移除
    ;(el as any).zoomEventListeners = {
      wheel: mouseWheelHandler,
      click: clickHandler
    }
  },
  beforeUnmount(el) {
    el.style.transform = ''
  },
  unmounted(el) {
    const listeners = (el as any).zoomEventListeners
    if (listeners) {
      // 正确的类型断言，确保 event 是有效的字符串
      for (const [event, listener] of Object.entries(listeners)) {
        el.removeEventListener(event, listener)
      }
      ;(el as any).zoomEventListeners = null
    }
  }
}

export function setVZoomDirective(app: App) {
  app.directive('zoom', vZoom)
}

export default vZoom
