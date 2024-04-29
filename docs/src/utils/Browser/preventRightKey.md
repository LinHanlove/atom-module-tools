---
title: 禁止右键
---

# 禁止右键

### preventRightKey

## 说明
调用该函数后，将禁止浏览器一切由右键唤起的事件，例如：选择，复制



## 返回值

`void`

## 代码演示

### 基础用法

```ts
import { preventRightKey } from 'atom-tools';

const prevent = () => {
  // 可以右键,5s后禁止右键
  setTimeout(() => {
    preventRightKey()
  }, 5000)
}

```


    
