import Test from './Test.vue'
import { debounce } from '@/public/main'

export default function HelloWorld() {
  // 防抖函数
  const debounceFun = debounce(function () {
    console.log('debounce')
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
