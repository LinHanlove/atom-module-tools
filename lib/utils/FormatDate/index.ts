import { fillZero } from '../Number'
import * as CONSTANT from './constant'

export * from './constant'

/**
 * 日期转年月日
 * @param value
 */
export function formatDate(value: null | undefined): undefined
export function formatDate(value: string | number | Date): string
export function formatDate(value: any): string | undefined {
  if (value === null || value === undefined) {
    throw new Error('提供的参数不是有效的日期对象')
  }

  const date = value instanceof Date ? value : new Date(value)
  if (isNaN(date.getTime())) {
    throw new Error('提供的参数不是有效的日期对象')
  }

  const year = date.getFullYear()
  const month = fillZero(date.getMonth() + 1) // getMonth() 返回的月份是从 0 开始的
  const day = fillZero(date.getDate())
  return `${year}-${month}-${day}`
}

/**
 * 日期转年月
 */
export function formatYearMonth(date: Date): string
export function formatYearMonth(date: string | number): string | undefined
export function formatYearMonth(date: null | undefined): undefined
export function formatYearMonth(
  date: Date | string | number | null | undefined
): string | undefined {
  if (date === null || date === undefined) {
    return undefined
  } else if (typeof date === 'string' || typeof date === 'number') {
    const parsedDate = new Date(date)
    if (isNaN(parsedDate.getTime())) {
      return undefined
    }
    return formatYearMonth(parsedDate)
  } else {
    // 确保传入的参数是有效的 Date 对象
    if (isNaN(date.getTime())) {
      throw new Error('提供的参数不是有效的日期对象')
    }

    const year = date.getFullYear()
    const month = fillZero(date.getMonth() + 1) // getMonth() 返回的月份是从 0 开始的
    return `${year}-${month}`
  }
}

/**
 * 日期转月日
 * @param value 可以是 Date 对象、日期字符串、日期数字或者 null/undefined
 * @returns 返回格式化的月日字符串，如 '08-15'
 */
export function formatMonthDay(value: null): undefined
export function formatMonthDay(value: undefined): undefined
export function formatMonthDay(value: string): string
export function formatMonthDay(value: number): string
export function formatMonthDay(value: Date): string
export function formatMonthDay(
  value: Date | string | number | null | undefined
): string | undefined {
  if (value === null || value === undefined) {
    return undefined
  }

  const date = value instanceof Date ? value : new Date(value)
  if (isNaN(date.getTime())) {
    // 如果转换的日期无效，则返回 undefined
    return undefined
  }

  const month = fillZero(date.getMonth() + 1) // getMonth() 返回的月份是从 0 开始的
  const day = fillZero(date.getDate())
  return `${month}-${day}` // 返回格式化的月日字符串，格式为 MM-DD
}

/**
 * 传入日期获取年份
 * @param value
 * @returns
 */
export function formatDateGetYear(value: string | Date | number): string {
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
 * 日期转标准时间
 * @param value
 * @returns
 */
export const formatDateTime = (value: string | Date | number) => {
  const date = value instanceof Date ? value : new Date(value)

  // 检查日期是否有效
  if (isNaN(date.getTime())) {
    throw new Error('无效的日期值')
  }

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
 * 获取某个日期是当年的第几天
 */
export const getDayOfYear = (date: Date | number) => {
  if (typeof date === 'number') {
    date = new Date(date)
  }
  const start = new Date(date.getFullYear(), 0, 1)
  const diff = (date as Date).valueOf() - start.valueOf()
  return Math.floor(diff / CONSTANT.DATA_CONSTANT.ONE_DAY) + 1
}

/**
 * 判断是闰年还是平年
 * @param year 年份
 * @returns
 */
export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0
}
