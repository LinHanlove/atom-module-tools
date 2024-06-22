import {customRef}  from 'vue'

/**
 * @function 防抖ref
 * @param value 响应式数据
 * @param delay 延迟时间
 * @returns 
 */
export const debounceRef = <T>(value: T, delay = 200) => {
  let timer: number| NodeJS.Timeout 
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 收集依赖
        return value
      },
      set(newValue: T) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() // 派发更新
        }, delay)
      }
      } 
    })
}