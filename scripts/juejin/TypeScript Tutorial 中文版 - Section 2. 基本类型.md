---
theme: geek-black
---

# Section 2. 基本类型

## 目录

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)

## 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-types/)

在本教程中，你将了解 TypeScript 中的类型和它的用途。

### TypeScript 中的类型是什么

在 TypeScript 中，类型可以方便地描述一个值拥有的属性和方法，值是任何可以赋值给变量的东西，比如数字，字符串，数组，对象或者函数。

看看下面的值：

```sh
'Hello'
```

当你看这个值的时候，你会说它是一个字符串，这个值拥有字符串所拥有的属性和方法。比如 `'Hello'` 值有一个名为 `length` 的属性，它返回字符串拥有的字符数量：

```ts
console.log('Hello'.length); // 5
```

它也有很多的方法，比如 `match()`， `indexOf()` 和 `toLocaleUpperCase()`，例如：

```ts
console.log('Hello'.toLocaleUpperCase()); // HELLO
```

观察 `'Hello'` 值的时候，通过罗列出它所有的属性和方法的方式来描述它是非常不便的，而通过类型来描述一个值将是一个更加简单有效的方式。

在这个例子中，指出 `'Hello'` 是一个字符串，从而也知道可以在 `'Hello'` 值上使用字符串所拥有的所有属性和方法。

总之，在 TypeScript 中：

- 类型是描述值所具有的属性和方法的标签；
- 每个值都有一种类型。

### TypeScript 中的类型

TypeScript 继承了 JavaScript 的内置类型，TypeScript 中的类型可分为：

- 原始类型
- 对象类型

#### 原始类型

下面列出了 TypeScript 中的原始类型：

| 名字                                | 描述                                          |
| ----------------------------------- | --------------------------------------------- |
| [字符串](/2-basic-types/3-string/)  | 表示文本类型数据                              |
| [数字](/2-basic-types/2-number/)    | 表示数值                                      |
| [布尔值](/2-basic-types/4-boolean/) | 有 `true` 值和 `false` 值                     |
| null                                | 有一个值：null                                |
| undefined                           | 有一个值：undefined，它是未初始化变量的默认值 |
| symbol                              | 表示唯一常量值                                |

#### 对象类型

对象类型包括函数，数组和类等，稍后你将学习如何创建自定义对象类型。

### TypeScript 中类型的作用

TypeScript 中类型的主要作用如下：

- 首先，TypeScript 编译器使用类型来分析代码中错误；
- 其次，类型帮助你了解变量所关联的值是什么。

### TypeScript 中类型示例

下面的例子使用 [querySelector()](https://zh.javascript.info/searching-elements-dom#querySelector) 方法来选出 `<h1>` 元素：

```ts
const heading = document.querySelector('h1');
```

TypeScript 编译器知道 `heading` 的类型是 `HTMLHeadingElement`：

![TypeScript-types-example-1](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-types-example-1.4h001hujndw0.png)

下面列出了类型为 `HTMLHeadingElement` 的 `heading` 变量可以访问的属性和方法列表：

![TypeScript-types-properties-and-methods](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-types-properties-and-methods.2izwvt0qmfa0.png)

如果你试图访问值上不存在的属性和方法时，TypeScript 编译器会显示错误提示，如下所示：

![TypeScript-types-error](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-types-error.4c00bls39gw0.png)

### 小结

- TypeScript 中每个值都有一种类型；
- 类型是描述值所具有的属性和方法的标签；
- TypeScript 编译器使用类型分析你的代码，找出其中存在的 bug 或者错误。


## 类型注释

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/)

在本教程中，你将学习 TypeScript 中的类型注释。

### TypeScript 中的类型注释是什么

TypeScript 使用类型注释显式地为变量，函数和对象等标识符指定类型。TypeScript 中的类型注释语法是在标识符后面添加 `: type` 标识，其中 `type` 可以是任何有效的类型。一旦标识符被声明为某种类型，那它在使用的时候只能是那种类型，如果以其他类型来使用，TypeScript 编译器会抛出一个错误提示。

### 变量和常量中的类型注释

下面是给变量和常量指定类型注释的语法：

