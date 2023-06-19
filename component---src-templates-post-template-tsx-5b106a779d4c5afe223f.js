"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{898:function(e,t,i){i.r(t),i.d(t,{default:function(){return H}});var n=i(7462),r=i(4316),a=i(7909),o=i(59),s=i(3366),p=i(7294),l=i(45),c=i(3447),d=i(8857),u=i(3589),x=i(3186),m=i(1298),g=i(486);var h=p.createContext(),f=i(8310),w=i(2354);function b(e){return(0,w.Z)("MuiGrid",e)}const v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var k=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...v.map((e=>`grid-xs-${e}`)),...v.map((e=>`grid-sm-${e}`)),...v.map((e=>`grid-md-${e}`)),...v.map((e=>`grid-lg-${e}`)),...v.map((e=>`grid-xl-${e}`))]),j=i(5893);const y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function $(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function S({breakpoints:e,values:t}){let i="";Object.keys(t).forEach((e=>{""===i&&0!==t[e]&&(i=e)}));const n=Object.keys(e).sort(((t,i)=>e[t]-e[i]));return n.slice(0,n.indexOf(i))}const z=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{container:n,direction:r,item:a,spacing:o,wrap:s,zeroMinWidth:p,breakpoints:l}=i;let c=[];n&&(c=function(e,t,i={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[i[`spacing-xs-${String(e)}`]];const n=[];return t.forEach((t=>{const r=e[t];Number(r)>0&&n.push(i[`spacing-${t}-${String(r)}`])})),n}(o,l,t));const d=[];return l.forEach((e=>{const n=i[e];n&&d.push(t[`grid-${e}-${String(n)}`])})),[t.root,n&&t.container,a&&t.item,p&&t.zeroMinWidth,...c,"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...d]}})((({ownerState:e})=>(0,n.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const i=(0,c.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,c.k9)({theme:e},i,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${k.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:i,rowSpacing:n}=t;let r={};if(i&&0!==n){const t=(0,c.P$)({values:n,breakpoints:e.breakpoints.values});let i;"object"==typeof t&&(i=S({breakpoints:e.breakpoints.values,values:t})),r=(0,c.k9)({theme:e},t,((t,n)=>{var r;const a=e.spacing(t);return"0px"!==a?{marginTop:`-${$(a)}`,[`& > .${k.item}`]:{paddingTop:$(a)}}:null!=(r=i)&&r.includes(n)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}}))}return r}),(function({theme:e,ownerState:t}){const{container:i,columnSpacing:n}=t;let r={};if(i&&0!==n){const t=(0,c.P$)({values:n,breakpoints:e.breakpoints.values});let i;"object"==typeof t&&(i=S({breakpoints:e.breakpoints.values,values:t})),r=(0,c.k9)({theme:e},t,((t,n)=>{var r;const a=e.spacing(t);return"0px"!==a?{width:`calc(100% + ${$(a)})`,marginLeft:`-${$(a)}`,[`& > .${k.item}`]:{paddingLeft:$(a)}}:null!=(r=i)&&r.includes(n)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}}))}return r}),(function({theme:e,ownerState:t}){let i;return e.breakpoints.keys.reduce(((r,a)=>{let o={};if(t[a]&&(i=t[a]),!i)return r;if(!0===i)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,c.P$)({values:t.columns,breakpoints:e.breakpoints.values}),p="object"==typeof s?s[a]:s;if(null==p)return r;const l=Math.round(i/p*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const i=e.spacing(t.columnSpacing);if("0px"!==i){const e=`calc(${l} + ${$(i)})`;d={flexBasis:e,maxWidth:e}}}o=(0,n.Z)({flexBasis:l,flexGrow:0,maxWidth:l},d)}return 0===e.breakpoints.values[a]?Object.assign(r,o):r[e.breakpoints.up(a)]=o,r}),{})}));const Z=e=>{const{classes:t,container:i,direction:n,item:r,spacing:a,wrap:o,zeroMinWidth:s,breakpoints:p}=e;let l=[];i&&(l=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const i=[];return t.forEach((t=>{const n=e[t];if(Number(n)>0){const e=`spacing-${t}-${String(n)}`;i.push(e)}})),i}(a,p));const c=[];p.forEach((t=>{const i=e[t];i&&c.push(`grid-${t}-${String(i)}`)}));const d={root:["root",i&&"container",r&&"item",s&&"zeroMinWidth",...l,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...c]};return(0,u.Z)(d,b,t)},M=p.forwardRef((function(e,t){const i=(0,m.Z)({props:e,name:"MuiGrid"}),{breakpoints:r}=(0,g.Z)(),a=(0,d.Z)(i),{className:o,columns:c,columnSpacing:u,component:x="div",container:f=!1,direction:w="row",item:b=!1,rowSpacing:v,spacing:k=0,wrap:$="wrap",zeroMinWidth:S=!1}=a,M=(0,s.Z)(a,y),W=v||k,N=u||k,C=p.useContext(h),E=f?c||12:C,G={},L=(0,n.Z)({},M);r.keys.forEach((e=>{null!=M[e]&&(G[e]=M[e],delete L[e])}));const O=(0,n.Z)({},a,{columns:E,container:f,direction:w,item:b,rowSpacing:W,columnSpacing:N,wrap:$,zeroMinWidth:S,spacing:k},G,{breakpoints:r.keys}),P=Z(O);return(0,j.jsx)(h.Provider,{value:E,children:(0,j.jsx)(z,(0,n.Z)({ownerState:O,className:(0,l.Z)(P.root,o),as:x,ref:t},L))})}));var W=M,N=i(917);var C=e=>{let{title:t,date:i,categories:n}=e;return(0,N.jsx)(O,null,(0,N.jsx)(G,null,(0,N.jsx)(o.Z,{onClick:()=>{"undefined"!=typeof window&&window.history.back()},sx:{fontSize:45,color:"white"}})),(0,N.jsx)(E,null,t),(0,N.jsx)(L,null,(0,N.jsx)(W,{color:"white",container:!0,spacing:-130},(0,N.jsx)("div",null,n.join(" / "))),(0,N.jsx)(W,{color:"white"},(0,N.jsx)("div",null,i))))};const E=(0,r.Z)("div",{target:"e1st1jau3"})({name:"uu9m6d",styles:"overflow:hidden;overflow-wrap:break-word;margin-top:120px;padding:0px 0px 20px 470px;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:45px;font-weight:800;color:white;@media (max-width: 1168px){font-size:30px;margin-top:80px;padding:0px 0px 20px 0px;}"}),G=(0,r.Z)("div",{target:"e1st1jau2"})({name:"18fyl3d",styles:"cursor:pointer;padding:120px 0px 0px 470px;@media (max-width: 1168px){font-size:30px;margin-top:50px;padding:0px 0px 20px 0px;}"}),L=(0,r.Z)("div",{target:"e1st1jau1"})({name:"1hj1yc",styles:"display:flex;padding:0px 0px 0px 150px;justify-content:space-evenly;@media (max-width: 1168px){font-size:11px;padding:0px 20px 0px 0px;display:flex;justify-content:space-between;}"}),O=(0,r.Z)("div",{target:"e1st1jau0"})({name:"qgcv1x",styles:"padding:0px 150px 0px 0px;place-items:center;@media (max-width: 1168px){font-size:11px;margin-top:20px;padding:0px 0px 0px 20px;}"});var P=i(46);var _=e=>{let{title:t,date:i,categories:n,thumbnail:r}=e;return(0,N.jsx)(R,null,(0,N.jsx)(P.Z,null),(0,N.jsx)(T,{image:r,alt:"thumbnail"}),(0,N.jsx)(C,{title:t,date:i,categories:n}))};const R=(0,r.Z)("div",{target:"e1opi4mu1"})({name:"1ificy2",styles:"position:relative;width:100%;height:420px;margin:0;padding:0;@media (max-width: 768px){height:300px;}"}),T=(0,r.Z)((e=>(0,N.jsx)(a.G,(0,n.Z)({},e,{style:{position:"absolute"}}))),{target:"e1opi4mu0"})({name:"1mkmm1l",styles:"z-index:-1;width:100%;height:100%;object-fit:cover;filter:brightness(0.25);@media (max-width: 768px){height:300px;}"});var B=i(6450);var q=e=>{let{html:t}=e;return(0,N.jsx)(I,{dangerouslySetInnerHTML:{__html:t}})};const I=(0,r.Z)("div",{target:"e1ijh0y10"})("display:flex;flex-direction:column;width:768px;margin:0 auto;padding:100px 0;word-break:break-all;line-height:1.8;font-size:16px;font-weight:400;p{padding:3px 0;}h1,h2,h3{font-weight:800;margin-bottom:30px;}*+h1,*+h2,*+h3{margin-top:80px;}hr+h1,hr+h2,hr+h3{margin-top:0;}h1{font-size:30px;}h2{font-size:25px;}h3{font-size:20px;}blockquote{margin:30px 0;padding:5px 15px;border-left:2px solid #000000;font-weight:800;}ol,ul{margin-left:20px;padding:30px 0;}hr{border:",(e=>"light"===e.theme?"1px solid #000000":"0.1px solid #c3c7cc"),";margin:100px 0;}a{color:#4263eb;text-decoration:underline;}pre[class*='language-']{margin:30px 0;padding:15px;font-size:15px;::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.5);border-radius:3px;}}code[class*='language-'],pre[class*='language-']{tab-size:2;}@media (max-width: 768px){width:100%;padding:80px 20px;line-height:1.6;font-size:14px;h1{font-size:23px;}h2{font-size:20px;}h3{font-size:17px;}img{width:100%;}hr{margin:50px 0;}}");var A=i(5990);var D=()=>{const e=(0,p.createRef)(),{theme:t}=(0,p.useContext)(A.N);return(0,p.useEffect)((()=>{if(null===e.current)return;for(;e.current.firstChild;)e.current.firstChild.remove();const i=document.createElement("script"),n={src:"https://utteranc.es/client.js",repo:"ellajang/ellajang.github.io","issue-term":"pathname",label:"Comment",theme:"light"===t?"github-light":"dark-blue",crossorigin:"anonymous",async:"true"};Object.entries(n).forEach((e=>{let[t,n]=e;i.setAttribute(t,n)})),e.current.appendChild(i)}),[t]),(0,N.jsx)(F,{ref:e})};const F=(0,r.Z)("div",{target:"e1gqsjds0"})({name:"hx9xpc",styles:"@media (max-width: 768px){padding:0 20px;}"});var H=e=>{let{data:{allMarkdownRemark:{edges:t}},location:{href:i}}=e;const{node:{html:n,frontmatter:{title:r,date:a,summary:o,categories:s,thumbnail:{childImageSharp:{gatsbyImageData:p},publicUrl:l}}}}=t[0];return(0,N.jsx)(A.z,null,(0,N.jsx)(B.Z,{title:r,description:o,url:i,image:l},(0,N.jsx)(_,{title:r,date:a,categories:s,thumbnail:p}),(0,N.jsx)(q,{html:n}),(0,N.jsx)(D,null)))}},59:function(e,t,i){var n=i(4836);t.Z=void 0;var r=n(i(1991)),a=i(5893),o=(0,r.default)((0,a.jsx)("path",{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z"}),"ArrowCircleLeft");t.Z=o}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-5b106a779d4c5afe223f.js.map