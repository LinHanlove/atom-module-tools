# 解析 URL 地址参数

### getUrlParams

## 说明

`getUrlParams` 函数用于解析 URL 地址中的查询参数，并将它们转换为一个键值对对象。

## 参数

| 参数 | 说明                | 类型     | 默认值 |
| ---- | ------------------- | -------- | ------ |
| url  | 需要解析的 URL 地址 | `string` | ---    |

## 返回值

`object` - 一个对象，其属性为 URL 查询参数的名称和对应的值。

## 代码演示

### 基础用法

```ts
import { getUrlParams } from 'atom-tools'

// url地址
const url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=49055317_48_hao_pg&wd=atom-tools'

// 传入url地址
const result = getUrlParams(url)

console.log(result)
// 输出：{
//     ie: 'utf-8',
//     f: '8',
//     rsv_bp: '1',
//     tn: '49055317_48_hao_pg',
//     wd: 'atom-tools'
// }
```
