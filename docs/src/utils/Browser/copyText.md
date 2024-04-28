---
title: 一键复制
---

# 一键复制

### copyText

## 参数

| 参数 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| value | 要复制的文字内容 | `String` | -      |

## 返回值

`string`

## 代码演示

### 基础用法

```ts
import { copyText } from 'atom-tools';

// 按钮点击事件
const clickBtn = () => {
  copyText('这是一段文字');
};

```

### 复制成功提示

```ts
import { copyText } from 'atom-tools';

// 按钮点击事件
const clickBtn = () => {
  copyText('这是一段文字', (res) => {
    console.log(res);
  });
};
```


    
