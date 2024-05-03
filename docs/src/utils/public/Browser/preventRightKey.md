---
title: 禁止右键
---

# 禁止右键

### preventRightKey

## 说明

`preventRightKey` 函数用于禁用浏览器中通过鼠标右键触发的所有事件，如打开上下文菜单、选择文本、复制等操作。

## 返回值

`void`

## 代码演示

### 基础用法

```ts
import { preventRightKey } from 'atom-tools'

const prevent = () => {
  // 可以右键,5s后禁止右键
  setTimeout(() => {
    preventRightKey()
  }, 5000)
}
```
