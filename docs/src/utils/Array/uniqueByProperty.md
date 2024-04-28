---
title: 根据指定属性去重数组
---

# 根据指定属性去重数组

### uniqueByProperty

## 参数

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| option | -- | `UniqueByProperty` | -      |


## 参数类型

```ts
interface UniqueByProperty {
  /**
   * 指定的属性名
   */
  prop: string;
  /**
   * 数组
   */
  list: any[];
  /**
   * 回调函数
   */
  cb?:Function
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

    