```ts
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

在这个语法中，类型注释跟在变量或者常量名之后，前面是一个冒号 (`:`)。

下面例子中的变量使用了 [数字](/2-basic-types/2-number/) 类型注释：

```ts
let counter: number;
```

在这之后，你只能给 `counter` 变量赋值一个数字：

```ts
counter = 1;
```

如果你给变量 `counter` 赋值一个字符串，你会得到一个错误提示：

```ts
let counter: number;
counter = 'Hello'; // compile error
```

错误提示：

```sh
Type '"Hello"' is not assignable to type 'number'.
```

可以在一条语句中给变量添加类型注释的同时进行变量初始化操作，如下所示：

```ts
let counter: number = 1;
```

在这里例子中，我们给 `counter` 变量添加数字类型注释的时候把它初始化为 `1`。

下面是添加其他原始类型注释的例子：

```ts
let name: string = 'John';
let age: number = 25;
let active: boolean = true;
```

在这个例子中， 为 `name` 变量添加了 [字符串](/2-basic-types/3-string/) 类型注释，为 `age` 变量添加了 [数字](/2-basic-types/2-number/) 类型注释，为 `active` 变量添加了 [布尔值](/2-basic-types/4-boolean/) 类型注释

### 类型注释例子

#### 数组

为 [数组类型](/2-basic-types/6-array-type/) 的变量添加类型注释，需要使用一个特定的类型：它的后面跟着一个方括号 `: type[] ` 标识：

```ts
let arrayName: type[];
```

比如下面的例子声明了一个字符串数组：

```ts
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
```

#### 对象

为一个对象指定类型，使用对象类型注释，如下所示：

```ts
let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
}; // 合法的
```

在这个例子中，`person` 对象只接受具有两个指定属性的对象：一个是类型为 `string` 名为 `name` 的属性，另外一个是类型为 `number` 名为 `age` 的属性。

### 函数参数和返回类型

下面展示了一个带有参数类型注释和返回类型注释的函数注释语法：

```ts
let greeting: (name: string) => string;
```

这个例子中你可以给 `greeting` 赋值一个函数，这个函数带有一个类型为字符串的参数，并且它的返回类型也是字符串：

```ts
greeting = function (name: string) {
  return `Hi ${name}`;
};
```

下面的例子由于分配给 `greeting` 变量的函数和它的 [函数](/4-functions/2-function-types/) 类型注释不匹配，会抛出一个错误提示：

```ts
greeting = function () {
  console.log('Hello');
};
```

错误提示：

```sh
Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.
```

### 小结

- 使用语法为 `: [type]` 的类型注释方式，显式地给一个变量，函数或者函数返回值指定类型。


## 类型推断

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-inference/)

在本教程中，你将学习 TypeScript 中的类型推断

类型推断描述的是当你没有为变量添加 [类型注释](/2-basic-types/1-type-annotations/) 的时候，TypeScript 是如何推断变量的类型的。

### 类型推断基础

当你声明一个变量的时候，你可以使用 [类型注释](/2-basic-types/1-type-annotations/) 为变量指定某种类型，如下所示：

```ts
let counter: number;
```

当你把 `counter` 变量初始化一个数字的时候，TypeScript 会推断 `counter` 的类型为 [数字类型](/2-basic-types/2-number/)，如下所示：

```ts
let counter = 0;
```

它和下面的语句是等价的：

```ts
let counter: number = 0;
```

同样的，当你给函数参数赋值的时候，TypeScript 将参数的类型推断为默认值的类型，比如：

```ts
function setCounter(max = 100) {
  // ...
}
```

在这个例子中，TypeScript 推断 `max` 参数的类型为 `number` 类型。类似地，TypeScript 推断下面 `increment()` 函数的返回值类型为 `number` 类型：

```ts
function increment(counter: number) {
  return counter++;
}
```

它和下面例子是等价的：

```ts
function increment(counter: number): number {
  return counter++;
}
```

### 最佳通用类型算法

思考下面的语句：

```ts
let items = [1, 2, 3, null];
```

为了推断出 `items` 变量的类型，TypeScript 需要考虑数组中的每个元素的类型。TypeScript 使用最佳通用类型算法来分析每个候选类型，最终选择与所有候选类型都兼容的类型作为变量的类型。

在这个例子中，TypeScript 选择数字 [数组类型](/2-basic-types/6-array-type/) (`number[]`) 作为最佳通用类型。如果你往 `items` 数组中添加一个字符串，TypeScript 会把 `items` 变量的类型推断为数字与字符串组合的数组类型，即 `(number | string)[]`。

```ts
let items = [0, 1, null, 'Hi'];
```

当 TypeScript 找不到最佳通用类型的时候，它会返回联合数组类型，如下所示：

```ts
let arr = [new Date(), new RegExp('d+')];
```

在这个例子中，TypeScript 推断 `arr` 变量的类型为 `(RegExp | Date)[]`。

### 上下文类型

TypeScript 可以使用位置上下文推断变量的类型，这种机制被称为上下文类型，如下所示：

```ts
document.addEventListener('click', function (event) {
  console.log(event.button); //
});
```

在这个例子中，由于 `event` 参数在 `click` 事件中，TypeScript 知道它是 `MouseEvent` 的一个实例。

然而，当你把 `click` 事件修改成 `scroll` 事件，TypeScript 会抛出一个错误提示：

```ts
document.addEventListener('scroll', function (event) {
  console.log(event.button); // compiler error
});
```

错误提示：

```sh
Property 'button' does not exist on type 'Event'.(2339)
```

TypeScript 知道在这种情况下 `event` 不再是 `MouseEvent` 的实例，而是 `UIEvent` 的实例。而由于 `UIEvent` 没有 `button` 属性，访问 `MouseEvent` 实例的 `button` 属性的时候 TypeScript 会抛出了一个错误提示。

很多情况中可以找到上下文类型的踪影，比如函数调用的参数，类型断言，对象和数组的成员，返回语句和右侧赋值。

### 类型推断 vs 类型注释

下面展示了类型推断和类型注释的区别：

| 类型推断                    | 类型注释                       |
| :-------------------------- | :----------------------------- |
| TypeScript 会猜测变量的类型 | 明确告诉 TypeScript 变量的类型 |

所以，应该在什么时候使用类型推断，什么时候使用类型注释？实际上，你应该尽可能的使用类型推断，只有在下面的几种情况中才去使用类型注释：

- 当声明一个变量但在后面才为它赋值的时候；
- 当你希望一个变量的类型不能被推断的时候；
- 当一个函数的返回类型是 [any](/2-basic-types/9-any-type/) 类型，而你需要明确知道它的类型的时候。

### 小结

- 类型推断发生在初始化变量的值，设置参数默认值和需要确定函数返回值类型的时候；
- TypeScript 使用最佳通用类型算法来选择与所有变量类型兼容的最佳候选类型；
- TypeScript 还根据变量的位置，使用上下文类型来推断变量的类型。


## 数字类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-number/)

在本教程中，你将学习 TypeScript 中的数字数据类型。

TypeScript 中的所有数字，要么是浮点数，那么是大整数，浮点数的类型是 `number` 而大数字的类型是 `bigint`。

### 数字类型

下面的例子展示如果声明一个保存浮点数的变量：

```ts
let price: number;
```

或者你可以将 `price` 变量初始化为一个数字：

```ts
let price = 9.95;
```

和 JavaScript 一样，TypeScript 支持十进制，十六进制，二进制和八进制的数字字面量。

#### 十进制数字

下面展示了一些十进制数字：

```ts
let counter: number = 0;
let x: number = 100,
  y: number = 200;
