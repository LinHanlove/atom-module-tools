---
title: 模糊匹配
---

# 模糊匹配

### fuzzyMatchByProperty

## 说明

`fuzzyMatchByProperty` 函数用于在给定的对象数组中，根据指定属性进行模糊匹配。它将返回与搜索关键词最匹配的对象。

## 参数

| 参数   | 说明               | 类型                    | 默认值 |
| ------ | ------------------ | ----------------------- | ------ |
| params | 包含搜索参数的对象 | `IFuzzyMatchByProperty` | ---    |

## 参数类型

```ts
interface IFuzzyMatchByProperty {
  /** 要进行模糊匹配的对象数组 */
  array: object[]
  /** 要匹配的属性名 */
  prop: string
  /** 用户输入的搜索关键词 */
  key: string
  /** （可选）匹配成功后的回调函数 */
  callback?: () => void
}
```

## 返回值

`匹配到的对象`

## 代码演示

### 基础用法

```ts
import { fuzzyMatchByProperty } from '@/utils/Array'

const params = {
  prop: 'name',
  key: '张三',
  list: [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 },
    { name: '王五', age: 22 }
  ]
}

const result = fuzzyMatchByProperty(params)

console.log(result) // 输出：{ name: '张三', age: 18 }
```
