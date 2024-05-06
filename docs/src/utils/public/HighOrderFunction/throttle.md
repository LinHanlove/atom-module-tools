---
title: Throttle Function
---

# 节流函数

### throttle

## 说明

`throttle` 函数用于限制传入函数的执行频率，确保函数在指定的时间间隔内最多执行一次。这对于处理诸如按钮点击、滚动事件等可能被频繁触发的操作特别有用。

## 参数

| 参数      | 说明             | 类型       | 默认值      |
| --------- | ---------------- | ---------- | ----------- |
| func      | 需要节流的函数   | `Function` | -           |
| limit     | 时间间隔（毫秒） | `number`   | `undefined` |
| immediate | 是否立即执行     | `boolean`  | `false`     |

## 返回值

`Function` - 返回一个新的函数，这个函数在指定的时间间隔内最多执行一次原始函数。

## 代码演示

### 基础用法

```typescript
import { throttle } from 'atom-tools'

export default function HelloWorld() {

  const throttleFun =  throttle(function(){
    console.log('throttle');
  }, 1000)
  
  const handleClick = () => throttleFun()

  return (
    <div>
      <h1>Hello, world!</h1>
      <button onClick={handleClick}>节流</button>
    </div>
  )
}
```
### 注意：
:::danger
节流函数注意事项类似防抖函数，但是节流函数的执行频率是固定的，而防抖函数的执行频率是可变的。具体可参考防抖函数
:::


## 立即执行

如果 `immediate` 参数设置为 `true`，则函数会在第一次调用时立即执行，而不是等待等待时间结束后再执行。
