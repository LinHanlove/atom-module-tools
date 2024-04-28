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
    console.log(error);

  }
}

/**
 * 将rgb颜色灰度化 基于光感加权平均值
 */
export const rgbGray = (rgb: string) => {
  const rgbArr = rgb.split(',')
  const r = parseInt(rgbArr[0].split('(')[1])
  const g = parseInt(rgbArr[1])
  const b = parseInt(rgbArr[2].split(')')[0])
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}


/**
 * 解析url地址中的参数
 */
export const getUrlParams = (url: string) => {
  const params = {} as GLOBAL.anyType
  url
    .replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) =>
      params[key] = value
    )

}


/**
 * 随机HEX颜色
 */
export const randomHexColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
}

/**
 * 去掉字符串中的元素标记
 */
export const removeElementMark = (str: string) => {
  return new DOMParser().parseFromString(str, "text/html").body.textContent || ''
}