import { TYPE } from '@/special/WeChat/types/global'

/**
 * @function 上传文件
 * @param params 需要上传的参数
 * @returns
 */
export const uploadFile = (params: TYPE.IWeChatUploadFile) => {
  return new Promise((resolve, reject) => {
    const { url, filePath, name, ...formData } = params

    if (!url || !filePath || !name) {
      return reject(new Error('uploadFile:缺少必要的参数: url, filePath, name'))
    }

    if (typeof wx === 'undefined' || typeof wx.uploadFile === 'undefined') {
      return reject(new Error('uploadFile:当前环境不支持微信小程序的上传功能'))
    }

    wx.uploadFile({
      url,
      filePath,
      name,
      formData: formData,
      success(res: { data: string }) {
        if (res && res.data) {
          try {
            const response = JSON.parse(res.data)
            if (response && typeof response.data === 'string') {
              console.log('图片上传成功：', response.data)
              resolve(response.data)
            } else {
              throw new Error('uploadFile:响应数据格式不正确')
            }
          } catch (err) {
            console.error('uploadFile:解析响应数据出错：', err)
            reject(err)
          }
        } else {
          reject(new Error('uploadFile:上传成功，但响应数据不包含 data 属性'))
        }
      },
      fail(err: any) {
        console.error('图片上传失败：', err)
        reject(err)
      }
    })
  })
}
