"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[201],{6008:function(e,a,t){t.d(a,{$4:function(){return l},z3:function(){return r},zl:function(){return s}});const l=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],s=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,a,t){var l=t(7294);a.Z=e=>{let{edges:a,categoriesName:t}=e;const r={All:0,...t.reduce(((e,a)=>(e[a]=0,e)),{})};return(0,l.useMemo)((()=>a.reduce(((e,a)=>{let{node:{frontmatter:{categories:l}}}=a;return l.forEach((a=>{t.includes(a)&&(void 0===e[a]?e[a]=1:e[a]++)})),e.All++,e}),r)),[a,t])}},8179:function(e,a,t){t.r(a);var l=t(8133),r=t(6982),s=t(3270),u=t(8656),n=t(1711),o=t(7412),c=t(5907),i=t(7896),g=t(7950),b=t(7563),d=t(5689),f=t(6008),v=t(917);a.default=e=>{let{data:{allMarkdownRemark:{edges:a}}}=e;const t=(0,i.useLocation)(),C=(0,b.parse)(t.search),T="string"==typeof C.category&&C.category?C.category:"All",S=f.$4.map((e=>e.value)),y=(0,o.Z)({edges:a,categoriesName:S}),{currentItems:R,PaginationNFooter:p}=(0,g.N)(a,d.D);return(0,v.jsx)(n.z,null,(0,v.jsx)(u.Z,null),(0,v.jsx)(s.Z,{titleText:"기초 및 학습 리소스"}),(0,v.jsx)(c.ZP,null),(0,v.jsx)(l.Z,{detailCategoryList:y,selectedDetailCategory:T,basePath:"basicResource",categoriesMap:f.$4}),(0,v.jsx)(r.Z,{selectedCategory:T,posts:R}),(0,v.jsx)(p,{path:"/basicResource/",category:T}))}}}]);
//# sourceMappingURL=component---src-pages-basic-resource-tsx-a40e4ce8745eb1025b4e.js.map