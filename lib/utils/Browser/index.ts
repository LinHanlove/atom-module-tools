import { TYPE } from '@/types/global'
/**
 * 一键复制
 * @param value 要复制的文本
 * @param callback 回调函数
 * @returns
 */
export const copyText = async (params: TYPE.ICopyText) => {
  try {
    const { value, callback } = params
    if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText(value)
      return callback && callback()
    }
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = value
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    return callback && callback()
  } catch (error) {
    console.log(error)
  }
}

/**
 * 将rgb颜色灰度化 基于光感加权平均值
 * @param rgb
 * @returns 灰度值
 */
export const rgbGray = (rgb: string[] | string) => {
  let rgbValue = [] as string[]
  if (typeof rgb === 'string') rgbValue = rgb.split(',')
  if (Array.isArray(rgb)) rgbValue = rgb

  const r = parseInt(rgbValue[0])
  const g = parseInt(rgbValue[1])
  const b = parseInt(rgbValue[2])
  console.log(r, g, b)

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * 解析url地址中的参数 返回一个对象
 * @param url
 * @returns 参数对象
 */
export const getUrlParams = (url: string) => {
  const params = {} as TYPE.anyType
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) => (params[key] = value))
  return params
}

/**
 * 生成随机HEX颜色
 * @returns
 */
export const randomHexColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}

/**
 * 去掉标签字符串中的元素标记
 * @param str 元素标签字符串
 * @returns
 */
export const removeElementMark = (str: string) => {
  return new DOMParser().parseFromString(str, 'text/html').body.textContent || ''
}

/**
 * 全屏
 */
export const toFullScreen = (): void => {
  const element = document.documentElement as TYPE.IFullScreenAbleHTMLElement
  const requestFullScreenMethod =
    element.requestFullscreen ||
    element.mozRequestFullScreen ||
    element.webkitRequestFullscreen ||
    element.msRequestFullscreen

  if (typeof requestFullScreenMethod === 'function') {
    requestFullScreenMethod.call(element)
  } else {
    console.error('浏览器不支持全屏')
  }
}

/**
 * 退出全屏
 */
export const exitFullScreen = (): void => {
  const document = window.document as TYPE.IExitFullScreenAbleHTMLElement
  const exitFullScreenMethod =
    document.exitFullscreen ||
    document.mozCancelFullScreen ||
    document.webkitExitFullscreen ||
    document.msExitFullscreen

  if (typeof exitFullScreenMethod === 'function') {
    exitFullScreenMethod.call(document)
  } else {
    console.error('浏览器不支持退出全屏')
  }
}

/**
 * 禁止右键，选择，复制
 */
export const preventRightKey = () => {
  ;['contextmenu', 'selectstart', 'copy'].forEach(function (e) {
    document.addEventListener(e, function (event) {
      return (event.returnValue = false)
    })
  })
}
