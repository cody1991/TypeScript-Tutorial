const fs = require('fs');
const path = require('path');
const config = require('../../docs/.vuepress/config');

const {
  themeConfig: { sidebar },
} = config;

if (fs.existsSync('./docs.md')) fs.unlinkSync('./docs.md');

const files = sidebar
  .reduce((allFiles, cur) => {
    const now = [...allFiles];
    const { path, children } = cur;
    if (children) now.push(...children);
    else now.push(path);
    return now;
  }, [])
  .filter((item) => !item.includes('addon'));

for (let index = 0; index < files.length; index++) {
  const filePath = path.join('../../docs', `${files[index]}.md`);
  let file = fs.readFileSync(filePath).toString();

  file = file.replace(/---\stitle: [\sA-Za-z\u4e00-\u9fa5\.\/]+\s---/g, '');

  console.log('写入', filePath);
  fs.writeFileSync('./docs.md', file, { flag: 'a' });
}

// console.log(files);
