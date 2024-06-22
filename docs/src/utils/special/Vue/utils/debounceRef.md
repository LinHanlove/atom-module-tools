---
title: debounceRef 
---

# 防抖引用

## debounceRef

## 说明

`debounceRef` 是一个 Vue3 Composition API 工具函数，它创建了一个防抖的响应式引用。当您在 Vue 组件中使用 `debounceRef` 时，用法同`ref`,可以方便地实现输入防抖逻辑，提高性能，避免因频繁更新数据而造成的性能问题。

## 参数

`debounceRef` 函数接受以下参数：

| 参数名 | 说明               | 类型    | 默认值 |
|--------|----------------------|---------|--------|
| value  | 初始的响应式数据值 | `T`     | --     |
| delay  | 延迟时间，单位毫秒 | `number` | `200`  |

## 返回值

`Ref<T>` - 返回一个具有防抖功能的响应式引用。

## 使用

在 Vue 组件中，您可以通过以下方式使用 `debounceRef`：

```vue
<template>
  <div>
    <input type="text" v-model="text" />
    <p>Input Value: {{ text.value }}</p>
  </div>
</template>

<script lang='ts' setup>
import { debounceRef } from 'atom-tools/vue'; // 替换为实际的模块路径

const text = debounceRef('', 500); // 创建一个防抖的响应式引用，延迟时间为 500ms
</script>