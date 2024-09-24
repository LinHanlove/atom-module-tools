---
title: 浏览器归属
---

# 浏览器归属

## 说明

以下是一些用于判断当前浏览器类型的常用函数，用来判断当前浏览器是微信浏览器还是支付宝浏览器，还是谷歌等等，返回布尔值


## 函数列表

| 名称               | 说明                                   | 返回值   | 
| ------------------ | -------------------------------------- | -------- | 
| isWxBrowser        | 判断当前浏览器是否为微信浏览器       | `boolean`|
| isAliBrowser       | 判断当前浏览器是否为支付宝浏览器     | `boolean`|
| isDouyinBrowser    | 判断当前浏览器是否为抖音客户端浏览器 | `boolean`|
| isDouyinLiteBrowser| 判断当前浏览器是否为抖音极速版客户端浏览器 | `boolean`|
| isQqBrowser        | 判断当前浏览器是否为QQ浏览器         | `boolean`|
| isBaiduBrowser     | 判断当前浏览器是否为百度浏览器       | `boolean`|
| isSafariBrowser     | 判断当前浏览器是否为Safari浏览器     | `boolean`|
| isUcBrowser        | 判断当前浏览器是否为UC浏览器         | `boolean`|
| is360Browser       | 判断当前浏览器是否为360浏览器        | `boolean`|
| isSogouBrowser     | 判断当前浏览器是否为搜狗浏览器       | `boolean`|

## 示例代码

### 判断是否为微信浏览器

```javascript
import { isWxBrowser } from 'atom-tools';

if (isWxBrowser()) {
  console.log('当前是微信浏览器');
} else {
  console.log('当前不是微信浏览器');
}
```