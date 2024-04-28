---
title: 根据指定属性去重数组
---

# 根据指定属性去重数组

### uniqueByProperty

## 说明
给定一个数组，根据数组的某一属性去重


## 参数

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| option | -- | `IUniqueByProperty` | -      |


## 参数类型

```ts
interface IUniqueByProperty {
  /** 需要去重的数组 */
  array: any[],
  /** 去重字段 */
  key: string
  /** 回调函数 */
  callback?: (arg0: any) => void
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
// [
//   { id: 1, name: '张三' },
//   { id: 2, name: '李四' },
//   { id: 3, name: '王五' },
// ]
```

    
