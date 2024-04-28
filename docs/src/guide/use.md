## 快速上手

> 使用前须知：
> 使用atom-tools之前，请确保你已熟练使用TypeScript **以下简称ts**

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
import { fuzzyMatchByProperty } from '@/utils/Array';

const params = {
  prop: 'name',
  key: '张三',
  list: [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 },
    { name: '王五', age: 22 },
  ],
};

const result = fuzzyMatchByProperty(params);

console.log(result); // { name: '张三', age: 18 }

```
    
