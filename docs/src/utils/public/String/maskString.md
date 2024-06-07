---
title: 脱敏处理函数集
---

# 脱敏处理函数集

本文档介绍了一系列用于不同场景下的脱敏处理函数，包括手机号、地址、姓氏、标签、身份证号、邮箱和银行卡号等。

## maskPhoneNumber

### 说明
`maskPhoneNumber` 函数用于对手机号进行脱敏处理，只显示前三位和后四位，其余部分用星号(*)替代。

### 参数
| 参数        | 说明             | 类型                          | 默认值 |
| ----------- | ---------------- | ----------------------------- | ------ |
| phoneNumber | 需要脱敏的手机号 | `string \| null \| undefined` | ---    |

### 返回值
`String` - 脱敏后的手机号字符串。

### 异常
- 如果 `phoneNumber` 为 `null` 或 `undefined`，函数将抛出一个错误。
- 如果 `phoneNumber` 的格式不正确（不是11位数字），将抛出一个错误。

### 代码演示

```typescript
import { maskPhoneNumber } from 'atom-tools'

// 对手机号进行脱敏处理
console.log(maskPhoneNumber('13812345678')) // 输出：138****5678
```

## 通用脱敏函数 maskString
以下脱敏函数均基于通用脱敏函数 maskString 实现。

### 参数

| 参数名     | 说明               | 类型    | 默认值 |
| ---------- | ------------------ | ------- | ------ |
| input      | 需要脱敏的原始字符串 | string  | ---    |
| keepStart  | 需要保留的开头字符数 | number  | 0      |
| keepEnd    | 需要保留的结尾字符数 | number  | 0      |
| maskChar   | 脱敏部分使用字符    | string  | '*'    |

### 返回值
`String` - 脱敏后的字符串。

### 地址脱敏 addressHidePart

```typescript
export const addressHidePart = (address: string,keepStart=3,keepEnd=4, maskChar='*'): string => {
  return maskString(address, keepStart, keepEnd, maskChar)
}
```

### 姓氏脱敏 nameHidePart

```typescript
export const nameHidePart = (name: string,keepStart=1,keepEnd=1, maskChar='*'): string => {
  return maskString(name, keepStart, keepEnd, maskChar)
}
```

### 标签脱敏 tagHidePart

```typescript
export const tagHidePart = (tag: string,keepStart=1,keepEnd=1, maskChar='*'): string => {
  return maskString(tag, keepStart, keepEnd, maskChar)
}
```

### 身份证号脱敏 idCardHidePart

```typescript
export const idCardHidePart = (idCard: string,keepStart=6,keepEnd=4, maskChar='*'): string => {
  return maskString(idCard, keepStart, keepEnd, maskChar)
}
```

### 邮箱脱敏 emailHidePart

```typescript
  export const emailHidePart = (email: string,keepStart=3,keepEnd=4, maskChar='*'): string => {
  return maskString(email, keepStart, keepEnd, maskChar)
}
```

### 银行卡号脱敏 bankCardHidePart

```typescript
export const bankCardHidePart = (bankCard: string,keepStart=4,keepEnd=4, maskChar='*'): string => {
  return maskString(bankCard, keepStart, keepEnd, maskChar)
}
```
  
### 使用示例
以下是使用上述脱敏函数的示例：

```typescript
import { addressHidePart, nameHidePart, tagHidePart, idCardHidePart, emailHidePart, bankCardHidePart } from 'atom-tools'

const address = '北京市朝阳区'
const name = '张三'
const tag = '公司'
const idCard = '123456789012345678'
const email = 'zhangsan@example.com'
const bankCard = '123456789012345678'

console.log(addressHidePart(address)) // 输出：北京市****朝阳区
console.log(nameHidePart(name)) // 输出：张**
console.log(tagHidePart(tag)) // 输出：公司
console.log(idCardHidePart(idCard)) // 输出：1234****5678
console.log(emailHidePart(email)) // 输出：zhangsan****@example.com
console.log(bankCardHidePart(bankCard)) // 输出：1234****5678
```
