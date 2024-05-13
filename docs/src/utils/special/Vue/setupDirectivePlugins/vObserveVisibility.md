---
title: v-observe-visibility Directive
---

# 监听可见性指令

## v-observe-visibility

## 说明

`v-observe-visibility` 指令用于监听一个元素在视口中的可见性变化。当元素的可见性发生变化时，该指令会调用一个用户提供的回调函数，并传递元素的可见性状态。

## 参数

| 参数     | 说明                          | 类型       | 默认值                                            |
| -------- | ----------------------------- | ---------- | ------------------------------------------------- |
| callback | 可见性变化时调用的函数        | `Function` | 无                                                |
| options  | IntersectionObserver 的配置项 | `Object`   | `{ root: null, rootMargin: '0px', threshold: 0 }` |

`options` 对象可包含以下属性：

- `root`: 参照元素，用于定义视口。默认为 `null`，即浏览器视口。
- `rootMargin`: 视口边缘到目标元素边缘之间的距离。默认为 `'0px'`。
- `threshold`: 目标元素进入视口的最小比例，可以是一个值或一个数组。默认为 `0`。

## 返回值

无 —— 该指令不返回任何值。

## 异常

- 如果未能正确创建 `IntersectionObserver` 实例，则会在控制台打印错误信息。

## 使用

在 Vue 模板中，您可以通过以下方式使用 `v-observe-visibility` 指令：

```vue
<template>
  <div v-observe-visibility="visibilityOptions" class="visibility-target">我是否在视口中？</div>
</template>

<script setup>
const handleVisibilityChange = (isVisible) => {
  console.log(`Element is ${isVisible ? 'visible' : 'not visible'}!`)
}

const visibilityOptions = {
  callback: handleVisibilityChange,
  options: {
    root: null, // 或者指定一个元素作为参照物
    rootMargin: '50px', // 可以修改为需要的值
    threshold: 0.5 // 可以修改为一个数组或一个值
  }
}
</script>
```
