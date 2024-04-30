---
title: 获取地址栏参数
---

# 解析url地址

### getUrlParams

## 说明
解析url地址中的参数，返回一个对象，包含参数名和参数值

## 参数

| 参数 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| url | 地址 | `String`  | ---      |

## 返回值

`object`

## 代码演示

### 基础用法

```ts
import { getUrlParams } from 'atom-tools';

// url地址
const url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=49055317_48_hao_pg&wd=atom-tools'

// 传入url地址
const result = getUrlParams(url); 

console.log(result);
// {
//     ie: 'utf-8',
//     f: '8',
//     rsv_bp: '1',
//     tn: '49055317_48_hao_pg',
//     wd: 'atom-tools'
// }


```


    
