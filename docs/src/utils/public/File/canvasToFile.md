---
title: canvasToFile
---

# 画布转文件函数

### canvasToFile

## 说明

`canvasToFile` 函数用于将画布元素转换为一个文件对象。它返回一个`Promise`对象，该对象在转换成功后解决（resolve）为文件对象。

## 参数

| 参数   | 说明         | 类型     | 默认值      |
| ------ | ------------ | -------- | ----------- |
| canvas | 画布元素     | `HTMLCanvasElement` | - |
| type   | 文件的MIME类型 | `string` | - |
| quality | 文件质量（0-100） | `number` | - |

## 返回值

`Promise<Blob|null>` 

## 代码演示

### 基础用法

```typescript
import { canvasToFile } from 'atom-tools'

async function convertCanvasToFile() {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
  const file = await canvasToFile(canvas, 'image/png', 90)
  console.log(file)
}

convertCanvasToFile()
```