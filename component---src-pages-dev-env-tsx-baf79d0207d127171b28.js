"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[267],{6008:function(e,a,t){t.d(a,{$4:function(){return l},z3:function(){return r},zl:function(){return s}});const l=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],s=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,a,t){var l=t(7294);a.Z=e=>{let{edges:a,categoriesName:t}=e;const r={All:0,...t.reduce(((e,a)=>(e[a]=0,e)),{})};return(0,l.useMemo)((()=>a.reduce(((e,a)=>{let{node:{frontmatter:{categories:l}}}=a;return l.forEach((a=>{t.includes(a)&&(void 0===e[a]?e[a]=1:e[a]++)})),e.All++,e}),r)),[a,t])}},6376:function(e,a,t){t.r(a);var l=t(7294),r=t(7563),s=t(8656),u=t(3270),n=t(8133),o=t(6008),c=t(7412),i=t(1711),d=t(5689),g=t(6982),v=t(5907),b=t(7950),f=t(7896),C=t(917);a.default=e=>{let{data:{allMarkdownRemark:{edges:a}}}=e;const t=(0,f.useLocation)(),T=(0,r.parse)(t.search),S="string"==typeof T.category&&T.category?T.category:"All",y=o.z3.map((e=>e.value)),p=(0,c.Z)({edges:a,categoriesName:y}),{currentItems:x,PaginationNFooter:A}=(0,b.N)(a,d.D);return(0,C.jsx)(l.Fragment,null,(0,C.jsx)(i.z,null,(0,C.jsx)(s.Z,null),(0,C.jsx)(v.ZP,null),(0,C.jsx)(u.Z,{titleText:"개발환경"}),(0,C.jsx)(n.Z,{detailCategoryList:p,selectedDetailCategory:S,basePath:"devEnv",categoriesMap:o.z3}),(0,C.jsx)(g.Z,{selectedCategory:S,posts:x}),(0,C.jsx)(A,{path:"/devEnv/",category:S})))}}}]);
//# sourceMappingURL=component---src-pages-dev-env-tsx-baf79d0207d127171b28.js.map