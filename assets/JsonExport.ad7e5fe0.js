import{_ as e}from"./TableImg.7236490e.js";import"./BasicForm.1ee9860e.js";import"./index.135d6425.js";import{c as i,d as a,j as t}from"./data.abf146b4.js";import{P as o}from"./index.e6650eff.js";import{z as s,Z as d,D as r,F as n,a2 as m,w as p,a9 as c}from"./vendor.816c78c5.js";/* empty css              *//* empty css              */import"./useForm.83c1a438.js";import"./index.fec87d2a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.b43d7152.js";import"./index.da9badfc.js";import"./onMountedOrActivated.3c82604a.js";/* empty css              */import"./useSortable.2b19f3f1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.bb9ea502.js";/* empty css              *//* empty css              *//* empty css              */import"./download.673915b1.js";import"./base64Conver.bb012c73.js";import"./index.7f9dc345.js";/* empty css              *//* empty css              */import"./useContentViewHeight.5682504b.js";var j=s({components:{BasicTable:e,PageWrapper:o},setup:()=>({defaultHeader:function(){t({data:a,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){t({data:a,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:a})});const f=c(" 导出：默认头部 "),b=c(" 导出：自定义头部 ");j.render=function(e,i,a,t,o,s){const c=d("a-button"),j=d("BasicTable"),u=d("PageWrapper");return r(),n(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[p(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[p(c,{onClick:e.defaultHeader},{default:m((()=>[f])),_:1},8,["onClick"]),p(c,{onClick:e.customHeader},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export{j as default};
