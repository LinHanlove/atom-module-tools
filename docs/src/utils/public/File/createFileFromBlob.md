---
title: createFileFromBlob
---

# 从Blob创建文件函数

### createFileFromBlob

## 说明

`createFileFromBlob` 函数用于从给定的Blob和文件名创建一个新的文件对象。

## 参数

| 参数   | 说明     | 类型     |
| ------ | -------- | -------- |
| blob   | Blob对象 | `Blob`   |
| filename | 文件名   | `string` |

## 返回值

`File` - 新创建的文件对象。

## 代码演示

### 基础用法

```typescript
import { createFileFromBlob } from 'atom-tools'

const blob = new Blob(['Hello, world!'], { type: 'text/plain' })
const file = createFileFromBlob(blob, 'hello.txt')
console.log(file)
```