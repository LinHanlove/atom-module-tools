---
title: 格式化日期为中文星期
---

# 格式化日期为中文星期

### transformDateWeekCN

## 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| date | 日期 | `Date` | - |

## 返回值

`string`

## 代码演示

### 基础用法

```ts
import { formatDateWeekCN } from 'atom-tools';

formatDateWeekCN(new Date());// 输出：星期一

formatDateWeekCN(new Date('2022-01-01'));// 输出：星期五

formatDateWeekCN(1);// 输出：星期一
```


    
