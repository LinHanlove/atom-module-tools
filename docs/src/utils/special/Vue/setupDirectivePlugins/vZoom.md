---
title: v-zoom Directive
---

# 缩放指令

##  v-zoom

## 说明

`v-zoom` 用于在用户交互时（如点击和滚动）对元素进行放大和缩小。它通过监听鼠标滚轮事件来改变元素的缩放级别，并允许用户通过点击来进一步放大。

## 参数

`v-zoom` 指令接受一个对象类型的参数，该对象可以包含以下属性：

| 参数     | 说明         | 类型   | 默认值   |
| -------- | ------------ | ------ | -------- |
| step     | 缩放步长     | number | 0.1      |
| minScale | 最小缩放比例 | number | 0.1      |
| maxScale | 最大缩放比例 | number | Infinity |

## 返回值

该指令不返回任何值。


## 使用

在 Vue 组件中，您可以通过以下方式使用 `v-zoom` 指令：

```vue
<template>
  <div v-zoom="{ step: 0.2, minScale: 0.5, maxScale: 3 }">
    <!-- 这里的任何内容都可以被缩放 -->
  </div>
</template>

```