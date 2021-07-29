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

# Section 8. 泛型

## 泛型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/)

在本教程中，你将学习 TypeScript 中的泛型，它允许你使用类型作为形式参数

### TypeScript 中的泛型介绍

TypeScript 中的泛型允许你编写可重用的泛型函数，泛型 [类](https://juejin.cn/post/6984314162402820133) 和 泛型 [接口](https://juejin.cn/post/6984314162402820133)，在这个教程中，你将专注于通用函数的开发

通过一个简单的例子可以更加容易地解释 TypeScript 中的泛型概念

假设你需要开发一个函数，它返回一个 [数字](https://juejin.cn/post/6984309148553445406) [数组](https://juejin.cn/post/6984309148553445406) 中的一个随即元素

下面的 `getRandomNumberElement()` 函数接受一个数字数组作为参数，并从数组中返回一个随机元素：

```ts
function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

为了获取数组中的随即元素，你需要：

- 先找到随机索引
- 根据随机索引获得随机元素

要找到数组的随机索引，我们使用 `Math.random()` 函数，它会返回 `0` 和 `1` 之间的随机数，将它和数组的长度进行相乘，再把它传递给 `Math.floor()` 函数得到随机索引

下面展示了如何使用 `getRandomNumberElement()` 函数

```ts
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));
```

假设你需要从一个 [字符串](https://juejin.cn/post/6984309148553445406) 数组中获得随机元素，你可能想到开发一个新的函数：

```ts
function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

`getRandomStringElement()` 函数的逻辑和 `getRandomNumberElement()` 函数的逻辑相同

下面展示了如何使用 `getRandomStringElement()` 函数

```ts
let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));
```

稍后你可能需要获取对象数组中的随机元素，每次你想从新的类型数组中获得一个随机元素时，创建一个新的函数的方法不具有可扩展性

#### 使用 any 类型

这个问题的一个解决方案是把数组参数的类型设置为 `any[]`，通过这么处理，你只需要编写一个用于任何类型的数组的函数

```ts
function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

`getRandomAnyElement()` 函数适用于 `any` 类型的数组，包括数字，字符串，对象等等

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));
```

这个解决方法是有效的，但是它有一个缺点：无法强制指定返回元素的类型，换句话说，它不是类型安全的

在保留类型的同时避免代码重复的更好的解决方法是使用泛型

#### TypeScript 泛型可以帮上忙

下面是一个泛型函数，它从类型为 `T` 的数组中返回随机元素：

```ts
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

这个函数使用类型变量 `T`，`T` 允许你补货调用函数时提供的类型，此外，该函数使用 `T` 类型变量作为返回类型

`getRandomElement()` 函数是通用的，因为它可以处理任何数据类型，包括字符串，数字和对象等等

按照惯例，我们使用 `T` 作为类型变量，然而你可以自由的使用其他字母，比如 `A`，`B` 和 `C` 等等

### 调用泛型函数

下面演示如何使用数字数组调用 `getRandomElement()` 函数：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);
```

这个例子中显式地将 `number` 作为 `T` 类型传递给 `getRandomElement()` 函数

实践中，你可以使用 [类型推断](https://juejin.cn/post/6984309148553445406) 来推断类型。这意味着你可以让 TypeScript 编译器根据你传递的参数自动设置 `T` 的值，就像这样：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers);
console.log(randomEle);
```

在这个例子中，我们没有显式地给 `getRandomElement()` 函数传递 [数字类型](https://juejin.cn/post/6984309148553445406)，编译器查看参数并把 `T` 设置为对应的类型

现在 `getRandomElement()` 函数也是类型安全的了，比如，如果你把返回值赋值给一个字符串变量，将会得到一个错误提示：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let returnElem: string;
returnElem = getRandomElement(numbers); // compiler error
```

### 具有多个类型变量的泛型函数

下面演示如何使用两个类型变量 `U` 和 `V` 开发泛型函数：

```ts
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

`merge()` 函数合并两个类型为 `U` 和 `V` 的对象，它将两个对象的属性组合成一个新的对象

类型推断将 `merge()` 函数的返回类型推断为 `U` 和 `V` 的交集类型，即 `U & V`

下面演示了如何使用 `merge()` 函数来合并两个对象：

```ts
let result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });

console.log(result);
```

输出：

```ts
{ name: 'John', jobTitle: 'Frontend Developer' }
```

### TypeScript 中泛型的好处

下面是 TypeScript 中泛型的好处：

- 编译时使用类型检查
- 消除 [类型转换](https://juejin.cn/post/6984314053757763592).
- 允许你实现泛型算法

### 小结

- 使用 TypeScript 泛型来开发可复用的，通用的和类型安全的函数，接口和类


## 泛型约束

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)

在本教程中，你将学习 TypeScript 中的通用约束

### TypeScript 中的通用约束介绍

思考下以下例子：

```ts
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

`merge()` 是一个合并两个对象的泛型函数：

```ts
let person = merge({ name: 'John' }, { age: 25 });

console.log(result);
```

输出：

```ts
{ name: 'John', age: 25 }
```

它工作地很好。`merge()` 函数接受两个对象，但它不阻止你传递一个非对象参数，就像这样：

```ts
let person = merge({ name: 'John' }, 25);

console.log(person);
```

输出：

```ts
{
  name: 'John';
}
```

TypeScript 没有发出任何错误提示

你可能想给 `merge()` 函数添加一个约束，只能处理对象而不是处理所有的类型

要做到这一点，你需要列出要求，作为 `U` 和 `V` 类型的约束

为了表示约束，你可以使用 `extends` 关键字：

