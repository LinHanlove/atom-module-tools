---
title: v-resize Directive
---

# 监听尺寸变化指令

## v-resize

## 说明

`v-resize` 指令用于监听和响应元素尺寸的变化。当元素的尺寸发生变化时，该指令会调用一个用户提供的回调函数，传递变化的尺寸信息。

## 参数

| 参数  | 说明     | 类型       | 默认值 |
| ----- | -------- | ---------- | ------ |
| value | 回调函数 | `Function` | 无     |

## 返回值

无 —— 该指令不返回任何值。

## 异常

- 如果浏览器不支持 `ResizeObserver`，则无法使用此指令。

## 使用

在 Vue 模板中，您可以通过以下方式使用 `v-resize` 指令：

```vue
<template>
  <div v-resize="handleResize">
    <!-- 这里是你的内容 -->
  </div>
</template>

<script setup>
const handleResize = (contentRect) => {
  console.log(contentRect) // 打印元素的新尺寸
}
</script>
```
