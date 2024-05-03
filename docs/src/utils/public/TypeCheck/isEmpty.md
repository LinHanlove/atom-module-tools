---
title: isEmpty
---

# 检查一个值是否为空

### isEmpty

## 说明

`isEmpty` 函数用于检查传入的值是否被认为是“空”。空的定义包括但不限于：空数组、空字符串、空 Map、空 Set、不含任何键值对的对象、`null`、`NaN`、未定义或未声明的值。如果值为空，则函数返回 `true`；否则返回 `false`。

## 参数

| 参数  | 说明         | 类型  | 默认值 |
| ----- | ------------ | ----- | ------ |
| value | 要检测的数据 | `Any` | ---    |

## 返回值

`boolean` - 返回一个布尔值，表示传入的值是否为空。

## 代码演示

### 基础用法

```ts
import { isEmpty } from 'atom-tools'

// 检测 null
console.log(isEmpty(null)) // 输出：true

// 检测一个含有键值对的对象
console.log(isEmpty({ a: 1 })) // 输出：false

// 检测一个空对象
console.log(isEmpty({})) // 输出：true

// 检测一个空数组
console.log(isEmpty([])) // 输出：true

// 检测一个空字符串
console.log(isEmpty('')) // 输出：true

// 检测 NaN
console.log(isEmpty(NaN)) // 输出：true

// 检测未定义
console.log(isEmpty(undefined)) // 输出：true
```
