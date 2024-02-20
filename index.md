---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Magic Castle

hero:
  name: "Magic Castle"
  text: "The Site For Technology & Life"
  tagline: My great project For Docs
  image:
    src: /homeimage02.png
    alt: 一张图片

  actions:
    - theme: brand
      text: 扬帆⚡️起航
      link: /
    - theme: alt
      text: 乘风🌊破浪
      link: /

features:
  - title: Java
    details: Java常用的工具类&工具方法
    icon:
      src: /java.svg
    link: /sources/java/
    linkText: java技术支持
  - title: JavaScript
    details: JavaScript 相关的语法&常用的工具方法
    icon:
      src: /javascript.svg
    link: /
    linkText: JavaScript技术支持
  - title: Vue
    details: Vue相关的技术积累
    icon:
      src: /Vue.svg
    link: https://vuejs.org
    linkText: Vue官方文档
  - title: 古诗词
    details: 唐诗、宋词、古文
    icon:
      src: /gushici.svg
    link: /
    linkText: 阅读一下

---

<br/>




<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/MagicCastle/docs/nailiangluwan.jpg',
    name: 'NorthCastle',
    title: 'Creator',

    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    // ]
  },
  {
    avatar: '/MagicCastle/docs/nailiangluwan.jpg',
    name: 'NorthCastle',
    title: 'Developer',
  }
]
</script>

# My Team

Say hello to my awesome team.

<VPTeamMembers size="small" :members="members" />



<style module>

  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

    --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
    --vp-home-hero-image-filter: blur(54px);
    
  }
</style>

