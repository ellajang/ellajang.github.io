"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[87],{6008:function(e,a,t){t.d(a,{$4:function(){return l},z3:function(){return r},zl:function(){return s}});const l=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],s=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,a,t){var l=t(7294);a.Z=e=>{let{edges:a,categoriesName:t}=e;const r={All:0,...t.reduce(((e,a)=>(e[a]=0,e)),{})};return(0,l.useMemo)((()=>a.reduce(((e,a)=>{let{node:{frontmatter:{categories:l}}}=a;return l.forEach((a=>{t.includes(a)&&(void 0===e[a]?e[a]=1:e[a]++)})),e.All++,e}),r)),[a,t])}},5745:function(e,a,t){t.r(a);var l=t(7294),r=t(7563),s=t(46),u=t(3270),n=t(8133),o=t(6982),c=t(6008),i=t(1711),g=t(5689),d=t(7412),b=t(7896),f=t(5926),v=t(5907),C=t(917);a.default=e=>{let{data:{allMarkdownRemark:{edges:a}}}=e;const t=(0,b.useLocation)(),S=(0,r.parse)(t.search),T="string"==typeof S.category&&S.category?S.category:"OS",y=c.$4.map((e=>e.value)),R=(0,d.Z)({edges:a,categoriesName:y}),m=a.filter((e=>e.node.frontmatter.categories.includes(T))),{currentItems:p,PaginationNFooter:x}=(0,f.N)(m,g.D);return(0,C.jsx)(l.Fragment,null,(0,C.jsx)(i.z,null,(0,C.jsx)(s.Z,null),(0,C.jsx)(v.ZP,null),(0,C.jsx)(u.Z,{titleText:"기초 및 학습 리소스 / 운영체제"}),(0,C.jsx)(n.Z,{detailCategoryList:R,selectedDetailCategory:T,basePath:"basicResource",categoriesMap:c.$4}),(0,C.jsx)(o.Z,{selectedCategory:T,posts:p}),(0,C.jsx)(x,{path:"/basicResource/OS",category:T})))}}}]);
//# sourceMappingURL=component---src-pages-basic-resource-os-tsx-c3214c93ee2d95690de8.js.map