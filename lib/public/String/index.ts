/**
 * @function 生成随机字符串，该字符串唯一
 * @param digit {number} 所需生成字符串的长度
 */
export const getRandomString = (digit = 32) => {
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
export const toUpper = (value: string, all = false) => {
  return all ? value.toUpperCase() : value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * @function 转换首字母为小写（或全部），如果转换全部则忽略首字母的转换
 * @param {string} value 需要转换的字符串
 * @param {boolean} [all=false] 是否转换整个字符串的大小写
 * @returns {string} 转换后的字符串
 */
export const toLower = (value: string, all = false) => {
  return all ? value.toLowerCase() : value.charAt(0).toLowerCase() + value.slice(1)
}


/**
 * 对字符串进行脱敏处理，只显示前几位和最后几位，其余部分用星号或省略号替代。
 * @param {string} input - 需要脱敏的原始字符串。
 * @param {number} [keepStart=0] - 需要保留的开头字符数。
 * @param {number} [keepEnd=0] - 需要保留的结尾字符数。
 * @param {string} [maskChar='*'] - 脱敏部分使用的字符，默认为星号。
 * @returns {string} 脱敏后的字符串。
 */
export const maskString = (input: string, keepStart: number = 0, keepEnd: number = 0, maskChar: string = '*'): string => {
  if (!input) throw new Error('Input string is required')

  const inputStr: string = String(input)
  const length: number = inputStr.length

  if (length <= keepStart + keepEnd) {
    return inputStr
  }

  const maskLength: number = length - keepStart - keepEnd
  const mask: string = maskChar.repeat(maskLength)

  return inputStr.substring(0, keepStart) + mask + inputStr.substring(length - keepEnd)
}


/**
 * 对手机号进行脱敏处理，只显示前三位和后四位，其余部分用星号替代。
 * @param {string | null | undefined} phoneNumber - 需要脱敏的手机号。
 * @returns {string} 脱敏后的手机号字符串。
 */
export const maskPhoneNumber = (phoneNumber: string | null | undefined): string => {
  if (!phoneNumber) throw new Error('phoneNumber is required')

  const phoneStr: string = String(phoneNumber)
  // 正则表达式匹配 11 位数字的手机号
  const regex: RegExp = /^(\d{3})(\d{4})(\d{4})$/

  // 确保输入的是一个11位的手机号码
  if (!regex.test(phoneStr)) throw new Error('Invalid phone number format')

  return phoneStr.replace(regex, '$1****$3')
}

/**
 * 对地址进行脱敏处理，只显示前三位和后四位，其余部分用星号替代。
 * @param {string | null | undefined} phoneNumber - 需要脱敏的手机号。
 * @returns {string} 脱敏后的地址字符串。
 */
export const addressHidePart = (address: string,keepStart=3,keepEnd=4, maskChar='*'): string => {
  return maskString(address, keepStart, keepEnd, maskChar)
}

// 姓氏脱敏
export const nameHidePart = (name: string,keepStart=1,keepEnd=0,maskChar='*'): string => {
  // 假设姓氏脱敏只显示第一个字符后跟星号
  return maskString(name, keepStart, keepEnd, maskChar)
}

// 标签脱敏
export const tagHidePart = (tag: string,keepStart=4,keepEnd=3,maskChar='...'): string => {
  return maskString(tag, keepStart, keepEnd, maskChar)
}

// 身份证脱敏
export const idCardHidePart = (idCard: string,keepStart=6,keepEnd=4 ,maskChar='*'): string => {
  return maskString(idCard, keepStart, keepEnd, maskChar)
}

// 邮箱脱敏
export const emailHidePart = (email: string,keepStart=2,keepEnd=2,maskChar='*'): string => {
  return maskString(email, keepStart, keepEnd, maskChar)
}

// 银行卡脱敏
export const bankCardHidePart = (bankCard: string,keepStart=4,keepEnd=4,maskChar='*'): string => {
  return maskString(bankCard, keepStart, keepEnd, maskChar)
}

