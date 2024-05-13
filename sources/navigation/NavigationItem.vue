<template>
    <div class="navigation-box">
        <el-card class="navigation-item">
            <template #header>
                <div>
                    <el-row>
                        <el-col :span="1"> <img :src="navigationItem.iconUrl"  /></el-col>
                        <el-col :span="12"> 
                            <div class="navigation-title">
                                {{ navigationItem.title }} 
                                <span style="font-size: 14px;" > -  {{ navigationItem.desc }}</span>
                            </div>
                        </el-col>
                    </el-row>
                   
                   

                </div>
            </template>
           
            <el-scrollbar max-height="200px">
                <div class="item-box" v-for="item in navigationItem.itemList" @click="jumpToTargetWebsite(item)">
                    <el-row>
                        <el-col :span="4" style="box-shadow: 0 0 0 0 red;"><img :src="item.iconUrl" /></el-col>
                        <el-col :span="19" :offset="1" style="box-shadow: 0 0 0 0 red;"> {{ item.nameStr }} </el-col>
                        
                    </el-row>
                    
                </div>
               
            </el-scrollbar>
        
        </el-card>
    </div>
</template>

<script lang="ts" setup>

// 导入类型
import type {NavigationItemObject,ItemA} from './NavigationType'

// 定义接收的子属性
const navigationItem = defineProps<NavigationItemObject>()

    // 跳转打开新的网页
    const jumpToTargetWebsite = (item:ItemA)=>{
        if(item.linkUrl){
            window.open(item.linkUrl,"_blank");
        }
         
    }

</script>

<style scoped>

.navigation-box{
    border: 0px solid blue;
    padding: 10px;
}

.navigation-box :deep(.el-card__header){
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.navigation-box :deep(.el-card__body){
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 20px;
}


.navigation-title{
    
    font-weight: bold;
    padding-left: 10px;
    border: 0px solid red;

     /* 创建一个水平方向的颜色渐变 */
    background: linear-gradient(120deg, #bd34fe 30%,#5c34fe, #41d1ff);
    /* 将文本透明度设置为0，以便背景渐变可见 */
    color: transparent;
    /* 使用背景渐变来填充文本背景 */
    -webkit-background-clip: text;
    background-clip: text;
}

.item-box{
    display: inline-block;
    border: 1px solid rgb(211, 211, 211);
    width: 200px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: 10px;
}

.item-box :hover{
    cursor: pointer;
    color: #13bef7;
    box-shadow:0 0 10px 0 #13bef7;
}


</style>