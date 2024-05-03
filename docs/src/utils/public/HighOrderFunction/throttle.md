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

function doSomething() {
  console.log('Function is executed')
}

// 使用 throttle 包装 doSomething，限制其执行频率为每 1000 毫秒一次
const throttledDoSomething = throttle(doSomething, 1000)

// 现在，你可以在事件处理器中使用 throttledDoSomething
document.getElementById('someButton').addEventListener('click', throttledDoSomething)
```

## 立即执行

如果 `immediate` 参数设置为 `true`，则函数会在第一次调用时立即执行，而不是等待等待时间结束后再执行。
