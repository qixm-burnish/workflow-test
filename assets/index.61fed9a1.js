import{C as e}from"./index.d090e75d.js";import{P as t}from"./index.e6650eff.js";import{z as a,bj as n,bQ as o,r as i,v as l,Z as d,D as m,F as r,a2 as u,w as s,a9 as c}from"./vendor.816c78c5.js";/* empty css              *//* empty css              */import"./index.fec87d2a.js";import"./useWindowSizeFn.b43d7152.js";import"Vue";/* empty css              *//* empty css              */import"./onMountedOrActivated.3c82604a.js";import"./useContentViewHeight.5682504b.js";const p='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}';var h=a({components:{CodeEditor:e,PageWrapper:t,RadioButton:n.Button,RadioGroup:n.Group,ASpace:o},setup(){const e=i("application/json"),t=i(p);return{value:t,modeValue:e,handleModeChange:function(e){const a=e.target.value;"application/json"!==a?"htmlmixed"!==a?"javascript"!==a||(t.value="\n      (() => {\n        var htmlRoot = document.getElementById('htmlRoot');\n        var theme = window.localStorage.getItem('__APP__DARK__MODE__');\n        if (htmlRoot && theme) {\n          htmlRoot.setAttribute('data-theme', theme);\n          theme = htmlRoot = null;\n        }\n      })();\n  "):t.value='\n     <!DOCTYPE html>\n<html lang="en" id="htmlRoot">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n    <meta name="renderer" content="webkit" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"\n    />\n    <title><%= title %></title>\n    <link rel="icon" href="/favicon.ico" />\n  </head>\n  <body>\n    <div id="app">\n    </div>\n  </body>\n</html>\n  ':t.value=p},showData:function(){l.info({title:"编辑器当前值",content:t.value})}}}});const v=c("获取数据"),x=c(" json数据 "),f=c(" html代码 "),w=c(" javascript代码 ");h.render=function(e,t,a,n,o,i){const l=d("a-button"),c=d("RadioButton"),p=d("RadioGroup"),h=d("a-space"),j=d("CodeEditor"),g=d("PageWrapper");return m(),r(g,{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:u((()=>[s(h,{size:"middle"},{default:u((()=>[s(l,{onClick:e.showData,type:"primary"},{default:u((()=>[v])),_:1},8,["onClick"]),s(p,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[1]||(t[1]=t=>e.modeValue=t),onChange:e.handleModeChange},{default:u((()=>[s(c,{value:"application/json"},{default:u((()=>[x])),_:1}),s(c,{value:"htmlmixed"},{default:u((()=>[f])),_:1}),s(c,{value:"javascript"},{default:u((()=>[w])),_:1})])),_:1},8,["value","onChange"])])),_:1})])),default:u((()=>[s(j,{value:e.value,"onUpdate:value":t[2]||(t[2]=t=>e.value=t),mode:e.modeValue},null,8,["value","mode"])])),_:1})};export{h as default};
