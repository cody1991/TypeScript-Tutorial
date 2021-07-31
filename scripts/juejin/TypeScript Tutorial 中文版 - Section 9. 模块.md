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

# Section 9. 模块

## 模块

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/)

在本教程中，你将学习 TypeScript 中的模块，以及使用它来重构你的代码。

### TypeScript 中的模块介绍

[自从 ES6 以来，JavaScript 开始支持模块](https://zh.javascript.info/modules-intro) ，把它作为语言的原生功能。TypeScript 与 JavaScript 的模块概念保持一致。

模块在它自己的作用域中执行，而不是在全局作用域中，这意味着当你在一个模块中声明变量，[函数](https://cody1991.github.io/TypeScript-Tutorial/4-functions/1-functions.html)， [类](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 和 [接口](https://cody1991.github.io/TypeScript-Tutorial/6-interfaces/1-interface.html) 等等的时候，它们在模块外部是不可见的，除非你使用 `export` 语句显式地把它们导出。

另一方面，如果你想访问另外一个模块中的变量，函数和类等等，需要使用 `import` 语句来导入它们。

和 ES6 一样，当 TypeScript 文件包含顶级 `import` 或者 `export` 关键字的时候，它被视为一个模块。

### 创建模块

下面创建了一个名为 `Validator.ts` 的新模块，声明了一个名为 `Validator` 的接口：

```ts
export interface Validator {
  isValid(s: string): boolean;
}
```

在这个模块中，我们将 `export` 关键字放在 `interface` 关键字前，以便将它导出，从而可以被其他模块使用。换句话说，如果不使用 `export` 关键字，`Validator` 接口在 `Validator.ts` 模块中是私有的，不能被其他模块使用。

### 导出语句

从模块中导出声明的另外一种方法是使用 `export` 语句，如下所示：

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

在这个例子中，其他模块将使用 `StringValidator` 接口。

### 导入新模块

要使用一个模块，需要使用 `import` 语句，下面创建一个使用 `Validator.ts` 模块的新模块 `EmailValidator.ts`：

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

当你导入一个模块的时候，你可以进行重命名的操作，如下所示：

```ts
import { Validator as StringValidator } from './Validator';
```

在 `EmailValidator` 模块中，使用 `StringValidator` 接口代替 `Validator` 接口。

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

#### 导入类型

下面在 `Types.ts` 模块中声明了一个类型：

```ts
export type alphanumeric = string | number;
```

要从 `Types.ts` 模块中导入 `alphanumeric` 类型，你可以使用 `import type` 语句：

```ts
import type { alphanumeric } from './Types';
```

注意，TypeScript 从 3.8 版本开始支持 `import type` 语句，在 TypeScript 3.8 版本之前使用 `import` 语句：

```ts
import { alphanumeric } from './Types';
```

#### 从模块中导入所有内容

要导入模块中的所有内容，使用如下所示的语法：

```ts
import * from 'module_name';
```

### 重新导出

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

你可以将 `EmailValidator` 和 `ZipCodeValidator` 模块打包到一个新的模块中，方法是使用如下所示的语法，组合导出它们中的所有内容：

```ts
export * from 'module_name';
```

下面的示例演示了如何在 `FormValidator.ts` 模块中包装 `EmailValidator.ts` 和 `ZipCodeValidator.ts` 模块

```ts
export * from './EmailValidator';
export * from './ZipCodeValidator';
```

### 默认导出

TypeScript 允许每个模块都有一个默认的导出，要将导出标记为默认的导出，你可以使用 `default` 关键字实现。下面演示了如何将 `ZipCodeValidator` 类标记为默认的导出：

```ts
import { Validator } from './Validator';

export default class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const numberRegexp = /^[0-9]+$/;
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

要导入默认导出，可以使用如下所示的语法：

```ts
import default_export from 'module_name';
```

下面演示了如何在 `App.ts` 文件中使用 `ZipCodeValidator` 模块的默认导出：

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

### 小结

- TypeScript 与 ES6 module 的模块概念一致，一个模块可以同时包含声明和实现代码；
- 在一个模块中，变量，函数，类和接口等等都在它自己的作用域上允许，而不是全局作用域下允许；
- 使用 `export` 语句把模块中的变量，函数，类，接口和类型等等导出；
- 使用 `import` 语句导入另外一个模块导出的内容。
