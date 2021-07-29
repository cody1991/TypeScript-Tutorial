const fs = require('fs');
const path = require('path');
const config = require('../../docs/.vuepress/config');
const { replace } = require('./menus');

let {
  themeConfig: { sidebar },
} = config;

sidebar = sidebar.filter((item) => item.print !== false);

let menusReplace = replace(sidebar);

for (let index = 0; index < sidebar.length; index++) {
  const curSidebar = sidebar[index];
  const { title, path: pathUrl, children } = curSidebar;

  const fileName = `TypeScript Tutorial 中文版 - ${title}.md`;
  fs.writeFileSync(
    fileName,
    `---
theme: jzman
---

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)
- [TypeScript Tutorial 中文版 - Section 1. 入门](https://juejin.cn/post/6984290303880478757)
- [TypeScript Tutorial 中文版 - Section 2. 基本类型](https://juejin.cn/post/6984309148553445406)
- [TypeScript Tutorial 中文版 - Section 3. 控制流语句](https://juejin.cn/post/6984313301530312734)
- [TypeScript Tutorial 中文版 - Section 4. 函数](https://juejin.cn/post/6984313766053675022)
- [TypeScript Tutorial 中文版 - Section 5. 类](https://juejin.cn/post/6984313923902111781)

# ${title}`,
  );

  function writeFile(srcFileName, fileName) {
    const filePath = path.join('../../docs', `${srcFileName}.md`);
    let fileStr = fs.readFileSync(filePath).toString();
    fileStr = fileStr.replace(
      /---\stitle: [\sA-Za-z\u4e00-\u9fa5\.\/]+\s---/g,
      '',
    );
    // console.log('写入文件', fileName);

    fileStr = menusReplace(fileStr);
    fs.writeFileSync(fileName, fileStr, { flag: 'a' });
  }

  if (children && children.length > 0) {
    for (let innerIndex = 0; innerIndex < children.length; innerIndex++) {
      const child = children[innerIndex];
      writeFile(child, fileName);
    }
  } else {
    writeFile(pathUrl, fileName);
  }
}
