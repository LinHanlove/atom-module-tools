import Test from './Test.vue'
import { debounce, keepDecimal } from '@/public/main'

export default function HelloWorld() {
  // 防抖函数
  const debounceFun = debounce(function () {
    console.log('debounce')
    console.log(keepDecimal(2.2222, 8))
  }, 1000)

  const handleClick = () => debounceFun()

  return (
    <div>
      <h1>Hello, world!</h1>
      <Test />
      <button onClick={handleClick}>防抖</button>
    </div>
  )
}
