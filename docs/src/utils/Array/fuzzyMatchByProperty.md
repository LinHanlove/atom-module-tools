---
title: 一键复制
---

# 模糊匹配

### fuzzyMatchByProperty

## 说明
给定一个对象数组，根据指定的属性进行模糊匹配，并返回匹配到的对象

## 参数

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| params | -- | `FuzzyMatchByPropertyParams` | -      |

## 参数类型

```ts
interface FuzzyMatchByPropertyParams {
  /**
   * 匹配的属性名
   */
  prop: string;
  /**
   * 匹配的属性值
   */
  key: string;
  /**
   * 匹配的数组
   */
  list: any[];
  /**
   * 回调函数
   */
  cb?:Function
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
    



    
