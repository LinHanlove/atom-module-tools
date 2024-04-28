/**
 * 一键复制
 * @param value
 * @returns
 */
export const copyText = async (value: string, cb?: Function) => {
  if (window.navigator.clipboard) {
    window.navigator.clipboard.writeText(value)
    return cb && cb()
  }
  return new Promise<void>((resolve, reject) => {
    try {
      const textarea = document.createElement('textarea')
      document.body.appendChild(textarea)
      textarea.value = value
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      return cb && cb()
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}