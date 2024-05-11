---
title: VCopy Directive
---

# 复制指令

## VCopy

## 说明

`VCopy` 用于在用户执行指定的事件操作时复制特定的文本到剪贴板。该指令支持自定义复制的文本内容、触发复制的事件类型，并且允许在复制操作完成后执行一个回调函数。

## 参数

| 参数     | 说明                             | 类型       | 默认值         |
| -------- | -------------------------------- | ---------- | -------------- |
| content  | 需要复制的文本(`可选`)           | `string`   | `el.innerText` |
| type     | 触发复制操作的事件(`可选`)       | `string`   | `click`        |
| callback | 复制操作完成后的回调函数(`可选`) | `function` | `undefined`    |

## 返回值

`无` —— 该指令不返回任何值，但会通过回调函数传递复制操作的结果。

## 异常

- 如果 `content` 参数未提供且元素的 `innerText` 也无法获取，将不执行复制操作。
- 如果 `type` 参数不是 '`click`' 或 '`dblclick`' 中的一个，将抛出错误。

## 使用

在 Vue 模板中，您可以通过以下方式使用 v-copy 指令：

```vue
<template>
  <div v-copy="{ content: 'Hello, World!', type: 'dblclick', callback: handleCopy }">
    双击复制文本
  </div>
</template>

<script setup>
const handleCopy = (res) => {
  alert(res) // 显示Hello, World!
}
</script>
```

## 传递元素的文本、

```vue
<template>
  <div v-copy="{ type: 'click', callback: handleCopy }">点击复制这段文本</div>
</template>

<script setup>
const handleCopy = (res) => {
  alert(res) // 点击复制这段文本
}
</script>
```
