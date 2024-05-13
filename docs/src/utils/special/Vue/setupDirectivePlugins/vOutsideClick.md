---
title: v-outside-click Directive
---

# 监听是否在元素外点击指令

## v-outside-click

## 说明

`v-outside-click` 指令用于在用户点击组件外部时执行一个回调函数。当用户点击的元素不是绑定该指令的元素或其子元素时，指令会触发一个用户提供的函数。

## 参数

| 参数  | 说明                 | 类型       | 默认值 |
| ----- | -------------------- | ---------- | ------ |
| value | 点击外部时调用的函数 | `Function` | 无     |

## 返回值

无 —— 该指令不返回任何值。

## 异常

- 无特殊异常处理，但请注意，如果未能正确绑定或解绑事件，可能会导致内存泄漏。

## 使用

在 Vue 模板中，您可以通过以下方式使用 `v-outside-click` 指令：

```vue
<template>
  <div v-outside-click="handleOutsideClick">
    <!-- 这里是你的内容 -->
  </div>
</template>

<script setup>
const handleOutsideClick = (event) => {
  console.log('用户点击了组件外部', event)
}
</script>
```
