---
title: readFileAsText
---

# 读取文件为文本函数

### readFileAsText

## 说明

`readFileAsText` 函数用于读取文件的内容作为文本。它返回一个`Promise`对象，该对象在文件读取成功后解决（resolve）为文本字符串。

## 参数

| 参数 | 说明     | 类型   |
| ---- | -------- | ------ |
| file | 文件对象 | `File` |

## 返回值

`Promise<string>` 

## 代码演示

### 基础用法

```typescript
import { readFileAsText } from 'atom-tools'

async function readFileContent() {
  const file = await fileInput.files[0]
  const content = await readFileAsText(file)
  console.log(content)
}

readFileContent()

```