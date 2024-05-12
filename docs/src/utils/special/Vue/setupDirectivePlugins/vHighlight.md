---
title: v-highlight Directive
---

# 高亮指令

## v-highlight

## 说明

`v-highlight` 用于在页面元素中高亮显示特定的文本。该指令支持自定义高亮的文本内容、高亮样式。

## 参数

| 参数    | 说明                   | 类型     | 默认值   |
| ------- | ---------------------- | -------- | -------- |
| keyword | 需要高亮的文本(`必需`) | `string` | `无`     |
| style   | 高亮显示的样式(`可选`) | `object` | `{}`     |

## 返回值

`无` —— 该指令不返回任何值，但会在控制台中打印高亮的文本。

## 异常

- 如果 `keyword` 参数未提供，将抛出错误。
- 如果 `style` 参数不是对象类型，将抛出错误。

## 使用

在 Vue 模板中，您可以通过以下方式使用 v-highlight 指令：

```vue
<template>
  <div v-highlight="{ keyword: 'atom-tools', style: { color: 'red', 'font-weight': 'bold' } }">
    atom-tools 是一个快速、强大且开箱即用的TypeScript工具库。
  </div>
</template>
```

## 组件更新时重新高亮
```vue
<template>
  <div v-highlight="{ keyword: textToHighlight }">
    atom-tools 是一个快速、强大且开箱即用的TypeScript工具库。
  </div>
</template>

<script setup>
import { ref } from 'vue';

const textToHighlight = ref('atom');
</script>
```