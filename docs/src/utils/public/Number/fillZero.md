---
title: fillZero
---

# 补零

### fillZero

## 说明

`fillZero` 函数用于将小于10的数字前面补0，以便格式化为两位数的字符串表示。

## 参数

| 参数 | 说明                     | 类型     | 默认值 |
| ---- | ------------------------ | -------- | ------ |
| num  | 传入的数字，需要补零处理 | `Number` | ---    |

## 返回值

`String` - 返回补零后的两位数字符串表示。

## 代码演示

### 基础用法

```ts
import { fillZero } from 'atom-tools'

// 传入一个小于10的数字
console.log(fillZero(6)) // 输出："06"

// 传入一个大于等于10的数字
console.log(fillZero(25)) // 输出："25"，不进行补零
```
