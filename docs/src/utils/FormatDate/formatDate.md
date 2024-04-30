---
title: formatDate
---

# 格式化年月日

### formatDate


## 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | `Date`  `Number` `String` | --- | 需要格式化的日期 |

## 返回

`string` 

## 代码演示

### 基础用法

```js
import { formatDate } from 'atom-tools'

// 传入date
console.log(formatDate(new Date())) // 2024-04-29

// 传入时间戳
console.log(formatDate(1714405699791)) // 2024-04-29

// 传入字符串
console.log(formatDate('2024-04-29')) // 2024-04-29
console.log(formatDate('2024/4/15')) // 2024-04-29
```
