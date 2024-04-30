---
title: pick
---

# 筛选对象属性

### pick

## 说明
转换首字母为小写（或全部），如果转换全部则忽略首字母的转换

## 参数

| 参数  | 说明         | 类型 | 默认值 |
| ----- | ------------ | ---- | ------ |
| value | 需要转换的字符串 | `String`  | ---      |
| all | 需要转换的字符串 | `Boolean`  | ---     |

## 返回值

`String`

## 代码演示

### 基础用法

```ts
import { toLower } from 'atom-tools';

console.log(toLower('ATOMTOOLS')); // aTOMTOOLS

console.log(toLower('ATOMTOOLS', true)); // atomtools

```


    
