# 贡献指南

感谢您对 **AtomTools** 的兴趣和想要为其做出贡献的愿望！以下是参与贡献的步骤和指南。

## 报告问题

如果您发现了错误或有新功能的想法，请通过 [GitHub Issues](https://github.com/LinHanlove/atom-tools/issues) 提交。

## 贡献流程

1. **Fork 仓库**：点击项目的 GitHub 仓库主页上的 "Fork" 按钮。
2. **克隆您的仓库**：将您 Fork 的仓库克隆到本地。

```bash
git clone https://github.com/your-github-username/atom-tools.git
```

3. **创建分支**：创建一个新分支以进行更改。

```bash
git checkout -b feature-name // 分支名请以feature-开头
```

4. **进行更改**：在 `lib/` 目录下进行您的更改。

6. **测试功能**：请在`src/`目录下测试,确保您的更改符合预期，并运行测试以确保代码质量。
  
7. **提交更改**：将更改提交到您的分支。

```bash
git commit -am "Add some feature or fix a bug"
```

7. **推送到 GitHub**：将您的更改推送到 GitHub 上的分支

8. **发起 Pull Request**：在 GitHub 上，提交一个新的 Pull Request。

9. 拉取请求流程如下图   

  [gitHub标准规范](https://github.com/lean-soft/devopshub-docs-g4e/blob/master/basic/07-pull-request/index.md)

   ![拉取请求流程](../public/image/contribution.png)

## 联系我们

如果您有任何问题或建议，欢迎随时通过以下方式联系我们：

- 邮箱：2188817393@qq.com
- 电话：15097255355
- GitHub：[讨论](https://github.com/LinHanlove/atom-tools/discussions)
- 稀土掘金：https://juejin.cn/post/7362370608346677283
- 微信：添加微信号 "linhan_0119"

<br/>

# 我们的团队

向我们优秀的团队问好

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/image/creator.jpg',
    name: 'Lin Han',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/LinHanlove' },
    ]
  },
]
</script>
