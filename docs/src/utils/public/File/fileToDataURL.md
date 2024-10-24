---
title: fileToDataURL
---

# 文件转DataURL函数

### fileToDataURL

## 说明

`fileToDataURL` 函数用于将传入的文件对象转换为一个数据URL字符串。它返回一个`Promise`对象，该对象在文件读取成功后解决（resolve）为数据URL字符串。

## 参数

| 参数 | 说明     | 类型   |
| ---- | -------- | ------ |
| file | 文件对象 | `File` |

## 返回值

`Promise<string>` 

## 代码演示

### 基础用法

```typescript
import { fileToDataURL } from 'atom-tools'

async function convertFileToDataURL() {
  const file = await fileInput.files[0]
  const dataURL = await fileToDataURL(file)
  console.log(dataURL)
}

convertFileToDataURL()
```