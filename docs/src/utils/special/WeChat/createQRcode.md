---
title: QRCode Generator Function
---

# 二维码生成

### createQRCode

## 说明

`createQRCode` 函数用于生成一个二维码图片。用户可以指定要转换为二维码的内容和一些可选的配置参数。

个性化配置请参考 [qrcode](https://www.npmjs.com/package/qrcode) 库的文档。

## 参数

| 参数    | 说明                   | 类型     | 默认值 |
| ------- | ---------------------- | -------- | ------ |
| content | 需要转换为二维码的内容 | `string` | -      |
| options | 二维码的配置选项       | `Object` | -      |

`options` 对象可以包含以下属性：

- `size`: 生成二维码的尺寸，默认为300。
- `typeNumber`: 二维码的类型编号，默认为4。
- `errorCorrectLevel`: 二维码的错误校正级别，默认为'M'。

## 返回值

`Promise<string>` - 返回一个Promise，解析为base64编码的二维码图片。

## 代码演示

### 基础用法

```typescript
import { createQRCode } from 'atom-tools'

// 使用 createQRCode 生成二维码
createQRCode('Hello, World!')
  .then((base64QRCode) => {
    // 使用base64编码的二维码图片
    console.log(base64QRCode)
  })
  .catch((error) => {
    // 处理可能发生的错误
    console.error(error)
  })
```

### 个性化配置

```typescript
import { createQRCode } from 'atom-tools'

// 使用 createQRCode 生成二维码，并设置自定义配置
createQRCode('Hello, Custom QRCode!', {
  size: 500,
  typeNumber: 4,
  errorCorrectLevel: 'H'
})
  .then((base64QRCode) => {
    // 使用自定义配置生成的base64编码的二维码图片
    console.log(base64QRCode)
  })
  .catch((error) => {
    // 处理可能发生的错误
    console.error(error)
  })
```
