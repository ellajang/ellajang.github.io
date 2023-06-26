"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{4769:function(e,t,n){var i=n(4316),r=n(3238),a=n(1711),o=n(7294),s=n(917);t.Z=()=>{const{theme:e}=(0,o.useContext)(a.N);return(0,s.jsx)(p,{theme:e},"© 2023 Developer Ella, Built with Gatsby.",(0,s.jsx)("a",{href:"https://github.com/ellajang",target:"_blank"},(0,s.jsx)(r.Z,null)))};const p=(0,i.Z)("footer",{target:"e1oae0v80"})("display:grid;place-items:center;padding:15px 0;font-size:15px;text-align:center;line-height:1.5;left:0;width:100%;color:",(e=>"light"===e.theme?"#263238":"#c4d0d7"),";background-color:",(e=>"light"===e.theme?"#f7fafc":"#12171b"),";@media (max-width: 768px){font-size:13px;}")},898:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(7462),r=n(4316),a=n(7909),o=n(59),s=n(3366),p=n(7294),c=n(45),l=n(3447),d=n(8857),u=n(3589),x=n(3186),m=n(1298),g=n(486);var h=p.createContext(),f=n(8310),w=n(2354);function b(e){return(0,w.Z)("MuiGrid",e)}const v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var j=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...v.map((e=>`grid-xs-${e}`)),...v.map((e=>`grid-sm-${e}`)),...v.map((e=>`grid-md-${e}`)),...v.map((e=>`grid-lg-${e}`)),...v.map((e=>`grid-xl-${e}`))]),k=n(5893);const y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function $(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function S({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const i=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return i.slice(0,i.indexOf(n))}const Z=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:i,direction:r,item:a,spacing:o,wrap:s,zeroMinWidth:p,breakpoints:c}=n;let l=[];i&&(l=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const i=[];return t.forEach((t=>{const r=e[t];Number(r)>0&&i.push(n[`spacing-${t}-${String(r)}`])})),i}(o,c,t));const d=[];return c.forEach((e=>{const i=n[e];i&&d.push(t[`grid-${e}-${String(i)}`])})),[t.root,i&&t.container,a&&t.item,p&&t.zeroMinWidth,...l,"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...d]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,l.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${j.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let r={};if(n&&0!==i){const t=(0,l.P$)({values:i,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=S({breakpoints:e.breakpoints.values,values:t})),r=(0,l.k9)({theme:e},t,((t,i)=>{var r;const a=e.spacing(t);return"0px"!==a?{marginTop:`-${$(a)}`,[`& > .${j.item}`]:{paddingTop:$(a)}}:null!=(r=n)&&r.includes(i)?{}:{marginTop:0,[`& > .${j.item}`]:{paddingTop:0}}}))}return r}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let r={};if(n&&0!==i){const t=(0,l.P$)({values:i,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=S({breakpoints:e.breakpoints.values,values:t})),r=(0,l.k9)({theme:e},t,((t,i)=>{var r;const a=e.spacing(t);return"0px"!==a?{width:`calc(100% + ${$(a)})`,marginLeft:`-${$(a)}`,[`& > .${j.item}`]:{paddingLeft:$(a)}}:null!=(r=n)&&r.includes(i)?{}:{width:"100%",marginLeft:0,[`& > .${j.item}`]:{paddingLeft:0}}}))}return r}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,a)=>{let o={};if(t[a]&&(n=t[a]),!n)return r;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,l.P$)({values:t.columns,breakpoints:e.breakpoints.values}),p="object"==typeof s?s[a]:s;if(null==p)return r;const c=Math.round(n/p*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${c} + ${$(n)})`;d={flexBasis:e,maxWidth:e}}}o=(0,i.Z)({flexBasis:c,flexGrow:0,maxWidth:c},d)}return 0===e.breakpoints.values[a]?Object.assign(r,o):r[e.breakpoints.up(a)]=o,r}),{})}));const z=e=>{const{classes:t,container:n,direction:i,item:r,spacing:a,wrap:o,zeroMinWidth:s,breakpoints:p}=e;let c=[];n&&(c=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const i=e[t];if(Number(i)>0){const e=`spacing-${t}-${String(i)}`;n.push(e)}})),n}(a,p));const l=[];p.forEach((t=>{const n=e[t];n&&l.push(`grid-${t}-${String(n)}`)}));const d={root:["root",n&&"container",r&&"item",s&&"zeroMinWidth",...c,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...l]};return(0,u.Z)(d,b,t)},M=p.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiGrid"}),{breakpoints:r}=(0,g.Z)(),a=(0,d.Z)(n),{className:o,columns:l,columnSpacing:u,component:x="div",container:f=!1,direction:w="row",item:b=!1,rowSpacing:v,spacing:j=0,wrap:$="wrap",zeroMinWidth:S=!1}=a,M=(0,s.Z)(a,y),W=v||j,N=u||j,O=p.useContext(h),C=f?l||12:O,P={},E=(0,i.Z)({},M);r.keys.forEach((e=>{null!=M[e]&&(P[e]=M[e],delete E[e])}));const G=(0,i.Z)({},a,{columns:C,container:f,direction:w,item:b,rowSpacing:W,columnSpacing:N,wrap:$,zeroMinWidth:S,spacing:j},P,{breakpoints:r.keys}),_=z(G);return(0,k.jsx)(h.Provider,{value:C,children:(0,k.jsx)(Z,(0,i.Z)({ownerState:G,className:(0,c.Z)(_.root,o),as:x,ref:t},E))})}));var W=M,N=n(917);var O=e=>{let{title:t,date:n,categories:i}=e;return(0,N.jsx)(G,null,(0,N.jsx)(P,null,(0,N.jsx)(o.Z,{onClick:()=>{"undefined"!=typeof window&&window.history.back()},sx:{fontSize:45,color:"white"}})),(0,N.jsx)(C,null,t),(0,N.jsx)(E,null,(0,N.jsx)(W,{color:"white",container:!0,spacing:-130},(0,N.jsx)("div",null,i.join(" / "))),(0,N.jsx)(W,{color:"white"},(0,N.jsx)("div",null,n))))};const C=(0,r.Z)("div",{target:"e1st1jau3"})({name:"uu9m6d",styles:"overflow:hidden;overflow-wrap:break-word;margin-top:120px;padding:0px 0px 20px 470px;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:45px;font-weight:800;color:white;@media (max-width: 1168px){font-size:30px;margin-top:80px;padding:0px 0px 20px 0px;}"}),P=(0,r.Z)("div",{target:"e1st1jau2"})({name:"18fyl3d",styles:"cursor:pointer;padding:120px 0px 0px 470px;@media (max-width: 1168px){font-size:30px;margin-top:50px;padding:0px 0px 20px 0px;}"}),E=(0,r.Z)("div",{target:"e1st1jau1"})({name:"1hj1yc",styles:"display:flex;padding:0px 0px 0px 150px;justify-content:space-evenly;@media (max-width: 1168px){font-size:11px;padding:0px 20px 0px 0px;display:flex;justify-content:space-between;}"}),G=(0,r.Z)("div",{target:"e1st1jau0"})({name:"qgcv1x",styles:"padding:0px 150px 0px 0px;place-items:center;@media (max-width: 1168px){font-size:11px;margin-top:20px;padding:0px 0px 0px 20px;}"});var _=n(9481);var L=e=>{let{title:t,date:n,categories:i,thumbnail:r}=e;return(0,N.jsx)(R,null,(0,N.jsx)(_.Z,null),(0,N.jsx)(B,{image:r,alt:"thumbnail"}),(0,N.jsx)(O,{title:t,date:n,categories:i}))};const R=(0,r.Z)("div",{target:"e1opi4mu1"})({name:"1ificy2",styles:"position:relative;width:100%;height:420px;margin:0;padding:0;@media (max-width: 768px){height:300px;}"}),B=(0,r.Z)((e=>(0,N.jsx)(a.G,(0,i.Z)({},e,{style:{position:"absolute"}}))),{target:"e1opi4mu0"})({name:"1mkmm1l",styles:"z-index:-1;width:100%;height:100%;object-fit:cover;filter:brightness(0.25);@media (max-width: 768px){height:300px;}"});var D=n(3017);var T=e=>{let{html:t}=e;return(0,N.jsx)(q,{dangerouslySetInnerHTML:{__html:t}})};const q=(0,r.Z)("div",{target:"e1ijh0y10"})("display:flex;flex-direction:column;width:768px;margin:0 auto;padding:100px 0;word-break:break-all;line-height:1.8;font-size:16px;font-weight:400;p{padding:3px 0;}h1,h2,h3{font-weight:800;margin-bottom:30px;}*+h1,*+h2,*+h3{margin-top:80px;}hr+h1,hr+h2,hr+h3{margin-top:0;}h1{font-size:30px;}h2{font-size:25px;}h3{font-size:20px;}blockquote{margin:30px 0;padding:5px 15px;border-left:2px solid #000000;font-weight:800;}ol,ul{margin-left:20px;padding:30px 0;}hr{border:",(e=>"light"===e.theme?"1px solid #000000":"0.1px solid #c3c7cc"),";margin:100px 0;}a{color:#4263eb;text-decoration:underline;}pre[class*='language-']{margin:30px 0;padding:15px;font-size:15px;::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.5);border-radius:3px;}}code[class*='language-'],pre[class*='language-']{tab-size:2;}@media (max-width: 768px){width:100%;padding:80px 20px;line-height:1.6;font-size:14px;h1{font-size:23px;}h2{font-size:20px;}h3{font-size:17px;}img{width:100%;}hr{margin:50px 0;}}");var A=n(1711);var I=()=>{const e=(0,p.createRef)(),{theme:t}=(0,p.useContext)(A.N);return(0,p.useEffect)((()=>{if(null===e.current)return;for(;e.current.firstChild;)e.current.firstChild.remove();const n=document.createElement("script"),i={src:"https://utteranc.es/client.js",repo:"ellajang/ellajang.github.io","issue-term":"pathname",label:"Comment",theme:"light"===t?"github-light":"dark-blue",crossorigin:"anonymous",async:"true"};Object.entries(i).forEach((e=>{let[t,i]=e;n.setAttribute(t,i)})),e.current.appendChild(n)}),[t]),(0,N.jsx)(H,{ref:e})};const H=(0,r.Z)("div",{target:"e1gqsjds0"})({name:"hx9xpc",styles:"@media (max-width: 768px){padding:0 20px;}"});var F=e=>{let{data:{allMarkdownRemark:{edges:t}},location:{href:n}}=e;const{node:{html:i,frontmatter:{title:r,date:a,summary:o,categories:s,thumbnail:{childImageSharp:{gatsbyImageData:p},publicURL:c}}}}=t[0];return(0,N.jsx)(A.z,null,(0,N.jsx)(D.Z,{title:r,description:o,url:n,image:c},(0,N.jsx)(L,{title:r,date:a,categories:s,thumbnail:p}),(0,N.jsx)(T,{html:i}),(0,N.jsx)(I,null)))}},59:function(e,t,n){var i=n(4836);t.Z=void 0;var r=i(n(1991)),a=n(5893),o=(0,r.default)((0,a.jsx)("path",{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z"}),"ArrowCircleLeft");t.Z=o},3238:function(e,t,n){var i=n(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(i,a,s):i[a]=e[a]}i.default=e,n&&n.set(e,i)}(n(7294));var r=i(n(1991)),a=n(5893);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}var s=(0,r.default)((0,a.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");t.Z=s}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-29906a667b51b4401dc7.js.map