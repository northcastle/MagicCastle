---
title: 网站导航的页面
layout: home
lastUpdated: false
editLink: false
sidebar: false
aside: false
---


<!-- Java 开发，进行渲染数据 -->
<NavigationItem v-bind="JavaList" />

<!-- 前端页面开发 -->
<NavigationItem v-bind="h5List" />

<script lang="ts" setup>

import {reactive} from 'vue'

import NavigationItem from './NavigationItem.vue'

// 导入类型
import type {NavigationItemObject} from './NavigationType'


/**** tip : 图标使用 iconfont 的 28 尺寸的 ******/

// 导入图片 - java
import guanwangIcon from '/navigationImages/guanwang.svg'
import javaIcon from '/navigationImages/java.svg'
import mavenIcon from '/navigationImages/maven.svg'
import springIcon from '/navigationImages/spring.svg'
import tomcatIcon from '/navigationImages/tomcat.svg'
import redisIcon from '/navigationImages/redis.svg'
import nginxIcon from '/navigationImages/nginx.svg'
import mvnrepositoryIcon from '/navigationImages/mvnrepository.svg'
import mvnrepositoryaliIcon from '/navigationImages/mvnrepositoryaliIcon.svg'

// 导入图片 - 前端
import qianduanIcon from '/navigationImages/qianduan.svg'
import vueIcon from '/navigationImages/vue.svg'
import elementuiIcon from '/navigationImages/elementui.svg'
import elementuiplusIcon from '/navigationImages/elementuiplus.svg'
import vantIcon from '/navigationImages/vant.svg'
import npmjsIcon from '/navigationImages/npmjs.svg'
import viteIcon from '/navigationImages/vitelogo.svg'
import markdownIcon from '/navigationImages/markdown.svg'
import iconfontIcon from '/navigationImages/iconfont.svg'
import vueuseIcon from '/navigationImages/vueuse.svg'
import colorspaceIcon from '/navigationImages/colorspace.svg'
import animateIcon from '/navigationImages/animate.svg'
import iconarchiveIcon from '/navigationImages/iconarchive.svg'
import electronIcon from '/navigationImages/electron.svg'

// Java开发的网站导航
const JavaList:NavigationItemObject = reactive({
    title:'Java开发',
    desc:'直接点进去看看是怎么个事儿',
    iconUrl:guanwangIcon,
    itemList:[
        {nameStr:'Java 官网',iconUrl:javaIcon,linkUrl:'https://www.oracle.com/cn/java/'},
        {nameStr:'Maven 官网',iconUrl:mavenIcon,linkUrl:'https://maven.apache.org/'},
        {nameStr:'Spring 官网',iconUrl:springIcon,linkUrl:'https://spring.io/'},
        {nameStr:'Tomcat 官网',iconUrl:tomcatIcon,linkUrl:'https://tomcat.apache.org/'},
        {nameStr:'Redis 官网',iconUrl:redisIcon,linkUrl:'https://redis.io/'},
        {nameStr:'Nginx 官网',iconUrl:nginxIcon,linkUrl:'https://nginx.org/'},
        {nameStr:'Maven 官方仓库',iconUrl:mvnrepositoryIcon,linkUrl:'https://mvnrepository.com/'},
        {nameStr:'Maven 阿里仓库',iconUrl:mvnrepositoryaliIcon,linkUrl:'https://developer.aliyun.com/mvn/guide'},
    ] 
})

// 前端开发的网站导航
const h5List:NavigationItemObject = reactive({
    title:'前端开发',
    desc:'不要慌，有问题就去官方文档上扒拉扒拉',
    iconUrl:qianduanIcon,
    itemList:[
        {nameStr:'VueJS 官网',iconUrl:vueIcon,linkUrl:'https://cn.vuejs.org/'},
        {nameStr:'Element UI',iconUrl:elementuiIcon,linkUrl:'https://element.eleme.cn/#/zh-CN'},
        {nameStr:'Element UI Plus',iconUrl:elementuiplusIcon,linkUrl:'https://element-plus.org/zh-CN/'},
        {nameStr:'Vant 官网',iconUrl:vantIcon,linkUrl:'https://vant-ui.github.io/vant/#/zh-CN/home'},
        {nameStr:'NpmJS 网站',iconUrl:npmjsIcon,linkUrl:'https://www.npmjs.com/'},
        {nameStr:'Vite 官网',iconUrl:viteIcon,linkUrl:'https://www.vitejs.net/'},
        {nameStr:'VitePress 官网',iconUrl:markdownIcon,linkUrl:'https://vitepress.dev/'},
        {nameStr:'IconFont 图标',iconUrl:iconfontIcon,linkUrl:'https://www.iconfont.cn/'},
        {nameStr:'VueUse',iconUrl:vueuseIcon,linkUrl:'https://vueuse.org/'},
        {nameStr:'Color Space',iconUrl:colorspaceIcon,linkUrl:'https://mycolor.space/'},
        {nameStr:'Animate Css',iconUrl:animateIcon,linkUrl:'https://animate.style/'},
        {nameStr:'Icon Archive',iconUrl:iconarchiveIcon,linkUrl:'https://www.iconarchive.com/'},
        {nameStr:'Electron',iconUrl:electronIcon,linkUrl:'https://www.electronjs.org/'},
    
    ]
})
</script>

<style module>




</style>



