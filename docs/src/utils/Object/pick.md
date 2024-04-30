---
title: pick
---

# 筛选对象属性

### pick

## 说明
`pick` 函数用于从一个对象中筛选出指定键的属性，并返回一个包含这些属性的新对象。这对于减少对象大小或提取需要的属性子集非常有用。

## 参数

| 参数 | 说明                   | 类型                | 默认值 |
| ---- | ---------------------- | ------------------- | ------ |
| obj  | 需要筛选属性的对象     | `T`（普通对象类型） | ---    |
| keys | 需要筛选出来的键的数组 | `K[]`（键类型数组） | ---    |

## 返回值

`Partial<Pick<T, K>>` - 返回一个新对象，其中只包含 `keys` 数组中指定的键及其对应的值。

## 代码演示

### 基础用法

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