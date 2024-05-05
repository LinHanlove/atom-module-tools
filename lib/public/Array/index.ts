import { TYPE } from '@/public/types/global'
/**
 * @function 给定一个数组，根据数组的某一属性排序
 * @param array 需要排序的数组对象
 * @param key 以什么字段排序
 */
export const arraySortByKey = (params: TYPE.IArraySortByKey) => {
  const { array, key } = params
  return array.sort((a, b) => {
    const k1 = a[key]
    const k2 = b[key]
    if (k1 < k2) {
      return -1
    } else if (k1 > k2) {
      return 1
    } else {
      return 0
    }
  })
}

/**
 * @function 给定一个数组，根据数组的某一属性去重
 * @param arr 要去重的数组
 * @param prop 属性值
 * @param callback 回调函数
 * @returns 去重后的数组
 */
export const uniqueByProperty = (params: TYPE.IUniqueByProperty) => {
  const { array, key, callback } = params
  const map = new Map()
  array.forEach((item) => map.set(item[key], item))

  const result = Array.from(map.values())

  return callback ? callback(result) : result
}

/**
 * @function 给定一个对象数组，根据指定的属性进行模糊匹配，并返回匹配到的对象
 * @param array 要去重的数组
 * @param prop 属性值
 * @param key 模糊字符串
 * @param callback 回调函数
 * @returns
 */
export const fuzzyMatchByProperty = (params: TYPE.IFuzzyMatchByProperty) => {
  const { array, prop, key, callback } = params
  const reg = new RegExp(key.split('').join('.*'), 'g')
  const fuzzyMatch = array.filter((item) => {
    return reg.test(item[prop]) ?? item[prop].includes(key)
  })

  return callback ? callback(fuzzyMatch) : fuzzyMatch
}
