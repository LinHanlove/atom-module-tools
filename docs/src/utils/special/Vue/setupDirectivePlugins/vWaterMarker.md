---
title: VWaterMarker Directive
---

# 自定义指令

## VWaterMarker

## 说明

`VWaterMarker` 用于在元素上添加水印效果。该指令会在元素的背景中添加一个旋转和半透明的文字效果，以实现水印的视觉表现。

## 参数

| 参数      | 说明               | 类型     | 默认值                       |
| --------- | ------------------ | -------- | ---------------------------- |
| text      | 水印文字           | `string` | `'atom版权所有'`             |
| font      | 水印文字的字体     | `string` | `'16px Microsoft JhengHei'`  |
| textColor | 水印文字的颜色     | `string` | `'rgba(180, 180, 180, 0.3)'` |
| rotate    | 水印文字的旋转角度 | `number` | `-20`                        |
| size      | 水印画布的大小     | `number` | `200`                        |

## 返回值

无 —— 该指令不返回任何值。

## 异常

- 如果未能获取到 canvas 的 2D 绘图上下文，则会在控制台打印错误信息，并移除创建的 canvas 元素。

## 使用

在 Vue 模板中，您可以通过以下方式使用 `v-water-marker` 指令：

```vue
<template>
  <div v-water-marker="{ text: '自定义水印文字', rotate: 45, size: 300 }">
    <!-- 这里是你的内容 -->
  </div>
</template>
```

在这个例子中，v-water-marker 指令将为绑定的 div 元素添加一个水印，水印文字为 "自定义水印文字"，旋转角度为 45 度，画布大小为 300x300 像素。