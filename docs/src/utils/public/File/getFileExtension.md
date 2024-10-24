---
title: getFileExtension
---

# 获取文件扩展名函数

### getFileExtension

## 说明

`getFileExtension` 函数用于获取文件的扩展名。

## 参数

| 参数 | 说明     | 类型   |
| ---- | -------- | ------ |
| file | 文件对象 | `File` |

## 返回值

`string` - 文件的扩展名。

## 代码演示

### 基础用法

```typescript
import { getFileExtension } from 'atom-tools'

const file = new File(['Hello, world!'], 'hello.txt', { type: 'text/plain' })
const extension = getFileExtension(file)
console.log(extension) // 输出: txt
```