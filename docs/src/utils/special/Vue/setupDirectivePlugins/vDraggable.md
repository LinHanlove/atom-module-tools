---
title: VCopy Directive
---

# 拖拽指令

## VDraggable

## 说明

`VDraggable` 用于使元素可拖拽。用户可以通过鼠标拖拽来移动元素的位置。该指令允许指定拖拽的父元素，并可以限制拖拽范围不超过父元素的边界。

## 参数

| 参数 | 说明                | 类型     | 默认值          |
| ---- | ------------------- | -------- | --------------- |
| arg  | 父元素的 ID（可选） | `string` | --- |

## 返回值

无 —— 该指令不返回任何值。

## 异常

- 如果提供了 `arg` 参数但未找到对应的父元素，则会在控制台打印错误信息。

## 使用

在 Vue 模板中，您可以通过以下方式使用 `v-draggable` 指令：

```vue
<template>
  <div id="parentId" style="width: 500px; height: 500px; background-color: teal;">
    <div v-draggable:parentId>
      拖拽我
    </div>
  </div>
</template>
```

如果您想要将整个网页作为拖拽区域，可以省略 v-draggable 指令的值

```vue
<template>
  <div v-draggable>
    拖拽我
  </div>
</template>
```