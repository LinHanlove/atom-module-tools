import QRCode from 'qrcode'; // 假设我们使用qrcode库

/**
 * 生成二维码的函数
 * @param content 需要转换为二维码的内容
 * @param options 二维码的配置选项
 * @returns {Promise<string>} 返回一个Promise，解析为base64编码的二维码图片
 */
export const createQRCode = (content: string, options?: {
  size?: number;
  typeNumber?: number;
  errorCorrectLevel?: 'L' | 'M' | 'Q' | 'H';
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 设置默认配置
    const defaultOptions = {
      size: 300,
      typeNumber: 4,
      errorCorrectLevel: 'M',
    };

    const finalOptions = { ...defaultOptions, ...options };

    QRCode.toDataURL(content, finalOptions, (err: any, url: string | PromiseLike<string>) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
};


/**
 * 上传文件
 * @param params 需要上传的参数
 * @returns 
 */
export const uploadFile = (params: GLOBAL.IWeChatUploadFile) => {
  return new Promise((resolve, reject) => {
    const { url, filePath, name, ...formData } = params;

    if (!url || !filePath || !name) {
      return reject(new Error('缺少必要的参数: url, filePath, name'));
    }

    if (typeof wx === 'undefined' || typeof wx.uploadFile === 'undefined') {
      return reject(new Error('当前环境不支持微信小程序的上传功能'));
    }

    wx.uploadFile({
      url,
      filePath,
      name,
      formData: formData,
      success(res: { data: string; }) {
        if (res && res.data) {
          try {
            const response = JSON.parse(res.data);
            if (response && typeof response.data === 'string') {
              console.log('图片上传成功：', response.data);
              resolve(response.data);
            } else {
              throw new Error('响应数据格式不正确');
            }
          } catch (err) {
            console.error('解析响应数据出错：', err);
            reject(err);
          }
        } else {
          reject(new Error('上传成功，但响应数据不包含 data 属性'));
        }
      },
      fail(err: any) {
        console.error('图片上传失败：', err);
        reject(err);
      }
    });
  });
};