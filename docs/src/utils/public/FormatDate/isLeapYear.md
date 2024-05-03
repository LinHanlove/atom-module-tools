---
title: isLeapYear
---

# 判断是否为闰年

### isLeapYear

## 说明

`isLeapYear` 函数用于判断给定的年份是否为闰年。

## 参数

| 参数名 | 类型     | 默认值 | 说明           |
| ------ | -------- | ------ | -------------- |
| year   | `Number` | ---    | 需要检查的年份 |

## 返回

`boolean` - 返回 `true` 如果给定的年份是闰年，否则返回 `false`。

## 代码演示

### 基础用法

```js
import { isLeapYear } from 'atom-tools'

// 检查特定年份是否为闰年
console.log(isLeapYear(2024)) // 输出：true，因为2024年是闰年

// 检查其他年份
console.log(isLeapYear(1900)) // 输出：false，因为1900年不是闰年
console.log(isLeapYear(2000)) // 输出：true，因为2000年是闰年
```
