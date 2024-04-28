<div style="text-align:center;width:100%;display:flex;align-items: center;justify-content: center;">
<img src="./docs/src/public/image/logo.png" alt="logo_1" style="zoom:50%; width: 500px; height: 500px; " />
</div>

# AtomTools

⚡️ atom-tools 是一个基于Typescript的js工具库，拥有超多的在项目中实用的工具函数，只需要简单的导入就可以在你的项目中快速去使用

### 为什么选择 AtomTools

在以往的业务项目中，我们经常会使用一些函数、类型、常量等非常多的复杂而重复编写的代码，并且往往要从这个项目移植另一个项目。

**AtomTools** 的目的是为开发人员提供一种方便、快速的方式来管理常用的函数、类型、常量。通过简单的导入，可以省去那些繁琐的任务，专注于业务核心的开发。

特性
- 🌈  兼容 任何由JavaScript,TypeScript开发的项目
- 🚀  更快，更多，更便捷
- 📠  完全使用 Typescript 编写，具有强大的类型提示
- 🍃  轻量化
- 📦  开箱即用

安装
你可以通过 NPM、YARN 的方式引入 atom-tools 的包。

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

##### 📦使用

##### 我们推荐按需导入使用 **atom-tools**


## 导入
``` 
import { formatDate } from "atom-tools"
```

## 用法

```js

// 传入date
import { formatDate } from 'atom-tools'

const date = new Date()

const formatDate = formatDate(date)

console.log(formatDate) // 2022-01-01
```