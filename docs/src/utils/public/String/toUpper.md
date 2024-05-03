---
title: toUpper
---

# 大写转换

### toUpper

## 说明

`toUpper` 函数用于将字符串的首字母或全部字符转换为大写。当仅转换首字母时，其余部分保持原样；当转换全部字符时，整个字符串将转换为大写。

## 参数

| 参数  | 说明                   | 类型      | 默认值 |
| ----- | ---------------------- | --------- | ------ |
| value | 需要转换的字符串       | `String`  | ---    |
| all   | 是否转换全部字符为大写 | `Boolean` | ---    |

## 返回值

`String` - 转换后的字符串。

## 代码演示

### 基础用法

```ts
import { toUpper } from 'atom-tools'

// 转换首字母为大写
console.log(toUpper('atomTools')) // 输出：AtomTools

// 转换全部字符为大写
console.log(toUpper('atomTools', true)) // 输出：ATOMTOOLS
```
