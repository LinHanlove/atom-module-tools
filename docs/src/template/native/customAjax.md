---
title: 封装 AJAX 请求
---

# 封装 AJAX 请求

## 函数式封装

### ajax

#### 说明
`ajax` 函数是一个通用的 AJAX 请求封装，支持 Promise 以及可选的成功和失败回调。它简化了 AJAX 请求的创建和处理流程。

#### 参数
| 参数名   | 类型    | 默认值 | 说明                                 |
| -------- | ------- | ------ | ------------------------------------ |
| options  | Object  | {}     | AJAX 请求的配置项。                 |

#### 返回值
无

## 代码演示

```javascript
/**
 * 创建一个公共 AJAX 函数，支持 Promise 以及可选的成功和失败回调
 * @param {Object} options - AJAX 请求的配置项
 * @returns {Promise} - 包含请求结果的 Promise 对象
 */
function ajax(options = {}) {
  // 参数校验
  if (!options.url) {
    throw new Error('URL is required for ajax call');
  }

  // 默认配置
  const defaults = {
    type: 'GET',
    dataType: 'json',
    async: true,
    data: null, // 默认没有数据
    success: null, // 默认没有成功回调
    error: null, // 默认没有失败回调
  };

  // 合并用户配置和默认配置
  const settings = { ...defaults, ...options };

  // 创建 XMLHttpRequest 实例
  const xhr = new XMLHttpRequest();

  // 返回 Promise 对象
  return new Promise((resolve, reject) => {
    // 设置请求状态改变的回调函数
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const { status } = xhr;
        if (status >= 200 && status < 300) {
          // 请求成功
          try {
            // 尝试解析响应数据为 JSON
            const data = settings.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
            // 如果提供了 success 回调，执行它
            if (typeof settings.success === 'function') {
              settings.success(data);
            }
            resolve(data);
          } catch (err) {
            // 解析错误时，执行 error 回调
            if (typeof settings.error === 'function') {
              settings.error(err);
            }
            reject(new Error('Error parsing response data'));
          }
        } else {
          // 请求失败
          const error = new Error(`Request failed with status ${status}`);
          // 如果提供了 error 回调，执行它
          if (typeof settings.error === 'function') {
            settings.error(error);
          }
          reject(error);
        }
      }
    };

    // 初始化请求
    xhr.open(settings.type.toUpperCase(), settings.url, settings.async);

    // 设置 Content-Type 请求头
    if (settings.type.toUpperCase() === 'POST' && settings.data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    // 发送请求
    xhr.send(settings.data ? JSON.stringify(settings.data) : null);
  });
}
```

## 使用示例
```js
ajax({
  url: 'https://api.example.com/data',
  type: 'GET',
  success: (data) => {
    console.log('请求成功:', data);
  },
  error: (error) => {
    console.error('请求失败:', error);
  }
});
```

## 类方法式封装
### AjaxService
### 说明
AjaxService 类封装了 AJAX 请求的创建和处理过程，支持链式调用和默认配置的设置。

#### 构造函数
| 参数名   | 类型    | 默认值 | 说明                                 |
| -------- | ------- | ------ | ------------------------------------ |
| options  | Object  | {}     | AJAX 请求的配置项。                 |
#### 方法
- request(options) - 发起 AJAX 请求。
#### 返回值
Promise - 包含请求结果的 Promise 对象。

## 代码演示
```js
class AjaxService {
  /**
   * 创建 AjaxService 类的实例
   * @param {Object} [defaults={}] - 默认配置选项
   */
  constructor(defaults = {}) {
    this.defaults = defaults;
  }

  /**
   * 发起 AJAX 请求
   * @param {Object} options - 请求配置项
   * @returns {Promise} - 包含请求结果的 Promise 对象
   */
  request(options = {}) {
    // 参数校验
    if (!options.url) {
      throw new Error('URL is required for ajax call');
    }

    // 合并默认配置和用户配置
    const settings = { ...this.defaults, ...options };

    // 创建 XMLHttpRequest 实例
    const xhr = new XMLHttpRequest();

    // 返回 Promise 对象
    return new Promise((resolve, reject) => {
      // 设置请求状态改变的回调函数
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const { status } = xhr;
          if (status >= 200 && status < 300) {
            // 请求成功
            try {
              // 尝试解析响应数据为 JSON
              const data = settings.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
              // 如果提供了 success 回调，执行它
              if (typeof settings.success === 'function') {
                settings.success(data);
              }
              resolve(data);
            } catch (err) {
              // 解析错误时，执行 error 回调
              if (typeof settings.error === 'function') {
                settings.error(err);
              }
              reject(new Error('Error parsing response data'));
            }
          } else {
            // 请求失败
            const error = new Error(`Request failed with status ${status}`);
            // 如果提供了 error 回调，执行它
            if (typeof settings.error === 'function') {
              settings.error(error);
            }
            reject(error);
          }
        }
      };

      // 初始化请求
      xhr.open(settings.type.toUpperCase(), settings.url, settings.async);

      // 设置 Content-Type 请求头
      if (settings.type.toUpperCase() === 'POST' && settings.data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      // 发送请求
      xhr.send(settings.data ? JSON.stringify(settings.data) : null);
    });
  }
}

```

## 使用示例
```js
const ajaxService = new AjaxService({
  type: 'GET',
  dataType: 'json',
  async: true,
});

ajaxService.request({
  url: 'https://api.example.com/data',
  success: (data) => {
    console.log('请求成功:', data);
  },
  error: (error) => {
    console.error('请求失败:', error);
  }
})
.then(response => {
  // 处理响应
})
.catch(error => {
  // 处理错误
});
```

注意：本章节内容仅供参考，实际开发中请根据具体项目需求和上下文环境进行适配和调整。