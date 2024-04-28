/**
 * @function 生成随机字符串，该字符串唯一
 * @param len {string} 所需生成字符串的长度
 */
export function getRandomString(len = 32) {
    const timestampStr = new Date().getTime().toString() // 当前时间戳
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    const maxPos = $chars.length
    let str = ''
    for (let i = 0, length = len - 13; i < length; i++) {
      str += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return str + timestampStr
  }