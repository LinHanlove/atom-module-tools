import { fillZero } from "../Number"

/**
 * 日期转年月
 */
export function formatYearMonth(date: Date) {
  const year = date.getFullYear()
  const month = fillZero(date.getMonth() + 1)
  return `${year}-${month}`
}

/**
* 日期转年月日
* @param value
*/
export function formatDate(value: null): undefined
export function formatDate(value: undefined): undefined
export function formatDate(value: string): string
export function formatDate(value: number): string
export function formatDate(value: Date): string
export function formatDate(value: Date | number | string | undefined | null): string | undefined {
  if (!value) {
    return undefined
  }

  const date = value instanceof Date ? value : new Date(value)
  const year = date.getFullYear()
  const month = fillZero(date.getMonth() + 1)
  const day = fillZero(date.getDate())
  return `${year}-${month}-${day}`
}



/**
 * 日期转月日
 * @param value
 * @returns
 */
export function formatDate2(value: null): undefined
export function formatDate2(value: undefined): undefined
export function formatDate2(value: string): string
export function formatDate2(value: number): string
export function formatDate2(value: Date): string
export function formatDate2(value: Date | number | string | undefined | null): string | undefined {
  if (!value) {
    return undefined
  }

  const date = value instanceof Date ? value : new Date(value)
  const month = fillZero(date.getMonth() + 1)
  const day = fillZero(date.getDate())

  return `${month}-${day}`
}


/**
 * 传入日期获取年份
 * @param value
 * @returns
 */
export function formatDateGetYear(value: string | Date | number): string {
  if (typeof value === 'string') {
    value = value.split('-')[0]
  } else {
    value = value instanceof Date ? value.getFullYear() : new Date(value).getFullYear()
  }
  return value.toString()
}


/**
* 日期转标准时间
* @param value
* @returns
*/
export const formatDateTime = (value: string | Date | number) => {
  const date = value instanceof Date ? value : new Date(value)
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
export const transformDate = (date: Date | number) => {
  if (typeof date === 'number') {
    date = new Date(date)
  }
  return formatDate2(date).replace(/-/g, '月') + '日'
}



/**
* @function 指定日期转中文
*/
export const transformDateWeekCN = (date: Date | number): string => {
  const WEEK = ['日', '一', '二', '三', '四', '五', '六']
  const text = '周'
  if (typeof date === 'number') {
    return text + WEEK[date]
  }
  if (date instanceof Date) {
    return text + WEEK[date.getDay()]
  }
  return text
}




/**
 * @object 一些常用时间数据
 */
export const DATA_CONSTANT = {
  // 一天
  ONE_DAY: 24 * 60 * 60 * 1000,
  // 1小时
  ONE_HOUR: 60 * 60 * 1000,
  // 今天时间戳
  TODAY_START_TIMESTAMP: new Date().getTime(),
  // 当前天数加一天
  TOMORROW: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getTime(),
  // 当前天数之前一星期
  LAST_WEEK: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).getTime()
}



/**
* 判断是闰年还是平年
* @param year 年份
* @returns
*/
export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0;
};

