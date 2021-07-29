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

# Section 4. 函数

## 函数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-functions/)

在本教程中，你将学习 TypeScript 中的函数以及如何给函数添加类型注释。

### TypeScript 中的函数介绍

TypeScript 中的函数是一段可读，可维护和可复用的代码块，和 JavaScript 一样，可以使用 `function` 关键字来声明 TypeScript 中的函数：

```ts
function name(parameter: type, parameter: type, ...): returnType {
  // do something
}
```

和 JavaScript 不一样的是，TypeScript 允许为函数的参数和返回值添加 [类型注释](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/1-type-annotations.html)，看看下面的 `add()` 函数：

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

在这个例子中，`add()` 函数接受两个 [数字类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) 的参数。当你调用 `add()` 函数的时候，TypeScript 编译器会检查每个传递给函数的参数，保证它们都是数字类型的值。在 `add()` 函数的例子中，你只能传递数字类型的参数给它，不能是其他任何类型的值。下面的例子会抛出错误提示，因为它向 `add()` 函数传递了两个字符串类型的参数：

```ts
let sum = add('10', '20');
```

错误提示：

```sh
error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'
```

括号后面的 `: number` 表示返回值的类型，在本例中 `add()` 函数返回 `number` 类型的值。当函数有返回类型的时候，TypeScript 编译器会根据返回类型检查每个 `return` 语句，确保返回值都是兼容的。如果函数不返回值，使用 `void` 类型作为返回类型，`void` 关键字表示该函数不返回任何值，如下所示：

```ts
function echo(message: string): void {
  console.log(message.toUpperCase());
}
```

`void` 类型阻止函数内的代码返回值，也阻止调用函数的地方把函数的返回赋值给变量。

当没有注释返回值的类型的时候，TypeScript 会尝试推断它的类型，如下所示：

```ts
function add(a: number, b: number) {
  return a + b;
}
```

在这个例子中，TypeScript 编译器尝试把 `add()` 函数的返回值的类型推断为 `number` 类型，这是符合预期的。但是，如果函数有多个分支返回不同类型的值的时候，TypeScript 编译器可能推断出返回值的类型为 [联合类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/12-union-type.html) 或者 [any 类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/9-any-type.html)。因此，尽可能给函数添加类型注释。

### 小结

- 给函数的参数和返回值添加类型注释保证调用代码的内联性，以及在函数体中进行类型检查。


## 函数类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-function-types/)

在本教程中，你将学习 TypeScript 中的函数类型，使用它为函数定义类型。

### TypeScript 中的函数类型介绍

一个函数类型由两个部分组成：参数类型和返回类型。声明一个函数类型的时候，使用下面的语法来指定这两个部分：

```ts
(parameter: type, parameter: type, ...) => type
```

下面的例子声明了一个函数类型，它接受两个数字类型的参数以及返回一个数字类型的值：

```ts
let add: (x: number, y: number) => number;
```

在这个例子中：

- 函数类型接受两个参数：`x` 和 `y`，它们都是 `number` 类型的值；
- 返回值的类型是 [数字类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) ，它跟在参数列表和返回类型之间的胖箭头 (`=>`) 后面。

> 注意，参数的名字 (`x` 和 `y`) 只是方便阅读，可以使用其他参数名字。

为一个变量添加函数类型注释后，可以把有相同类型的函数赋值给这个变量。TypeScript 编译器会检查参数的数量和类型以及返回类型是否匹配。下面的例子展示如何把一个函数赋值给 `add` 变量：

```ts
add = function (x: number, y: number) {
  return x + y;
};
```

同样的，可以像下面这样声明一个变量，同时把函数赋值给它：

```ts
let add: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y;
};
```

如果赋值了另外一个类型与 `add` 函数类型不匹配的函数，TypeScript 会抛出错误提示，如下所示，把一个类型不匹配的函数重新赋值给了 `add` 函数变量：

```ts
add = function (x: string, y: string): number {
  return x.concat(y).length;
};
```

### 函数类型推断

当在等式的一边有类型的时候，TypeScript 编译器可以推断出函数的类型，这种形式的 [类型推断](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/15-type-inference.html) 被称为上下文类型，如下所示：

