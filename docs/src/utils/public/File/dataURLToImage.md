---
title: dataURLToImage
---

# 数据URL转图像函数

### dataURLToImage

## 说明

`dataURLToImage` 函数用于将数据URL字符串转换为一个图像元素（`HTMLImageElement`）。它返回一个`Promise`对象，该对象在图像加载成功后解决（resolve）为图像元素。

## 参数

| 参数   | 说明     | 类型     |
| ------ | -------- | -------- |
| dataURL | 数据URL字符串 | `string` |

## 返回值

`Promise<HTMLImageElement>` 

## 代码演示

### 基础用法

```typescript
import { dataURLToImage } from 'atom-tools'

async function convertDataURLToImage() {
  const dataURL = 'data:image/png;base64,...' // 假设这是你的数据URL
  const image = await dataURLToImage(dataURL)
  document.body.appendChild(image)
}

convertDataURLToImage()
```