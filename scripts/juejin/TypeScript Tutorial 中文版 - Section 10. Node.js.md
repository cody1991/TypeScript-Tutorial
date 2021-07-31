---
theme: jzman
---

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)
- [TypeScript Tutorial 中文版 - Section 1. 入门](https://juejin.cn/post/6984290303880478757)
- [TypeScript Tutorial 中文版 - Section 2. 基本类型](https://juejin.cn/post/6984309148553445406)
- [TypeScript Tutorial 中文版 - Section 3. 控制流语句](https://juejin.cn/post/6984313301530312734)
- [TypeScript Tutorial 中文版 - Section 4. 函数](https://juejin.cn/post/6984313766053675022)
- [TypeScript Tutorial 中文版 - Section 5. 类](https://juejin.cn/post/6984313923902111781)
- [TypeScript Tutorial 中文版 - Section 6. 接口](https://juejin.cn/post/6984313984061505567)
- [TypeScript Tutorial 中文版 - Section 7. 高级类型](https://juejin.cn/post/6984314053757763592)
- [TypeScript Tutorial 中文版 - Section 8. 泛型](https://juejin.cn/post/6984314162402820133)
- [TypeScript Tutorial 中文版 - Section 9. 模块](https://juejin.cn/post/6984314312739258398)
- [TypeScript Tutorial 中文版 - Section 10. Node.js](https://juejin.cn/post/6984314534802489352)

# Section 10. Node.js

## Node.js

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/nodejs-typescript/)

在本教程中，你将学习搭建使用 TypeScript 语言的 Node.js 项目的自动化开发环境。

> 本教程假设你在系统上已经安装 Node.js 和 tsc 模块。

### 创建目录结构

首先创建一个新的目录 `nodets`。

接下来，在 `nodets` 目录下面创建两个子目录，分别是 `build` 和 `src`，如下所示：

![nodejs-typescript-directory-structure](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-directory-structure.4buzjj0j3lc0.png)

TypeScript 代码存储在 `src` 目录下，而编译器的输出文件存储在 `build` 目录中。

### 配置 TypeScript 编译器

打开 macOS 和 Linux 的终端或者 Windows 上的命令提示符，在 `nodets` 目录下运行下面的命令，创建 `tsconfig.json` 文件：

```sh
tsc --init
```

你会看到 `nodets` 目录下新增了 `tsconfig.json` 文件：

![nodejs-typescript-tsconfig.json](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-tsconfig.json_.jn33hl2u37k.png)

`tsconfig.json` 配置指定目录 (`nodets`) 是 TypeScript 项目的根目录。当你编译 TypeScript 文件的时候，TypeScript 编译器会使用 `tsconfig.json` 中的配置来编译项目。

现在，你可以打开 `tsconfig.json` 文件，里面有非常多的选项，在本教程中，主要关注两个选项：

- `rootdir` – 指定 TypeScript 输入文件的根目录
- `outdir` - 指定 JavaScript 输出文件的目录

这些选项在默认情况下是被注释掉的，你需要取消它们的注释（删除行首的 `//`），并改成如下所示的配置：

对于 `outDir` 选项：

```ts
"outDir": "./build"
```

对于 `rootDir` 选项：

```ts
"rootDir": "./src"
```

为了验证新的配置是否生效，可以在 `./src` 目录下创建一个名为 `app.ts` 的新文件，敲入如下代码：

```ts
console.log('Node.js TypeScript');
```

![nodejs-typescript-app](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-app.ts_.6j9le5sytxs0.png)

接下来运行下面的命令来执行 TypeScript 编译器的编译工作，它会编译所有存储在 `src` 目录下的文件：

```sh
tsc
```

如果配置是正确有效的，将会看到 `./build` 目录下生成了 `app.js` 文件：

![nodejs-typescript-app](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-app.js.4okqve6avca0.png)

导航到 `build` 目录并执行下面的命令来运行 `app.js` 文件：

```sh
node app.js
```

看到下面的输出结果：

```sh
Node.js TypeScript
```

每当你修改了 TypeScript 代码的时候，你需要：

- 构建项目；
- 运行 JavaScript 输出文件。

这样很浪费时间。幸运的是，你可以使用一些 Node.js 模块，自动化执行上面的流程。

### 安装 Node.js 模块

`nodemon` 模块允许你在修改了 JavaScript 源代码后，重新启动应用程序。

`concurrently` 模块允许并发运行多个命令。

首先在根目录下执行 `npm init` 命令：

```sh
npm init --yes
```

接下来，安装 `nodemon` 和 `concurrently` 模块：

```sh
npm install --g nodemon concurrently
```

需要花费一点时间来安装它们，安装完成以后我们继续后面的步骤。

注意 `--g` 标识表示 npm 将会全局安装这两个模块，你可以在其他项目中使用它们。

接下来打开 `package.json` 文件，在 `scripts` 选项中会看到下面的代码：

```json
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

把 `scripts` 修改成如下所示的配置：

```json
...
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/app.js",
    "start": "concurrently npm:start:*"
},
...
```

`"start:build": "tsc -w"` 会监听 `./src` 下的文件的变化，当有文件发生变化的时候，重新编译这些文件。

`"start:run": "nodemon build/app.js"` 每当有新文件产生的时候，重新运行 `./build` 目录下的 `app.js` 文件。

`"start": "concurrently npm:start:*"` 运行所有 `npm:start:*` 开头的命令，它会执行上面的 `start:build` 和 `start:run` 命令。

因为 `app.js` 是 Node.js 程序的入口，还需要把 `package.json` 文件中的 `main` 配置修改成 `app.js`，如下所示：

```ts
"main": "index.js"
```

修改成：

```ts
 "main": "app.js"
```

最后，运行下面的命令：

```sh
npm start
```

为了验证配置已经生效，修改一些 `app.ts` 中的代码，将会在控制台看到一些新的执行结果输出。
