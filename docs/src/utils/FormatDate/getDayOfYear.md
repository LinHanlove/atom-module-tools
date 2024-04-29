---
title: getDayOfYear
---

# 获取某个日期是当年的第几天

### getDayOfYear


## 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | `Date`  `Number`  | - | 需要格式化的日期 |

## 返回

`number` 

## 代码演示

### 基础用法

```js


import { getDayOfYear } from 'atom-tools'

// 传入date
console.log(getDayOfYear(new Date())) // 120

// 传入时间戳
console.log(getDayOfYear(1714405699791)) // 120


```