![TypeScript-Function-Type-Example](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Function-Type-Example.6rkmnr74nik0.png)

在这个例子中，`add` 函数被推断为 `(x: number, y:number) => number` 类型。

通过类型推断，可以免去一些类型注释的工作，显著减少代码数。


## 可选参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/)

在本教程中，你将学习如何使用 TypeScript 中的函数的可选参数。

在 JavaScript 中，即使函数指定了参数，也可以在调用它的时候不传入任何参数，因为 JavaScript 默认支持可选参数。而在 TypeScript 中，编译器会检查每个函数的调用情况，并在以下情况中抛出错误提示：

- 实参的数量和函数中指定的形参的数量不同；
- 或者实参的类型和函数形参的类型不兼容。

因为编译器会彻查传递给函数的参数，我们可以使用可选参数告诉编译器参数是可选的，在不存在的情况下不发出错误提示。

要使函数的参数是可选的，可以在参数名后面添加 `?` 符号，如下所示：

```ts
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

它是这样工作的：

- 首先，在 `c` 参数后面添加 `?` 符号；
- 然后，通过表达式 `typeof c !== 'undefined'` 检查 `c` 参数是否传递给了函数。

> 注意：如果你用表达式 `if(c)` 来检查参数是否被初始化，你会发现空字符串和 `0` 也被视为 `undefined`，这种判断是有问题的。

可选参数必须出现在参数列表中必选参数的后面。例如，如果你把 `b` 设置为可选参数，而 `c` 是必须参数，TypeScript 编译器会抛出一个错误提示：

```ts
function multiply(a: number, b?: number, c: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

错误提示：

```sh
error TS1016: A required parameter cannot follow an optional parameter.
```

### 小结

- 使用 `parameter?: type` 语法把参数设置为可选的；
- 使用 `typeof(parameter) !== 'undefined'` 表达式来检查可选参数是否初始化了。


## 默认参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/)

在本教程中，你将学习 TypeScript 中的默认参数

### TypeScript 中的默认参数介绍

JavaScript 自 ES2015 (或者称 ES6) 以来，开始支持 [默认参数](https://zh.javascript.info/function-basics#mo-ren-zhi)，它的语法如下：

```ts
function name(parameter1 = defaultValue1, ...) {
  // do something
}
```

在上述语法中，如果调用函数的时候不传递实参或者传递的实参值为 `undefined` ，函数会把默认的初始值赋值给缺省的形参，如下所示：

```ts
function applyDiscount(price, discount = 0.05) {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

在这个例子中，`applyDiscount()` 函数有一个默认参数 `discount`。如果在调用 `applyDiscount()` 函数的时候没有传递值给 `discount` 行参，函数会把默认值 `0.05` 赋值给它。与 JavaScript 类似，可以在 TypeScript 中使用相同的语法来指定默认参数：

```ts

function name(parameter1 :type = defaultvalue1, parameter2 :type = defaultvalue2, ...) {
  //
}
```

下面的例子使用了 `applyDiscount()` 函数的默认参数：

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

注意不能在函数类型定义中包含默认参数，下面的代码讲会抛出错误提示：

```ts
let promotion: (price: number, discount: number = 0.05) => number;
```

错误提示：

```sh
error TS2371: A parameter initializer is only allowed in a function or constructor implementation.
```

### 默认参数和可选参数

和 [可选参数](https://cody1991.github.io/TypeScript-Tutorial/4-functions/3-optional-parameters.html) 类似，默认参数也是可选的。这意味着在调用函数的时候可以省略默认参数。另外，默认参数和可选参数可能有相同的类型，比如下面两个函数：

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
  // ...
}
```

和

```ts
function applyDiscount(price: number, discount?: number): number {
  // ...
}
```

它们有着如下所示相同的类型：

```ts
(price: number, discount?: number) => number;
```

可选参数必须在必选参数后面，但是默认参数不需要出现在必选参数后面。当默认参数出现在必选参数之前，需要显示的传递 `undefined` 来获取默认初始值的赋值。

下面的函数返回指定月份和年份中的天数：

```ts
function getDay(
  year: number = new Date().getFullYear(),
  month: number,
): number {
  let day = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      // leap year
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
      else day = 28;
      break;
    default:
      throw Error('Invalid month');
  }
  return day;
}
```

在这个例子中，如果没有给 `year` 传递实参或者 `undefined` 值，`year` 默认值是当前年份。下面的例子使用 `getDay()` 函数来获取 2019 年 2 月的天数：

```ts
let day = getDay(2019, 2);
console.log(day); // 28
```

为了获取今年 2 月份的天数，需要如下所示把 `undefined` 值传递给 `year` 参数：

```ts
let day = getDay(undefined, 2);
console.log(day);
```

### 小结

- 如果你想要设置参数的默认初始值，使用默认参数的语法 `parameter:=defaultValue`；
- 默认参数是可选的；
- 要使用形参的默认初始值，在调用函数的时候忽略实参或者把 `undefined` 值传递给对应的参数。


## Rest 参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-rest-parameters/)

在本教程中，你将学习 TypeScript 中的剩余参数，它允许你把不限数量的参数表示为一个数组参数。

Rest 参数允许函数接受零个或者多个指定类型的参数，在 TypeScript 中， Rest 参数遵守下面的规则：

- 一个函数只有一个 Rest 参数；
- Rest 参数出现在参数列表的最后面；
- Rest 参数的类型是 [数组类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/9-any-type.html)。

要声明一个 Rest 参数，可以在参数名前加上三个点，并使用数组类型作为它的类型注释：

```ts
function fn(...rest: type[]) {
  //...
}
```

下面的例子演示了如何使用 Rest 参数：

```ts
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
```

在这个例子中， `getTotal()` 函数计算传递给它的所有参数的总和。由于 `numbers` 参数是一个 Rest 参数，你可以传递一个或者多个数字，来计算它们的总和：

```ts
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```


## 函数重载

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/)

在本教程中，你将学习 TypeScript 中的函数重载

### TypeScript 中的函数重载介绍

在 TypeScript 中，函数重载允许你建立某个函数参数类型和返回类型之间的关系。

> 注意 TypeScript 的函数重载不同于其他静态类型语言，如 `C#` 和 `Java` 支持的函数重载。

让我们看几个简单的例子：

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}
```

在这个例子中：

- `addNumbers()` 函数返回两数之和；
- `addStrings()` 函数返回两个字符串连接后的结果。

可以使用 [联合类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/12-union-type.html) 来定义一个函数参数和返回值的类型范围：

```ts
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
}
```

然后，联合类型不能精确地表示参数类型和返回值类型之间的关系。`add()` 函数告诉编译器它将接受数字或者字符串参数，返回一个数字或者字符串。但是它无法描述在参数都为数字的时候返回数字，当参数都是字符串的时候返回字符串。为了更好地描述函数使用的类型之间的关系，TypeScript 支持函数重载，如下所示：

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
```

