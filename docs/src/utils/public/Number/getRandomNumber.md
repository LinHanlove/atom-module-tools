---
title: getRandomNumber
---

# 随机数字

### getRandomNumber

## 说明
`getRandomNumber` 函数用于生成一个指定长度的唯一随机数字。

## 参数

| 参数  | 说明               | 类型     | 默认值 |
| ----- | ------------------ | -------- | ------ |
| digit | 随机数字的期望长度 | `Number` | 2      |

## 返回值

`string` - 返回一个指定长度的唯一随机数字字符串。

## 代码演示

### 基础用法

```ts
import { getRandomNumber } from 'atom-tools'; 

// 生成一个3位长度的随机数字
console.log(getRandomNumber(3)); // 输出：一个3位长度的随机数字，例如 "258"
```