```ts
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

因为 `merge()` 函数受到了约束，它将不再适合用于所有类型，它现在只适合用于 `object` 类型

下面将导致一个错误：

```ts
let person = merge({ name: 'John' }, 25);
```

错误提示：

```sh
Argument of type '25' is not assignable to parameter of type 'object'.
```

### 在泛型约束中使用类型参数

TypeScript 允许声明受另外一个类型参数约束的类型参数

下面的 `prop()` 函数接受一个对象和一个属性名，它会返回属性的值：

```ts
function prop<T, K>(obj: T, key: K) {
  return obj[key];
}
```

编译器会发出下面的错误提示：

```sh
Type 'K' cannot be used to index type 'T'.
```

为了修正这个错误，你在 `K` 上添加一个约束来确保它是 `T` 的键，如下所示：

```ts
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

如果你传递给 `prop()` 函数一个 `obj` 对象上存在的属性明，编译器不会报错，如下所示：

```ts
let str = prop({ name: 'John' }, 'name');
console.log(str);
```

输出：

```sh
John
```

然后如果你传递一个在第一个参数上不存在的键名，编译器会发出一个错误提示：

```ts
let str = prop({ name: 'John' }, 'age');
```

错误提示：

```sh
Argument of type '"age"' is not assignable to parameter of type '"name"'.
```

### 小结

- 使用 `extends` 关键字将类型参数约束为特定类型
- 使用 `extends keyof` 来约束类型为另外一个对象属性集合的类型


## 泛型类

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-classes/)

在本教程中，你将学习 如何开发 TypeScript 中的泛型类

### TypeScript 中的泛型类介绍

[泛型](https://juejin.cn/post/6984314162402820133) 类的语法如下，泛型类型参数列表在尖括号 `<>` 中，跟着名称后面：

```ts
class className<T> {
  //...
}
```

TypeScript 允许你在类型参数列表中有多个泛型类型类型，如下所示：

```ts
class className<K, T> {
  //...
}
```

[泛型约束](https://juejin.cn/post/6984314162402820133) 也可以应用于类中的泛型类型：

```ts
class className<T extends TypeA> {
  //...
}
```

在类上放置类型参数允许你开发相同类型的方法和属性

### TypeScript 泛型类例子

在这个例子中，我们将开发一个 `Stack` 泛型类

栈是一个基于后进先出(LIFO)原则的数据结构，这就意味着你第一个放入到栈中的元素会是你从栈中最后一个获取到的元素

通常栈有大小限制，默认为空，栈有两个主要的操作：

- Push: 将一个元素推入到栈中
- Pop: 从栈中弹出一个元素

下面展示一个完整的栈泛型类，名为 `Stack<T>`：

```ts
class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }
  pop(): T {
    if (this.elements.length == 0) {
      throw new Error('The stack is empty!');
    }
    return this.elements.pop();
  }
}
```

下面创建了一个新的数字栈：

```ts
let numbers = new Stack<number>(5);
```

下面的函数返回两个数字 `low` 和 `high` 之间的随机数：

```ts
function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
```

现在你可以使用 `randBetween()` 函数生成随机数，然后推入到 `numbers` 栈中：

```ts
let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack.`);
  numbers.push(n);
}
```

输出：

```sh
Push 3 into the stack.
Push 2 into the stack.
Push 1 into the stack.
Push 8 into the stack.
Push 9 into the stack.
```

下面演示如何从栈中弹出元素，直到栈为空：

```ts
while (!numbers.isEmpty()) {
  let n = numbers.pop();
  console.log(`Pop ${n} from the stack.`);
}
```

输出：

```sh
Pop 9 from the stack.
Pop 8 from the stack.
Pop 1 from the stack.
Pop 2 from the stack.
Pop 3 from the stack.
```

类似的，你可以创建一个字符串栈，例如：

```ts
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach((word) => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}
```

它是如何工作的：

- 首先，把橘子拆成单词
- 然后，创建一个栈，大小等于单词数组的单词数
- 第三，将单词数组中的单词推入栈中
- 最后，将栈中的单词弹出，直到栈为空


## 泛型接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-interfaces/)

在本教程中，你将学习 TypeScript 中的泛型接口

### TypeScript 中的泛型接口介绍

和类一样，接口也支持泛型的，泛型接口的语法如下，泛型类型参数列表在尖括号 `<>` 中，跟着接口名称后面：

```ts
interface interfaceName<T> {
  // ...
}
```

这使得类型参数 `T` 对接口的所有成员都可见

类型参数列表可以是一个或者多个类型，如下所示：

```ts
interface interfaceName<U, V> {
  // ...
}
```

### TypeScript 泛型接口例子：

看我们看几个声明泛型接口的列子：

#### 1) 描述对象属性的泛型接口

下面展示了一个泛型接口，他包含两个键值对成员，类型分别是 `K` 和 `V`

```ts
interface Pair<K, V> {
  key: K;
  value: V;
}
```

现在，你可以使用 `Pair` 接口定义任意类型的键值对，比如：

```ts
let month: Pair<string, number> = {
  key: 'Jan',
  value: 1,
};

console.log(month);
```

在这个例子中，我们定义了一个 `key` 为字符串类型而 `value` 为数字类型的键值对

#### 2) 描述方法的泛型接口

下面声明了一个泛型接口，它有两个方法：`add()` 方法和 `remove()` 方法：

```ts
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}
```

`List<T>` 泛型类实现了 `Collection<T>` 泛型接口：

```ts
class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
```

对于 `List<T>` 类，你可以创建任意类型的值列表，如数字或者字符串

比如，下面展示了如何使用 `List<T>` 泛型类来创建一个数字列表：

```ts
let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}
```

#### 3) 描述索引类型的泛型接口

下面声明了一个描述索引类型的接口：

```ts
interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};
```
