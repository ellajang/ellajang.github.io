"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[201],{6008:function(e,a,l){l.d(a,{$4:function(){return t},z3:function(){return r},zl:function(){return s}});const t=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"NEXT",label:"NEXT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],s=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,a,l){var t=l(7294);a.Z=e=>{let{edges:a,categoriesName:l}=e;const r={All:0,...l.reduce(((e,a)=>(e[a]=0,e)),{})};return(0,t.useMemo)((()=>a.reduce(((e,a)=>{let{node:{frontmatter:{categories:t}}}=a;return t.forEach((a=>{l.includes(a)&&(void 0===e[a]?e[a]=1:e[a]++)})),e.All++,e}),r)),[a,l])}},8179:function(e,a,l){l.r(a);var t=l(8133),r=l(6982),s=l(3270),u=l(6800),n=l(1711),o=l(7412),c=l(5907),i=l(7896),b=l(7950),g=l(7563),d=l(5689),v=l(6008),f=l(917);a.default=e=>{let{data:{allMarkdownRemark:{edges:a}}}=e;const l=(0,i.useLocation)(),C=(0,g.parse)(l.search),T="string"==typeof C.category&&C.category?C.category:"All",S=v.$4.map((e=>e.value)),y=(0,o.Z)({edges:a,categoriesName:S}),{currentItems:R,PaginationNFooter:p}=(0,b.N)(a,d.D);return(0,f.jsx)(n.z,null,(0,f.jsx)(u.Z,null),(0,f.jsx)(s.Z,{titleText:"기초 및 학습 리소스"}),(0,f.jsx)(c.ZP,null),(0,f.jsx)(t.Z,{detailCategoryList:y,selectedDetailCategory:T,basePath:"basicResource",categoriesMap:v.$4}),(0,f.jsx)(r.Z,{selectedCategory:T,posts:R}),(0,f.jsx)(p,{path:"/basicResource/",category:T}))}}}]);
//# sourceMappingURL=component---src-pages-basic-resource-tsx-988009e790f40ed95197.js.map