---
title: KeepLoop 定时轮询
---

# KeepLoop 定时轮询

## 概述

`KeepLoop` 类是一个强大的工具，用于实现定时轮询机制。它允许用户配置轮询的时间间隔、限制轮询的最大次数，并且定义一个自定义函数来在每次轮询时执行特定的操作。

## 构造函数

### 参数

| 参数        | 描述                         | 类型                   | 默认值    |
| ----------- | ---------------------------- | ---------------------- | --------- |
| option      | 包含轮询设置的配置对象       | `TYPE.IKeepLoopOption` | ---       |

### 返回值

- `TYPE.IReturnInfo`: 当前的轮询次数信息。

## 类型定义

- `TYPE.IKeepLoopOption` 接口包括以下属性：
  - `run`: **必选**. 每次轮询调用的函数。
  - `interval`: **必选**. 轮询之间的时间间隔，单位为毫秒，默认1000。
  - `maxCount`: **可选**. 最大轮询次数；如果为0或未指定，则轮询无限进行，默认0。

- `TYPE.IReturnInfo` 接口包括以下属性：
  - `currentCount`: 当前的轮询次数。

## 方法

- `start()`: 开始轮询。
- `stop()`: 停止轮询。
- `pause()`: 暂停轮询。
- `resume()`: 继续（恢复）轮询。

## 使用示例

### Vue 3 组件中使用 KeepLoop

以下是如何在 Vue 3 组件中使用 `KeepLoop` 类的示例，包括新增的暂停和继续功能：

```vue
<template>
  <div>
    <button @click="startLoop">开始轮询</button>
    <button @click="pauseLoop">暂停轮询</button>
    <button @click="resumeLoop">继续轮询</button>
    <button @click="stopLoop">停止轮询</button>
  </div>
</template>

<script setup>
import { KeepLoop, log } from 'atom-tools';
import { ref } from 'vue';

// 定义轮询函数
const loopFunc = (res) => {
  console.log(`轮询次数: ${res.currentCount}`);
};

// 创建 KeepLoop 实例
const keepLoop = ref(null);

const startLoop = () => {
  if (!keepLoop.value) {
    keepLoop.value = new KeepLoop({
      run: loopFunc,
      interval: 1000, // 设置轮询间隔为 1 秒
    });
  }
  keepLoop.value.start();
};

const pauseLoop = () => {
  if (keepLoop.value) {
    keepLoop.value.pause();
  }
};

const resumeLoop = () => {
  if (keepLoop.value) {
    keepLoop.value.resume();
  }
};

const stopLoop = () => {
  if (keepLoop.value) {
    keepLoop.value.stop();
  }
};
</script>
```

### 注意事项
- 请确保在组件销毁时调用 stop 方法以停止轮询，防止内存泄漏。
- 根据实际的业务逻辑，您可能需要对 loopFunc 函数返回的结果进行处理。
- 使用 pause 和 resume 方法可以暂停和继续轮询，这对于节省资源或响应用户操作非常有用。