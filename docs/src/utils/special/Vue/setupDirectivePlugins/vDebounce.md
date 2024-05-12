---
title: v-debounce Directive
---

# 防抖指令

## v-debounce

## 说明

`v-debounce` 用于在元素的事件处理中实现防抖功能。防抖是指在指定的时间内，无论触发了多少次事件，只有第一次事件被执行，然后在该时间过后，防抖效果重置。这个指令可以应用于任何需要防抖逻辑的事件侦听器。

## 参数

| 参数     | 说明             | 类型       | 默认值             |
| -------- | ---------------- | ---------- | ------------------ |
| callback | 防抖后的回调函数 | `function` | 无默认值，必须提供 |
| wait     | 防抖时间（毫秒） | `number`   | `1000`             |

## 返回值

无 —— 该指令不返回任何值。

## 异常

- 如果未提供 `callback` 参数，则会抛出错误。

## 使用

在 Vue 模板中，您可以通过以下方式使用 `v-debounce` 指令来为元素添加点击事件的防抖逻辑：

```vue
<template>
  <button v-debounce:click="{callback: handleClick, wait: 1000}">
    点击我
  </button>
</template>

<script setup>
const handleClick = () => {
  console.log('点击触发啦~~~');
}
</script>
```

在这个例子中，v-debounce:click 为按钮的点击事件添加了防抖逻辑。当用户点击按钮时，只有在最后一次点击后等待了1000毫秒（1秒）没有再次点击，才会执行 handleClick 回调函数。

此外，v-debounce 指令也可以应用于其他类型的事件，如输入框的输入事件，只需将指令的事件名改为对应的事件即可：
```vue
<template>
  <input type="text" v-debounce:input="{callback: handleInput, wait: 1000}" />
</template>

<script setup>
const handleInput = () => {
  console.log('输入框触发啦~~~');
}
</script>
```