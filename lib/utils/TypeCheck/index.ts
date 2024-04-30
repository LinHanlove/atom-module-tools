import { toUpper } from '../String/index'

const toString = Object.prototype.toString



/**
 * 在值是 null、undefined 或空字符串时返回一个指定的空值。
 *
 * @template T 表示 value 参数的类型。
 * @param value - 需要检查的原始值，可以是 T 类型或 null/undefined。
 * @param emptyValue - 当原始值为 null、undefined 或空字符串时返回的值，应与 T 类型兼容。
 * @returns 返回原始值，或者当原始值为 null、undefined 或空字符串时返回 `emptyValue`。
 */
export const optional = <T>(value: T | null | undefined, emptyValue: T) => {
  return (([null, undefined, ''] as any[]).includes(value) ? emptyValue : value) as T | undefined
}
/**
 * 检测数据类型
 * @param value 要检测的数据
 * @param type 类型
 * @returns 
 */
export function is(value: unknown, type: string) {
  return toString.call(value) === `[object ${toUpper(type)}]`
}

/**
 * 检测一个数是否为undefined
 * @param value 
 * @returns 
 */
export function isDef<T = unknown>(value?: T): value is T {
  return typeof value === 'undefined'
}

/**
 * 检测一个数是否为object
 * @param value 
 * @returns 
 */
export function isObject(value: any): value is Record<any, any> {
  return value !== null && is(value, 'Object')
}

/**
 * 检查一个值是否为空
 * 空的定义包括：数组、字符串、Map、Set、对象（无键值对）、null、NaN、未定义或未声明的值
 * @param value 需要检查的值
 * @returns 如果值为空，则返回true，否则返回false
 */
export function isEmpty<T = unknown>(value: T): value is T {
  // 如果是数组或字符串，检查其长度是否为0
  if (isArray(value) || isString(value)) {
    return value.length === 0;
  }

  // 如果是Map或Set实例，检查其size属性是否为0
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // 如果是对象，检查其是否有可枚举的键
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  // 如果是null，直接比较
  if (isNull(value)) {
    return value === null;
  }

  // 如果是NaN，使用isNaN函数检查
  if (isNaN(value)) {
    return true;
  }

  // 如果值未定义或未声明，返回true
  if (!isDef(value)) {
    return true;
  }

  // 如果以上都不是，即值非空，返回false
  return false;
}

/**
 * 判断是否是日期
 * @param value 
 * @returns 
 */
export function isDate(value: unknown): value is Date {
  return is(value, 'Date')
}


/**
 * 判断是否是NaN
 * @param value 
 * @returns 
 */
export function isNaN(value: unknown) {
  return Object.is(value, NaN)
}


/**
 * 判断是否是null
 * @param value 
 * @returns 
 */
export function isNull(value: unknown): value is null {
  return value === null
}


/**
 * 判断是否是undefine和null的交集
 * @param value 
 * @returns 
 */
export function isNullAndUnDef(value: unknown): value is null | undefined {
  return !isDef(value) && isNull(value)
}

/**
 * 判断是否是undefine和null的并集
 * @param value 
 * @returns 
 */
export function isNullOrUnDef(value: unknown): value is null | undefined {
  return !isDef(value) || isNull(value)
}


/**
 * 判断是不是数字
 * @param value 
 * @returns 
 */
export function isNumber(value: unknown): value is number {
  return is(value, 'Number')
}

/**
 * 判断一个值是否为 Promise 对象
 * @param value 需要判断的值
 * @returns 如果 value 是 Promise 对象，则返回 true，否则返回 false
 */
export function isPromise<T = any>(value: unknown): value is Promise<T> {
  return is(value, 'Promise') && isObject(value) && isFunction(value.then) && isFunction(value.catch)
}

/**
 * 判断一个值是否为字符串类型
 * @param value 需要判断的值
 * @returns 如果 value 是字符串，则返回 true，否则返回 false
 */
export function isString(value: unknown): value is string {
  return is(value, 'String');
}

/**
 * 判断一个值是否为函数类型
 * @param value 需要判断的值
 * @returns 如果 value 是函数，则返回 true，否则返回 false
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * 判断一个值是否为布尔类型
 * @param value 需要判断的值
 * @returns 如果 value 是布尔类型，则返回 true，否则返回 false
 */
export function isBoolean(value: unknown): value is boolean {
  return is(value, 'Boolean');
}

/**
 * 判断一个值是否为正则表达式类型
 * @param value 需要判断的值
 * @returns 如果 value 是正则表达式，则返回 true，否则返回 false
 */
export function isRegExp(value: unknown): value is RegExp {
  return is(value, 'RegExp');
}

/**
 * 判断一个值是否为数组类型
 * @param value 需要判断的值
 * @returns 如果 value 是数组，则返回 true，否则返回 false
 */
export function isArray(value: any): value is Array<any> {
  return value && Array.isArray(value);
}

/**
 * 判断当前环境是否为浏览器环境（非服务器端）
 * @param value 需要判断的值（此处未使用，仅作为参数模板）
 * @returns 如果是浏览器环境，则返回 true，否则返回 false
 */
export function isWindow(value: any): value is Window {
  return typeof window !== 'undefined' && is(value, 'Window');
}

/**
 * 判断一个值是否为 HTML 元素
 * @param value 需要判断的值
 * @returns 如果 value 是 HTML 元素，则返回 true，否则返回 false
 */
export function isElement(value: unknown): value is Element {
  return isObject(value) && !!value.tagName;
}

/**
 * 判断一个值是否为 Map 类型
 * @param value 需要判断的值
 * @returns 如果 value 是 Map 类型，则返回 true，否则返回 false
 */
export function isMap(value: unknown): value is Map<any, any> {
  return is(value, 'Map');
}

/**
 * 判断当前环境是否为服务器端
 * @returns 如果是服务器端，则返回 true，否则返回 false
 */
export const isServer = typeof window === 'undefined';

/**
 * 判断当前环境是否为客户端（浏览器环境）
 * @returns 如果是客户端，则返回 true，否则返回 false
 */
export const isClient = !isServer;

/**
 * 判断一个字符串是否为有效的 URL 地址
 * @param path 需要判断的字符串
 * @returns 如果 path 是有效的 URL 地址，则返回 true，否则返回 false
 */
export function isUrl(path: string): boolean {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

/**
 * 判断一个字符串是否为有效的手机号码
 * @param value 需要判断的字符串
 * @returns 如果 value 是有效的手机号码，则返回 true，否则返回 false
 */
export function isMobileNumber(value: string): boolean {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(value);
}

/**
 * 判断一个字符串是否为有效的座机号码
 * @param value 需要判断的字符串
 * @returns 如果 value 是有效的座机号码，则返回 true，否则返回 false
 */
export function isTelePhoneNumber(value: string): boolean {
  const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(value);
}