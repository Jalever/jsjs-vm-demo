# 贡献指南

感谢您考虑为 JSJS VM 项目做出贡献！以下是帮助您开始的指南。

## 开发环境设置

1. 克隆仓库：

```bash
git clone https://github.com/yourusername/jsjs-vm-demo.git
cd jsjs-vm-demo
```

2. 安装依赖：

```bash
npm install
```

3. 构建项目：

```bash
npm run build
```

## 项目结构

请参考 README.md 中的项目结构部分，了解各个目录的作用。

## 开发工作流

1. 从主分支创建新的特性分支：

```bash
git checkout -b feature/your-feature-name
```

2. 编写代码和测试
3. 确保所有测试通过：

```bash
npm test
```

4. 提交您的更改：

```bash
git add .
git commit -m "feat: 添加了新功能"
```

5. 推送到您的分支：

```bash
git push origin feature/your-feature-name
```

6. 创建 Pull Request

## 代码规范

- 使用 TypeScript 进行开发
- 遵循现有的代码风格和命名约定
- 为新功能编写测试
- 保持文件结构清晰

## 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更改
- `style`: 不影响代码含义的更改（空格、格式化等）
- `refactor`: 既不修复 bug 也不添加新功能的代码更改
- `perf`: 提高性能的代码更改
- `test`: 添加或修正测试
- `chore`: 构建过程或辅助工具的变动

例如：`feat: 添加了解析器的新功能`

## 报告问题

如果您发现问题，请使用 GitHub Issues 系统报告，并提供以下信息：

1. 问题描述
2. 复现步骤
3. 预期行为
4. 实际行为
5. 环境信息（操作系统、Node.js 版本等）

## 功能请求

欢迎提出新功能或改进的想法！请使用 GitHub Issues 系统，并详细描述您的想法和使用场景。

## 代码审查

所有提交都需要通过代码审查。请耐心等待反馈，并积极回应审查意见。

## 许可证

通过提交代码，您同意您的贡献将在项目现有的许可证下发布。 