import{d as u,c as l,I as n,w as t,D as o,o as r,l as a,a as m,t as d,F as h,E as U,_ as x,ap as k,az as S,aA as I}from"./chunks/framework.CQOt4JPb.js";const b={class:"navigation-box"},w=["src"],B={class:"navigation-title"},L={style:{"font-size":"14px"}},N=["onClick"],C=["src"],y=u({__name:"NavigationItem",props:{title:{},desc:{},iconUrl:{},itemList:{}},setup(_){const e=_,p=s=>{s.linkUrl&&window.open(s.linkUrl,"_blank")};return(s,D)=>{const i=o("el-col"),g=o("el-row"),v=o("el-scrollbar"),f=o("el-card");return r(),l("div",b,[n(f,{class:"navigation-item"},{header:t(()=>[a("div",null,[n(g,null,{default:t(()=>[n(i,{span:1},{default:t(()=>[a("img",{src:e.iconUrl},null,8,w)]),_:1}),n(i,{span:12},{default:t(()=>[a("div",B,[m(d(e.title)+" ",1),a("span",L," - "+d(e.desc),1)])]),_:1})]),_:1})])]),default:t(()=>[n(v,{"max-height":"200px"},{default:t(()=>[(r(!0),l(h,null,U(e.itemList,c=>(r(),l("div",{class:"item-box",onClick:T=>p(c)},[n(g,null,{default:t(()=>[n(i,{span:4,style:{"box-shadow":"0 0 0 0 red"}},{default:t(()=>[a("img",{src:c.iconUrl},null,8,C)]),_:2},1024),n(i,{span:19,offset:1,style:{"box-shadow":"0 0 0 0 red"}},{default:t(()=>[m(d(c.nameStr),1)]),_:2},1024)]),_:2},1024)],8,N))),256))]),_:1})]),_:1})])}}}),P=x(y,[["__scopeId","data-v-32bc5ae4"]]),E=JSON.parse('{"title":"网站导航的页面","description":"","frontmatter":{"title":"网站导航的页面","lastUpdated":false,"editLink":false,"sidebar":false,"aside":false},"headers":[],"relativePath":"sources/navigation/index.md","filePath":"sources/navigation/index.md","lastUpdated":1715590049000}'),z={name:"sources/navigation/index.md"},F=u({...z,setup(_){const e=k({title:"官网",desc:"直接去官网看看是怎么个事儿",iconUrl:"/navigationImages/guanwang.svg",itemList:[{nameStr:"SpringBoot 官网",iconUrl:"/navigationImages/spring.svg",linkUrl:"https://spring.io/"},{nameStr:"SpringBoot 官网2",iconUrl:"/navigationImages/spring.svg",linkUrl:"https://spring.io/"},{nameStr:"SpringBoot 官网3",iconUrl:"/navigationImages/spring.svg",linkUrl:"https://spring.io/"},{nameStr:"SpringBoot 官网4",iconUrl:"/navigationImages/spring.svg",linkUrl:"https://spring.io/"},{nameStr:"SpringBoot 官网5",iconUrl:"/navigationImages/spring.svg",linkUrl:"https://spring.io/"}]});return(p,s)=>(r(),l("div",null,[n(P,S(I(e)),null,16)]))}});export{E as __pageData,F as default};
