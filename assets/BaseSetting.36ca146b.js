import{z as a,aO as e,aX as t,aW as s,X as o,j as r,A as i,B as n,D as d,F as p,w as m,K as c,a9 as u,Z as l}from"./vendor.816c78c5.js";/* empty css              */import{_ as f}from"./BasicForm.1ee9860e.js";import{u as j}from"./useForm.83c1a438.js";import{C as b,f as v,h as x}from"./index.fec87d2a.js";import{a as h}from"./index.e9f27487.js";import{h as C}from"./header.d801b988.js";import{a as g}from"./account.1b02e6cb.js";import{b as A}from"./data.08d7c751.js";import{u as w}from"./upload.b93e683a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.bb9ea502.js";/* empty css              *//* empty css              *//* empty css              */import"./index.da9badfc.js";import"./useWindowSizeFn.b43d7152.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.673915b1.js";import"./base64Conver.bb012c73.js";import"./index.7f9dc345.js";/* empty css              *//* empty css              */var _=a({components:{BasicForm:f,CollapseContainer:b,Button:e,ARow:t,ACol:s,CropperAvatar:h},setup(){const{createMessage:a}=x(),e=v(),[t,{setFieldsValue:s}]=j({labelWidth:120,schemas:A,showActionButtonGroup:!1});o((()=>{return a=this,e=null,t=function*(){const a=yield g();s(a)},new Promise(((s,o)=>{var r=a=>{try{n(t.next(a))}catch(e){o(e)}},i=a=>{try{n(t.throw(a))}catch(e){o(e)}},n=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);n((t=t.apply(a,e)).next())}));var a,e,t}));return{avatar:r((()=>{const{avatar:a}=e.getUserInfo;return a||C})),register:t,uploadApi:w,updateAvatar:function(a){const t=e.getUserInfo;t.avatar=a,e.setUserInfo(t)},handleSubmit:()=>{a.success("更新成功！")}}}});const B=c("data-v-88a2a8d4");i("data-v-88a2a8d4");const F={class:"change-avatar"},y=m("div",{class:"mb-2"}," 头像 ",-1),I=u(" 更新基本信息 ");n();const P=B(((a,e,t,s,o,r)=>{const i=l("BasicForm"),n=l("a-col"),c=l("CropperAvatar"),u=l("a-row"),f=l("Button"),j=l("CollapseContainer");return d(),p(j,{title:"基本设置",canExpan:!1},{default:B((()=>[m(u,{gutter:24},{default:B((()=>[m(n,{span:14},{default:B((()=>[m(i,{onRegister:a.register},null,8,["onRegister"])])),_:1}),m(n,{span:10},{default:B((()=>[m("div",F,[y,m(c,{uploadApi:a.uploadApi,value:a.avatar,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:a.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])])),_:1})])),_:1}),m(f,{type:"primary",onClick:a.handleSubmit},{default:B((()=>[I])),_:1},8,["onClick"])])),_:1})}));_.render=P,_.__scopeId="data-v-88a2a8d4";export{_ as default};
