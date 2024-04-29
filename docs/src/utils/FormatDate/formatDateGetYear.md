---
title: 传入日期获取年份
---

# 传入日期获取年份

### formatDateGetYear


## 参数

| 参数名 | 类型         | 默认值 | 说明             |
| ------ | ------------ | ------ | ---------------- |
| date   | `Date` `String`  `Number` | -      | 需要格式化的日期 |

## 返回值

`string`

## 代码演示

### 基础用法

```js
import { formatDateGetYear } from 'atom-tools';

console.log(formatDateGetYear('2020-01-01')); // 2024

console.log(formatDateGetYear(new Date())); // 2024

console.log(formatDateGetYear(1609459200000)); // 2021
```