```

#### 二进制数字

二进制数字的形式为：一个前导 `0`，后面跟着一个小写或大写的字母 `B` 的形式，比如 `0b` 或 `0B`：

```ts
let bin = 0b100;
let anotherBin: number = 0b010;
```

注意在 `0b` 或 `0B` 后面必须是数字 `0` 或数字 `1`。

#### 八进制数字

八进制数字的形式为：一个前导 `0`，后面跟着字母 `o`(自 ES2015 以来)，即 `0o` 的形式。在 `0o` 后面的数字的范围在数字 `0` 和数字 `7` 之间。

```ts
let octal: number = 0o10;
```

#### 十六进制数字

十六进制数字的形式为：一个前导 `0`，后面跟着一个小写或大写字母 `X` （`0x` 或 `0X`）的形式。在 `0x` 后面的数字的范围必须在 (`0123456789ABCDEF`) 之间，如下所示：

```ts
let hexadecimal: number = 0xa;
```

JavaScript 有一个 `Number` 类型（注意是大写字母 `N`），该类型表示的是非原始，封装的对象类型，在 TypeScript 中尽可能不使用 `Number` 类型。

### 大整数

大整数表示大于 `2^53 – 1` 的所有整数，一个大整数的末尾带有一个 `n` 字符，如下所示：

```ts
let big: bigint = 9007199254740991n;
```

### 小结

- TypeScript 中的所有数字，要么是 `number` 类型的浮点数，那么是 `bigint` 类型的大整数；
- 尽可能避免使用 `Number` 类型。


## 字符串类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-string/)

在本教程中，你将学习 TypeScript 字符串数据类型。

和 JavaScript 一样，在 TypeScript 中使用双引号 (`"`) 或者单引号 (`'`) 包裹字符串：

