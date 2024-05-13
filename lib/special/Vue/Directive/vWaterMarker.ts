import type { Directive, App } from 'vue'

// 添加水印的指令
const vWaterMarker: Directive = {
  // 在绑定元素的mounted钩子中执行
  mounted(el, binding) {
    const {
      text = 'atom版权所有',
      font = '16px Microsoft JhengHei',
      textColor = 'rgba(180, 180, 180, 0.3)',
      rotate = -20,
      size = 200 // 可以设置水印大小的默认值
    } = binding.value || {}

    // 创建画布
    var can = document.createElement('canvas')
    // 添加到元素内
    el.appendChild(can)
    // 设置宽高
    can.width = size
    can.height = size

    can.style.display = 'none'

    // 获取 canvas 的 2D 上下文，并检查是否为 null
    var cans = can.getContext('2d')

    if (!cans) {
      // 如果没有获取到绘图上下文，就移除 canvas 元素并返回
      el.removeChild(can)
      console.error('Failed to get canvas rendering context')
      return
    }

    // 清除画布
    cans.clearRect(0, 0, can.width, can.height)

    // 设置旋转角度
    const radians = rotate * (Math.PI / 180)
    const textWidth = cans.measureText(text).width

    // 保存当前的绘图状态
    cans.save()

    // 移动到画布中心，然后再旋转
    cans.translate((can.width - textWidth) / 2, can.height / 2)
    cans.rotate(radians)

    // 设置文字样式
    cans.font = font
    cans.fillStyle = textColor
    cans.textAlign = 'center'
    cans.textBaseline = 'middle'

    // 绘制文字
    cans.fillText(text, 0, 0)

    // 恢复绘图状态
    cans.restore()

    // 设置背景图片
    el.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
  }
}

export function setWaterMarkerDirective(app: App) {
  app.directive('waterMarker', vWaterMarker)
}

export default vWaterMarker
