"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[673],{6008:function(e,t,a){a.d(t,{$4:function(){return l},z3:function(){return r},zl:function(){return n}});const l=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],n=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,t,a){var l=a(7294);t.Z=e=>{let{edges:t,categoriesName:a}=e;const r={All:0,...a.reduce(((e,t)=>(e[t]=0,e)),{})};return(0,l.useMemo)((()=>t.reduce(((e,t)=>{let{node:{frontmatter:{categories:l}}}=t;return l.forEach((t=>{a.includes(t)&&(void 0===e[t]?e[t]=1:e[t]++)})),e.All++,e}),r)),[t,a])}},3561:function(e,t,a){a.r(t);var l=a(7294),r=a(7563),n=a(46),s=a(3270),u=a(8133),o=a(6008),c=a(7412),i=a(1711),d=a(5689),g=a(6982),C=a(5907),f=a(7950),T=a(7896),b=a(917);t.default=e=>{let{data:{allMarkdownRemark:{edges:t}}}=e;const a=(0,T.useLocation)(),v=(0,r.parse)(a.search),A="string"==typeof v.category&&v.category?v.category:"JAVASCRIPT",S=o.zl.map((e=>e.value)),P=(0,c.Z)({edges:t,categoriesName:S}),R=t.filter((e=>e.node.frontmatter.categories.includes(A))),{currentItems:y,PaginationNFooter:h}=(0,f.N)(R,d.D);return(0,b.jsx)(l.Fragment,null,(0,b.jsx)(i.z,null,(0,b.jsx)(n.Z,null),(0,b.jsx)(C.ZP,null),(0,b.jsx)(s.Z,{titleText:"프론트엔드 핵심 기술 / JAVASCRIPT"}),(0,b.jsx)(u.Z,{detailCategoryList:P,selectedDetailCategory:A,basePath:"frontendCoreTech",categoriesMap:o.zl}),(0,b.jsx)(g.Z,{selectedCategory:A,posts:y}),(0,b.jsx)(h,{path:"/frontendCoreTech/JAVASCRIPT",category:A})))}}}]);
//# sourceMappingURL=component---src-pages-frontend-core-tech-javascript-tsx-1d1691a45451b25b2588.js.map