```ts
let firstName: string = 'John';
let title: string = 'Web Developer';
```

TypeScript 也支持使用反引号 (`) 包裹字符的模板字符串语法，模板字符串允许你创建多行字符串，也提供了字符串插值特性。

下面例子展示如何使用反引号 (`) 来创建多行字符串：

```ts
let description = `This TypeScript string can
span multiple
lines
`;
```

字符串插值特性允许你将变量嵌入到字符串中，如下所示：

```ts
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}.
I'm a ${title}`;

console.log(profile);
```

输出：

```sh
I'm John.
I'm a Web Developer.
```

### 小结

- 在 TypeScript 中，所有的字符串都是 `string` 类型；
- 和 JavaScript 一样，TypeScript 中使用双引号 (`"`)，单引号 (`'`) 或者反引号 (`) 包裹字符串。


## 布尔值类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-boolean/)

在本教程中，你将学习 TypeScript 中的布尔值数据类型。

TypeScript 中的 `boolean` 类型有两个值：`true` 和 `false`，它是 TypeScript 的原始类型之一，如下所示：

```ts
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;
```

JavaScript 有表示非原始，封装的对象类型 `Boolean` 类型，`Boolean` 类型首字母为大写字符 `B`，和 `boolean` 类型是不一样的，我们尽可能不使用 `Boolean` 类型。


## 对象类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type/)

在本教程中，你将学习 TypeScript 中的对象数据类型，以及如何更加准地编写对象类型声明。

### TypeScript 中的对象类型介绍

TypeScript 中的 `object` 类型代表所有不是原始类型的值，TypeScript 中原始类型有以下这些：

- `number`
- `bigint`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

下面的例子展示了如何声明一个保存对象的变量：

```ts
let employee: object;

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

console.log(employee);
```

输出：

```sh
{
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
}
```

如果你给 `employee` 对象赋值一个原始类型的值，将得到一个错误提示：

```ts
employee = 'Jane';
```

错误提示：

```sh
error TS2322: Type '"Jane"' is not assignable to type 'object'.
```

`employee` 对象是一个具有固定属性列表的 `object` 类型，如果你尝试去访问 `employee` 对象中不存在的属性，将得到一个错误提示：

```ts
console.log(employee.hireDate);
```

错误提示：

```sh
error TS2339: Property 'hireDate' does not exist on type 'object'.
```

> 注意：上面的语句在 JavaScript 中能正常地运行，它会返回 `undefined` 。

要显式地指定 `employee` 对象的属性，首先使用下面的语法定义 `employee` 对象：

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
```

然后你给 `employee` 对象赋值一个具有上面所有属性的对象：

```ts
employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};
```

也可以把两种语法组合在一个语句中，如下所示：

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};
```

### object vs Object

TypeScript 有另外一种类型，叫做 `Object` 类型，它的字符 `O` 是大写的，理解它们之间的区别是非常有必要的。`object` 类型代表所有的非原始类型的值，而 `Object` 类型描述的是所有对象具有的功能。例如，`Object` 类型具有可以被任何对象访问的 `toString()` 和 `valueOf()` 方法。

### 空类型 {}

TypeScript 有另外一个类型叫空类型，使用 `{}` 表示，它和 `object` 类型非常相似。空类型 `{}` 描述一个本身没有任何属性的对象，如果你尝试去访问这种类型的对象的某个属性，TypeScript 会发出一个编译时错误的提示：

```ts
let vacant: {};
vacant.firstName = 'John';
```

错误提示：

```sh
error TS2339: Property 'firstName' does not exist on type '{}'.
```

