import Test from './Test.vue'
import {testVue} from '@/special/Vue/index'

export default function HelloWorld() {

  const handleClick = () => {
    console.log(testVue);
    
  }

  return (
    <div>
      <h1>Hello, world!8</h1>
      <Test />
      <button onClick={handleClick}>测试</button>
    </div>
  )
}
