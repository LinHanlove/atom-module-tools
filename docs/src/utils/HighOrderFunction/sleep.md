---
title: sleep
---

# 睡眠函数

### sleep

## 说明
`sleep` 函数用于模拟异步操作中的延迟时间。它接受一个以毫秒为单位的参数来指定延迟的时长，并返回一个 `Promise` 对象。当延迟时间过后，`Promise` 会被解决（resolve）。

## 参数

| 参数     | 说明         | 类型     | 默认值      |
| -------- | ------------ | -------- | ----------- |
| duration | 延迟的毫秒数 | `number` | `undefined` |

## 返回值

`Promise<void>` - 在指定的延迟时间过后解决的 `Promise` 对象。

## 代码演示

### 基础用法

```ts
import { sleep } from 'atom-tools';

// 使用 async/await
async function asyncFunction() {
  console.log('Start sleeping');
  await sleep(1000); // 延迟 1 秒
  console.log('Finished sleeping after 1 second');
}

asyncFunction();

// 使用 Promise 链式调用
sleep(500) // 延迟 0.5 秒
  .then(() => console.log('Finished sleeping after 0.5 second'));
```