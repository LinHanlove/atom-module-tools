# prettyLog 日志工具库

`prettyLog` 提供了一种简洁的方式来打印不同级别的日志信息，包括信息、错误、警告和成功。每种日志级别都有其对应的颜色和标题，以便在控制台中快速区分。

## 功能列表
- **info**: 打印信息类型的日志。
- **error**: 打印错误类型的日志。
- **warning**: 打印警告类型的日志。
- **success**: 打印成功类型的日志。


## 使用方法

### 导入 prettyLog
```javascript
import { log } from 'atom-tools';
```

### 调用日志方法
```javascript
log.info('这是一条信息日志');
log.error('这是一条错误日志');
log.warning('这是一条警告日志');
log.success('这是一条成功日志');
```
### 打印带有多个参数的日志

```javascript
// 打印带有多个参数的日志
log.info('打印信息', 'atom', 'tools');
log.error('打印错误', 'atom', 'tools');
log.warning('打印警告', 'atom', 'tools');
log.success('打印成功', 'atom', 'tools');
```

`prettyLog` 支持打印带有多个参数的日志。当传入的参数中包含`引用类型`时，`prettyLog` 将自动输出一个带主题颜色的`标题`，`指示参数类型`，并详细列出`参数内容`。

```javascript
// 打印带有多个含有引用类型参数的日志
  log.success('打印成功', e, ['atom', 'tools'])
  log.success('打印成功', {
    name: 'atom',
    type:'tools'
  })
  log.success('打印成功',()=>{
    console.log('123');
  })
```
## 示例快照
![快照](/image/log-image.png)