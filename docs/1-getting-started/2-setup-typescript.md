---
title: 环境搭建
---

:::tip 前言
在本教程中，你会学习 TypeScript 本地开发环境的搭建。
:::

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/setup-typescript/)

安装下面的工具来开始你的 TypeScript 语言编程之旅：

- Node.js – Node.js 是运行 TypeScript 编译器的环境，注意不一定要了解 Node.js；
- TypeScript 编译器 – 一个把 TypeScript 代码编译成 JavaScript 代码的 Node.js 模块。如果你是在 Node.js 环境中使用 JavaScript，你可以安装 `ts-node` 模块，它是 Node.js 下的 TypeScript 执行引擎与交互式解释器；
- Visual Studio Code – 它是一个支持 TypeScript 语言的代码编辑器，非常推荐使用它，当然你可以使用你自己喜欢的编辑器。

如果你是使用 Visual Studio Code 编辑器的话，可以安装下面的插件来提升你的开发效率：

- Live Server – 允许启动本地开发服务器进行开发，它带有热更新等特性。

## 安装 Node.js

按照下面的步骤来安装 Node.js

- 打开 [Node.js 下载页面](https://nodejs.org/en/download/)；
- 下载与你操作系统（例如 Windows, macOS 或者 Linux 系统）兼容的 Node.js 版本；
- 运行下载回来的 Node.js 包或者可执行文件，后续的安装过程非常简单；
- 在 macOS 或 Linux 中打开终端，或者在 Windows 上打开命令行工具，输入命令 `node -v` 验证安装是否成功，如果看到的版本号和你刚下载的一致，那么 Node.js 成功安装在你的电脑上了。

## 安装 TypeScript 编译器

安装 TypeScript 编译器，你需要在 macOS 或 Linux 上打开终端，或者在 Windows 上打开命令行工具，输入以下命令：

```sh
npm install -g typescript
```

安装完以后，你可以输入下面的命令查看当前 TypeScript 编译器的版本：

```sh
tsc --v
```

它会返回 TypeScript 编译器的版本号，如下所示：

```sh
Version 4.0.2
```

注意你可能看到比这里展示的更新的版本。

如果你在 Windows 系统上看到下面的错误提示：

```sh
'tsc' is not recognized as an internal or external command,
operable program or batch file.
```

你需要把下面这个路径 `C:\Users\<user>\AppData\Roaming\npm` 添加到 `PATH` 变量中，注意你需要把路径中的 `<user>` 换成你自己 Windows 系统上的用户名。

你可以在 macOS 或 Linux 的终端或者 Windows 的命令行工具中，运行下面的命令来全局安装 `ts-node` 模块：

```sh
npm install -g ts-node
```

## 安装 Visual Studio Code

你可以按照下面的步骤来安装 Visual Studio Code

- 打开 [Visual Studio Code 下载页面](https://code.visualstudio.com/download)；
- 选择最新的且和你操作系统（Windows, macOS, 或者 Linux）兼容的 Visual Studio Code 版本进行下载；
- 执行下载好的安装包或者安装程序文件来启动安装向导，安装过程非常简单；
- 启动 Visual Studio Code。

你会看到如下所示的 Visual Studio Code 代码编辑器：

![vs-code](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/vs-code.1glyyl4c1pxc.png)

按照下面的步骤来安装 Live Server 扩展插件：

![Live-Server](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/Live-Server.4m2ngu7cnii0.png)

- 点击扩展插件选项卡，将展示 Visual Studio Code 的扩展插件列表；
- 输入 Live Server 查找 Live Server 扩展插件；
- 点击 `Install` 进行安装。
