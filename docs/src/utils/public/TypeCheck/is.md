---
title: is
---

# 检测数据类型

### is

## 说明

`is` 函数基于 `Object.prototype.toString` 调用对象的 `toString` 方法来检测数据类型。它接受两个参数：要检测的数据和要检测的数据类型。

## 参数

| 参数  | 说明                           | 类型     | 默认值 |
| ----- | ------------------------------ | -------- | ------ |
| value | 要检测的数据                   | `Any`    | ---    |
| type  | 要检测的数据类型（字符串形式） | `String` | ---    |

## 返回值

`boolean` - 返回一个布尔值，表示数据是否为指定类型。

## 代码演示

### 基础用法

```ts
import { is } from 'atom-tools'

// 检测字符串
console.log(is('123', 'String')) // 输出：true

// 检测数组
console.log(is([1, 2, 3], 'array')) // 输出：true

// 检测普通对象
console.log(is({ a: 1, b: 2 }, 'object')) // 输出：true

// 检测 null
console.log(is(null, 'null')) // 输出：true

// 检测 undefined
console.log(is(undefined, 'undefined')) // 输出：true

// 检测数字
console.log(is(123, 'number')) // 输出：true

// 检测布尔值
console.log(is(true, 'boolean')) // 输出：true

// 检测日期对象
console.log(is(new Date(), 'date')) // 输出：true

// 检测正则表达式对象
console.log(is(new RegExp('abc'), 'regExp')) // 输出：true

// 检测 Symbol
console.log(is(Symbol('abc'), 'symbol')) // 输出：true

// 检测函数
console.log(is(function () {}, 'function')) // 输出：true
```
