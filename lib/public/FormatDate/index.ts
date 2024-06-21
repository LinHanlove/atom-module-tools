import { fillZero } from '../Number'
import * as CONSTANT from './constant'
import { isNaN } from '../TypeCheck'
import { TYPE } from '@/public/types/global'

/**
 * @function 将传入的值转换为日期对象，如果无法转换则抛出错误。
 * @param date 需要转换的日期值，可以是字符串、时间戳、Date对象、null 或 undefined。
 * @return 如果转换成功，返回 Date 对象；如果失败，抛出错误。
 */
export const toDate = (date: string | number | Date | null | undefined): Date => {
  if (date === null || date === undefined) {
    throw new Error('日期参数为空，无法转换为日期对象')
  }

  let parsedDate: Date

  if (typeof date === 'string') {
    parsedDate = new Date(date)
    if (isNaN(parsedDate.getTime())) {
      throw new Error('无法识别日期类型: Invalid date format')
    }
  } else if (typeof date === 'number') {
    // 假设时间戳是以毫秒为单位的
    parsedDate = new Date(date)
    if (isNaN(parsedDate.getTime())) {
      throw new Error('提供的数字不是一个有效的时间戳')
    }
  } else if (date instanceof Date) {
    parsedDate = date
  } else {
    throw new Error('无法识别日期类型: Invalid date format')
  }

  return parsedDate
}

/**
 * @function 日期转年月日
 * @param value
 */
// export const formatDate = (value: string | number | Date | null | undefined): string => {
//   const date = toDate(value)
//   const year = date.getFullYear()
//   const month = fillZero(date.getMonth() + 1) // getMonth() 返回的月份是从 0 开始的
//   const day = fillZero(date.getDate())
//   return `${year}-${month}-${day}`
// }

/**
 * @function 日期转年月
 */
export const formatYearMonth = (value: string | number | Date | null | undefined): string => {
  const date = toDate(value)
  const year = date.getFullYear()
  const month = fillZero(date.getMonth() + 1) // getMonth() 返回的月份是从 0 开始的
  return `${year}-${month}`
}

/**
 * @function 日期转月日
 * @param value 可以是 Date 对象、日期字符串、日期数字或者 null/undefined
 * @returns 返回格式化的月日字符串，如 '08-15'
 */
export const formatMonthDay = (value: string | number | Date | null | undefined): string => {
  const date = toDate(value)
  const month = fillZero(date.getMonth() + 1) // getMonth() 返回的月份是从 0 开始的
  const day = fillZero(date.getDate())
  return `${month}-${day}` // 返回格式化的月日字符串，格式为 MM-DD
}

/**
 * @function 传入日期获取年份
 * @param value
 * @returns
 */
export const formatDateGetYear = (value: string | Date | number): string => {
  if (typeof value === 'string') {
    // 如果是字符串，解析年份部分
    const yearPart = value.split('-')[0]
    return yearPart
  } else if (value instanceof Date) {
    // 如果是 Date 对象，直接获取年份
    return value.getFullYear().toString()
  } else {
    // 如果是数字或其他类型，先转换为 Date 对象再获取年份
    return new Date(value).getFullYear().toString()
  }
}

/**
 * @function 日期转标准时间
 * @param value
 * @returns
 */
export const formatDateTime = (value: string | number | Date | null | undefined) => {
  const date = toDate(value)

  const year = date.getFullYear()
  const month = fillZero(date.getMonth() + 1)
  const day = fillZero(date.getDate())

  const hours = fillZero(date.getHours())
  const minutes = fillZero(date.getMinutes())
  const seconds = fillZero(date.getSeconds())

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * @function 日期转换为特有格式
 * @param 日期 例：08-25
 */
export const transformDate = (value: string | number | Date | null | undefined) => {
  const date = toDate(value)
  return formatMonthDay(date).replace(/-/g, '月') + '日'
}

/**
 * @function 指定日期转星期
 */
export const transformDateWeekCN = (date: Date | number): string => {
  const WEEK = ['日', '一', '二', '三', '四', '五', '六']
  const text = '周'

  if (typeof date === 'number' && date >= 0 && date <= 6) {
    // 如果是数字，直接通过数组索引获取对应的中文星期
    return text + WEEK[date]
  } else if (date instanceof Date) {
    // 如果是 Date 对象，获取 day 属性对应的星期
    return text + WEEK[date.getDay()]
  } else {
    // 如果输入类型不匹配，可以抛出错误或者返回一个默认值
    throw new Error('输入必须是 Date 对象或 0-6 之间的数字')
  }
}

/**
 * @function 获取某个日期是当年的第几天
 */
export const getDayOfYear = (value: Date | number) => {
  const date = toDate(value)
  const start = new Date(date.getFullYear(), 0, 1)
  const diff = (date as Date).valueOf() - start.valueOf()
  return Math.floor(diff / CONSTANT.DATA_CONSTANT.ONE_DAY) + 1
}

/**
 * @function 判断是闰年还是平年
 * @param year 年份
 * @returns
 */
export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0
}

