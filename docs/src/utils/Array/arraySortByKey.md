---
title: 数组对象排序
---

# 数组对象排序

### arraySortByKey

## 说明
给定一个数组，根据数组的某一属性排序

## 参数

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| params | -- | `IArraySortByKey` | -      |

## 参数类型

```ts
interface IArraySortByKey {
  /** 需要排序的数组 */
  array: any[],
  /* 以什么字段排序 */
  key: string
}
```



## 返回值

`排序后的数组`

## 代码演示

### 基础用法

```ts
import { arraySortByKey } from '@/utils/Array';

const list = [
  { name: '张三', age: 18 },
  { name: '李四', age: 22 },
  { name: '王五', age: 15 },
]

const result = arraySortByKey({
  array:list,
  key:age
});

console.log(result);
// [
//   { name: '王五', age: 15 },
//   { name: '张三', age: 18 },
//   { name: '李四', age: 22 },
// ]

```
    



    
