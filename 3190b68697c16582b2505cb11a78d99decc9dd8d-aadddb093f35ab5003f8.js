"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[638],{4020:function(e){var t="%[a-f0-9]{2}",a=new RegExp("("+t+")|([^%]+?)","gi"),r=new RegExp("("+t+")+","gi");function o(e,t){try{return[decodeURIComponent(e.join(""))]}catch(n){}if(1===e.length)return e;t=t||1;var a=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(a),o(r))}function n(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(a)||[],r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(a)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var a={"%FE%FF":"��","%FF%FE":"��"},o=r.exec(e);o;){try{a[o[0]]=decodeURIComponent(o[0])}catch(t){var i=n(o[0]);i!==o[0]&&(a[o[0]]=i)}o=r.exec(e)}a["%C2"]="�";for(var s=Object.keys(a),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),a[c])}return e}(e)}}},2806:function(e){e.exports=function(e,t){for(var a={},r=Object.keys(e),o=Array.isArray(t),n=0;n<r.length;n++){var i=r[n],s=e[i];(o?-1!==t.indexOf(i):t(i,s,e))&&(a[i]=s)}return a}},8133:function(e,t,a){var r=a(4316),o=a(7294),n=a(4160),i=a(1711),s=a(917);const l=e=>{let{to:t,label:a,selected:r,theme:o,onClick:n}=e;return(0,s.jsx)(p,{to:t,selected:r,onClick:n,theme:o},a)};t.Z=e=>{let{basePath:t,selectedDetailCategory:a,detailCategoryList:r,categoriesMap:n}=e;const{0:p,1:u}=(0,o.useState)(a),g=e=>{const t=n.find((t=>t.value===e));return t?t.label:e},{theme:x}=(0,o.useContext)(i.N);return(0,s.jsx)(c,{theme:x},(0,s.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},Object.entries(r).map((e=>{let[a,r]=e;return(0,s.jsx)(l,{to:"All"===a?"/"+t:"/"+t+"/"+a,label:g(a)+"("+r+")",selected:a===p,onClick:()=>{u(a)},key:a,theme:x})}))),(0,s.jsx)(d,null))};const c=(0,r.Z)("div",{target:"ek0qhm2"})("display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;width:100%;height:230px;position:fixed;z-index:1;font-size:30px;background-color:",(e=>"light"===e.theme?"#f7fafc":"#030d11ca"),";color:",(e=>"light"===e.theme?"#0b1118":"#f7fafc"),";margin:10px 0 0 0px;@media (max-width: 768px){width:100%;height:250px;font-size:20px;margin:20px 0px 0px 0px;}"),p=(0,r.Z)(n.rU,{target:"ek0qhm1"})("font-size:18px;font-weight:",(e=>{let{selected:t}=e;return t?"bold":"normal"}),";position:relative;margin:0px 30px 10px 43px;&::after{content:'';display:",(e=>{let{selected:t}=e;return t?"block":"none"}),";position:absolute;top:30px;transform:translateX(-4%);height:3px;width:110%;background-color:",(e=>"light"===e.theme?"#000":"#f7fafc"),";}@media (max-width: 768px){font-size:12px;}"),d=(0,r.Z)("div",{target:"ek0qhm0"})({name:"15s0osr",styles:"border-top:0.1px solid #c3c7cc;width:calc(100% - 80px);margin:27px 0 -12px 40px;@media (max-width: 768px){width:calc(100% - 80px);margin:20px 0px 0px 20px;}"})},6982:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(7462),o=a(4316),n=a(7294),i=a(4160),s=a(7909),l=a(1711),c=a(917);var p=e=>{let{title:t,date:a,categories:r,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:i}},link:s}=e;const{theme:p}=(0,n.useContext)(l.N);return(0,c.jsx)(d,{to:s,theme:p},(0,c.jsx)(u,{theme:p},(0,c.jsx)(m,null,t),(0,c.jsx)(b,null,o),(0,c.jsx)(f,null,r.map((e=>(0,c.jsx)(y,{key:e},e)))),(0,c.jsx)(h,null,a)),(0,c.jsx)(g,null,(0,c.jsx)(x,{image:i,alt:"Post Item Image"})))};const d=(0,o.Z)(i.rU,{target:"e18x3st88"})("display:flex;justify-content:space-between;border-radius:10px;box-shadow:",(e=>"light"===e.theme?"0 0 4px rgba(0, 0, 0, 0.15)":"0 0 4px rgba(255, 255, 255, 0.4)"),";transition:0.3s box-shadow;cursor:pointer;text-decoration:none;&:hover{box-shadow:",(e=>"light"===e.theme?"0 0 3px rgba(0, 0, 0, 0.3)":"0 0 3px rgba(255, 255, 255, 0.3)"),";text-decoration:underline;}@media (max-width: 768px){margin-top:50px;}"),u=(0,o.Z)("div",{target:"e18x3st87"})("display:flex;flex-direction:column;padding:25px;width:200px;flex-grow:1;position:relative;color:",(e=>"light"===e.theme?"black":"#cfd8dc"),";@media (max-width: 768px){margin-bottom:50px;}"),g=(0,o.Z)("div",{target:"e18x3st86"})({name:"exjad9",styles:"display:flex;justify-content:center;align-items:center;width:200px;height:200px;border-radius:30px;margin:15px;overflow:hidden;@media (max-width: 768px){display:none;}"}),x=(0,o.Z)(s.G,{target:"e18x3st85"})({name:"4uwt2b",styles:"width:100%;height:100%;object-fit:cover"}),m=(0,o.Z)("div",{target:"e18x3st84"})({name:"1fd1ppd",styles:"display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:28px;font-weight:700;@media (max-width: 768px){font-size:20px;font-weight:700;}"}),f=(0,o.Z)("span",{target:"e18x3st83"})({name:"1lfinal",styles:"display:flex;flex-wrap:wrap;margin:40px 0 0 -5px;position:absolute;bottom:50px;order:1;@media (max-width: 768px){top:75px;}"}),h=(0,o.Z)("span",{target:"e18x3st82"})({name:"1kbpjhf",styles:"font-size:14px;font-weight:400;opacity:0.7;position:absolute;bottom:20px;order:2;@media (max-width: 768px){top:150px;}"}),y=(0,o.Z)("div",{target:"e18x3st81"})("margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:",(e=>"light"===e.theme?"black":"#263238"),";font-size:14px;font-weight:700;color:",(e=>"light"===e.theme?"white":"#cfd8dc"),";"),b=(0,o.Z)("div",{target:"e18x3st80"})({name:"182ltm6",styles:"display:-webkit-box;overflow:hidden;margin-top:20px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:17px;opacity:0.8;order:0;@media (max-width: 768px){font-size:15px;-webkit-line-clamp:2;}"});var v=a(6421);var w=e=>{let{posts:t,selectedCategory:a}=e;const o=(0,n.useMemo)((()=>t.filter((e=>{let{node:{frontmatter:{categories:t}}}=e;return"All"===a||t.includes(a)}))),[t,a]);return(0,n.useEffect)((()=>{}),[o]),(0,c.jsx)(j,null,0===o.length?(0,c.jsx)(k,null,(0,c.jsx)(v.Z,null),"  No Posts Available"):o.map((e=>{let{node:{id:t,frontmatter:a,fields:{slug:o}}}=e;return(0,c.jsx)(p,(0,r.Z)({},a,{link:o,key:t}))})))};const j=(0,o.Z)("div",{target:"e1a4saox1"})({name:"uw3hlf",styles:"display:flex;flex-direction:column;grid-gap:15px;width:calc(100% - 70px);margin:20px;padding:40px;transform:translateY(230px);@media (max-width: 768px){width:calc(100% - 20px);margin:1px;grid-gap:1px;transform:translateY(200px);}"}),k=(0,o.Z)("div",{target:"e1a4saox0"})({name:"mguh1a",styles:"margin:100px;font-size:25px;text-align:center;color:gray;@media (max-width: 768px){font-size:16px;}"})},3270:function(e,t,a){var r=a(4316),o=a(1711),n=a(7294),i=a(917);t.Z=e=>{let{titleText:t}=e;const{theme:a}=(0,n.useContext)(o.N);return(0,i.jsx)(l,{theme:a},(0,i.jsx)(s,null,(0,i.jsx)(c,null,t)))};const s=(0,r.Z)("div",{target:"e1sjrcqy2"})({name:"1jc1d22",styles:"display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;width:100%;height:160px;@media (max-width: 768px){width:100%;height:140px;}"}),l=(0,r.Z)("div",{target:"e1sjrcqy1"})("box-sizing:border-box;width:100%;left:0px;position:fixed;margin-bottom:150px;z-index:2;background-color:",(e=>"light"===e.theme?"#90a4ae":"#0b1118"),";color:#ffffff;"),c=(0,r.Z)("div",{target:"e1sjrcqy0"})({name:"1y0n58s",styles:"font-size:30px;font-weight:600;margin:36px 50px;@media (max-width: 768px){font-size:20px;margin:31px 20px;}"})},5689:function(e,t,a){a.d(t,{D:function(){return r}});const r=2},7950:function(e,t,a){a.d(t,{N:function(){return Y}});var r=a(4316),o=a(7896),n=a(4769),i=a(7462),s=a(3366),l=a(7294),c=a(45),p=a(3589),d=a(1298),u=a(8310),g=a(2354);function x(e){return(0,g.Z)("MuiPagination",e)}(0,u.Z)("MuiPagination",["root","ul","outlined","text"]);var m=a(7633);const f=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var h=a(8789);function y(e){return(0,g.Z)("MuiPaginationItem",e)}var b=(0,u.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),v=a(486),w=a(3631),j=a(4305),k=a(1659),Z=a(5893),C=(0,k.Z)((0,Z.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),z=(0,k.Z)((0,Z.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),$=(0,k.Z)((0,Z.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),P=(0,k.Z)((0,Z.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),N=a(3186);const O=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],S=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,j.Z)(a.size)}`],"text"===a.variant&&t[`text${(0,j.Z)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,j.Z)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},F=(0,N.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}))),M=(0,N.ZP)(w.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,h.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,h.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${b.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:(e.vars||e).shape.borderRadius})),(({theme:e,ownerState:t})=>(0,i.Z)({},"text"===t.variant&&{[`&.${b.selected}`]:(0,i.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},"outlined"===t.variant&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${b.selected}`]:(0,i.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,h.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,h.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,h.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,h.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${b.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})}))),I=(0,N.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((({theme:e,ownerState:t})=>(0,i.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)})));var R=l.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiPaginationItem"}),{className:r,color:o="standard",component:n,components:l={},disabled:u=!1,page:g,selected:x=!1,shape:m="circular",size:f="medium",slots:h={},type:b="page",variant:w="text"}=a,k=(0,s.Z)(a,O),N=(0,i.Z)({},a,{color:o,disabled:u,selected:x,shape:m,size:f,type:b,variant:w}),S=(0,v.Z)(),R=(e=>{const{classes:t,color:a,disabled:r,selected:o,size:n,shape:i,type:s,variant:l}=e,c={root:["root",`size${(0,j.Z)(n)}`,l,i,"standard"!==a&&`${l}${(0,j.Z)(a)}`,r&&"disabled",o&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,p.Z)(c,y,t)})(N),L=("rtl"===S.direction?{previous:h.next||l.next||P,next:h.previous||l.previous||$,last:h.first||l.first||C,first:h.last||l.last||z}:{previous:h.previous||l.previous||$,next:h.next||l.next||P,first:h.first||l.first||C,last:h.last||l.last||z})[b];return"start-ellipsis"===b||"end-ellipsis"===b?(0,Z.jsx)(F,{ref:t,ownerState:N,className:(0,c.Z)(R.root,r),children:"…"}):(0,Z.jsxs)(M,(0,i.Z)({ref:t,ownerState:N,component:n,disabled:u,className:(0,c.Z)(R.root,r)},k,{children:["page"===b&&g,L?(0,Z.jsx)(I,{as:L,ownerState:N,className:R.icon}):null]}))}));const L=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],B=(0,N.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),A=(0,N.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function E(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}var q=l.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiPagination"}),{boundaryCount:r=1,className:o,color:n="standard",count:l=1,defaultPage:u=1,disabled:g=!1,getItemAriaLabel:h=E,hideNextButton:y=!1,hidePrevButton:b=!1,renderItem:v=(e=>(0,Z.jsx)(R,(0,i.Z)({},e))),shape:w="circular",showFirstButton:j=!1,showLastButton:k=!1,siblingCount:C=1,size:z="medium",variant:$="text"}=a,P=(0,s.Z)(a,L),{items:N}=function(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:r=1,defaultPage:o=1,disabled:n=!1,hideNextButton:l=!1,hidePrevButton:c=!1,onChange:p,page:d,showFirstButton:u=!1,showLastButton:g=!1,siblingCount:x=1}=e,h=(0,s.Z)(e,f),[y,b]=(0,m.Z)({controlled:d,default:o,name:a,state:"page"}),v=(e,t)=>{d||b(t),p&&p(e,t)},w=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},j=w(1,Math.min(t,r)),k=w(Math.max(r-t+1,t+1),r),Z=Math.max(Math.min(y-x,r-t-2*x-1),t+2),C=Math.min(Math.max(y+x,t+2*x+2),k.length>0?k[0]-2:r-1),z=[...u?["first"]:[],...c?[]:["previous"],...j,...Z>t+2?["start-ellipsis"]:t+1<r-t?[t+1]:[],...w(Z,C),...C<r-t-1?["end-ellipsis"]:r-t>t?[r-t]:[],...k,...l?[]:["next"],...g?["last"]:[]],$=e=>{switch(e){case"first":return 1;case"previous":return y-1;case"next":return y+1;case"last":return r;default:return null}},P=z.map((e=>"number"==typeof e?{onClick:t=>{v(t,e)},type:"page",page:e,selected:e===y,disabled:n,"aria-current":e===y?"true":void 0}:{onClick:t=>{v(t,$(e))},type:e,page:$(e),selected:!1,disabled:n||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?y>=r:y<=1)}));return(0,i.Z)({items:P},h)}((0,i.Z)({},a,{componentName:"Pagination"})),O=(0,i.Z)({},a,{boundaryCount:r,color:n,count:l,defaultPage:u,disabled:g,getItemAriaLabel:h,hideNextButton:y,hidePrevButton:b,renderItem:v,shape:w,showFirstButton:j,showLastButton:k,siblingCount:C,size:z,variant:$}),S=(e=>{const{classes:t,variant:a}=e,r={root:["root",a],ul:["ul"]};return(0,p.Z)(r,x,t)})(O);return(0,Z.jsx)(B,(0,i.Z)({"aria-label":"pagination navigation",className:(0,c.Z)(S.root,o),ownerState:O,ref:t},P,{children:(0,Z.jsx)(A,{className:S.ul,ownerState:O,children:N.map(((e,t)=>(0,Z.jsx)("li",{children:v((0,i.Z)({},e,{color:n,"aria-label":h(e.type,e.page,e.selected),shape:w,size:z,variant:$}))},t)))})}))})),U=a(4160),T=a(1711),W=a(917);var V=e=>{let{count:t,defaultPage:a=1,path:r,category:o=""}=e;const{0:n,1:i}=(0,l.useState)(Math.max(1,Math.min(t,a)));return(0,W.jsx)(l.Fragment,null,(0,W.jsx)(D,null,(0,W.jsx)(_,{count:t,page:n,onChange:(e,a)=>{const n=Math.max(1,Math.min(t,a));i(n),(0,U.c4)(r+"?page="+n+"&category="+o,{replace:!0})},showFirstButton:!0,showLastButton:!0})))};const D=(0,r.Z)("div",{target:"e1x4dnw91"})({name:"1kzmp8z",styles:"display:grid;place-items:center;margin-top:auto;padding:15px 0;font-size:15px;text-align:center;line-height:1.5;@media (max-width: 768px){font-size:13px;}"}),_=(0,r.Z)(q,{target:"e1x4dnw90"})((()=>{const{theme:e}=(0,l.useContext)(T.N);return{"& .MuiPaginationItem-root":{color:"light"===e?"black":"white"},"& .MuiPaginationItem-root.Mui-selected":{backgroundColor:"light"===e?"#E0E0E0":"#616161"}}}),"");var G=a(7563);const Y=(e,t)=>{const a=(0,o.useLocation)(),r=(0,G.parse)(a.search),i="string"==typeof r.page?parseInt(r.page,10):1,{0:s,1:c}=(0,l.useState)(i),p=Math.ceil(e.length/t);(0,l.useEffect)((()=>{c(Math.max(1,Math.min(p,i)))}),[p,a.search]);const d=(0,l.useMemo)((()=>{const a=(s-1)*t;return e.slice(a,a+t)}),[e,s,t]),u=d.length,g=e=>{let{path:t,category:a}=e;return(0,W.jsx)(l.Fragment,null,(0,W.jsx)(X,null,(0,W.jsx)(V,{count:p,defaultPage:i,path:t,category:a})),(0,W.jsx)(H,{numPosts:u},(0,W.jsx)(n.Z,null)))};return 0===e.length?{currentItems:[],setCurrentPage:c,maxPage:p,PaginationNFooter:g,noData:!0}:{currentItems:d,setCurrentPage:c,maxPage:p,PaginationNFooter:g,noData:!1}},H=(0,r.Z)("footer",{target:"egmras31"})("transform:translateY(",(e=>{let{numPosts:t}=e;return t>1?"60%":"338%"}),");"),X=(0,r.Z)("div",{target:"egmras30"})({name:"r2hchq",styles:"margin-top:230px"})},7563:function(e,t,a){const r=a(610),o=a(4020),n=a(500),i=a(2806);function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function c(e,t){return t.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const a=function(e){let t;switch(e.arrayFormat){case"index":return(e,a,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=a):r[e]=a};case"bracket":return(e,a,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],a):r[e]=[a]:r[e]=a};case"comma":case"separator":return(t,a,r)=>{const o="string"==typeof a&&a.includes(e.arrayFormatSeparator),n="string"==typeof a&&!o&&c(a,e).includes(e.arrayFormatSeparator);a=n?c(a,e):a;const i=o||n?a.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===a?a:c(a,e);r[t]=i};default:return(e,t,a)=>{void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){if(""===o)continue;let[e,i]=n(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator"].includes(t.arrayFormat)?i:c(i,t),a(c(e,t),i,r)}for(const o of Object.keys(r)){const e=r[o];if("object"==typeof e&&null!==e)for(const a of Object.keys(e))e[a]=g(e[a],t);else r[o]=g(e,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(((e,t)=>{const a=r[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=p(a):e[t]=a,e}),Object.create(null))}t.extract=u,t.parse=x,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const a=a=>t.skipNull&&null==e[a]||t.skipEmptyString&&""===e[a],r=function(e){switch(e.arrayFormat){case"index":return t=>(a,r)=>{const o=a.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?a:null===r?[...a,[l(t,e),"[",o,"]"].join("")]:[...a,[l(t,e),"[",l(o,e),"]=",l(r,e)].join("")]};case"bracket":return t=>(a,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?a:null===r?[...a,[l(t,e),"[]"].join("")]:[...a,[l(t,e),"[]=",l(r,e)].join("")];case"comma":case"separator":return t=>(a,r)=>null==r||0===r.length?a:0===a.length?[[l(t,e),"=",l(r,e)].join("")]:[[a,l(r,e)].join(e.arrayFormatSeparator)];default:return t=>(a,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?a:null===r?[...a,l(t,e)]:[...a,[l(t,e),"=",l(r,e)].join("")]}}(t),o={};for(const i of Object.keys(e))a(i)||(o[i]=e[i]);const n=Object.keys(o);return!1!==t.sort&&n.sort(t.sort),n.map((a=>{const o=e[a];return void 0===o?"":null===o?l(a,t):Array.isArray(o)?o.reduce(r(a),[]).join("&"):l(a,t)+"="+l(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[a,r]=n(e,"#");return Object.assign({url:a.split("?")[0]||"",query:x(u(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:c(r,t)}:{})},t.stringifyUrl=(e,a)=>{a=Object.assign({encode:!0,strict:!0},a);const r=d(e.url).split("?")[0]||"",o=t.extract(e.url),n=t.parse(o,{sort:!1}),i=Object.assign(n,e.query);let s=t.stringify(i,a);s&&(s=`?${s}`);let c=function(e){let t="";const a=e.indexOf("#");return-1!==a&&(t=e.slice(a)),t}(e.url);return e.fragmentIdentifier&&(c=`#${l(e.fragmentIdentifier,a)}`),`${r}${s}${c}`},t.pick=(e,a,r)=>{r=Object.assign({parseFragmentIdentifier:!0},r);const{url:o,query:n,fragmentIdentifier:s}=t.parseUrl(e,r);return t.stringifyUrl({url:o,query:i(n,a),fragmentIdentifier:s},r)},t.exclude=(e,a,r)=>{const o=Array.isArray(a)?e=>!a.includes(e):(e,t)=>!a(e,t);return t.pick(e,o,r)}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const a=e.indexOf(t);return-1===a?[e]:[e.slice(0,a),e.slice(a+t.length)]}},610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},6421:function(e,t,a){var r=a(4836);t.Z=void 0;var o=r(a(1991)),n=a(5893),i=(0,o.default)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.Z=i}}]);
//# sourceMappingURL=3190b68697c16582b2505cb11a78d99decc9dd8d-aadddb093f35ab5003f8.js.map