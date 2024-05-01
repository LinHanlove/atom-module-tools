---
title: 根据指定属性去重数组
---

# 根据指定属性去重数组

### uniqueByProperty

## 说明
`uniqueByProperty` 函数接收一个数组和一个属性键，然后根据该属性键的值对数组进行去重处理，返回一个新的去重后的数组。

## 参数

| 参数   | 说明               | 类型                | 默认值 |
| ------ | ------------------ | ------------------- | ------ |
| option | 包含去重参数的对象 | `IUniqueByProperty` | ---    |

## 参数类型

```ts
interface IUniqueByProperty {
  /** 需要去重的数组，其中每个元素都是一个对象 */
  array: object[];
  /** 用于去重的数组元素的键 */
  key: string;
  /** （可选）去重完成后的回调函数 */
  callback?: (uniqueArray: object[]) => void;
}
```

## 返回值

`去重后的数组`


## 代码演示

### 基础用法

```ts
import { uniqueByProperty } from 'atom-tools';

const list = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 1, name: '张三' },
  { id: 3, name: '王五' },
];

const result = uniqueByProperty({
  prop: 'id',
  list,
});

console.log(result);
// 输出：[
//   { id: 1, name: '张三' },
//   { id: 2, name: '李四' },
//   { id: 3, name: '王五' },
// ]
```

    
