# 项目介绍

TypeScript 语言越来越受欢迎，而 TypeScript 语言的学习渠道也越来越多，笔者在学习 TypeScript 语言的时候发现一个不错的入门级教程 [Typescrip Ttutorial](https://www.typescripttutorial.net/)，学习完以后打算翻译成中文提供给更多的人学习，于是 [TypeScript Tutorial 中文版](https://github.com/cody1991/TypeScript-Tutorial) 这个项目就诞生了。

目前这个项目的进度是：完成第一期的校对工作。

项目的在线阅读地址在：[TypeScript Tutorial 中文版](https://cody1991.github.io/TypeScript-Tutorial/)，已添加评论功能，欢迎大家进行吐槽，也欢迎提交 MR 单来帮忙提高项目的质量，感谢。

# 目录

## 掘金版本

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

# 工程

## VuePress

这个项目是基于 [VuePress](https://vuepress.vuejs.org/) 构建的，参考官方文档可以很快的上手，下面介绍一些自己觉得不错的插件和功能，如果觉得这个项目的模板不错的话，也可以 fork 出来，作为自己的文档模板。

### Back To Top 插件

[Back To Top 插件](https://vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html)

有些文章偏长，阅读到底部的时候希望跳转回页面顶部，就可以使用这个插件了。

### Medium-Zoom 插件

[Medium-Zoom 插件](https://vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html)

这个插件的主要作用是点击文档内的图片，可以放大图片至全屏观看，有更好的阅读体验。

### 评论功能

使用了官方推荐的一个评论插件 [vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment) 结合 [Gitalk](https://github.com/gitalk/gitalk)，官方文档都非常清晰，可以自行配置上线，后续会写一篇入门的指导文档。

下面有几点需要注意的：

1. Gitalk is a modern comment component based on GitHub Issue and Preact，Gitalk 是基于 Github Issue 的，Github Issue 的唯一标识 ID 不能超过 50 个字符，默认是使用页面的 URL 地址，很多时候超过字数限制导致报错，可以修改配置。我这个项目使用的是文档的标题作为唯一标识。

2. 插件嵌入到页面以后，样式并不是那么兼容，可以自己新建一个 `docs/.vuepress/styles/index.styl` 的文件，编写自定义的样式([参考文档](https://vuepress.vuejs.org/config/#styling))，如下所示：

```css
#vuepress-plugin-comment {
  padding: 2rem 2.5rem;
  max-width: 740px;
  margin: 0 auto;
}
```

3. 有可能会收到 Github 发送的邮件，提示暴露了 Client_secret，这个在项目的 Issue [Bug？暴露 Client_id 和 Client_secret ？](https://github.com/gitalk/gitalk/issues/150) 已经有人讨论过，不必过于担心

### Live2D 看板娘

[VuePress 集成 Live2D 看板娘](https://github.com/JoeyBling/vuepress-plugin-helper-live2d)

主要就为了可爱了～

## 格式化

主要基于 [prettier](https://prettier.io/)，能让文档和代码看起来更加舒服。

下面是自己项目的配置文件：

```js
module.exports = {
  // 一行最多 80 字符
  printWidth: 80,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: 'lf',
};
```
