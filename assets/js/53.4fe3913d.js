(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{489:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"类型转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.typescripttutorial.net/typescript-tutorial/type-casting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("在本教程中，你将学习 TypeScript 中的类型转换，它允许变量从一种类型转换成另外一种类型。")]),t._v(" "),e("p",[t._v("JavaScript 没有类型转换的概念，因为变量具有动态类型的特性。而 TypeScript 中的变量都有类型，类型转换允许变量从一种类型转换成另外一种类型。")]),t._v(" "),e("p",[t._v("TypeScript 中可以使用 "),e("code",[t._v("as")]),t._v(" 关键字或者 "),e("code",[t._v("<>")]),t._v(" 操作符进行类型转换的操作。")]),t._v(" "),e("h3",{attrs:{id:"使用-as-关键字进行类型转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-as-关键字进行类型转换"}},[t._v("#")]),t._v(" 使用 as 关键字进行类型转换")]),t._v(" "),e("p",[t._v("下面使用 "),e("a",{attrs:{href:"https://zh.javascript.info/searching-elements-dom#querySelector",target:"_blank",rel:"noopener noreferrer"}},[t._v("querySelector()"),e("OutboundLink")],1),t._v(" 方法选择第一个输入元素：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" input "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'input["type="text"]\'')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("因为 "),e("code",[t._v("document.querySelector()")]),t._v(" 方法的返回类型是 "),e("code",[t._v("Element")]),t._v(" 类型，下面的代码会导致编译错误：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("因为 "),e("code",[t._v("Element")]),t._v(" 类型不存在 "),e("code",[t._v("value")]),t._v(" 属性，这个属性只存在 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型上。为了解决这个问题，你可以使用类型转换，使用关键字 "),e("code",[t._v("as")]),t._v(" 把 "),e("code",[t._v("input")]),t._v(" 变量的类型从 "),e("code",[t._v("Element")]),t._v(" 类型转换为 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型，如下所示：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" input "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input[type=\"text\"]'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HTMLInputElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("现在，"),e("code",[t._v("input")]),t._v(" 变量的类型是 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型，所以访问它的 "),e("code",[t._v("value")]),t._v(" 属性不会导致任何错误，下面的代码可以正常工作：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("另外一种把 "),e("code",[t._v("input")]),t._v(" 变量的类型从 "),e("code",[t._v("Element")]),t._v(" 类型转换为 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型的方法如下所示：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" enteredText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HTMLInputElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("注意 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型扩展自 "),e("code",[t._v("HTMLElement")]),t._v(" 类型，而 "),e("code",[t._v("HTMLElement")]),t._v(" 类型扩展自 "),e("code",[t._v("Element")]),t._v(" 类型。把 "),e("code",[t._v("HTMLElement")]),t._v(" 类型转换成 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型被称为向下转换。")]),t._v(" "),e("p",[t._v("也可以进行如下所示的向下转换：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" el"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HTMLElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTMLInputElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("在这个例子中，"),e("code",[t._v("el")]),t._v(" 变量的类型是 "),e("code",[t._v("HTMLElement")]),t._v(" 类型，你可以给它指定一个 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型的实例，因为 "),e("code",[t._v("HTMLInputElement")]),t._v(" 类型是 "),e("code",[t._v("HTMLElement")]),t._v(" 类型的子类。将类型从 "),e("code",[t._v("typeA")]),t._v(" 转换成 "),e("code",[t._v("typeB")]),t._v(" 的语法如下：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" typeA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" typeB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"使用-操作符进行类型转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-操作符进行类型转换"}},[t._v("#")]),t._v(" 使用 <> 操作符进行类型转换")]),t._v(" "),e("p",[t._v("除了 "),e("code",[t._v("as")]),t._v(" 关键词，你可以使用 "),e("code",[t._v("<>")]),t._v(" 操作符进行类型转换，如下所示：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" input "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HTMLInputElement"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input[type=\"text\"]'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("使用 "),e("code",[t._v("<>")]),t._v(" 操作符进行类型转换的语法如下所示：")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" typeA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("typeB"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("ul",[e("li",[t._v("类型转换允许变量从一种类型转换成另外一种类型；")]),t._v(" "),e("li",[t._v("使用 "),e("code",[t._v("as")]),t._v(" 关键字或者 "),e("code",[t._v("<>")]),t._v(" 操作符进行类型转换的操作。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);