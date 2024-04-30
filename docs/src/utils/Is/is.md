---
title: is
---

# 检测数据类型

### is

## 说明
基于`Object.prototype.toString`检测数据类型 接受两个值，`要检测的数据`、`要检测的数据类型`

## 参数

| 参数 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| value | 要检测的数据 | `Any` | ---      |
| type | 要检测的数据类型 | `String` | ---      |

## 返回值

`boolean`

## 代码演示

### 基础用法

```ts
import { is } from 'atom-tools';

console.log(is('123', 'String')); // true

console.log(is([1, 2, 3], 'array'));// true

console.log(is({ a: 1, b: 2 }, 'object'));// true

console.log(is(null, 'null'));// true

console.log(is(undefined, 'undefined'));// true

console.log(is(123, 'number'));// true

console.log(is(true, 'boolean'));// true

console.log(is(new Date(), 'date'));// true

console.log(is(new RegExp('abc'), 'regExp'));// true

console.log(is(Symbol('abc'), 'symbol'));// true

console.log(is(function () { }, 'function'));// true

```


    
