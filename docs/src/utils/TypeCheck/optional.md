---
title: optional
---

# 提供默认值的可选类型检查

### optional

## 说明
`optional` 函数用于在传入的值是 `null`、`undefined` 或空字符串时提供默认值。这个函数特别适用于处理可能缺失的数据，例如在接口请求参数传值时，允许提供一个备用值来代替空值。

## 参数

| 参数       | 说明                     | 类型 | 默认值 |
| ---------- | ------------------------ | ---- | ------ |
| value      | 需要检查的原始值         | `T`  | ---    |
| emptyValue | 当原始值为“空”时返回的值 | `T`  | ---    |

## 返回值

`T | undefined`

## 代码演示

### 基础用法

```ts
import { optional } from 'atom-tools'; 

// 当传入值为空字符串时，返回 `undefined`
const resultWithDefault = optional<string>('', undefined);
console.log(resultWithDefault); // 输出：undefined

// 当传入值为 `null` 时，返回默认值 `'0'`
const resultWithValue = optional<string>(null, '0');
console.log(resultWithValue); // 输出：'0'
```

### 其他使用场景
```ts
// 假设有一个接口类型 Person
interface Person {
  name: string;
  age: number;
}

// 使用 optional 函数处理可能未定义的对象属性
const person: Person | undefined = {
  name: 'John',
  age: 30
};

const nameWithDefault = optional(person?.name, '未知');
console.log(nameWithDefault); // 如果 person.name 存在，输出其值；否则输出 '未知'
```