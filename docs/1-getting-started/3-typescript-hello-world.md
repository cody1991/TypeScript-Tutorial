---
title: Hello World
---

## Hello World

:::tip 前言
在本教程中，你会学习如何使用 TypeScript 开发一个 Hello World 程序。
:::

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-hello-world/)

### Node.js 环境下的 TypeScript Hello World 程序

第一，创建一个存放代码的文件夹，比如 `helloword` 文件夹。

第二，启动 Visual Studio Code ，打开上面创建的文件夹。

第三，创建一个名为 `app.ts` 的 TypeScript 文件，TypeScript 文件的扩展名是 `.ts`。

第四，在 `app.ts` 文件中输入以下代码：

```ts
let message: string = 'Hello, World!';
console.log(message);
```

第五，使用快捷键 `Ctrl+` 或者菜单 `Terminal > New Terminal`，在 Visual Studio Code 中启动命令行工具：

![TypeScript-Hello-World-Launch-Terminal](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Launch-Terminal.1lqe6wc1s140.png)

第六，在命令行工具中输入下面的命令来编译 `app.ts` 文件：

```sh
tsc app.ts
```

![TypeScript-Hello-World-compile-TS-file](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-compile-TS-file.k21w3y1dri8.png)

如果一切正常，你会看到 TypeScript 编译器生成了一个名为 `app.js` 的新文件：

![TypeScript-Hello-World-Output-file](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Output-file.noimhwwiqa8.png)

你可以在命令行工具中输入下面的命令来运行 `app.js` 文件：

```sh
node app.js
```

如果你已经安装了在 [环境搭建](/1-getting-started/2-setup-typescript/) 中提到的 `ts-node` 模块，你只需要一个命令便可以实现编译 TypeScript 文件后运行输出的文件的目的：

```sh
ts-node app.ts
```

### Web 浏览器下的 TypeScript Hello World 程序

跟着下面的步骤来创建一个显示 `Hello, World!` 信息的网页。

首先, 创建一个名为 `index.html` 的文件，文件中引入了 `app.js` ，如下所示：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TypeScript: Hello, World!</title>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

第二，把 `app.js` 中的代码改成如下所示：

```ts
let message: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
```

第三，编译 `app.ts` 文件：

```sh
tsc app.ts
```

第四，打开 Visual Studio Code 编辑器，鼠标右键 `index.html` 文件，选择 `Open with Live Server` 选项来打开 Live Server 服务：

![TypeScript-Hello-World-Live-Server](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Live-Server.4obe4i76xdo0.png)

Live Server 会打开 `index.html` 文件，显示下面的信息：

![TypeScript-Hello-World-Web-Browser](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Web-Browser.ptpo86xpvnk.png)

你可以编辑 `app.ts` 文件来做出一些改变，如下所示：

```ts
let message: string = 'Hello, TypeScript!';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);
```

然后编译 `app.ts` 文件：

```sh
tsc app.ts
```

TypeScript 编译器会生成新的 `app.js` 文件，Live Server 会通知 Web 浏览器重新加载新的 `app.js` 文件。

注意 `app.js` 文件是 `app.ts` 文件编译产生的文件，你不应该直接修改 `app.js` 里面的代码，否则在重新编译 `app.ts` 文件后，之前在 `app.js` 中修改的代码会被覆盖。
