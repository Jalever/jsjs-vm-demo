# JSJS VM Demo

这是一个 JavaScript 虚拟机演示项目，它可以将 JavaScript 代码编译后嵌入到图片中，然后通过微信小程序读取并执行。

## 项目说明

该项目包含以下功能：

- 一个简单的 JavaScript 编译器，能够将 JavaScript 代码编译成字节码
- 将编译后的字节码嵌入到图像文件中
- 一个用于演示的微信小程序，可以从图像中读取并执行字节码

## 安装

```bash
# 安装依赖
npm install
```

## 项目结构

```
jsjs-vm-demo/
├── assets/              # 静态资源文件
│   ├── images/          # 图片资源
│   │   ├── origin.jpg   # 原始图片
│   │   └── target.png   # 生成的包含字节码的图片
│   └── examples/        # 示例代码
│       └── test-code.js # 测试用的JS代码
│
├── src/                 # 源代码
│   ├── compiler.ts      # 编译器实现
│   ├── constrains.ts    # 常量和类型定义
│   ├── index.ts         # 主程序入口
│   ├── parser.ts        # JS解析器
│   ├── traverse.ts      # AST遍历工具
│   └── virtual-machine.ts # 虚拟机实现
│
├── tests/               # 测试文件
│   ├── compiler.test.ts # 编译器测试
│   ├── parser.test.ts   # 解析器测试
│   └── virtual-machine.test.ts # 虚拟机测试
│
├── docs/                # 文档
│   ├── TESTING.md       # 测试指南
│   └── CONTRIBUTING.md  # 贡献指南
│
├── test-miniprogram/    # 微信小程序示例项目
├── dist/                # 编译输出目录
├── .vscode/             # VSCode配置
├── .git/                # Git仓库
│
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript配置
├── vitest.config.ts     # Vitest测试配置
├── .gitignore           # Git忽略配置
├── .editorconfig        # 编辑器配置
└── README.md            # 项目说明
```

## 运行步骤

### 安装依赖

首先，安装项目所需的依赖包：

```bash
npm install
```

### 启动静态服务器

启动静态服务器，用于提供图片文件：

```bash
npm run server
```

服务器启动后，可以通过 http://localhost:9080 访问生成的图片。

### 打开微信小程序

1. 打开微信开发者工具
2. 导入项目，选择本仓库中的 `test-miniprogram` 目录
3. 小程序将加载并读取图片中的代码

## 开发

如果需要修改编译器或虚拟机，可以编辑 `src/` 目录下的源文件，然后运行以下命令重新编译：

```bash
npm run build
```

如果需要生成新的图片，可以运行：

```bash
npm run generate
```

## 测试

运行测试：

```bash
npm test
```

更多测试相关信息，请参考 [测试文档](docs/TESTING.md)。

## 许可证

[MIT](LICENSE) 