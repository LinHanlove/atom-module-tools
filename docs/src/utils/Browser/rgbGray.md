---
title: 颜色灰度化
---

# 颜色灰度化

### copyText

## 说明
基于光感加权平均值，将rgb颜色灰度，得到一个值, 范围在0-255之间,将该值用于rbg的3个值 例如：rbg(result, result, result),则该色值为灰度化后的颜色

## 参数

| 参数 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| rgb | 要灰度化的rgb颜色 | `String` `string[]` | -      |

## 返回值

`number`

## 代码演示

### 基础用法

```ts
import { rgbGray } from 'atom-tools';

// 传入字符串
const result = rgbGray('96, 77, 77'); // 81.0394

// 传入数组
const result2 = rgbGray(['96', '96', '96']); // 81.0394

// 得到灰度化后的颜色
const newRbgGray = rbg(result,result,result)// rbg(81.0394, 81.0394, 81.0394)

```


    
