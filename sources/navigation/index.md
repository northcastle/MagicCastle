---
title: 网站导航的页面
lastUpdated: false
editLink: false
sidebar: false
aside: false
---


<!-- 引入组件，进行渲染数据 -->
<NavigationItem v-bind="GuanWangList" />


<script lang="ts" setup>

import {reactive} from 'vue'

import NavigationItem from './NavigationItem.vue'

// 导入类型
import type {NavigationItemObject} from './NavigationType'

// 官网的数据
const GuanWangList:NavigationItemObject = reactive({
    title:'官网',
    desc:'直接去官网看看是怎么个事儿',
    iconUrl:'../../navigationImages/guanwang.svg',
    itemList:[
        {nameStr:'SpringBoot 官网',iconUrl:'/navigationImages/spring.svg',linkUrl:'https://spring.io/'},
        {nameStr:'SpringBoot 官网2',iconUrl:'/navigationImages/spring.svg',linkUrl:'https://spring.io/'},
        {nameStr:'SpringBoot 官网3',iconUrl:'/navigationImages/spring.svg',linkUrl:'https://spring.io/'},
        {nameStr:'SpringBoot 官网4',iconUrl:'/navigationImages/spring.svg',linkUrl:'https://spring.io/'},
        {nameStr:'SpringBoot 官网5',iconUrl:'/navigationImages/spring.svg',linkUrl:'https://spring.io/'}
    ]
})

</script>

<style module>



</style>



