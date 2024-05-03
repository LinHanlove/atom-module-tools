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

```typescript
import { debounce } from 'atom-tools'

function doSomething() {
  console.log('Function is executed')
}

// 使用 debounce 包装 doSomething，设置等待时间为 500 毫秒
const debouncedDoSomething = debounce(doSomething, 500)

// 现在，你可以在需要防抖的事件处理器中使用 debouncedDoSomething
document.getElementById('someButton').addEventListener('click', debouncedDoSomething)
```

## 立即执行

如果 `immediate` 参数设置为 `true`，则函数会在第一次调用时立即执行，而不是等待等待时间结束后再执行。
