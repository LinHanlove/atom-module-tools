---
title: 模糊匹配
---

# 模糊匹配

### fuzzyMatchByProperty

## 说明
给定一个对象数组，根据指定的属性进行模糊匹配，并返回匹配到的对象

## 参数

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| params | -- | `IFuzzyMatchByProperty` | -      |

## 参数类型

```ts
interface IFuzzyMatchByProperty {
    /** 要进行模糊匹配的数组 */
    array: any[]
    /** 模糊匹配针对的属性 */
    prop: string
    /** 传入的字段 多用于本地输入框搜索 */
    key: string
    /** 回调函数 */
    callback?: Function
}
```



## 返回值

`匹配到的对象`

## 代码演示

### 基础用法

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
    



    
