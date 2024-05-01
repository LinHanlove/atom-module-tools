title: formatDate
---

# 格式化年月日

### formatDate

## 说明
`formatDate` 函数用于将传入的日期对象、时间戳或日期字符串格式化为 `YYYY-MM-DD` 格式的字符串。

## 参数

| 参数名 | 类型                         | 默认值 | 说明             |
| ------ | ---------------------------- | ------ | ---------------- |
| date   | `Date` / `Number` / `String` | ---    | 需要格式化的日期 |

## 返回

`string` - 格式化后的日期字符串。

## 代码演示

### 基础用法

```js
import { formatDate } from 'atom-tools'

// 传入 Date 对象
console.log(formatDate(new Date())); // 输出：当前日期的格式化字符串，例如 "2024-04-29"

// 传入时间戳
console.log(formatDate(1714405699791)); // 输出：对应时间戳的格式化字符串，例如 "2024-04-29"

// 传入字符串
console.log(formatDate('2024-04-29')); // 输出："2024-04-29"
console.log(formatDate('2024/4/15')); // 输出：根据字符串格式转换后的格式化字符串，例如 "2024-04-15"
```
