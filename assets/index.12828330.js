import{z as a,bk as e,r as s,A as t,B as o,Z as i,D as n,F as l,w as r,ah as d,G as c,H as p,K as u,a9 as v}from"./vendor.816c78c5.js";import{P as S}from"./index.e6650eff.js";import{a6 as m,a7 as f,a8 as T,a9 as b,aa as x,ab as R,ac as X,ad as j,ae as Y,af as h,ag as w,ah as F,ai as _}from"./index.fec87d2a.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.3c82604a.js";import"./useWindowSizeFn.b43d7152.js";import"./useContentViewHeight.5682504b.js";const g=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((a=>({label:a,value:a,key:a})));var k=a({components:{Select:e,PageWrapper:S,FadeTransition:m,ScaleTransition:f,SlideYTransition:T,ScrollYTransition:b,SlideYReverseTransition:x,ScrollYReverseTransition:R,SlideXTransition:X,ScrollXTransition:j,SlideXReverseTransition:Y,ScrollXReverseTransition:h,ScaleRotateTransition:w,ExpandXTransition:F,ExpandTransition:_},setup(){const a=s("Fade"),e=s(!0);return{options:g,value:a,start:function(){e.value=!1,setTimeout((()=>{e.value=!0}),300)},show:e}}});const y=u();t("data-v-8aaf1bc4");const E={class:"flex"},C=v(" start "),P={class:"box"};o();const W=y(((a,e,s,t,o,u)=>{const v=i("Select"),S=i("a-button"),m=i("PageWrapper");return n(),l(m,{title:"动画组件示例"},{default:y((()=>[r("div",E,[r(v,{options:a.options,value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),r(S,{type:"primary",class:"ml-4",onClick:a.start},{default:y((()=>[C])),_:1},8,["onClick"])]),(n(),l(d(`${a.value}Transition`),null,{default:y((()=>[c(r("div",P,null,512),[[p,a.show]])])),_:1}))])),_:1})}));k.render=W,k.__scopeId="data-v-8aaf1bc4";export{k as default};
