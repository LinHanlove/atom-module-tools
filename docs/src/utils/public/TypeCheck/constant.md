---
title: 类型判断函数MAP
---

# 类型判断函数MAP

### TYPE_MAP

## 说明

`TYPE_MAP` 是一个包含多种类型判断函数的集合，这些函数可以帮助你快速判断变量的类型。使用时，你可以直接从 `atom-tools` 导出所需的函数，其用法类似于 `isEmpty` 函数。

## 函数列表

| 名称              | 说明                                       | 返回类型 |
| ----------------- | ------------------------------------------ | -------- |
| isDate            | 判断是否是日期                             | Boolean  |
| isDef             | 检测一个值是否为 `undefined`               | Boolean  |
| isObject          | 检测一个值是否为 `object`                  | Boolean  |
| isNaN             | 判断是否是 `NaN`                           | Boolean  |
| isNull            | 判断是否是 `null`                          | Boolean  |
| isNullAndUnDef    | 判断是否是 `undefined` 和 `null` 的交集    | Boolean  |
| isNumber          | 判断是不是数字                             | Boolean  |
| isPromise         | 判断一个值是否为 `Promise` 对象            | Boolean  |
| isString          | 判断一个值是否为字符串类型                 | Boolean  |
| isFunction        | 判断一个值是否为函数类型                   | Boolean  |
| isBoolean         | 判断一个值是否为布尔类型                   | Boolean  |
| isRegExp          | 判断一个值是否为正则表达式类型             | Boolean  |
| isArray           | 判断一个值是否为数组类型                   | Boolean  |
| isWindow          | 判断当前环境是否为浏览器环境（非服务器端） | Boolean  |
| isServer          | 判断当前环境是否为服务器端                 | Boolean  |
| isClient          | 判断当前环境是否为客户端（浏览器环境）     | Boolean  |
| isElement         | 判断一个值是否为 HTML 元素                 | Boolean  |
| isMap             | 判断一个值是否为 `Map` 类型                | Boolean  |
| isUrl             | 判断一个字符串是否为有效的 URL 地址        | Boolean  |
| isMobileNumber    | 判断一个字符串是否为有效的手机号码         | Boolean  |
| isTelePhoneNumber | 判断一个字符串是否为有效的座机号码         | Boolean  |

## 代码演示

### 使用类型判断函数

```ts
import { isString, isNumber, isArray } from 'atom-tools'

const result1 = isString('hello') // 输出：true
const result2 = isNumber(123) // 输出：true
const result3 = isArray([1, 2, 3]) // 输出：true

console.log(result1, result2, result3)
```
