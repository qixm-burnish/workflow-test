import{w as e}from"./index.fec87d2a.js";import{z as t,r as i,c6 as n,X as s,D as r,F as a,a4 as c,Z as d,w as o,J as u,K as l}from"./vendor.816c78c5.js";import{P as p}from"./index.e6650eff.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.3c82604a.js";import"./useWindowSizeFn.b43d7152.js";import"./useContentViewHeight.5682504b.js";var m=t({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const r=i(null);return n(r,(()=>{t("clickOutside")})),s((()=>{t("mounted")})),{wrap:r}}});const f={ref:"wrap"};m.render=function(e,t,i,n,s,d){return r(),a("div",f,[c(e.$slots,"default")],512)};var k=t({components:{ClickOutSide:e(m),PageWrapper:p},setup(){const e=i("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const C=l(),O=C(((e,t,i,n,s,c)=>{const l=d("ClickOutSide"),p=d("PageWrapper");return r(),a(p,{title:"点内外部触发事件"},{default:C((()=>[o(l,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:C((()=>[o("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},u(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));k.render=O,k.__scopeId="data-v-4b8dd7fd";export{k as default};
