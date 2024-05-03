---
title: 浏览器全屏
---

# 浏览器全屏

### toFullScreen

## 说明

`toFullScreen` 函数提供了一个统一的接口来触发浏览器进入全屏模式。它自动适配各种浏览器的全屏API，使得全屏操作在不同浏览器上能够保持一致。

`void`

## 代码演示

### 基础用法

```ts
import { toFullScreen } from 'atom-tools'

const clickFullScreen = () => {
  return toFullScreen()
}
```
