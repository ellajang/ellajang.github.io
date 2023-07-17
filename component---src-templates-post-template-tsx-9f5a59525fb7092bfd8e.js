"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{898:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var i=n(7294),r=n(7462),a=n(4316),o=n(7909),s=n(8656),p=n(59),l=n(3366),c=n(45),x=n(3447),d=n(8857),u=n(3589),m=n(3450),g=n(228),h=n(486);var f=i.createContext(),b=n(8310),w=n(2354);function v(e){return(0,w.Z)("MuiGrid",e)}const j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var k=(0,b.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...j.map((e=>`grid-xs-${e}`)),...j.map((e=>`grid-sm-${e}`)),...j.map((e=>`grid-md-${e}`)),...j.map((e=>`grid-lg-${e}`)),...j.map((e=>`grid-xl-${e}`))]),S=n(5893);const y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function $(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function z({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const i=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return i.slice(0,i.indexOf(n))}const Z=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:i,direction:r,item:a,spacing:o,wrap:s,zeroMinWidth:p,breakpoints:l}=n;let c=[];i&&(c=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const i=[];return t.forEach((t=>{const r=e[t];Number(r)>0&&i.push(n[`spacing-${t}-${String(r)}`])})),i}(o,l,t));const x=[];return l.forEach((e=>{const i=n[e];i&&x.push(t[`grid-${e}-${String(i)}`])})),[t.root,i&&t.container,a&&t.item,p&&t.zeroMinWidth,...c,"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...x]}})((({ownerState:e})=>(0,r.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,x.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,x.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${k.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let r={};if(n&&0!==i){const t=(0,x.P$)({values:i,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=z({breakpoints:e.breakpoints.values,values:t})),r=(0,x.k9)({theme:e},t,((t,i)=>{var r;const a=e.spacing(t);return"0px"!==a?{marginTop:`-${$(a)}`,[`& > .${k.item}`]:{paddingTop:$(a)}}:null!=(r=n)&&r.includes(i)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}}))}return r}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let r={};if(n&&0!==i){const t=(0,x.P$)({values:i,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=z({breakpoints:e.breakpoints.values,values:t})),r=(0,x.k9)({theme:e},t,((t,i)=>{var r;const a=e.spacing(t);return"0px"!==a?{width:`calc(100% + ${$(a)})`,marginLeft:`-${$(a)}`,[`& > .${k.item}`]:{paddingLeft:$(a)}}:null!=(r=n)&&r.includes(i)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}}))}return r}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((i,a)=>{let o={};if(t[a]&&(n=t[a]),!n)return i;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,x.P$)({values:t.columns,breakpoints:e.breakpoints.values}),p="object"==typeof s?s[a]:s;if(null==p)return i;const l=Math.round(n/p*1e8)/1e6+"%";let c={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${l} + ${$(n)})`;c={flexBasis:e,maxWidth:e}}}o=(0,r.Z)({flexBasis:l,flexGrow:0,maxWidth:l},c)}return 0===e.breakpoints.values[a]?Object.assign(i,o):i[e.breakpoints.up(a)]=o,i}),{})}));const W=e=>{const{classes:t,container:n,direction:i,item:r,spacing:a,wrap:o,zeroMinWidth:s,breakpoints:p}=e;let l=[];n&&(l=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const i=e[t];if(Number(i)>0){const e=`spacing-${t}-${String(i)}`;n.push(e)}})),n}(a,p));const c=[];p.forEach((t=>{const n=e[t];n&&c.push(`grid-${t}-${String(n)}`)}));const x={root:["root",n&&"container",r&&"item",s&&"zeroMinWidth",...l,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...c]};return(0,u.Z)(x,v,t)},M=i.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiGrid"}),{breakpoints:a}=(0,h.Z)(),o=(0,d.Z)(n),{className:s,columns:p,columnSpacing:x,component:u="div",container:m=!1,direction:b="row",item:w=!1,rowSpacing:v,spacing:j=0,wrap:k="wrap",zeroMinWidth:$=!1}=o,z=(0,l.Z)(o,y),M=v||j,N=x||j,C=i.useContext(f),E=m?p||12:C,L={},G=(0,r.Z)({},z);a.keys.forEach((e=>{null!=z[e]&&(L[e]=z[e],delete G[e])}));const T=(0,r.Z)({},o,{columns:E,container:m,direction:b,item:w,rowSpacing:M,columnSpacing:N,wrap:k,zeroMinWidth:$,spacing:j},L,{breakpoints:a.keys}),R=W(T);return(0,S.jsx)(f.Provider,{value:E,children:(0,S.jsx)(Z,(0,r.Z)({ownerState:T,className:(0,c.Z)(R.root,s),as:u,ref:t},G))})}));var N=M,C=n(917);var E=e=>{let{title:t,date:n,categories:r}=e;return(0,C.jsx)(i.Fragment,null,(0,C.jsx)(R,null,(0,C.jsx)(G,null,(0,C.jsx)(p.Z,{onClick:()=>{"undefined"!=typeof window&&window.history.back()},sx:{fontSize:45,color:"white"}})),(0,C.jsx)(L,null,t),(0,C.jsx)(T,null,(0,C.jsx)(N,{color:"white",container:!0,spacing:-130},(0,C.jsx)("div",null,r.join(" / "))),(0,C.jsx)(N,{color:"white"},(0,C.jsx)("div",null,n)))))};const L=(0,a.Z)("div",{target:"e1st1jau3"})({name:"uu9m6d",styles:"overflow:hidden;overflow-wrap:break-word;margin-top:120px;padding:0px 0px 20px 470px;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:45px;font-weight:800;color:white;@media (max-width: 1168px){font-size:30px;margin-top:80px;padding:0px 0px 20px 0px;}"}),G=(0,a.Z)("div",{target:"e1st1jau2"})({name:"8wjbb0",styles:"cursor:pointer;padding:120px 0px 0px 470px;@media (max-width: 1168px){font-size:30px;margin-top:80px;padding:0px 0px 0px 0px;}"}),T=(0,a.Z)("div",{target:"e1st1jau1"})({name:"1hj1yc",styles:"display:flex;padding:0px 0px 0px 150px;justify-content:space-evenly;@media (max-width: 1168px){font-size:11px;padding:0px 20px 0px 0px;display:flex;justify-content:space-between;}"}),R=(0,a.Z)("div",{target:"e1st1jau0"})({name:"1tx0slw",styles:"padding:0px 150px 0px 0px;place-items:center;position:relative;z-index:1;@media (max-width: 1168px){font-size:11px;margin-top:20px;padding:0px 0px 0px 20px;}"});var B=e=>{let{title:t,date:n,categories:r,thumbnail:a}=e;return(0,C.jsx)(i.Fragment,null,(0,C.jsx)(F,null,(0,C.jsx)(s.Z,null),(0,C.jsx)(O,{image:a,alt:"thumbnail"}),(0,C.jsx)(E,{title:t,date:n,categories:r})))};const F=(0,a.Z)("div",{target:"e1opi4mu1"})({name:"1ificy2",styles:"position:relative;width:100%;height:420px;margin:0;padding:0;@media (max-width: 768px){height:300px;}"}),O=(0,a.Z)((e=>(0,C.jsx)(o.G,(0,r.Z)({},e,{style:{position:"absolute"}}))),{target:"e1opi4mu0"})({name:"190vn2m",styles:"z-index:0;width:100%;height:100%;object-fit:cover;filter:brightness(0.25);@media (max-width: 768px){height:300px;}"});var P=n(3530),_=n(1711);var D=e=>{let{html:t}=e;const n=(0,i.useContext)(_.N);return(0,C.jsx)(i.Fragment,null,(0,C.jsx)(H,{theme:n,dangerouslySetInnerHTML:{__html:t}}))};const H=(0,a.Z)("div",{target:"e1ijh0y10"})((()=>{const e=(0,i.useContext)(_.N);return{display:"flex",flexDirection:"column",width:"768px",margin:"0 auto",padding:"100px 0",wordBreak:"break-all",color:"dark"===e.theme?"#f4f4f4":"#303134",lineHeight:1.8,fontSize:"16px",fontWeight:400,p:{padding:"3px 0"},ol:{margin:"0px 0px -20px 0px"},"abbr[title]":{cursor:"pointer","&:hover::after":{fontSize:"40px"}},"h1,h2,h3":{fontWeight:700,marginBottom:"30px"},"* + h1,* + h2,* + h3":{marginTop:"80px"},"hr + h1,hr + h2,hr + h3":{marginTop:0},h1:{fontSize:"30px"},h2:{fontSize:"25px"},h3:{fontSize:"20px"},h4:{fontSize:"18px"},"strong em":{color:"#7d64b1"},blockquote:{padding:"5px 15px",borderLeft:"7px solid #7d64b1",fontWeight:300,fontSize:"20px"},"ol,ul":{marginLeft:"20px",padding:"30px 0"},li:{marginTop:"1px"},hr:{margin:"100px 0"},a:{color:"#4263eb",textDecoration:"underline"},"pre[class*='language-']":{margin:"15px 0",padding:"15px",fontSize:"15px","::-webkit-scrollbar-thumb":{background:"rgba(255, 255, 255, 0.5)",borderRadius:"3px"}},pre:{backgroundColor:"light"===e.theme?"#f4f4f4":"#303134"},"code[class*='language-'], pre[class*='language-']":{tabSize:2,color:"dark"===e.theme?"#f4f4f4":"#303134"},"code[class*='language-text']":{background:"#5cb85c",color:"white",fontSize:"15px"},"@media (max-width: 768px)":{width:"100%",padding:"80px 20px",lineHeight:1.6,fontSize:"14px",h1:{fontSize:"23px"},h2:{fontSize:"20px"},h3:{fontSize:"17px"},h4:{fontSize:"14px"},img:{width:"100%"},hr:{margin:"50px 0"}}}}),"");var I=()=>{const e=(0,i.createRef)(),{theme:t}=(0,i.useContext)(_.N);return(0,i.useEffect)((()=>{if(null===e.current)return;for(;e.current.firstChild;)e.current.firstChild.remove();const n=document.createElement("script"),i={src:"https://utteranc.es/client.js",repo:"ellajang/ellajang.github.io","issue-term":"pathname",label:"Comment",theme:"light"===t?"github-light":"dark-blue",crossorigin:"anonymous",async:"true"};Object.entries(i).forEach((e=>{let[t,i]=e;n.setAttribute(t,i)})),e.current.appendChild(n)}),[t]),(0,C.jsx)(i.Fragment,null,(0,C.jsx)(q,{ref:e}))};const q=(0,a.Z)("div",{target:"e1gqsjds0"})({name:"hx9xpc",styles:"@media (max-width: 768px){padding:0 20px;}"});var A=e=>{let{data:{allMarkdownRemark:{edges:t}},location:{href:n}}=e;const{node:{html:r,frontmatter:{title:a,date:o,summary:s,categories:p,thumbnail:{childImageSharp:{gatsbyImageData:l},publicURL:c}}}}=t[0];return(0,C.jsx)(i.Fragment,null,(0,C.jsx)(_.z,null,(0,C.jsx)(P.Z,{title:a,description:s,url:n,image:c},(0,C.jsx)(B,{title:a,date:o,categories:p,thumbnail:l}),(0,C.jsx)(D,{html:r}),(0,C.jsx)(I,null))))}},59:function(e,t,n){var i=n(4836);t.Z=void 0;var r=i(n(1991)),a=n(5893),o=(0,r.default)((0,a.jsx)("path",{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z"}),"ArrowCircleLeft");t.Z=o}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-9f5a59525fb7092bfd8e.js.map