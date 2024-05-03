---
title: 去掉标签字符串中的元素标记
---

# 去掉标签字符串中的元素标记

### removeElementMark

## 说明

`removeElementMark` 函数用于移除传入的标签字符串中的所有HTML元素标记，只保留纯文本内容。

## 参数

| 参数 | 说明                 | 类型     | 默认值 |
| ---- | -------------------- | -------- | ------ |
| str  | 包含HTML标签的字符串 | `String` | ---    |

## 返回值

`string` - 返回去除HTML元素标记后的纯文本字符串。

## 代码演示

### 基础用法

```ts
import { removeElementMark } from 'atom-tools'

const str = '<p>hello world</p>'

const result = removeElementMark(str)

console.log(result) // 输出：hello world
```
