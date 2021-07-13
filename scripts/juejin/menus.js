const menus = [
  {
    title: 'TypeScript Tutorial 中文版 - Section 0. 前言',
    postId: '6984281996449021966',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 1. 入门',
    postId: '6984290303880478757',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 2. 基本类型',
    postId: '6984309148553445406',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 3. 控制流语句',
    postId: '6984313301530312734',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 4. 函数',
    postId: '6984313766053675022',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 5. 类',
    postId: '6984313923902111781',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 6. 接口',
    postId: '6984313984061505567',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 7. 高级类型',
    postId: '6984314053757763592',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 8. 泛型',
    postId: '6984314162402820133',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 9. 模块',
    postId: '6984314312739258398',
  },
  {
    title: 'TypeScript Tutorial 中文版 - Section 10. Node.js',
    postId: '6984314534802489352',
  },
];

function replace(sidebar) {
  return function (str) {
    if (sidebar.length !== menus.length) str;
    let result = str;
    for (let index = 0; index < sidebar.length; index++) {
      const menu = menus[index];
      const curSidebar = sidebar[index];
      const { postId } = menu;
      const { path, children } = curSidebar;
      function doReplace(path) {
        result = result.replace(
          new RegExp(`\(${path}/\)`, 'g'),
          `https://juejin.cn/post/${postId}`,
        );
      }
      if (children && children.length > 0) {
        for (let innerIndex = 0; innerIndex < children.length; innerIndex++) {
          const child = children[innerIndex];
          doReplace(child);
        }
      } else {
        doReplace(path);
      }
    }
    return result;
  };
}
module.exports = {
  replace,
  menus,
};
