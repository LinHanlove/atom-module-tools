---
title: 将值转换为日期对象
---

# 将值转换为日期对象

### toDate

## 说明

`toDate` 函数用于将传入的值转换为 `Date` 对象。如果输入值无法被识别为有效的日期，函数将抛出一个错误。

## 参数

| 参数名 | 类型                                                | 默认值 | 说明             |
| ------ | --------------------------------------------------- | ------ | ---------------- |
| date   | `string` / `number` / `Date` / `null` / `undefined` | ---    | 需要转换的日期值 |

## 返回值

`Date` - 如果转换成功，返回 `Date` 对象。

## 抛出错误

- 如果 `date` 参数为 `null` 或 `undefined`，函数将抛出一个错误，指出“日期参数为空，无法转换为日期对象”。
- 如果 `date` 参数为 `string` 或 `number` 但无法被转换为有效的日期对象，函数将抛出一个错误，指出“无法识别日期类型：Invalid date format” 或 “提供的数字不是一个有效的时间戳”。

## 代码演示

### 基础用法

```javascript
import { toDate } from 'atom-tools';

// 传入 Date 对象
const dateFromObject = toDate(new Date());

// 传入时间戳
const dateFromTimestamp = toDate(1617427200000);

// 传入字符串
const dateFromString = toDate('2024-04-29');

try {
  // 尝试转换无效的日期字符串
  const invalidDate = toDate('not-a-date');
} catch (error) {
  console.error(error.message); // 输出错误信息
}
```