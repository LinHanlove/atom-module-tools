---
title: 传入日期获取年份
---

# 传入日期获取年份

### formatDateGetYear

## 说明
`formatDateGetYear` 函数用于从一个日期对象、时间戳或日期字符串中提取并返回年份部分。

## 参数

| 参数名 | 类型                         | 默认值 | 说明               |
| ------ | ---------------------------- | ------ | ------------------ |
| date   | `Date` / `String` / `Number` | ---    | 需要提取年份的日期 |

## 返回值

`string` - 返回年份的字符串表示。

## 代码演示

### 基础用法

```js
import { formatDateGetYear } from 'atom-tools'; 

// 传入日期字符串
console.log(formatDateGetYear('2020-01-01')); // 输出："2020"

// 传入 Date 对象
console.log(formatDateGetYear(new Date('2021-01-01'))); // 输出："2021"

// 传入时间戳
console.log(formatDateGetYear(1609459200000)); // 输出："2021"，假设该时间戳对应的日期是 2021-01-01
```