"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[201],{4769:function(e,t,a){var l=a(4316),r=a(3238),n=a(1711),o=a(7294),u=a(917);t.Z=()=>{const{theme:e}=(0,o.useContext)(n.N);return(0,u.jsx)(c,{theme:e},"© 2023 Developer Ella, Built with Gatsby.",(0,u.jsx)("a",{href:"https://github.com/ellajang",target:"_blank"},(0,u.jsx)(r.Z,null)))};const c=(0,l.Z)("footer",{target:"e1oae0v80"})("display:grid;place-items:center;padding:15px 0;font-size:15px;text-align:center;line-height:1.5;color:",(e=>"light"===e.theme?"#263238":"#c4d0d7"),";background-color:",(e=>"light"===e.theme?"#f7fafc":"#12171b"),";position:static;left:0;width:100%;@media (max-width: 768px){font-size:13px;}")},6008:function(e,t,a){a.d(t,{$4:function(){return l},z3:function(){return r},zl:function(){return n}});const l=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],n=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,t,a){var l=a(7294);t.Z=e=>{let{edges:t,categoriesName:a}=e;const r={All:0,...a.reduce(((e,t)=>(e[t]=0,e)),{})};return(0,l.useMemo)((()=>t.reduce(((e,t)=>{let{node:{frontmatter:{categories:l}}}=t;return l.forEach((t=>{a.includes(t)&&(void 0===e[t]?e[t]=1:e[t]++)})),e.All++,e}),r)),[t,a])}},8179:function(e,t,a){a.r(t);var l=a(7294),r=a(7563),n=a(4600),o=a(6982),u=a(3270),c=a(9481),s=a(1711),i=a(7412),f=a(6008),d=a(4769),g=a(2146),p=a(5689),b=a(917);t.default=e=>{let{location:{search:t},data:{allMarkdownRemark:{edges:a}}}=e;const v=(0,r.parse)(t),h="string"==typeof v.category&&v.category?v.category:"All",x=f.$4.map((e=>e.value)),y=(0,i.Z)({edges:a,categoriesName:x}),[j,m]=l.useState(1),C=(0,l.useMemo)((()=>{const e=(j-1)*p.D;return a.slice(e,e+p.D)}),[a,j]);return(0,b.jsx)(l.Fragment,null,(0,b.jsx)(s.z,null,(0,b.jsx)(c.Z,null),(0,b.jsx)(u.Z,{titleText:"기초 및 학습 리소스"}),(0,b.jsx)(n.Z,{detailCategoryList:y,selectedDetailCategory:h,basePath:"basicResource",categoriesMap:f.$4}),(0,b.jsx)(o.Z,{selectedCategory:h,posts:C}),(0,b.jsx)(g.Z,{count:Math.ceil(a.length/p.D),onChange:e=>{m(e)}}),(0,b.jsx)(d.Z,null)))}},3238:function(e,t,a){var l=a(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=r?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(l,n,u):l[n]=e[n]}l.default=e,a&&a.set(e,l)}(a(7294));var r=l(a(1991)),n=a(5893);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}var u=(0,r.default)((0,n.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");t.Z=u}}]);
//# sourceMappingURL=component---src-pages-basic-resource-tsx-5b59758645a30758c8ba.js.map