---
title: transformDate
---

# 日期转换为特有格式

### transformDate

## 说明
`transformDate` 函数将传入的日期对象或时间戳转换为特定格式的字符串，通常用于显示更友好的日期格式。

## 参数

| 参数名 | 类型              | 默认值 | 说明                     |
| ------ | ----------------- | ------ | ------------------------ |
| date   | `Date` / `Number` | ---    | 需要格式化的日期或时间戳 |

## 返回

`string` - 转换后的日期字符串，格式为 "MM月DD日"。

## 代码演示

### 基础用法

```js
import { transformDate } from 'atom-tools'; 

// 传入 Date 对象
console.log(transformDate(new Date())); // 输出：当前日期的特定格式字符串，例如 "04月29日"

// 传入时间戳
console.log(transformDate(1714405699791)); // 输出：对应时间戳的特定格式字符串，例如 "04月29日"
```