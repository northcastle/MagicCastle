---
title: 题淮南寺
---

# 原文


<div :class="isDark ?  $style.peotrycontenddivblack : $style.peotrycontentdiv">
    <div :class="$style.biaoti">题淮南寺</div>
    <div :class="$style.zuozhe">宋·程颢</div>
    <div :class="$style.content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        南去北来休便休，白蘋吹尽楚江秋。
    </div>
    <div :class="$style.content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        道人不是悲秋客，一任晚山相对愁。
    </div>


</div>

# 注释
:::info ①淮南寺：
 寺名，在今江苏扬州。
:::

:::tip ②白蘋：
 江上的一种草，在初秋时节开白色的花。
:::

:::info ③楚江:
 长江中下游的别称。
:::

:::tip ④道人：
 修道的人，此处指做着自己，自称。
:::

:::info ⑤悲秋客：
 为秋天感到悲伤的人。
:::

:::tip ⑥一任：
 听凭。
:::

:::info ⑦晚山：
 即秋天黄昏时的山。
:::

# 作者简介
::: warning 程颢
北宋哲学家、教育家、北宋理学的奠基者。字伯淳，学者称明道先生。<br >
洛阳（今属河南）人。神宗朝任太子中允监察御史里行。反对王安石新政。提出“天者理也”和“只心便是天，尽之便知性”的命题，认为“仁者浑然与物同体，义礼知信皆仁也”，识得此理，便须“以诚敬存之”（同上）。倡导“传心”说。承认“天地万物之理，无独必有对”。程颢和弟弟程颐，世称“二程”，同为北宋理学的奠基者，其学说在理学发展史上占有重要地位，后来为朱熹所继承和发展，世称“程朱学派”。其所亲撰有《定性书》《识仁篇》等，后人集其言论所编的著述书籍《遗书》《文集》等，皆收入《二程全书》。[百科详情](https://baike.baidu.com/item/%E7%A8%8B%E9%A2%A2/1453707?fr=kg_hanyu)
:::



<script setup>

    import { useData } from 'vitepress'

    const { isDark  } = useData();
    
</script>


<style module>
    .peotrycontentdiv{
        border:0px solid red;
        border-radius:10px;
        padding-top:5px;
        padding-right:30px;
        padding-left:30px;
        padding-bottom:30px;
        margin-top:20px;
        margin-bottom:30px;
        background:linear-gradient(10deg, #aeffe9, #b1e1ef, #baeaea, #e2fff5, #ededed);
        color:black; 
    }

    .peotrycontenddivblack{
        border:0px solid red;
        border-radius:10px;
        padding-top:5px;
        padding-right:30px;
        padding-left:30px;
        padding-bottom:30px;
        margin-top:20px;
        margin-bottom:30px;
        background:linear-gradient(10deg, #aeffe9, #b1e1ef, #baeaea, #e2fff5, #ededed);
        color:black;
    }

    .biaoti{
        text-align:center;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
    }

    .zuozhe{
        text-align:center;
        font-weight: bold;
        font-size: 16px;
        padding: 6px;
    }
   .qianyan{
    padding-bottom:10px;
   }

   .content{
    font-weight:600;
    font-size: 17px;
    text-align: center;
   }

</style>


