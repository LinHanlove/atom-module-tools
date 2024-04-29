---
title: transformDate
---

# 日期转换为特有格式

### transformDate


## 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | `Date`  `Number`  | - | 需要格式化的日期 |

## 返回

`string` 

## 代码演示

### 基础用法

```js


import { transformDate } from 'atom-tools'

// 传入date
console.log(transformDate(new Date())) // 04月29日

// 传入时间戳
console.log(transformDate(1714405699791)) // 04月29日


```
