
/**
 * @funtion 排序数组对象
 * @param arr 需要排序的数组对象
 * @param key 以什么字段排序
 */
export const sortArrayObj = (arr: any[], key: string | number) => {
  return arr.sort((a, b) => {
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
* @function 根据指定属性去重数组
*/

export const uniqueByProperty = (arr: any[], prop: string | number, cb: (arg0: any[]) => any) => {
  const map = new Map()
  arr.forEach(item => map.set(item[prop], item))

  const arrMap = Array.from(map.values())

  return cb ? cb(arrMap) : arrMap
}



/**
 * @function 给定一个对象数组，根据指定的属性进行模糊匹配，并返回匹配到的对象
 */
export interface FuzzyMatchByPropertyParams {
  list: any[]
  prop: string
  key: string
  cb?: Function
}
export const fuzzyMatchByProperty = (params: FuzzyMatchByPropertyParams) => {
  const { list, prop, key, cb } = params
  const reg = new RegExp(key.split('').join('.*'), 'g')
  const fuzzyMatch = list.filter(item => {
    return reg.test(item[prop]) ?? item[prop].includes(key)
  })

  return cb ? cb(fuzzyMatch) : fuzzyMatch
}


