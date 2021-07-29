function replacer(
  sidebar,
  host = 'https://cody1991.github.io/TypeScript-Tutorial',
) {
  return function (str) {
    let result = str;
    for (let index = 0; index < sidebar.length; index++) {
      const curSidebar = sidebar[index];
      const { path, children } = curSidebar;
      function doReplace(path) {
        console.log(path);
        result = result.replace(
          new RegExp(`\(${path}/\)`, 'g'),
          `${host}${path}.html`,
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
  replacer,
};
