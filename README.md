# JSJS VM Demo

这是一个 JavaScript 虚拟机演示项目，它可以将 JavaScript 代码编译后嵌入到图片中，然后通过微信小程序读取并执行。

## 项目说明

该项目包含以下功能：

- 一个简单的 JavaScript 编译器，能够将 JavaScript 代码编译成字节码
- 将编译后的字节码嵌入到图像文件中
- 一个用于演示的微信小程序，可以从图像中读取并执行字节码

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

## 项目结构

- `src/` - 包含编译器和虚拟机的源代码
- `test-miniprogram/` - 微信小程序示例项目
- `test-code.js` - 用于测试的 JavaScript 代码

## 开发

如果需要修改编译器或虚拟机，可以编辑 `src/` 目录下的源文件，然后运行以下命令重新编译：

```bash
npm run build
```

如果需要生成新的图片，可以运行：

```bash
npm run generate
```

## 许可证

[MIT](LICENSE) 