但可以通过 [原型链](https://zh.javascript.info/prototype-inheritance) 访问所有在 `Object` 类型上定义的属性和方法：

```ts
let vacant: {} = {};

console.log(vacant.toString());
```

输出：

```sh
[object Object]
```

### 小结

- TypeScript 中的 `object` 类型代表所有的非原始类型的值；
- `Object` 类型描述所有对象具有的功能；
- 空类型 `{}` 描述一个自身没有任何属性的对象。


## 数组类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/)

在本教程中，你将学习 TypeScript 中的数组类型，以及它的一些基本操作。

### TypeScript 中的数组类型介绍

TypeScript 中的 `array` 是一个有序的数据列表，可以使用下面的语法来声明一个存储指定类型的值的数组：

```ts
let arrayName: type[];
```

如下所示，声明了一个 [字符串](/2-basic-types/3-string/) 数组：

```ts
let skills: string[];
```

你可以通过下面的方式往数组中添加一个或多个字符串：

```ts
skills[0] = 'Problem Solving';
skills[1] = 'Programming';
```

也可以使用 `push()` 方法往数组中添加元素：

```ts
skills.push('Software Design');
```

下面的例子中，声明并把一个字符串数组赋值给了 `skills` 变量：

```ts
let skills = ['Problem Sovling', 'Software Design', 'Programming'];
```

在这个例子中，TypeScript [推断](/2-basic-types/15-type-inference/) `skills` 数组是一个字符串数组，它相当于：

```ts
let skills: string[];
skills = ['Problem Sovling', 'Software Design', 'Programming'];
```

当给数组指定了类型，TypeScript 会阻止你向数组中添加不兼容的值，下面的例子会抛出一个错误提示：

```ts
skills.push(100);
```

因为我们尝试往字符串数组中添加一个数值。

错误提示：

```sh
Argument of type 'number' is not assignable to parameter of type 'string'.
```

当从一个数组中提取元素的时候，TypeScript 会执行 [类型推断](/2-basic-types/15-type-inference/) 的操作，如下所示：

```ts
let skill = skills[0];
console.log(typeof skill);
```

输出：

```sh
string
```

这个例子中，提取了 `skills` 数组中的第一个元素，把它赋值给了 `skill` 变量，由于字符串数组中的元素都是字符串，TypeScript 把 `skill` 变量的类型推断为字符串类型。

### TypeScript 中的数组的属性和方法

TypeScript 中的数组和 JavaScript 一样，可以访问 JavaScript 数组中的所有属性和方法，比如下面使用 `length` 属性来获取数组中元素的数量：

```ts
let series = [1, 2, 3];
console.log(series.length); // 3
```

也可以使用 JavaScript 中的数组的所有方法，比如 `forEach()`, `map()`, `reduce()` 和 `filter()`，如下所示：

```ts
let series = [1, 2, 3];
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);
```

输出：

```sh
[ 2, 4, 6 ]
```

### 存储混合类型的值

下面演示了如何声明一个同时存储字符串和数字的数组：

```ts
let scores = ['Programming', 5, 'Software Design', 4];
```

在这个例子中，TypeScript 把 `scores` 数组推断为 `(string | number)[]` 类型，它和下面的例子是等价的：

```ts
let scores: (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];
```

### 小结

- 在 TypeScript 中，数组是一个有序的数据列表，数组可以存储混合类型的值；
- 声明指定类型的数组，你可以使用 `let arr: type[]` 这个语法。


## 元组类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-tuple/)

在本教程中，你将学习 TypeScript 中的元组类型，以及它的使用方法。

### TypeScript 中的元组类型介绍

元组的工作机制和 [数组类型](/2-basic-types/6-array-type/) 类似，但有一些额外的条件限制：

- 元组中元素的数量是固定的；
- 元素中元素的类型是已知的，并且它们不需要都相同。

例如，可以用元组来表示一个由 `string` 和 `number` 类型组成的值：

```ts
let skill: [string, number];
skill = ['Programming', 5];
```

元组中的值的顺序非常重要，如果把 `skill` 元组中值的顺序调整成 `[5, "Programming"]`，将会得到一个错误提示：

```ts
let skill: [string, number];
skill = [5, 'Programming'];
```

错误提示：

```sh
error TS2322: Type 'string' is not assignable to type 'number'.
```

综上所述，对于有特定顺序且相互关联的数据，使用元组来存储它们是一个很好的实践方法。例如，可以使用一个元组来定义一个 `RGB` 颜色值，它总是以三个数字的形式出现：

```sh
(r,g,b)
```

如下所示：

```ts
let color: [number, number, number] = [255, 0, 0];
```

`color[0]`, `color[1]` 和 `color[2]` 分别映射到 `Red`, `Green` 和 `Blue` 颜色值上。

### 可选元组元素

从 TypeScript 3.0 开始，元组可以通过使用问号 `(?)` 后缀来指定可选元素。例如，可以使用可选的 `alpha` 通道值来定义一个 `RGBA` 元组：

```ts
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

> 注意：`RGBA` 使用 `red`, `green`, `blue` 和 `alpha` 模型定义颜色，`alpha` 指定颜色的透明度。

### 小结

- 元组是一个具有固定数量和已知元素类型的数组。


## 枚举类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-enum/)

在本教程中，你将学习 TypeScript 中的枚举类型，以及如何更高效地使用它。

### 什么是枚举

枚举是一些命名常量值的组合，`Enum` 代表枚举类型，按照下面的步骤来定义枚举：

- 首先，把变量名写在 `enum` 关键字之后；
- 然后，定义枚举中的常量值。

下面展示定义枚举的语法：

```ts
enum name {constant1, constant2, ...};
```

在这个语法中，`constant1` 和 `constant2` 等等被称为枚举的成员。

### TypeScript 中的枚举类型例子

下面的例子创建一个表示一年中所有月份的枚举：

```ts
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
```

在这个例子中，枚举名为 `Month` ，它的常量值有 `Jan`, `Feb` 和 `Mar` 等等。

下面声明一个函数，它使用 `Month` 枚举类型作为参数 `month` 的类型：

```ts
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
```

可以这样调用这个函数：

```ts
console.log(isItSummer(Month.Jun)); // true
```

这个例子使用枚举中的常量值，比如 `Jan`, `Feb` 和 `Mar` 等等，而不是 `1`, `2` 和 `3` 等等这些值，使得代码更加清晰易懂。

### TypeScript 中的枚举是如何工作的

在代码中使用枚举常量值是一个很好的实践方法。不过下面的例子把一个数字而不是枚举值传递给 `isItSummer()` 函数，它也能正常工作：

```ts
console.log(isItSummer(6)); // true
```

这个例子使用了一个数字 (`6`) 代替了 `Month` 中的枚举常量值，它也能正常工作。

检查下 `Month` 枚举生成的 Javascript 代码：

```ts
var Month;
(function (Month) {
  Month[(Month['Jan'] = 0)] = 'Jan';
  Month[(Month['Feb'] = 1)] = 'Feb';
  Month[(Month['Mar'] = 2)] = 'Mar';
  Month[(Month['Apr'] = 3)] = 'Apr';
  Month[(Month['May'] = 4)] = 'May';
  Month[(Month['Jun'] = 5)] = 'Jun';
  Month[(Month['Jul'] = 6)] = 'Jul';
  Month[(Month['Aug'] = 7)] = 'Aug';
  Month[(Month['Sep'] = 8)] = 'Sep';
  Month[(Month['Oct'] = 9)] = 'Oct';
  Month[(Month['Nov'] = 10)] = 'Nov';
  Month[(Month['Dec'] = 11)] = 'Dec';
})(Month || (Month = {}));
```

可以在控制台打印 `Month` 变量：

```ts
{
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}
```

从输出中可以清楚地看到，TypeScript 枚举本质上是 JavaScript 中的对象，该对象在枚举中声明了命名属性，比如 `Jan` 是 `0`，而 `Feb` 是 `1`，也有数字键和表示命名常量的字符串值。这就是为什么你可以向接受枚举的函数传递一个数字的原因，换句话说，枚举成员既是数字也是已定义的常量值。

### 指定枚举成员的数值

TypeScript 根据枚举定义中成员的出现顺序来定义枚举成员的数值，比如 `Jan` 是 `0` 而 `Feb` 是 `1` 等等。

可以显式地为枚举成员指定数值，如下所示：

```ts
enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
```

在这个例子中，`Jan` 常量的值为 `1` 而不是 `0`，`Feb` 的值为 `2`，`Mar` 的值为 `3` 等等。

### 什么时候使用枚举

在下面情况中可以使用枚举：

- 有一组紧密相关且数量不多的固定值集合；
- 这些值在编译时已知。

例如，你可以使用枚举来表示审批状态：

```ts
enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}
```

然后，你可以像下面这样来使用 `ApprovalStatus` 枚举：

```ts
const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request',
};

