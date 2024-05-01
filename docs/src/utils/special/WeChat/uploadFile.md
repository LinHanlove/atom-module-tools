---
title: Upload File Function
---

# 文件上传函数

### 文件上传

## 说明
`uploadFile` 函数用于在微信小程序环境中上传文件。它接受一个包含上传参数的对象。函数返回一个`Promise`，允许调用者通过链式调用`.then()`来处理上传成功的结果。

## 参数

| 参数            | 说明               | 类型     | 默认值 |
| --------------- | ------------------ | -------- | ------ |
| params          | 上传参数对象       | `Object` | -      |
| params.url      | 上传接口的url      | `string` | -      |
| params.filePath | 需要上传的文件路径 | `string` | -      |
| params.name     | 文件对应的 key     | `string` | -      |
| params.formData | 其他额外的表单数据 | `Object` | `{}`   |

## 返回值

`Promise<Object>` - 返回一个Promise，解析为上传成功的响应对象。

## 代码演示

### 基础用法

```javascript
import { uploadFile } from 'atom-tools'; // 替换为您的实际库路径

const params = {
  url: 'https://example.com/upload', // 替换为实际的上传接口URL
  filePath: '/path/to/your/file', // 替换为实际的文件路径
  name: 'file', // 替换为实际的文件字段名
  // 其他额外的表单数据
  formData: {
    additionalField: 'value'
  }
};

uploadFile(params)
  .then(response => {
    console.log('文件上传成功：', response);
  })
  .catch(error => {
    console.error('文件上传失败：', error);
  });
```