module.exports = {
  head: [
    [
      'script',
      {},
      `
        (function() {
        var hm1 = document.createElement("script");
        hm1.src = "https://www.googletagmanager.com/gtag/js?id=G-4DNMGQS60C";
        var s1 = document.getElementsByTagName("script")[0]; 
        s1.parentNode.insertBefore(hm1, s1);
        })();

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4DNMGQS60C');
    `,
    ],
  ],
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'eb060af2f7a3df3dd3f0',
          clientSecret: 'a6febfc0f380bf4ef59e924fe2276018851c638c',
          repo: 'TypeScript-Tutorial',
          owner: 'cody1991',
          admin: ['cody1991'],
          distractionFreeMode: true,
          id: '<%- frontmatter.title %>',
          title: '「Comment」<%- frontmatter.title %>',
          body: '<%- frontmatter.title %>：<%-window.location.origin %><%- frontmatter.to.path || window.location.pathname %>',
        },
      },
    ],
    '@vuepress/back-to-top',
    [
      '@vuepress/medium-zoom',
      {
        options: {
          margin: 16,
          background: '#000',
        },
      },
    ],
    [
      'vuepress-plugin-helper-live2d',
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'wanko',
          display: {
            position: 'right', // 显示位置：left/right(default: 'right')
            width: 180, // 模型的长度(default: 135)
            height: 246, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.7, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
  ],
  title: 'TypeScript Tutorial',
  // description: 'Just playing arround',
  base: '/TypeScript-Tutorial/',
  configureWebpack: {
    resolve: {
      alias: {},
    },
  },
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'cody1991/TypeScript-Tutorial',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebar: [
      {
        title: 'Section 0. 前言',
        path: '/0-guide/1-guide',
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 1. 入门',
        path: '/1-getting-started/1-what-is-typescript',
        children: [
          '/1-getting-started/1-what-is-typescript',
          '/1-getting-started/2-setup-typescript',
          '/1-getting-started/3-typescript-hello-world',
          '/1-getting-started/4-why-typescript',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 2. 基本类型',
        path: '/2-basic-types/16-types',
        children: [
          '/2-basic-types/16-types',
          '/2-basic-types/1-type-annotations',
          '/2-basic-types/15-type-inference',
          '/2-basic-types/2-number',
          '/2-basic-types/3-string',
          '/2-basic-types/4-boolean',
          '/2-basic-types/5-object-type',
          '/2-basic-types/6-array-type',
          '/2-basic-types/7-tuple',
          '/2-basic-types/8-enum',
          '/2-basic-types/9-any-type',
          '/2-basic-types/10-void-type',
          '/2-basic-types/11-never-type',
          '/2-basic-types/12-union-type',
          '/2-basic-types/13-type-aliases',
          '/2-basic-types/14-string-literal-types',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 3. 控制流语句',
        path: '/3-control-flow-statements/1-if-else',
        children: [
          '/3-control-flow-statements/1-if-else',
          '/3-control-flow-statements/2-switch-case',
          '/3-control-flow-statements/3-for',
          '/3-control-flow-statements/4-while',
          '/3-control-flow-statements/5-do-while',
          '/3-control-flow-statements/6-break',
          '/3-control-flow-statements/7-continue',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 4. 函数',
        path: '/4-functions/1-functions',
        children: [
          '/4-functions/1-functions',
          '/4-functions/2-function-types',
          '/4-functions/3-optional-parameters',
          '/4-functions/4-default-parameters',
          '/4-functions/5-rest-parameters',
          '/4-functions/6-function-overloadings',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 5. 类',
        path: '/5-classes/1-class',
        children: [
          '/5-classes/1-class',
          '/5-classes/2-access-modifiers',
          '/5-classes/3-readonly',
          '/5-classes/4-getters-setters',
          '/5-classes/5-inheritance',
          '/5-classes/6-static-methods-and-properties',
          '/5-classes/7-abstract-classes',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 6. 接口',
        path: '/6-interfaces/1-interface',
        children: [
          '/6-interfaces/1-interface',
          '/6-interfaces/2-extend-interface',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 7. 高级类型',
        path: '/7-advanced-types/1-intersection-types',
        children: [
          '/7-advanced-types/1-intersection-types',
          '/7-advanced-types/2-type-guards',
          '/7-advanced-types/3-casting',
          '/7-advanced-types/4-assertions',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 8. 泛型',
        path: '/8-generics/1-generics',
        children: [
          '/8-generics/1-generics',
          '/8-generics/2-generic-constraints',
          '/8-generics/3-generic-classes',
          '/8-generics/4-generic-interfaces',
        ],
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 9. 模块',
        path: '/9-modules/1-modules',
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Section 10. Node.js',
        path: '/10-typescript-in-node.js/1-nodejs-typescript',
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: '附录',
        path: '/addon/progress',
        children: ['/addon/progress'],
        collapsable: false,
        sidebarDepth: 0,
      },
    ],
    nav: [
      { text: '教程', link: '/0-guide/' },
      { text: 'TS Playground', link: 'https://www.typescriptlang.org/play' },
      { text: '英文原版', link: 'https://www.typescripttutorial.net/' },
    ],
  },
};
