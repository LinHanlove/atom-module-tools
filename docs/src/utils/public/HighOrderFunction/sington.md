---
title: Singleton Factory
---

# 单例模式工厂

## 单例模式工厂 (Singleton Factory)

### 说明

`singleton` 函数用于创建一个单例模式，确保某个类只有一个实例。它通过代理一个类的构造函数，确保无论多少次尝试创建实例，都只会存在一个实例。

注意：此方法不适用于需要多次实例化的类，且不支持异步构造函数。

### 参数

| 参数    | 说明         | 类型                                   |
|---------|--------------|----------------------------------------|
| className | 需要单例化的类 | `new (...args: any[]) => any` |

### 返回值

`InstanceType<T>` - 返回单例类的实例。

### 代码演示


```typescript
import { singleton } from 'atom-tools';

class MyClass {
  private static instance: MyClass | null = null;

  private constructor() {
    // 私有构造函数确保类不能被直接实例化
  }

  public static getInstance(): MyClass {
    return singleton(MyClass);
  }

  // 类的其他方法...
}

const instance1 = MyClass.getInstance();
const instance2 = MyClass.getInstance();

console.log(instance1 === instance2); // 输出 true，表示为同一个实例
```
### 使用单例类
```typescript
import { singleton } from 'path-to-singleton-factory';

class MyService {
  // 服务类的方法...
}

// 使用 singleton 工厂创建单例
const myService = singleton(MyService);

// 在应用的其他部分可以使用相同的单例
const anotherService = singleton(MyService);

console.log(myService === anotherService); // 输出 true，表示为同一个实例
```