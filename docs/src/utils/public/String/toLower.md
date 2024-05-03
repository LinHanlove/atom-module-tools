---
title: toLower
---

# 小写转换

### toLower

## 说明

`toLower` 函数用于将字符串的首字母或全部字符转换为小写。当仅转换首字母时，其余部分保持原样；当转换全部字符时，整个字符串将转换为小写。

## 参数

| 参数  | 说明                   | 类型      | 默认值 |
| ----- | ---------------------- | --------- | ------ |
| value | 需要转换的字符串       | `String`  | ---    |
| all   | 是否转换全部字符为小写 | `Boolean` | ---    |

## 返回值

`String` - 转换后的字符串。

## 代码演示

### 基础用法

```ts
import { toLower } from 'atom-tools'

// 转换首字母为小写
console.log(toLower('ATOMTOOLS')) // 输出：aTOMTOOLS

// 转换全部字符为小写
console.log(toLower('ATOMTOOLS', true)) // 输出：atomtools
```
