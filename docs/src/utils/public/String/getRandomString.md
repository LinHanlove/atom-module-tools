---
title: getRandomString
---

# 随机字符串

### getRandomString

## 说明

`getRandomString` 函数用于生成一个指定长度的唯一随机字符串。该字符串可以用于多种需要唯一标识符的场合。

## 参数

| 参数  | 说明                 | 类型     | 默认值 |
| ----- | -------------------- | -------- | ------ |
| digit | 随机字符串的期望长度 | `Number` | 32     |

## 返回值

`string` - 返回一个指定长度的随机字符串。

## 代码演示

### 基础用法

```ts
import { getRandomString } from 'atom-tools'

// 生成一个6位长度的随机字符串
console.log(getRandomString(6)) // 输出：一个6位长度的随机字符串，例如 "ashdha"
```
