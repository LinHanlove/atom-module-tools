/**
 * @function 生成随机字符串，该字符串唯一
 * @param digit {number} 所需生成字符串的长度
 */
export function getRandomString(digit = 32) {
  const timestampStr = new Date().getTime().toString() // 当前时间戳
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  const maxPos = $chars.length
  let str = ''
  for (let i = 0, length = digit - 13; i < length; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str + timestampStr
}

/**
 * @function 转换首字母为大写（或全部），如果转换全部则忽略首字母的转换
 * @param {string} value 需要转换的字符串
 * @param {boolean} [all=false] 是否转换整个字符串的大小写
 * @returns {string} 转换后的字符串
 */
export function toUpper(value: string, all = false) {
  return all ? value.toUpperCase() : value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * @function 转换首字母为小写（或全部），如果转换全部则忽略首字母的转换
 * @param {string} value 需要转换的字符串
 * @param {boolean} [all=false] 是否转换整个字符串的大小写
 * @returns {string} 转换后的字符串
 */
export function toLower(value: string, all = false) {
  return all ? value.toLowerCase() : value.charAt(0).toLowerCase() + value.slice(1)
}

/**
 * 对手机号进行脱敏处理，只显示前三位和后四位，其余部分用星号替代。
 * @param {string | null | undefined} phoneNumber - 需要脱敏的手机号。
 * @returns {string} 脱敏后的手机号字符串。
 */
export function maskPhoneNumber(phoneNumber: string | null | undefined): string {
  if (!phoneNumber) throw new Error('phoneNumber is required');

  const phoneStr: string = String(phoneNumber);
  // 正则表达式匹配 11 位数字的手机号
  const regex: RegExp = /^(\d{3})(\d{4})(\d{4})$/;

  // 确保输入的是一个11位的手机号码
  if (!regex.test(phoneStr)) throw new Error('Invalid phone number format');

  return phoneStr.replace(regex, '$1****$3');
}
