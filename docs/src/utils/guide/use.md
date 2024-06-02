> [!WARNING]
> 使用前须知：
> 使用atom-tools之前，请确保你已熟练使用TypeScript( **以下简称ts**), 并且了解 **ts** 中的 **type**, **interface**, **enum**, **class**, **namespace**, **module**, **import**, **export** 等关键字。

## 快速上手

## 安装

### 安装

通过 NPM、YARN 或 PNPM 安装 **atom-tools**。

::: code-group

```js [npm]
npm install atom-tools
```

```js [pnpm]
pnpm add atom-tools

```

```js [yarn]
yarn add atom-tools

```

:::

## 示例

推荐按需导入使用 atom-tools。

---

::: code-group

```ts [工具]
import { pick } from 'atom-tools'

interface Person {
  name: string
  age: number
  email: string
}

const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
}

// 使用 pick 函数筛选出 'name' 和 'age' 属性
const selectedFields = pick(person, ['name', 'age'])
console.log(selectedFields) // 输出：{ name: 'John Doe', age: 30 }
```

```vue [vue自定义指令]
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

:::
