import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magic Castle",
  description: "The Site For Technology & Life",

  outDir:'./docs',
  base:'/MagicCastle/docs/',

  head: [
    ['link', { rel: 'icon', href: '/MagicCastle/docs/castle.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config


    siteTitle:'Magic Castle',
    logo:'/castle.png',

    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    lightModeSwitchTitle:'切换到明亮模式',
    darkModeSwitchTitle:'切换到护眼模式',

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
