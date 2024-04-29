---
title: formatDateTime
---

# 格式化年月日 时分秒

### formatDateTime


## 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | `Date`  `Number` `String` | - | 需要格式化的日期 |

## 返回

`string` 

## 代码演示

### 基础用法

```js


import { formatDateTime } from 'atom-tools'

// 传入date
console.log(formatDateTime(new Date())) // 2024-04-29 23:37:24

// 传入时间戳
console.log(formatDateTime(1714405699791)) // 2024-04-15 00:00:00

// 传入字符串
console.log(formatDateTime('2024-04-29')) // 2024-04-15 00:00:00
console.log(formatDateTime('2024/4/29')) // 2024-04-15 00:00:00
```
