---
title: Debounce Function
---

# 防抖函数

### debounce

## 说明

`debounce` 函数用于控制传入函数的执行频率，确保函数在指定的时间间隔结束后才执行。如果在这个间隔时间内多次调用函数，则只有最后一次调用会执行。

## 参数

| 参数      | 说明             | 类型       | 默认值  |
| --------- | ---------------- | ---------- | ------- |
| func      | 需要防抖的函数   | `Function` | -       |
| wait      | 等待时间（毫秒） | `number`   | -       |
| immediate | 是否立即执行     | `boolean`  | `false` |

## 返回值

`Function` - 返回一个新的函数，这个函数根据提供的参数对原始函数进行防抖处理。

## 代码演示

### 基础用法

#### 正确示范：

`
该示例为jsx[其他使用场景同理]
`

```typescript
import { debounce } from 'atom-tools'

export default function HelloWorld() {

  const debounceFun =  debounce(function(){
    console.log('debounce');
  }, 1000)
  
  const handleClick = () => debounceFun()

  return (
    <div>
      <h1>Hello, world!</h1>
      <button onClick={handleClick}>防抖</button>
    </div>
  )
}
```

#### 错误示范：

`
该示例为jsx[其他使用场景同理]
`

```typescript
import { debounce } from '@/public/main'

export default function HelloWorld() {

  // 示例1：
  const handleClick = () => {
    const debounceFun = debounce(function(){
        console.log('debounce');
    }, 1000)
    return debounceFun()
  }

  // 示例2：
  const handleClick = () => {
    return debounce(function(){
        console.log('debounce');
    }, 1000)
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <button onClick={handleClick}>防抖</button>
    </div>
  )
}
```
#### 注意：

防抖函数和节流函数使用方法类似

:::danger
- 1.debounce 返回的是一个经过防抖处理的新函数，你需要使用这个返回的函数作为事件处理器。
- 2.你不能直接在 debounce 调用后立即执行返回的函数，因为这样会立即执行一次被 debounce 包装的函数，违背了防抖的初衷。
- 3.debounce 函数在每次点击时都会被重新创建，导致之前的定时器被新的定时器覆盖，而不是按照防抖逻辑去阻止多次执行。所以，你需要将 debounce 函数的创建移出事件处理器，以确保只创建一次。
:::



## 立即执行

如果 `immediate` 参数设置为 `true`，则函数会在第一次调用时立即执行，而不是等待等待时间结束后再执行。
