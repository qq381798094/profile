import{d as _,l as I,f as v,o as l,c,a as e,t as r,m as d,g as i,w as m,u as f,q as L,_ as u,r as k,F as h,k as S,h as x,p as y,b as N}from"./index-1d840be2.js";const V={class:"skill-card-component-container"},O={class:"list-box transition-color"},C={class:"title-and-subtle"},g={class:"skill-intro"},b={class:"other"},U=_({__name:"skillCard",props:{skillInfo:{}},setup(s){const t=s,n=I(()=>t.skillInfo.sLevelOrder==1?"#67c23a":t.skillInfo.sLevelOrder==2?"#409eff":"#e6a23c");return(o,a)=>{const p=v("el-icon");return l(),c("div",V,[e("div",O,[e("div",C,[e("span",null,r(o.skillInfo.sName),1),e("span",g,r(o.skillInfo.sIntroduce),1)]),e("div",b,[e("span",{style:d({color:n.value})},r(o.skillInfo.sLevel),5),i(p,{size:20},{default:m(()=>[i(f(L),{style:d({color:n.value})},null,8,["style"])]),_:1})])])])}}});const P=u(U,[["__scopeId","data-v-5a366322"]]),$=s=>(y("data-v-4ab8f096"),s=s(),N(),s),w={class:"posts-page-container"},A={class:"content-box"},B=$(()=>e("h1",null,"Skill",-1)),E={class:"list-container"},T=_({__name:"index",setup(s){const t=k([{sId:1,sName:"HTML + CSS + JavaScript",sLevel:"熟练",sLevelOrder:1,sIntroduce:"熟络搭起静态网页框架，进行快速的静态网页开发以及部分交互功能。"},{sId:2,sName:"Vue + Vue-Router + Vuex",sLevel:"熟练",sLevelOrder:1,sIntroduce:"熟络使用Vue-CLI脚手架搭建，使用Router构建路由结构，Vuex仓库存储数据、对外暴露操作仓库数据方法等。"},{sId:3,sName:"Vue3 + TypeScript + Pinia",sLevel:"熟悉",sLevelOrder:2,sIntroduce:"熟络使用Vue3组合式API编码风格进行项目开发，使用TypeScript对数据、变量进行类型约束，Pinia用于部分数据存储以及向外暴露部分方法。"},{sId:4,sName:"移动端开发",sLevel:"熟悉",sLevelOrder:2,sIntroduce:"移动端开发主要涉及技术栈为微信小程序、uniapp；微信小程序为微信开发者工具原生开发、uniapp为以Vue.js框架为基底的项目开发。"},{sId:5,sName:"异步通信",sLevel:"熟悉",sLevelOrder:2,sIntroduce:"熟悉对Ajax以及Axios的使用，实现前后端分离式数据交互。"},{sId:6,sName:"CSS扩展语言",sLevel:"熟练",sLevelOrder:1,sIntroduce:"对Css的扩展语言Less以及Sass能够熟练使用，实现快速的样式搭建。"},{sId:7,sName:"UI库",sLevel:"熟练",sLevelOrder:1,sIntroduce:"能妥善使用Element UI、Vant UI、Element-Plus UI、We UI等UI库，实现静态页面的快速开发。"},{sId:8,sName:"切图工具",sLevel:"了解",sLevelOrder:3,sIntroduce:"能使用PhotoShop、pxcook等相关软件完成设计图切图工作。"},{sId:9,sName:"命令工具",sLevel:"了解",sLevelOrder:3,sIntroduce:"对npm、pnpm有一定了解、使用git命令完成对项目的上传、更新等操作。"}]);return(n,o)=>(l(),c("div",w,[e("div",A,[B,e("div",E,[(l(!0),c(h,null,S(t.value,a=>(l(),x(P,{key:a.sId,skillInfo:a},null,8,["skillInfo"]))),128))])])]))}});const z=u(T,[["__scopeId","data-v-4ab8f096"]]);export{z as default};
