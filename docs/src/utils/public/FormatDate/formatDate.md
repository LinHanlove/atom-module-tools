---
title: 格式化日期函数
---

# 格式化日期函数

### formatDate


## 描述
`formatDate` 函数用于将传入的日期对象格式化为指定格式的字符串。支持多种预设格式，也可以通过函数自定义格式。

## 参数

| 参数名 | 类型                         | 默认值 | 说明                                                         |
|--------|------------------------------|--------|--------------------------------------------------------------|
| date   | `Date` / `Number` / `String` | --     | 需要格式化的日期对象、时间戳或日期字符串。                   |
| formatter | `string` 或 `Function`     | --     | 日期的格式化描述或格式化函数。                               |
| isPad  | `boolean`                   | `true` | 是否对日期时间的各个部分进行零填充。                       |

## 返回

`string` - 格式化后的日期字符串。

## 预设格式化关键字

- `date`: `"yyyy-MM-dd"`
- `dateTime`: `"yyyy-MM-dd HH:mm:ss"`
- `time`: `"HH:mm:ss"`
- `year`: `"yyyy"`
- `monthDay`: `"MM-dd"`

## 代码演示

### 基础用法

```javascript
import { formatDate } from 'atom-tools'

// 传入 Date 对象
console.log(formatDate(new Date(), 'date')) // 输出：当前日期的格式化字符串，例如 "2024-04-29"

// 使用预设格式
console.log(formatDate(new Date(), 'dateTime')) // 输出：当前日期时间的格式化字符串

// 使用自定义格式
console.log(formatDate(new Date(), 'yyyy-MM月mm日')) // 输出：自定义格式的字符串
```
### 自定义格式化函数
```javascript
// 自定义格式化函数
const customFormatter = (dateInfo) => {
  return `${dateInfo.year}年${dateInfo.month}月${dateInfo.day}日`;
};

// 使用自定义格式化函数
console.log(formatDate(new Date(), customFormatter));

```

### 零填充控制
```javascript
// 不使用零填充
console.log(formatDate(new Date(), 'yyyy-MM-dd', false)); // 输出可能包含非零填充的字符串，例如 "2024-4-29"
```
### 注意事项
- 确保 date 参数是有效的 Date 对象。
- 自定义 formatter 字符串时，确保使用正确的占位符，例如 yyyy, MM, dd, HH, mm, ss。
- 当 isPad 为 false 时，数值将不会进行零填充，这可能会导致格式不一致。