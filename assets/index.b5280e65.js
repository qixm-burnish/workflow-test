import{Q as e}from"./index.86254339.js";import{C as o,ar as t}from"./index.fec87d2a.js";import{P as l}from"./index.e6650eff.js";import{z as a,r as n,u as r,A as s,B as d,Z as i,D as c,F as m,w as u,K as g,a9 as p}from"./vendor.816c78c5.js";import"./download.673915b1.js";import"./base64Conver.bb012c73.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.3c82604a.js";import"./useWindowSizeFn.b43d7152.js";import"./useContentViewHeight.5682504b.js";var f=a({components:{CollapseContainer:o,QrCode:e,PageWrapper:l},setup(){const e=n(null),o=n(null);return{onQrcodeDone:function({ctx:e}){e instanceof CanvasRenderingContext2D&&(e.fillStyle="black",e.font='16px "微软雅黑"',e.textBaseline="bottom",e.textAlign="center",e.fillText("你帅你先扫",100,195,200))},qrCodeUrl:"https://www.vvbin.cn",LogoImg:t,download:function(){const o=r(e);o&&o.download("文件名")},downloadDiy:function(){const e=r(o);e&&e.download("Qrcode")},qrRef:e,qrDiyRef:o}}});const v=g();s("data-v-61194a52");const b={class:"flex flex-wrap"},C=p(" 下载 "),x=u("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1),q=p(" 下载 "),w=u("div",{class:"msg"}," 要进行扩展绘制则不能将tag设为img ",-1);d();const _=v(((e,o,t,l,a,n)=>{const r=i("QrCode"),s=i("CollapseContainer"),d=i("a-button"),g=i("PageWrapper");return c(),m(g,{title:"二维码组件使用示例"},{default:v((()=>[u("div",b,[u(s,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),u(s,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),u(s,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),u(s,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),u(s,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),u(s,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),u(s,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),u(d,{class:"mb-2",type:"primary",onClick:e.download},{default:v((()=>[C])),_:1},8,["onClick"]),x])),_:1}),u(s,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1}),u(s,{title:"扩展绘制示例",class:"text-center qrcode-demo-item"},{default:v((()=>[u(r,{value:e.qrCodeUrl,width:200,options:{margin:5},ref:"qrDiyRef",logo:e.LogoImg,onDone:e.onQrcodeDone},null,8,["value","logo","onDone"]),u(d,{class:"mb-2",type:"primary",onClick:e.downloadDiy},{default:v((()=>[q])),_:1},8,["onClick"]),w])),_:1})])])),_:1})}));f.render=_,f.__scopeId="data-v-61194a52";export{f as default};
