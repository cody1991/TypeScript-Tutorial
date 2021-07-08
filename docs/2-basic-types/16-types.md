---
title: 类型
---

:::tip 前言
in this tutorial, you’ll learn about the TypeScript types and their purposes.
:::

## What is a type in TypeScript

In TypeScript, a type is a convenient way to refer to the different properties and functions that a value has.

A value is anything that you can assign to a variable e.g., a number, a string, an array, an object, and a function.

See the following value:

```ts
'Hello';
```

When you look at this value, you can say that it’s a string. And this value has properties and methods that a string has.

For example, the `'Hello'` value has a property called `length` that returns the number of characters:

```ts
console.log('Hello'.length); // 5
```

It also has many methods like `match()`, `indexOf()`, and `toLocaleUpperCase()`. For example:

```ts
console.log('Hello'.toLocaleUpperCase()); // HELLO
```

If you look at the value `'Hello'` and describe it by listing the properties and methods, it would be inconvenient.

A shorter way to refer to a value is to assign it a type. In this example, you say the `'Hello'` is a string. Then, you know that you can use the properties and methods of a string for the value `'Hello'`.

In conclusion, in TypeScript:

- a type is a label that describes the different properties and method that a value has
- every value has a type.

## Types in TypeScript

TypeScript inherits the built-in types from JavaScript. TypeScript types is categorized into:

- Primitive types
- Object types

### Primitive types

The following illustrates the primitive types in TypeScript:

| Name          | Descriptipn                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| [string]()    | represents text data                                                         |
| [number]()    | represents numeric values                                                    |
| [boolean]()   | has true and false values                                                    |
| [null]()      | has one value: null                                                          |
| [undefined]() | has one value: undefined. It is a default value of an uninitialized variable |
| [symbol]()    | represents a unique constant value                                           |

### Object types

Objec types are functions, arrays, classes, etc. Later, you’ll learn how to create custom object types.

## Purposes of types in TypeScript

There are two main purposes of types in TypeScript:

- First, types are used by the TypeScript compiler to analyze your code for errors
- Second, types allow you to understand what values are associated with variables.

# Examples of TypeScript types

The following example uses the querySelector() method to select the <h1> element:

const heading = document.querySelector('h1');
