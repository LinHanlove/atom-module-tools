---
title: formatDate
---

# 格式化年月日

### formatDate


## 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | `Date`  `Number` | - | 需要格式化的日期 |

## 返回

`string`

## 代码演示

### 基础用法

```js

// 传入date
import { formatDate } from 'atom-tools'

const date = new Date()

const formatDate = formatDate(date)

console.log(formatDate) // 2022-01-01
```
<!-- 
```js
// 传入string
import { formatDate } from '@/utils'

const date = '2022-01-01'

const formatDate = formatDate(date)

console.log(formatDate) // 2022-01-01
``` -->

```js
// 传入number
import { formatDate } from 'atom-tools'

const date = 1640995200000

const formatDate = formatDate(date)

console.log(formatDate) // 2022-01-01
```

```js


    

