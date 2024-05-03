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

### 极速、强大、开箱即用的 TypeScript 工具库

⚡️ **AtomTools** 是一个现代的、基于 TypeScript 的 JavaScript 工具库，它包含了众多在项目开发中不可或缺的实用工具函数。通过简单的导入语句，您可以快速地将这些工具函数应用到您的项目中。

### 为什么选择 AtomTools

在传统的业务项目开发过程中，开发者经常需要编写大量重复的函数、类型定义和常量。这些代码往往需要在不同项目之间进行移植和重用。

**AtomTools** 的设计宗旨是为开发人员提供一个高效、便捷的解决方案，以便更轻松地管理和使用这些常用的编程元素。通过 AtomTools，您将能够简化开发流程，从而更专注于核心业务逻辑的实现。

### 特性亮点

- 🌈 **全面兼容**：完美兼容任何使用 JavaScript 或 TypeScript 开发的项目，包括微信小程序。
- 🚀 **极速体验**：提升开发速度，让编程更快捷、更高效。
- 📠 **类型安全**：完全采用 TypeScript 编写，提供精确的类型提示，增强代码健壮性。
- 🍃 **轻量设计**：注重性能和实用性，无冗余依赖，保持库的轻量化。
- 📦 **即装即用**：无需复杂配置，安装后即可立即投入使用。

### 安装

您可以通过 NPM、YARN 或 PNPM 安装 **atom-tools**。

NPM

```
npm install atom-tools
```

#### or

```
pnpm add atom-tools
```

#### or

```
yarn add atom-tools
```

### 示例

##### 我们推荐按需导入使用 **atom-tools**

## 用法

```js
import { pick } from 'atom-tools';

interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

// 使用 pick 函数筛选出 'name' 和 'age' 属性
const selectedFields = pick(person, ['name', 'age']);
console.log(selectedFields); // 输出：{ name: 'John Doe', age: 30 }
```
