---
title: getDayOfYear
---

# 获取某个日期是当年的第几天

### getDayOfYear

## 说明

`getDayOfYear` 函数用于计算并返回给定日期在该年中是第几天。

## 参数

| 参数名 | 类型              | 默认值 | 说明                           |
| ------ | ----------------- | ------ | ------------------------------ |
| date   | `Date` / `Number` | ---    | 需要计算是哪一天的日期或时间戳 |

## 返回

`number` - 返回给定日期在一年中的天数序号，范围从1到366。

## 代码演示

### 基础用法

```js
import { getDayOfYear } from 'atom-tools'

// 传入 Date 对象
console.log(getDayOfYear(new Date())) // 输出：当前日期在一年中的天数序号，例如 120

// 传入时间戳
console.log(getDayOfYear(1714405699791)) // 输出：给定时间戳在一年中的天数序号，例如 120
```
