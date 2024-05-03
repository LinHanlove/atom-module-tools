---
title: formatMonthDay
---

# 日期转月日

### formatMonthDay

## 说明

`formatMonthDay` 函数用于将传入的日期对象、时间戳或日期字符串格式化为 `MM-DD` 格式的字符串。

## 参数

| 参数名 | 类型                         | 默认值 | 说明             |
| ------ | ---------------------------- | ------ | ---------------- |
| date   | `Date` / `Number` / `String` | ---    | 需要格式化的日期 |

## 返回

`string` - 格式化后的月日字符串。

## 代码演示

### 基础用法

```js
import { formatMonthDay } from 'atom-tools'

// 传入 Date 对象
console.log(formatMonthDay(new Date())) // 输出：当前月日的格式化字符串，例如 "04-29"

// 传入时间戳
console.log(formatMonthDay(1714405699791)) // 输出：对应时间戳的格式化月日字符串，例如 "04-29"

// 传入字符串
console.log(formatMonthDay('2024-04-29')) // 输出："04-29"
console.log(formatMonthDay('2024/4/15')) // 输出：根据字符串格式转换后的格式化月日字符串，例如 "04-15"
```
