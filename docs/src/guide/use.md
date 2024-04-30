## 快速上手

> 使用前须知：
> 使用atom-tools之前，请确保你已熟练使用TypeScript(  **以下简称ts**)

## 安装

#### 通过**npm** **pnpm** **yarn**安装

```
<!-- 使用npm -->
npm install atom-tools


<!-- 使用pnpm -->
pnpm add atom-tools


<!-- 使用yarn -->
yarn add atom-tools

```

## 使用

##### 我们推荐按需导入使用 **atom-tools**

```ts
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
    
