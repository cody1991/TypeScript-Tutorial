---
theme: geek-black
---

# Section 9. 模块

## 目录

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)

:::tip 前言
在本教程中，你将学习 TypeScript 中的模块，以及如何使用它来重构你的代码

:::

# TypeScript 中的模块介绍

[自从 ES6 以来，JavaScript 开始支持模块](https://zh.javascript.info/modules-intro) ，作为语言的原生功能，TypeScript 与 JavaScript 的模块概念一致

TypeScript 模块可以同时包含声明和代码，模块在它自己的作用域中执行，而不是在全局作用域中。这意味着当你在一个模块中声明变量，[函数](/4-functions/1-functions/)， [类](/5-classes/1-class/) 和 [接口](/6-interfaces/1-interface/) 等等的时候，它们在模块外部是不可见的，除非你使用 `export` 语句显式地导出它们

另一方面，如果你想从一个模块中访问变量，函数和类等，你需要使用 `import` 语句导入它们

和 ES6 一样，当 TypeScript 文件包含顶级 `import` 或者 `export` 的时候，它被视为一个模块

# 创建一个新的模块

下面创建了一个名为 `Validator.ts` 的新模块，声明了一个名为 `Validator` 的接口：

```ts
export interface Validator {
  isValid(s: string): boolean;
}
```

在这个模块中，我们将 `export` 关键字放在 `interface` 关键字前，以便将它公开给其他模块使用

换句话说，如果你不是用 `export` 关键字，`Validator` 接口在 `Validator.ts` 模块中是私有的，因此，它不能被其他模块使用

# 导出语句

从模块中到处声明的另外一种方法是使用 `export` 语句，比如：

```ts
interface Validator {
  isValid(s: string): boolean;
}

export { Validator };
```

TypeScript 也允许模块使用者重命名声明，就像这样：

```ts
interface Validator {
  isValid(s: string): boolean;
}

export { Validator as StringValidator };
```

在这个例子中，其他模块将使用 `Validator` 接口作为 `StringValidator` 接口

# 倒入新模块

要使用一个模块，使用 `import` 语句，下面创建了一个使用 `Validator.ts` 模块的新模块 `EmailValidator.ts`

```ts
import { Validator } from './Validator';

class EmailValidator implements Validator {
  isValid(s: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(s);
  }
}

export { EmailValidator };
```

当你倒入一个模块的时候，你可以像这样重命名它：

```ts
import { Validator as StringValidator } from './Validator';
```

在 `EmailValidator` 模块中，你是用 `Validator` 接口作为 `StringValidator` 接口

```ts
import { Validator as StringValidator } from './Validator';

class EmailValidator implements StringValidator {
  isValid(s: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(s);
  }
}

export { EmailValidator };
```

下面演示如何在 `App.ts` 文件中使用 `EmailValidator` 模块：

```ts
import { EmailValidator } from './EmailValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);
```

输出：

```sh
true
```

## 导入类型

下面在 `Types.ts` 模块中声明了一个类型：

```ts
export type alphanumeric = string | number;
```

要从 `Types.ts` 模块中导入 `alphanumeric` 类型，你可以使用 `import type` 语句：

```ts
import type { alphanumeric } from './Types';
```

注意，TypeScript 从 3.8 版本开始支持 `import type` 语句，在 TypeScript 3.8 版本之前你需要使用 `import` 语句来代替：

```ts
import { alphanumeric } from './Types';
```

## 从模块中导入所有内容

要从模块中导入所有内容，可以使用下面的语法：

```ts
import * from 'module_name';
```

# 重新导出

下面创建了一个使用 `Validator.ts` 模块，名为 `ZipCodeValidator.ts` 的新模块：

```ts
import { Validator } from './Validator';

class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const numberRegexp = /^[0-9]+$/;
    return s.length === 5 && numberRegexp.test(s);
  }
}

export { ZipCodeValidator };
```

你可以将 `EmailValidator` 和 `ZipCodeValidator` 模块打包到一个新的模块中，方法是使用以下语法组合导出它们所有的内容：

```ts
export * from 'module_name';
```

下面的示例演示了如何在 `FormValidator.ts` 模块中包装 `EmailValidator.ts` 和 `ZipCodeValidator.ts` 模块

```ts
export * from './EmailValidator';
export * from './ZipCodeValidator';
```

# 默认导出

TypeScript 允许每个模块都有一个默认导出，要将导出标记为 `default` 导出，你可以使用 `default` 关键字

下面展示了如何将 `ZipCodeValidator` 作为默认导出：

```ts
import { Validator } from './Validator';

export default class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const numberRegexp = /^[0-9]+$/;
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

要导入一个默认导出，你可以使用一个不同的 `import` 语法，如下所示：

```ts
import default_export from 'module_name';
```

下面展示了如何在 `App.ts` 文件中使用 `ZipCodeValidator` 的默认导出：

```ts
import ZipCodeValidator from './ZipCodeValidator';

let validator = new ZipCodeValidator();
let result = validator.isValid('95134');

console.log(result);
```

输出：

```sh
true
```

# 小结

- TypeScript 与 ES6 module 的模块概念一致，一个模块可以同时包含声明和代码
- 在一个模块中，变量，函数，类和接口等等都在它自己的作用域上执行，而不是全局作用域下
- 使用 `export` 语句从模块中导出变量，函数，类，接口和类型等等
- 使用 `import` 语句访问来自另外一个模块的导出