在这个例子中，我们为 `add()` 函数添加了两个函数重载，第一个函数重载告诉编译器参数都是数字的时候，`add()` 函数应该返回一个数字。第二个函数重载有着类似的行为，不过换成了针对字符串类型的参数。

每个函数重载定义了 `add()` 函数支持的类型组合，描述了参数类型和它返回值类型之间的映射关系。现在当你调用 `add()` 函数的时候，代码编辑器会提示有一个可用的重载函数，如下所示：

![typescript-function-overloadings](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/typescript-function-overloadings.36nbxumle820.png)

### 数函数重载中使用可选参数

当你使用函数重载的时候，函数的参数数量必须相同，如果有一个函数重载的参数比另外一个函数重载的参数多的话，你必须把多出来的参数设置为可选参数，如下所示：

```ts
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}
```

`sum()` 函数接受两个或者三个类型为数字的参数，第三个参数是可选的，如果没有把它设置为可选参数，编译器将抛出错误提示。

### 方法重载

当一个函数是一个类的属性的时候，它被称为方法，TypeScript 也支持方法重载，如下所示：

```ts
class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}
```

`count()` 函数可以返回一个数字或者一个数组，这取决于传递给它的参数的数量。

```ts
let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
```

输出：

```sh
1
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]
```

### 小结

- TypeScript 中的函数重载允许你描述函数的参数类型和返回类型之间的关系。
