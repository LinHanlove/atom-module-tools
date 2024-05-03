---
title: 数组对象排序
---

# 数组对象排序

### arraySortByKey

## 说明

`arraySortByKey` 函数接受一个对象数组和一个键名，然后根据该键名对应的属性值对数组进行排序。

## 参数

| 参数   | 说明                   | 类型              | 默认值 |
| ------ | ---------------------- | ----------------- | ------ |
| params | 包含数组和键的参数对象 | `IArraySortByKey` | ---    |

## 参数类型

```ts
interface IArraySortByKey {
  /** 需要排序的数组，其中每个元素都是一个对象 */
  array: object[]
  /** 用于排序的数组元素的键 */
  key: string
}
```

## 返回值

`排序后的数组`

## 代码演示

### 基础用法

```ts
import { arraySortByKey } from '@/utils/Array'

const list = [
  { name: '张三', age: 18 },
  { name: '李四', age: 22 },
  { name: '王五', age: 15 }
]

const result = arraySortByKey({
  array: list,
  key: age
})

console.log(result)
// 输出：[
//   { name: '王五', age: 15 },
//   { name: '张三', age: 18 },
//   { name: '李四', age: 22 },
// ]
```
