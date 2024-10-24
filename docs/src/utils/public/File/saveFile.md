---
title: saveFile
---

# 保存文件函数

### saveFile

## 说明

`saveFile` 

## 参数

| 参数   | 说明     | 类型     |
| ------ | -------- | -------- |
| blob   | Blob对象 | `Blob`   |
| filename | 文件名   | `string` |

## 代码演示

### 基础用法

```typescript
import { saveFile } from 'atom-tools'

const blob = new Blob(['Hello, world!'], { type: 'text/plain' })
saveFile(blob, 'hello.txt')
```