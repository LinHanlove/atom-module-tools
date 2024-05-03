---
title: formatDateTime
---

# 格式化年月日 时分秒

### formatDateTime

## 说明

`formatDateTime` 函数用于将传入的日期对象、时间戳或日期字符串格式化为 `YYYY-MM-DD HH:MM:SS` 格式的字符串。

## 参数

| 参数名 | 类型                         | 默认值 | 说明             |
| ------ | ---------------------------- | ------ | ---------------- |
| date   | `Date` / `Number` / `String` | ---    | 需要格式化的日期 |

## 返回

`string` - 格式化后的日期时间字符串。

## 代码演示

### 基础用法

```js
import { formatDateTime } from 'atom-tools'

// 传入 Date 对象
console.log(formatDateTime(new Date())) // 输出：当前日期时间的格式化字符串，例如 "2024-04-29 23:37:24"

// 传入时间戳
console.log(formatDateTime(1714405699791)) // 输出：对应时间戳的格式化字符串，例如 "2024-04-15 00:00:00"

// 传入字符串
console.log(formatDateTime('2024-04-29')) // 输出：根据字符串日期的格式化字符串，例如 "2024-04-29 00:00:00"
console.log(formatDateTime('2024/4/29')) // 输出：根据字符串日期的格式化字符串，例如 "2024-04-29 00:00:00"
```
