---
title: 类型判断地图
---

# 类型判断函数MAP

### TYPE_MAP

## 说明
一些其他的类型判断函数集合，使用时直接从`atom-tools`导出即可，用法类似`isEmpty`

## 时间戳

| 名称       | 说明                                   | 类型   | 值            |
| ---------- | -------------------------------------- | ------ | ------------- |
| isDate    | 判断是否是日期                           | --- | `Boolean`      |
| isDef    | 检测一个数是否为undefined                           | --- | `Boolean`      |
| isObject    | 检测一个数是否为object                           | --- | `Boolean`      |
| isNaN   | 判断是否是NaN                         | --- | `Boolean`       |
| isNull | 判断是否是null                         | --- | `Boolean`         |
| isNullAndUnDef | 判断是否是undefine和null的交集                           | --- | `Boolean`          |
| isNumber      | 判断是不是数字          | --- | `Boolean`  |
| isPromise   | 判断一个值是否为 Promise 对象         | --- | `Boolean`  |
| isString  | 判断一个值是否为字符串类型         | --- | `Boolean`  |
| isFunction  | 判断一个值是否为函数类型   | --- | `Boolean` |
| isBoolean  | 判断一个值是否为布尔类型   | --- | `Boolean` |
| isRegExp  | 判断一个值是否为正则表达式类型 | --- | `Boolean` |
| isArray | 判断一个值是否为数组类型         | --- | `Boolean` |
| isWindow | 断当前环境是否为浏览器环境（非服务器端）      | --- | `Boolean` | 
| isServer | 判断当前环境是否为服务器端      | --- | `Boolean` |
| isClient | 判断当前环境是否为客户端（浏览器环境）      | --- | `Boolean` |
| isElement | 判断一个值是否为 HTML 元素      | --- | `Boolean` |
| isMap | 判断一个值是否为 Map 类型      | --- | `Boolean` |
| isUrl | 判断一个字符串是否为有效的 URL 地址      | --- | `Boolean` |
| isMobileNumber | 判断一个字符串是否为有效的手机号码      | --- | `Boolean` |
| isTelePhoneNumber | 判断一个字符串是否为有效的座机号码      | --- | `Boolean` |