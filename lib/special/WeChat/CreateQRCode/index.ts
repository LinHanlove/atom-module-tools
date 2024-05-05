import QRCode from 'qrcode'

/**
 * @function 生成二维码的函数
 * @param content 需要转换为二维码的内容
 * @param options 二维码的配置选项
 * @returns {Promise<string>} 返回一个Promise，解析为base64编码的二维码图片
 */
export const createQRCode = (
  content: string,
  options?: {
    size?: number
    typeNumber?: number
    errorCorrectLevel?: 'L' | 'M' | 'Q' | 'H'
  }
): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 设置默认配置
    const defaultOptions = {
      size: 300,
      typeNumber: 4,
      errorCorrectLevel: 'M'
    }

    const finalOptions = { ...defaultOptions, ...options }

    QRCode.toDataURL(content, finalOptions, (err: any, url: string | PromiseLike<string>) => {
      if (err) {
        reject(err)
      } else {
        resolve(url)
      }
    })
  })
}
