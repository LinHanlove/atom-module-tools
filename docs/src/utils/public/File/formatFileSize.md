---
title: formatFileSize
---

# 文件大小格式化函数

### formatFileSize

## 说明

`formatFileSize` 函数用于将文件大小（以字节为单位）格式化为易读的字符串（B、KB、MB、GB）。

## 参数

| 参数 | 说明     | 类型     |
| ---- | -------- | -------- |
| size | 文件大小 | `number` |

## 返回值

`string` - 格式化后的文件大小字符串。

## 代码演示

### 基础用法

```typescript
import { formatFileSize } from 'atom-tools'

const formattedSize = formatFileSize(1024 * 1024 * 5)
console.log(formattedSize) // 输出: 5.00MB
```