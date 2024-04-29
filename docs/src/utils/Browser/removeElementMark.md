---
title: 去掉标签字符串中的元素标记
---

# 去掉标签字符串中的元素标记

### removeElementMark

## 说明
去掉一个标签字符串中的元素标记，返回去掉元素标记后的纯文本字符串


## 返回值

`string`

## 代码演示

### 基础用法

```ts
import { removeElementMark } from 'atom-tools';

const str = '<p>hello world</p>';

const result = removeElementMark(str);

console.log(result); // hello world

```


    
