---
title: isEmpty
---

# 检查一个值是否为空

### isEmpty

## 说明
空的定义包括：数组、字符串、Map、Set、对象（无键值对）、null、NaN、未定义或未声明的值，如果值为空，则返回true，否则返回false

## 参数

| 参数  | 说明         | 类型 | 默认值 |
| ----- | ------------ | ---- | ------ |
| value | 要检测的数据 | `Any`  | ---      |

## 返回值

`boolean`

## 代码演示

### 基础用法

```ts
import { isEmpty } from 'atom-tools';

  console.log(isEmpty(null)); // true

  console.log(isEmpty({ a: 1 })); // false

```


    
