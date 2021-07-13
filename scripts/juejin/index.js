const fs = require('fs');
const path = require('path');
const config = require('../../docs/.vuepress/config');

const {
  themeConfig: { sidebar },
} = config;

for (let index = 0; index < sidebar.length; index++) {
  const curSidebar = sidebar[index];
  const { print, title, path: pathUrl, children } = curSidebar;
  if (print === false) continue;

  const fileName = `TypeScript Tutorial 中文版 - ${title}.md`;
  fs.writeFileSync(
    fileName,
    `---
theme: geek-black
---

# ${title}

## 目录

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)`,
  );

  function writeFile(srcFileName, fileName) {
    const filePath = path.join('../../docs', `${srcFileName}.md`);
    let fileStr = fs.readFileSync(filePath).toString();
    fileStr = fileStr.replace(
      /---\stitle: [\sA-Za-z\u4e00-\u9fa5\.\/]+\s---/g,
      '',
    );
    console.log('写入文件', fileName);
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
