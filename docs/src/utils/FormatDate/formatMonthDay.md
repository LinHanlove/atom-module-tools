---
title: formatMonthDay
---

# 日期转月日

### formatMonthDay


## 参数

| 参数名 | 类型                      | 默认值 | 说明             |
| ------ | ------------------------- | ------ | ---------------- |
| date   | `Date`  `Number` `String` | ---      | 需要格式化的日期 |

## 返回

`string`

## 代码演示

### 基础用法

```js
import { formatMonthDay } from 'atom-tools'

// 传入date
console.log(formatMonthDay(new Date())) // 04-29

// 传入时间戳
console.log(formatMonthDay(1714405699791)) // 04-29

// 传入字符串
console.log(formatMonthDay('2024-04-29')) // 04-29
console.log(formatMonthDay('2024/4/15')) // 04-29
```
