import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.2be72343.js";import{t}from"./data.5e96733f.js";import{P as a}from"./index.e6650eff.js";import{z as r,af as i,bU as n,bV as s,Z as o,D as c,F as l,a2 as d,w as p}from"./vendor.816c78c5.js";import"./index.fec87d2a.js";import"./useContextMenu.1ab1cb14.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.3c82604a.js";import"./useWindowSizeFn.b43d7152.js";import"./useContentViewHeight.5682504b.js";var u=r({components:{BasicTree:e,PageWrapper:a},setup:()=>({treeData:t,actionList:[{render:e=>i(n,{class:"ml-2",onClick:()=>{}})},{render:()=>i(s)}],getRightMenuList:function(e){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]},createIcon:function({level:e}){return 1===e?"ion:git-compare-outline":2===e?"ion:home":3===e?"ion:airplane":void 0}})});const b={class:"flex"};u.render=function(e,t,a,r,i,n){const s=o("BasicTree"),u=o("PageWrapper");return c(),l(u,{title:"Tree函数操作示例"},{default:d((()=>[p("div",b,[p(s,{class:"w-1/3",title:"右侧操作按钮/自定义图标",helpMessage:"帮助信息",treeData:e.treeData,actionList:e.actionList,renderIcon:e.createIcon},null,8,["treeData","actionList","renderIcon"]),p(s,{class:"w-1/3 mx-4",title:"右键菜单",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"]),p(s,{class:"w-1/3",title:"工具栏使用",toolbar:"",checkable:"",search:"",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])])),_:1})};export{u as default};
