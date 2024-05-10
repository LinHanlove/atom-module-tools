---
title: maskPhoneNumber
---

# 手机号脱敏处理

### maskPhoneNumber

## 说明

`maskPhoneNumber` 函数用于对手机号进行脱敏处理，只显示前三位和后四位，其余部分用星号(\*)替代，以保护用户隐私。

## 参数

| 参数        | 说明             | 类型                          | 默认值 |
| ----------- | ---------------- | ----------------------------- | ------ |
| phoneNumber | 需要脱敏的手机号 | `string \| null \| undefined` | ---    |

## 返回值

`String` - 脱敏后的手机号字符串。

## 异常

- 如果 `phoneNumber` 为 `null` 或 `undefined`，函数将抛出一个错误，提示 `phoneNumber is required`。
- 如果 `phoneNumber` 的格式不正确（不是11位数字），将抛出一个错误，提示 `Invalid phone number format`。

## 代码演示

### 基础用法

```ts
import { maskPhoneNumber } from 'your-module-path'

// 对手机号进行脱敏处理
console.log(maskPhoneNumber('13812345678')) // 输出：138****5678

// 当输入非手机号或无效值时，会抛出错误
console.log(maskPhoneNumber(null)) // 抛出错误：phoneNumber is required
console.log(maskPhoneNumber('123')) // 抛出错误：Invalid phone number format
```
