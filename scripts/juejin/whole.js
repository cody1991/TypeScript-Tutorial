// 旁支，生成全文
const fs = require('fs');
const path = require('path');
const config = require('../../docs/.vuepress/config');
const { replacer } = require('./replacer');

let {
  themeConfig: { sidebar },
} = config;

sidebar = sidebar.filter((item) => item.print !== false);

let menusReplace = replacer(sidebar);

const fileName = `TypeScript Tutorial 中文版.md`;
fs.writeFileSync(fileName, ``);

for (let index = 0; index < sidebar.length; index++) {
  const curSidebar = sidebar[index];
  const { title, path: pathUrl, children } = curSidebar;

  fs.writeFileSync(fileName, `# ${title}`, { flag: 'a' });

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
