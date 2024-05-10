/**
 * @function 从对象中筛选出指定键的属性，并返回一个新对象。
 * @template T 表示对象的类型，它必须是带有键的普通对象。
 * @template K 表示要筛选的键的类型，它是 T 的键的子集。
 * @param obj 需要从中筛选属性的对象。
 * @param keys 需要筛选出来的键的数组。
 * @returns 返回一个新对象，它只包含 `keys` 数组中指定的键及其对应的值。
 */
export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Partial<Pick<T, K>> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key as K) as boolean)
  ) as Partial<Pick<T, K>>
}