/**
 * @function 计算两个日期之间的天数差
 * @param lastDate 开始日期
 * @param nextDate 结束日期
 * @returns
 */
export const getTwoDaysApart = (
  lastDate: string | number | Date,
  nextDate: string | number | Date
) => {
  // 计算两个日期之间的天数差
  const timeDifference = Math.abs(toDate(lastDate).getTime() - toDate(nextDate).getTime())
  // 将毫秒差转换为天数，并四舍五入
  return Math.ceil(timeDifference / CONSTANT.DATA_CONSTANT.ONE_DAY)
}




/**
 * 参数归一化函数，将传入的格式化字符串或函数规范化，
 * 以便于在日期格式化中使用。
 * 
 * @param formatter 可以是日期格式化的字符串描述，或者是一个格式化函数
 * @returns 返回一个格式化函数
 */
const formatNormalize = (formatter: string | ((dateInfo: TYPE.IDateInfo) => string)) =>{

  // 如果传入的是一个函数，则直接返回该函数
  if (typeof formatter === 'function') return formatter;

  // 边界情况：如果传入的不是字符串，则抛出错误
  if (typeof formatter !== 'string') {
    throw new Error('formatter must be a string or a function!');
  }

  // 根据传入的格式化字符串关键字，映射到具体的格式化模板
  const formatMap: { [key: string]: string } = {
    date: 'yyyy-MM-dd',
    dateTime: 'yyyy-MM-dd HH:mm:ss',
    time: 'HH:mm:ss',
    year: 'yyyy',
    monthDay: 'MM-dd'
  };

  // 使用查找表获取格式化模板
  const formatString = formatMap[formatter] || formatter;

  return (dateInfo:any) => {
    const { yyyy, MM, dd, HH, mm, ss } = dateInfo;

    // 使用正则替换，将格式化模板中的占位符替换为对应的日期时间信息
    return formatString.replace(/yyyy/g, yyyy)
                         .replace(/MM/g, MM)
                         .replace(/dd/g, dd)
                         .replace(/HH/g, HH)
                         .replace(/mm/g, mm)
                         .replace(/ss/g, ss);
  };
}

/**
 * 格式化日期函数，根据提供的格式化选项将 Date 对象转换为字符串
 * 
 * @param date Date对象，需要被格式化的日期
 * @param formatter 日期的格式化描述或格式化函数
 * @param isPad 是否对日期时间的各个部分进行零填充
 * @returns 返回格式化后的日期字符串
 */
export const formatDate = (date: Date, formatter:string| ((dateInfo: any) => string), isPad: boolean = true) => {
  // 参数归一化
  formatter = formatNormalize(formatter) ;

  const pad = (value: number|string, length: number = 2) => {
    return isPad ? (value+'').padStart(length, '0') : String(value);
  };

  const dateInfo: { [key: string]: string | number } = {
    yyyy: date.getFullYear(),
    MM: date.getMonth() + 1,
    dd: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  };

  // 对日期信息中的年月日时分秒进行格式化，根据isPad选项决定是否进行零填充
  dateInfo.yyyy = pad(dateInfo.yyyy, 4);
  dateInfo.MM = pad(dateInfo.MM);
  dateInfo.dd = pad(dateInfo.dd);
  dateInfo.HH = pad(dateInfo.HH);
  dateInfo.mm = pad(dateInfo.mm);
  dateInfo.ss = pad(dateInfo.ss);

  // 使用传入的formatter函数进行格式化
  return formatter(dateInfo);
};