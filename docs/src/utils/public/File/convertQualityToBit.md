---
title: convertQualityToBit
---

# 质量转比特率函数

### convertQualityToBit

## 说明

`convertQualityToBit` 函数用于将质量值（0-100）转换为比特率（0-256）。

## 参数

| 参数   | 说明     | 类型     |
| ------ | -------- | -------- |
| quality | 质量值（0-100） | `number` |

## 返回值

`number` - 对应的比特率值（0-256）。

## 代码演示

### 基础用法

```typescript
import { convertQualityToBit } from 'atom-tools'

const bitRate = convertQualityToBit(90)
console.log(bitRate) // 输出: 230
```