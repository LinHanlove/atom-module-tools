## 安装与注册自定义指令

:::danger
:tada: 为了在您的 Vue 应用程序中启用 `VWaterMarker` 指令以及其他可能的自定义指令，您需要执行以下步骤进行安装和注册：

1. 打开项目根目录下的 `main.ts` 文件，这是 Vue 应用的入口文件和主要设置点。

2. 导入 `setupDirectivePlugins` 函数，该函数负责加载和注册所有的自定义指令集合。

```typescript
import { setupDirectivePlugins } from '@atom-tool/vue'

const app = createApp(App)

// 使用 setupDirectivePlugins 函数注册所有自定义指令
setupDirectivePlugins(app)

// 挂载 Vue 应用到 DOM 元素
app.mount('#app')
```

3. 一旦完成上述步骤，您的 Vue 应用将会自动注册所有通过 setupDirectivePlugins 注册的自定义指令，使您能够在模板中无障碍地使用它们。

请注意，自定义指令是 Vue 应用中可复用代码的一种形式，它们允许您在不编写额外组件的情况下封装直接操作 DOM 的逻辑。:100:[详细地址](https://cn.vuejs.org/guide/reusability/custom-directives.html#custom-directives)
