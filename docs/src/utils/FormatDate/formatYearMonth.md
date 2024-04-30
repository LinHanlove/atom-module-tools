---
title: formatYearMonth
---

# 日期转年月

### formatYearMonth


## 参数

| 参数名 | 类型             | 默认值 | 说明             |
| ------ | ---------------- | ------ | ---------------- |
| date   | `Date`  `Number` `String` | ---      | 需要格式化的日期 |

## 返回

`string`

## 代码演示

### 基础用法

```js
import { formatYearMonth } from 'atom-tools'

// 传入date
console.log(formatYearMonth(new Date())) // 2024-04

// 传入时间戳
console.log(formatYearMonth(1714405699791)) // 2024-04

// 传入字符串
console.log(formatYearMonth('2024-04-29')) // 2024-04
console.log(formatYearMonth('2024/4/15')) // 2024-04
```
