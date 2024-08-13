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

<!-- 常用的工具 -->
<NavigationItem v-bind="toolList" />

<!-- 其他的上网 -->
<NavigationItem v-bind="otherList" />

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
import mybatisIcon from '/navigationImages/mybatis.svg'
import mybatisplusIcon from '/navigationImages/mybatisplus.svg'
import tomcatIcon from '/navigationImages/tomcat.svg'
import redisIcon from '/navigationImages/redis.svg'
import nginxIcon from '/navigationImages/nginx.svg'
import mvnrepositoryIcon from '/navigationImages/mvnrepository.svg'
import mvnrepositoryaliIcon from '/navigationImages/mvnrepositoryaliIcon.svg'
import gitIcon from '/navigationImages/git.svg'
import githubIcon from '/navigationImages/github.svg'
import giteeIcon from '/navigationImages/gitee.svg'
import tidbIcon from '/navigationImages/tidb.svg'

// 导入图片 - 前端
import qianduanIcon from '/navigationImages/qianduan.svg'
import vueIcon from '/navigationImages/vue.svg'
import vuepiniaIcon from '/navigationImages/vuepinia.svg'
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
import animategaspIcon from '/navigationImages/animategasp.svg'
import iconarchiveIcon from '/navigationImages/iconarchive.svg'
import electronIcon from '/navigationImages/electron.svg'

// 导入图片 - 工具网站
import utoolsIcon from '/navigationImages/UTools.svg'

import tongyiqianwenIcon from '/navigationImages/tongyiqianwen.svg'
import wenxinyiyanIcon from '/navigationImages/wenxinyiyan.svg'
import fanyiIcon from '/navigationImages/fanyi.svg'
import jsonIcon from '/navigationImages/json.svg'
import timestampIcon from '/navigationImages/timestamp.svg'
import stringhexIcon from '/navigationImages/stringhex.svg'
import asciiIcon from '/navigationImages/ascii.svg'
import base64Icon from '/navigationImages/base64.svg'
import cronIcon from '/navigationImages/cron.svg'

// 导入图片 - 其他网站
import otherIcon from '/navigationImages/other.svg'
import baiduIcon from '/navigationImages/baidu.svg'
import csdnIcon from '/navigationImages/csdn.svg'
import bilibiliIcon from '/navigationImages/bilibili.svg'


// Java开发的网站导航
const JavaList:NavigationItemObject = reactive({
    title:'Java开发',
    desc:'直接点进去看看是怎么个事儿',
    iconUrl:guanwangIcon,
    itemList:[
        {nameStr:'Java 官网',iconUrl:javaIcon,linkUrl:'https://www.oracle.com/cn/java/'},
        {nameStr:'Maven 官网',iconUrl:mavenIcon,linkUrl:'https://maven.apache.org/'},
        {nameStr:'Spring 官网',iconUrl:springIcon,linkUrl:'https://spring.io/'},
        {nameStr:'MyBatis 官网',iconUrl:mybatisIcon,linkUrl:'https://mybatis.org/mybatis-3/zh_CN/index.html'},
        {nameStr:'MyBatis Plus',iconUrl:mybatisplusIcon,linkUrl:'https://baomidou.com/'},
        {nameStr:'Tomcat 官网',iconUrl:tomcatIcon,linkUrl:'https://tomcat.apache.org/'},
        {nameStr:'Redis 官网',iconUrl:redisIcon,linkUrl:'https://redis.io/'},
        {nameStr:'Nginx 官网',iconUrl:nginxIcon,linkUrl:'https://nginx.org/'},
        {nameStr:'Maven 官方仓库',iconUrl:mvnrepositoryIcon,linkUrl:'https://mvnrepository.com/'},
        {nameStr:'Maven 阿里仓库',iconUrl:mvnrepositoryaliIcon,linkUrl:'https://developer.aliyun.com/mvn/guide'},
        {nameStr:'Git 官网',iconUrl:gitIcon,linkUrl:'https://git-scm.com/'},
        // {nameStr:'GitHub',iconUrl:githubIcon,linkUrl:'https://github.com/'},
        {nameStr:'Gitee 官网',iconUrl:giteeIcon,linkUrl:'https://gitee.com/'},
        {nameStr:'TiDB 官网',iconUrl:tidbIcon,linkUrl:'https://cn.pingcap.com/'},
    ] 
})

// 前端开发的网站导航
const h5List:NavigationItemObject = reactive({
    title:'前端开发',
    desc:'不要慌，有问题就去官方文档上扒拉扒拉',
    iconUrl:qianduanIcon,
    itemList:[
        {nameStr:'VueJS 官网',iconUrl:vueIcon,linkUrl:'https://vuejs.org/'},
        {nameStr:'Vue Router',iconUrl:vueIcon,linkUrl:'https://router.vuejs.org/'},
        {nameStr:'Pinia',iconUrl:vuepiniaIcon,linkUrl:'https://pinia.vuejs.org/'},
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
        {nameStr:'Animate GSAP',iconUrl:animategaspIcon,linkUrl:'https://gsap.com/'},
        {nameStr:'Icon Archive',iconUrl:iconarchiveIcon,linkUrl:'https://www.iconarchive.com/'},
        {nameStr:'Electron',iconUrl:electronIcon,linkUrl:'https://www.electronjs.org/'},
    
    ]
})

// 常用工具的网站导航
const toolList:NavigationItemObject = reactive({
    title:'Tools',
    desc:'这些工具网站就别犹豫了，直接点进去',
    iconUrl:utoolsIcon,
    itemList:[
        {nameStr:'通义千问',iconUrl:tongyiqianwenIcon,linkUrl:'https://tongyi.aliyun.com/qianwen'},
        {nameStr:'文心一言',iconUrl:wenxinyiyanIcon,linkUrl:'https://yiyan.baidu.com/'},
        {nameStr:'百度翻译',iconUrl:fanyiIcon,linkUrl:'https://fanyi.baidu.com/'},
        {nameStr:'Json格式转换',iconUrl:jsonIcon,linkUrl:'https://www.json.cn/'},
        {nameStr:'在线时间戳',iconUrl:timestampIcon,linkUrl:'https://tool.lu/timestamp/'},
        {nameStr:'十六进制转字符串',iconUrl:stringhexIcon,linkUrl:'https://tool.hiofd.com/hex-convert-string-online/'},
        {nameStr:'中文转Unicode',iconUrl:asciiIcon,linkUrl:'https://tool.ip138.com/ascii/'},
        {nameStr:'Base64 在线编码',iconUrl:base64Icon,linkUrl:'https://www.chahuo.com/base64-converter.html'},
        {nameStr:'Cron表达式在线',iconUrl:cronIcon,linkUrl:'https://cron.ciding.cc/'},
    
    ]
})

const otherList:NavigationItemObject = reactive({
    title:'其他',
    desc:'什么，上面的网站还不够看的？',
    iconUrl:otherIcon,
    itemList:[
        {nameStr:'百度一下',iconUrl:baiduIcon,linkUrl:'https://www.baidu.com/'},
        {nameStr:'CSDN',iconUrl:csdnIcon,linkUrl:'https://www.csdn.net/'},
        {nameStr:'Bilibili ~(￣▽￣)~*',iconUrl:bilibiliIcon,linkUrl:'https://www.bilibili.com/'},
    ]
})

</script>

<style module>

.navigation-header{
    border:1px solid red;
}


</style>



