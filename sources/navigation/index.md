---
title: 网站导航的页面
lastUpdated: false
editLink: false
sidebar: false
aside: false
---


<!-- 引入组件，进行渲染数据 -->
<NavigationItem v-bind="JavaList" />


<script lang="ts" setup>

import {reactive} from 'vue'

import NavigationItem from './NavigationItem.vue'

// 导入类型
import type {NavigationItemObject} from './NavigationType'

// 导入图片
import guanwangIcon from '/navigationImages/guanwang.svg'
import springIcon from '/navigationImages/spring.svg'

// Java开发的网站导航
const JavaList:NavigationItemObject = reactive({
    title:'Java开发',
    desc:'直接点进去看看是怎么个事儿',
    iconUrl:guanwangIcon,
    itemList:[
        {nameStr:'Java 官网',iconUrl:springIcon,linkUrl:'https://www.oracle.com/cn/java/'},
        {nameStr:'Maven 官网',iconUrl:springIcon,linkUrl:'https://maven.apache.org/'},
        {nameStr:'Spring 官网',iconUrl:springIcon,linkUrl:'https://spring.io/'},
        {nameStr:'Tomcat 官网',iconUrl:springIcon,linkUrl:'https://tomcat.apache.org/'},
        {nameStr:'Redis 官网',iconUrl:springIcon,linkUrl:'https://redis.io/'},
        {nameStr:'Nginx 官网',iconUrl:springIcon,linkUrl:'https://nginx.org/'},
        {nameStr:'Maven 官方仓库',iconUrl:springIcon,linkUrl:'https://spring.io/'},
        {nameStr:'Maven 阿里仓库',iconUrl:springIcon,linkUrl:'https://spring.io/'},
       
    ] 
})

</script>

<style module>



</style>



