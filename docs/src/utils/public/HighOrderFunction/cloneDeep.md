---
title: cloneDeep
---

# 深度克隆

### cloneDeep

## 说明
`cloneDeep` 函数用于深度克隆一个给定的值。它通过序列化值到 JSON 字符串，然后再解析回一个对象，从而实现深度克隆。

注意：此方法不能克隆函数、undefined、循环引用的对象等。

## 参数

| 参数  | 说明             | 类型  |
| ----- | ---------------- | ----- |
| value | 需要深度克隆的值 | `any` |

## 返回值

`any` - 返回深度克隆后的新值。

## 代码演示

### 基础用法

```ts
import { cloneDeep } from 'atom-tools';

const original = {
  number: 1,
  string: 'string',
  boolean: true,
  null: null,
  undefined: undefined,
  array: [1, 2, 3],
  object: { a: 1, b: 2 },
  date: new Date(),
};

const cloned = cloneDeep(original);

console.log(cloned); // 输出克隆后的值，与 original 不同的引用
```