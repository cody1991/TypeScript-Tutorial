---
title: 类型保护
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的类型保护
:::

类型保护允许你使用 [条件代码块](/3-control-flow-statements/1-if-else/) 来限定变量的类型范围

# typeof

让我们看看下面的例子：

```ts
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }

  throw new Error(
    'Invalid arguments. Both arguments must be either numbers or strings.',
  );
}
```

它是如何工作的：

- 属性，定义了 `alphanumeric` 类型，它可以保存 [字符串类型](/2-basic-types/3-string/) 或者 [数字类型](/2-basic-types/2-number/) 值
- 接下来，定义了 `add()` 函数，它把类型为 `alphanumeric` 的 `a` 变量与 `b` 变量进行相加
- 然后使用 `typeof` 操作符检查两个参数的类型是否都为 `number` 类型，如果是的话，使用 `+` 操作符计算参数之和
- 再然后使用 `typeof` 操作符检查两个参数的类型是否都为 `string` 类型，如果是的话，把两个字符串参数拼接起来
- 最后，如果两个参数不都全是数字或者字符串的话，抛出错误提示

在这个例子中，TypeScript 直到如何在条件代码块中使用 `typeof` 操作符，在下面的 [if](/3-control-flow-statements/1-if-else/) 块中，TypeScript 认为 `a` 和 `b` 都是数字类型

```ts
if (typeof a === 'number' && typeof b === 'number') {
  return a + b;
}
```

类似地，在下面的 `if` 代码块中，TypeScript 将 `a` 和 `b` 作为字符串处理，因此，你可以把它们拼接成一个字符串：

```ts
if (typeof a === 'string' && typeof b === 'string') {
  return a.concat(b);
}
```

# instanceof

与 `typeof` 操作符类型，TypeScript 也知道 `instanceof` 操作符的使用，例如：

```ts
class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? 'Sign a new contract the supplier'
      : 'Need to evaluate further';
  }

  return message;
}
```

它是如何工作的：

- 首先，声明了 `Customer` 和 `Supplier` 两个类
- 第二， 创建一个类型别名 `BusinessPartner`，它是`Customer` 和 `Supplier` 的联合类型
- 第三，定义一个函数 `signContract()`，它接受一个类型为 `BusinessPartner` 的参数
- 最后，检查 `partner` 是否是 `Customer` 或者 `Supplier` 类的实例，然后进行对应的逻辑处理

在下面的 `if` 代码块中，TypeScript 通过 `instanceof` 操作符知道 `partner` 是 `Customer` 类型的一个实例：

```ts
if (partner instanceof Customer) {
  message = partner.isCreditAllowed()
    ? 'Sign a new contract with the customer'
    : 'Credit issue';
}
```

同样的方式，在下面的 `if` 代码块中，TypeScript 知道 `partner` 是 `Supplier` 类型的一个实例：

```ts
if (partner instanceof Supplier) {
  message = partner.isInShortList()
    ? 'Sign a new contract with the supplier'
    : 'Need to evaluate further';
}
```

当 `if` 代码块限定了一种类型，TypeScript 知道在 `else` 里面会是另外一种类型，例如：

```ts
function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further';
  }
  return message;
}
```

# in

`in` 操作符判断对象上是否存在某个属性来进行安全检查，你也可以将它用作类型保护，例如：

```ts
function signContract(partner: BusinessPartner): string {
  let message: string;
  if ('isCreditAllowed' in partner) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? 'Sign a new contract the supplier '
      : 'Need to evaluate further';
  }
  return message;
}
```

# 用户定义的类型保护

用户定义的类型保护允许你使用函数的时候定义类型保护或者帮助 TypeScript 推断类型

用户定义的类型保护函数是一个简单返回 `arg is aType` 判断的函数，比如：

```ts
function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}
```

在这个例子中，`isCustomer()` 是一个用户定义的类型保护函数，现在你可以按照下面的例子来使用它：

```ts
function signContract(partner: BusinessPartner): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further';
  }

  return message;
}
```

# 小结

- 类型保护限定了条件代码块中变量的类型
- 使用 `typeof` 和 `instanceof` 操作符在条件代码块中的实现类型保护
