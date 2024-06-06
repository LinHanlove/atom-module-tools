<p align="center">
  <a href="https://tools.atomnotion.com" target="_blank" rel="noopener noreferrer">
    <img width="200" src="./docs/src/public/image/logo.png" alt="atom-tools logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/atom-tools"><img src="https://img.shields.io/npm/v/atom-tools.svg" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/atom-tools"><img src="https://img.shields.io/node/v/atom-tools.svg" alt="node compatibility"></a>
<!--   <a href="https://tools.atomnotion.com"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://tools.atomnotion.com"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
  <a href="https://tools.atomnotion.com"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a> -->
</p>
<br/>

# AtomTools

## 极速、强大、开箱即用的 TypeScript 工具库

### 简介

🌟 **AtomTools** 是一个现代、基于 TypeScript 的 JavaScript 工具库，旨在提供项目开发中不可或缺的实用工具函数。通过简单的导入语句，您可以快速地将这些工具函数集成到您的项目中，无需任何复杂配置。

<iframe style="width:100%;height:auto;min-width:600px;min-height:400px;" src="https://star-history.com/embed?secret=Z2hwX0RqSzd1cmVxSjMyVkViZmp3RXZKUjlVWXB4MHYzYzJVVHVPaA==#LinHanlove/atom-tools&Date" frameBorder="0"></iframe>

### 选择 AtomTools 的理由

在传统的业务项目开发中，开发者经常面临编写大量重复的函数、类型定义和常量的需求。这些代码往往需要在不同项目间移植和重用，导致效率低下。

**AtomTools** 的设计初衷是提供一个高效、便捷的解决方案，帮助开发人员轻松管理和使用这些常用的编程元素。使用 AtomTools，您将能够简化开发流程，更专注于核心业务逻辑的实现。

### 特性亮点

- 🌈 **全面兼容**：完美兼容任何使用 JavaScript 或 TypeScript 开发的项目，包括微信小程序。
- 🚀 **极速体验**：提升开发速度，让编程更快捷、更高效。
- 📠 **类型安全**：完全采用 TypeScript 编写，提供精确的类型提示，增强代码健壮性。
- 🍃 **轻量设计**：注重性能和实用性，无冗余依赖，保持库的轻量化。
- 📦 **即装即用**：安装后即可立即投入使用，无需复杂配置。

### 安装

通过 NPM、YARN 或 PNPM 安装 **atom-tools**。

```npm
npm install atom-tools
```

```pnpm
pnpm add atom-tools
```

```yarn
yarn add  atom-tools
```

## 示例

推荐按需导入使用 atom-tools。

**工具**

```ts
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

**vue自定义指令**

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

## 开发者社区

寻找志同道合的朋友一起参与 AtomTools 的开发。如果你对 TypeScript、JavaScript 工具库开发充满热情，欢迎加入我们，共同打造一个更加强大、易用的编程工具集。

## 未来规划

- Vue 自定义指令：提供众多开箱即用的 Vue 自定义指令，简化 Vue 应用开发。
- 组件封装：计划添加更多常用组件的封装，提升开发效率和用户体验。
- 代码片段集合：集成一系列常用代码片段，帮助开发者快速解决特定问题。

**AtomTools** 致力于成为一个全方位的前端开发工具库，帮助开发者提升生产力，实现更优雅的编程体验。加入我们，一起构建未来！
