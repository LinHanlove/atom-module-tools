---
title: 一键复制到剪切板
---

# 一键复制到剪切板

### copyText

## 说明

`copyText` 函数用于将指定的文本内容复制到剪切板，方便用户粘贴使用。

## 参数

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| value | 要复制的文本内容 | `string` | ---    |

## 返回值

`string`

## 代码演示

### 基础用法

```ts
import { copyText } from 'atom-tools'

// 按钮点击事件
const clickBtn = () => {
  copyText('这是一段文字')
}
```

### 复制成功提示

```ts
import { copyText } from 'atom-tools'

// 按钮点击事件
const clickBtn = () => {
  copyText('这是一段文字').then((res) => {
    console.log(res)
  })
}
```
