# getTwoDaysApart

计算两个日期之间的天数差。

### getTwoDaysApart

#### 说明

`getTwoDaysApart` 函数用于计算传入的两个日期之间的天数差。它支持传入日期对象、时间戳或日期字符串。

#### 参数

| 参数名   | 类型                         | 说明     |
| -------- | ---------------------------- | -------- |
| lastDate | `Date` / `Number` / `String` | 开始日期 |
| nextDate | `Date` / `Number` / `String` | 结束日期 |

#### 返回

`number` - 两个日期之间的天数差。

#### 代码演示

##### 基础用法

```js
import { getTwoDaysApart } from 'atom-tools';

// 传入 Date 对象
console.log(getTwoDaysApart(new Date('2024-04-01'), new Date('2024-04-03'))); // 输出：2

// 传入时间戳
console.log(getTwoDaysApart(1617427200000, 1617513600000)); // 输出：2

// 传入字符串
console.log(getTwoDaysApart('2024-04-01', '2024-04-03')); // 输出：2
```