/**
 * 筛选对象属性
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key as K)))
}