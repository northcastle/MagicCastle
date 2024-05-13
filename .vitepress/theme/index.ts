/**
 * 扩展默认主题
 */

// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// 导入 icon 的组件包
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
   // app.component('MyGlobalComponent' /* ... */)
   // 全局注册以下 所有的图标
   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
   
  }
} satisfies Theme