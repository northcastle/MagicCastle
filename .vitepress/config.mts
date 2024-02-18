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

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 导航条上面的站点标题+logo图片
    siteTitle:'Magic Castle',
    logo:'/castle.png',

    // 导航条的链接条目
    nav: [
      // { text: 'Home', link: '/' },
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
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

   
    // 页脚的提示信息 ： 只有侧边栏不存在的时候才会展示，vitepress 就是这么设计的
    footer:{
      message:'',
      copyright:'版权所有 ©2024 northcastle'
    }
  }
})
