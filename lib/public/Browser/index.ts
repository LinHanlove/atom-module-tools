import { TYPE } from '@/public/types/global'
/**
 * @function 一键复制
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
 * @function 将rgb颜色灰度化 基于光感加权平均值
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
 * @function 解析url地址中的参数 返回一个对象
 * @param url
 * @returns 参数对象
 */
export const getUrlParams = (url: string) => {
  const params = {} as TYPE.anyType
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) => (params[key] = value))
  return params
}

/**
 * @function 生成随机HEX颜色
 * @returns
 */
export const randomHexColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}

/**
 * @function 去掉标签字符串中的元素标记
 * @param str 元素标签字符串
 * @returns
 */
export const removeElementMark = (str: string) => {
  return new DOMParser().parseFromString(str, 'text/html').body.textContent || ''
}

/**
 * @function 全屏
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
 * @function 退出全屏
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
 * @function 禁止右键，选择，复制
 */
export const preventRightKey = () => {
  ;['contextmenu', 'selectstart', 'copy'].forEach(function (e) {
    document.addEventListener(e, function (event) {
      return (event.returnValue = false)
    })
  })
}

/**
 * 清除指定的 cookie 或所有 cookie。
 * @param name 可选。如果提供，将清除指定名称的 cookie。
 */
export const clearAllCookie = (name?: string) => {
  if (name) {
    // 清除指定名称的 cookie
    document.cookie = name + '=0; path=/; expires=' + new Date(0).toUTCString()
    document.cookie =
      name + '=0; path=/; domain=' + document.domain + '; expires=' + new Date(0).toUTCString()
  } else {
    // 清除所有 cookie
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim()
      const eqPos = cookie.indexOf('=')
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + '=0; path=/; expires=' + new Date(0).toUTCString()
      document.cookie =
        name + '=0; path=/; domain=' + document.domain + '; expires=' + new Date(0).toUTCString()
    }
  }
}