if (request.status === ApprovalStatus.approved) {
  // 发送邮件
  console.log('Send email to the Applicant...');
}
```

### 小结

- TypeScript 中的枚举是一组常量值的集合；
- 本质上，枚举是一个在枚举定义中声明了命名属性的 JavaScript 对象；
- 如果你有一组紧密相关且数量不多的固定值集合，并且这些值在编译时已知，那么一定要使用枚举


## any 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-any-type/)

在本教程中，你将学习 TypeScript 中的 any 类型，以及如何在代码中正确地使用它。

### TypeScript 中地 any 类型介绍

有时候你需要在变量中存储一个值，但在你编写代码的时候你并不知道它的类型，这种未知的值可能来自第三方的 `API` 或者用户的输入。在这种情况下，如果你希望不进行类型检查，允许它在编译时通过检查，你可以使用 `any` 类型， `any` 类型允许你给变量赋任何类型的值：

```ts
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
```

输出：

```sh
{ latitude: 10.11, longitude: 12.12 }
```

在这个例子中，`JSON.parse()` 函数返回的对象赋值给了 `currentLocation` 变量。当你访问 `currentLocation` 变量的属性的时候，TypeScript 不会做任何的类型检查：

```ts
console.log(currentLocation.x);
```

输出：

```ts
undefined;
```

上面的例子中，TypeScript 编译器不会抛出任何的错误提示。

TypeScript 的 `any` 类型提供了一个可以与当前基于 JavaScript 的代码库一起正常工作的方案，它允许你在编译期间是否使用类型检测。因此，你可以借助 `any` 类型把基于 JavaScript 的项目平滑地过渡成为基于 TypeScript 的项目。

### TypeScript 隐式具有 any 类型

如果你在声明一个变量的时候没有指定类型，TypeScript 会假定变量使用的是 `any` 类型。这个特性被叫做 [类型推断](/2-basic-types/15-type-inference/)。TypeScript 基本上都会进行变量类型的推断，比如：

```ts
let result;
```

在这个例子中，TypeScript 会进行变量的类型推断，这种特性被称为隐式类型。

> 注意：要禁用 `any` 类型的隐式类型特性，你需要把 `tsconfig.json` 文件中的 `noImplicitAny` 选项的值调整为 `true`，你在后面的教程中会学习更多关于 `tsconfig.json` 配置文件的知识。

### TypeScript 中的 any 类型 vs 对象类型

```ts
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); //
```

在这个例子中，`result` 变量的类型为 `any`类型，那么即使 `willExist()` 方法在编译时不存在，调用这个方法的时候 TypeScript 编译器也不会发出抛出任何的错误提示，因为 `willExist()` 函数可能在运行时是可用的。然而，如果把 `result` 变量的类型修改为 `object` 类型，TypeScript 编译器会抛出错误提示：

```ts
let result: object;
result = 10.123;
result.toFixed();
```

错误提示：

```sh
error TS2339: Property 'toFixed' does not exist on type 'object'.
```

### 小结

- TypeScript `any` 类型允许你存储任意类型的值，它告诉编译器不进行类型检查；
- 使用 `any` 类型来存储在编译时或者 JavaScript 项目迁移成 TypeScript 项目时不知道类型的值。


## void 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-void-type/)

在本教程中，你将学习 TypeScript 中的 void 类型，以及如何使用它来表示不返回任何值的函数的返回类型。

### TypeScript 中的 void 类型介绍

`void` 类型表示值没有任何类型，它有点像是 [any 类型](/2-basic-types/9-any-type/) 的反面。实际上你可以使用 `void` 类型表示不返回任何值的函数的返回类型，如下所示：

```ts
function log(message): void {
  console.log(messsage);
}
```

给一个不返回任何值的函数或者方法加上返回类型是 `void` 类型，是一个很好的实践方法，你可以获取到以下好处：

- 提高代码的清晰度：你不用完整的读完整个函数体来判断它是否返回了什么；
- 确保类型安全：你永远不会把一个返回类型为 `void` 类型的函数赋值给一个变量。

注意你如果使用一个类型为 `void` 的变量，你只能把它赋值为 `undefined`，这种情况下 `void` 类型的值是没有任何用处的，如下所示：

```ts
let useless: void = undefined;
useless = 1; // error
```

如果没有指定 `--strictNullChecks` 标志，你可以把 `null` 赋值给 `useless` 变量。

```ts
useless = null; // OK if --strictNullChecks is not specified
```


## never 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-never-type/)

在本教程中，你将学习 TypeScript 中的 never 类型，它不包含值。

`never` 类型是不包含值的类型，由于这个原因，你不能给 `never` 类型的变量赋任何的值。通常，你可以使用 `never` 类型来表示总是抛出错误的函数的返回类型，如下所示：

```ts
function raiseError(message: string): never {
  throw new Error(message);
}
```

下面的函数的返回值被推断为 `never` 类型：

```ts
function reject() {
  return raiseError('Rejected');
}
```

包含死循环的函数它的返回类型也是 `never` 类型，如下所示：

```ts
let loop = function forever() {
  while (true) {
    console.log('Hello');
  }
};
```

在这个例子中，`forever()` 函数的返回类型是 `never` 类型。

如果看到一个函数的返回类型是 `never` 类型，那么要确定下这是不是你想要的结果。

当你使用 [类型保护](/7-advanced-types/2-type-guards/) 来收缩变量的类型，导致有些条件判断再也不能为真的时候，也可以得到 `never` 类型。如下所示，不使用 `never` 类型的话，下面的函数会抛出错误，因为不是所有代码中的路径都有返回值：

```ts
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true;
  } else if (typeof a === 'number') {
    return false;
  }
}
```

为了使代码变得有效，你可以返回一个返回类型为 `never` 类型的函数：

```ts
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true;
  } else if (typeof a === 'number') {
    return false;
  }
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
  throw new Error('Never!');
};
```

#### 小结

- `never` 类型不包含值；
- `never` 类型表示总是抛出错误的或包含死循环的函数的返回类型。


## 联合类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-union-type/)

在本教程中，你将学习 TypeScript 中的联合类型，它允许你在变量中存储一个或多个不同类型的值。

### TypeScript 中的联合类型介绍

有时候你会遇到这样一个函数，它希望接受数字或字符串的值作为参数，如下所示：

```ts
function add(a: any, b: any) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}
```

在这个例子中，如果两个参数都是数字，`add` 函数会计算它们的和，而如果两个参数都是字符串，`add` 函数会把它们拼接成一个字符串，如果参数既不都是数字也都不是字符串，`add()` 函数会抛出一个错误提示。

`add()` 函数的问题是它的参数类型是 [any 类型](/2-basic-types/9-any-type/)，这意味着可以使用既不都是数字也不都是字符串的参数来调用它，TypeScript 能接受这种情况。代码可以编译成功，但是在运行的时候会抛出错误：

```ts
add(true, false);
```

为了解决这个问题，你可以使用 TypeScript 中的联合类型，联合类型允许把多个类型组合成一个类型来使用。`result` 变量的类型是 `number` 类型或者 `string` 类型，如下所示：

```ts
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```

联合类型描述的值可以是几种类型中的一种，但不仅仅只能是两种。比如 `number | string | boolean` 也是一个值的类型，它可以是数字，字符串或者布尔值。回到 `add()` 函数的例子，你可以把它的参数的类型从 `any` 类型修改为联合类型：

```ts
function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}
```

### 小结

- TypeScript 中的联合类型允许你在变量中存储一个或多个不同类型的值。


## 类型别名

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-aliases/)

在本教程中，你将学习如果使用类型别名为类型起新的名字。

### TypeScript 中的类型别名介绍

类型别名允许你为现有的类型指定新的名字，类型别名的语法如下所示：

```ts
type alias = existingType;
```

现有的类型可以是任何 TypeScript 中有效的类型。下面的例子使用类型别名，为 `string` 类型指定了新的名字 `chars`：

```ts
type chars = string;
let messsage: chars; // same as string type
```

给 [联合类型](/2-basic-types/13-type-aliases/) 创建类型别名是非常有用的，如下所示：

```ts
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```


## 字符串字面量类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-string-literal-types/)

在本教程中，你将学习 TypeScript 中的字符串字面量类型，它指定了类型可接受的字符串字面量。

字符串字面量类型允许你定义一种类型，它只接受一个指定的字符串字面量。下面的例子定义了一个字符串字面量类型，它只接受 `'click'` 字符串字面量：

```ts
let click: 'click';
```

`click` 变量是一个只接受 `'click'` 字符串的字符串字面量类型，如果你把字符串 `click` 赋值给 `click` 变量，它是合法的：

```ts
click = 'click'; // valid
```

但如果把另外一个字符串赋值给 `click` 变量，TypeScript 编译器会抛出一个错误提示，如下所示：

```ts
click = 'dblclick'; // compiler error
```

错误提示：

```sh
Type '"dblclick"' is not assignable to type '"click"'.
```

使用字符串字面量类型来限制变量中可能出现的字符串字面量是非常有用的。

字符串字面量类型可以与 [联合类型](/2-basic-types/12-union-type/) 结合起来使用，为变量定义一组有限的、可选的字符串字面量集合：

```ts
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error
```

在多个位置使用同一个字符串字面量类型显得非常冗余，你可以使用 [类型别名](/2-basic-types/13-type-aliases/) 来避免这种情况的发生，如下所示：

```ts
type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MouseEvent;
```

### 小结

- TypeScript 中的字符串字面量类型指定了类型可接受的字符串字面量；
- 字符串字面量类型与联合类型和类型别名结合起来使用，可以指定接受一组有限的、可选的字符串字面量集合。
