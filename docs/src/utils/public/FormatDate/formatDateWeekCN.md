---
title: 格式化日期为中文星期
---

# 格式化日期为中文星期

### transformDateWeekCN

## 说明

`transformDateWeekCN` 函数将传入的日期对象转换为中文表示的星期。

## 参数

| 参数 | 说明         | 类型            | 默认值 |
| ---- | ------------ | --------------- | ------ |
| date | 要转换的日期 | `Date`/`Number` | ---    |

## 返回值

`string` - 返回中文表示的星期，如 "星期一"。

## 代码演示

### 基础用法

```ts
import { formatDateWeekCN } from 'atom-tools'

// 传入当前日期的 Date 对象
console.log(formatDateWeekCN(new Date())) // 输出：当前日期对应的中文星期，例如 "星期一"

// 传入特定日期的 Date 对象
console.log(formatDateWeekCN(new Date('2022-01-01'))) // 输出："星期五"，假设 2022-01-01 是星期五

console.log(formatDateWeekCN(1)) // 应该传入一个 Date 对象
```
