import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magic Castle",
  description: "The Site For Technology & Life",

  outDir:'./docs',
  base:'/MagicCastle/docs/',

  // 添加一个页面的小图标
  head: [
    ['link', { rel: 'icon', href: '/MagicCastle/docs/castle.png' }]
  ],

  // 关闭主题切换，只使用亮色主题
  appearance:true,

  // 启用最后更新的时间戳
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 导航条上面的站点标题+logo图片
    siteTitle:'Magic Castle',
    logo:'/castle.png',

    // 导航条中的搜索框
    search: {
      provider: 'local'
    },

    // 导航条的链接条目
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    
    // 切换黑白主题的tip文案
    lightModeSwitchTitle:'切换到明亮模式',
    darkModeSwitchTitle:'切换到护眼模式',

     // 导航条的 社交链接
     socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 侧边栏
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // 多侧边栏的配置
    sidebar:{
      '/sources/java/':[
        {
          text:'Java',
         
          items:[
            {text:'概述',link:'/sources/java/'},
            {
              text:'常用工具方法',
              // collapsed: false, // 是否默认折叠 ： true or false
              items:[
                {text:'字符串&十六进制互转',link:'/sources/java/tools/stringhex'},
                {text:'AES 加密',link:'/sources/java/tools/aes'},
                {text:'RSA 加密',link:'/sources/java/tools/rsa'},
                {text:'HttpClient 网络请求',link:'/sources/java/tools/httpclient'},
              ]
            },
            {
              text:'SpringBoot',
              items:[
                {text:'banner启动图标',link:'/sources/java/springboot/banner'}
              ]
            },
           
          ]
        }
      ],
    '/sources/poetry/':[
      {
        text:'古诗文',
        items:[
          {text:'序言',link:'/sources/poetry/'},
          {text:'芦叶满汀州',link:'/sources/poetry/luyemantingzhou'},
        ]
      }
    ],
    },

    // 右侧的文档大纲的层级
    outline:{
      level:[1,6],
      label:'页面导航'
    },
   
    // 页脚的提示信息 ： 只有侧边栏不存在的时候才会展示，vitepress 就是这么设计的
    footer:{
      message:'',
      copyright:'版权所有 ©2024 northcastle'
    },
   
   

    // 当链接是外部链接的时候，展示一个小箭头
    externalLinkIcon:true,

    // 显示上次更新的时间文案
    lastUpdated: {
      text: '🏠 最后更新于 ',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 编辑链接-暂不开放，只是添加上这个元素
    editLink: {
      pattern: '',
      text: '暂未开放编辑'
    },

    // 上下篇的文案
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },

  // markdown 的配置
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
})
