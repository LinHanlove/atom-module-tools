---
title: keepDecimal
---

# 保留小数

### keepDecimal

## 说明
`keepDecimal` 函数用于将传入的数字保留指定位数的小数。

## 参数

| 参数 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| digit | 自定义长度 | `Number` | 2      |

## 返回值

`string`

## 代码演示

### 基础用法

```ts
import { keepDecimal } from 'atom-tools';

console.log(keepDecimal(0.25656)); // 输出：0.26

```


    
