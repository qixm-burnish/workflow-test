var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{_ as a,am as i}from"./index.fec87d2a.js";import{z as c,r as u,j as d,X as p,Y as m,ae as y,u as f,w as b,a7 as v,ay as h,a_ as x,b9 as j,aM as w,ad as O}from"./vendor.816c78c5.js";/* empty css              */const E={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},g=e=>{const{item:t}=e;return b("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&b(a,{class:"mr-2",icon:t.icon},null),b("span",null,[t.label])])};var L=c({name:"ContextMenu",props:E,setup(e){const a=u(null),i=u(!1),c=d((()=>{const{axis:a,items:i,styles:c,width:u}=e,{x:d,y:p}=a||{x:0,y:0},m=40*(i||[]).length,y=u,f=document.body,b=f.clientWidth<d+y?d-y:d,v=f.clientHeight<p+m?p-m:p;return h=((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&r(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&r(e,n,t[n]);return e})({},c),t(h,n({width:`${u}px`,left:`${b+1}px`,top:`${v+1}px`}));var h}));function w(e,t){const{handler:n,disabled:l}=e;l||(i.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function O(t){return t.map((t=>{const{disabled:n,label:l,children:o,divider:s=!1}=t,r={item:t,handler:w,showIcon:e.showIcon};return o&&0!==o.length?f(i)?b(h.SubMenu,{key:l,disabled:n,popupClassName:"context-menu__popup"},{title:()=>b(g,r,null),default:()=>O(o)}):null:b(v,null,[b(h.Item,{disabled:n,class:"context-menu__item",key:l},{default:()=>[b(g,r,null)]}),s?b(x,{key:`d-${l}`},null):null])}))}return p((()=>{m((()=>i.value=!0))})),y((()=>{const e=f(a);e&&document.body.removeChild(e)})),()=>{let t;if(!f(i))return null;const{items:n}=e;return b(h,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:a,style:f(c)},"function"==typeof(l=t=O(n))||"[object Object]"===Object.prototype.toString.call(l)&&!j(l)?t:{default:()=>[t]});var l}}});const k={domList:[],resolve:()=>{}},I=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),i)return new Promise((n=>{const l=document.body,o=document.createElement("div"),s={};e.styles&&(s.styles=e.styles),e.items&&(s.items=e.items),e.event&&(s.customEvent=t,s.axis={x:t.clientX,y:t.clientY});const r=b(L,s);w(r,o);const a=function(){k.resolve("")};k.domList.push(o);const i=function(){k.domList.forEach((e=>{try{e&&l.removeChild(e)}catch(t){}})),l.removeEventListener("click",a),l.removeEventListener("scroll",a)};k.resolve=function(e){i(),n(e)},i(),l.appendChild(o),l.addEventListener("click",a),l.addEventListener("scroll",a)}))},P=function(){k&&(k.resolve(""),k.domList=[])};function C(e=!0){return O()&&e&&y((()=>{P()})),[I,P]}export{C as u};
