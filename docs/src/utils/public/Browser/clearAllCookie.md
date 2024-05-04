---
title: 清除所有Cookie
---

# 清除所有Cookie

### clearAllCookie

## 说明

`clearAllCookie` 函数用于清除当前浏览器中的 cookie。如果提供了参数，它将只清除指定名称的 cookie；如果没有提供参数，它将清除当前域名下的所有 cookie。

## 参数

| 参数名 | 类型     | 默认值      | 说明                         |
| ------ | -------- | ----------- | ---------------------------- |
| name   | `string` | `undefined` | 可选。要清除的 cookie 名称。 |

## 返回值

`无`

## 代码演示

### 清除特定 cookie

```javascript
import { clearAllCookie } from 'atom-tools'

// 清除名为 'myCookie' 的 cookie
clearAllCookie('myCookie')
```

### 清除当前域名下的所有 cookie

```javascript
import { clearAllCookie } from 'atom-tools'

// 清除当前域名下的所有 cookie
clearAllCookie()
```

`
