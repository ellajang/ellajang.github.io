"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[475],{6008:function(e,a,t){t.d(a,{$4:function(){return l},z3:function(){return r},zl:function(){return n}});const l=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],n=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,a,t){var l=t(7294);a.Z=e=>{let{edges:a,categoriesName:t}=e;const r={All:0,...t.reduce(((e,a)=>(e[a]=0,e)),{})};return(0,l.useMemo)((()=>a.reduce(((e,a)=>{let{node:{frontmatter:{categories:l}}}=a;return l.forEach((a=>{t.includes(a)&&(void 0===e[a]?e[a]=1:e[a]++)})),e.All++,e}),r)),[a,t])}},3057:function(e,a,t){t.r(a);var l=t(7294),r=t(7563),n=t(8656),s=t(3270),u=t(8133),o=t(7412),c=t(1711),i=t(6982),d=t(5907),g=t(7896),f=t(7950),C=t(5689),b=t(6008),v=t(917);a.default=e=>{let{data:{allMarkdownRemark:{edges:a}}}=e;const t=(0,g.useLocation)(),T=(0,r.parse)(t.search),S="string"==typeof T.category&&T.category?T.category:"All",y=b.zl.map((e=>e.value)),h=(0,o.Z)({edges:a,categoriesName:y}),{currentItems:p,PaginationNFooter:x}=(0,f.N)(a,C.D);return(0,v.jsx)(l.Fragment,null,(0,v.jsx)(c.z,null,(0,v.jsx)(n.Z,null),(0,v.jsx)(d.ZP,null),(0,v.jsx)(s.Z,{titleText:"프론트엔드 핵심 기술"}),(0,v.jsx)(u.Z,{detailCategoryList:h,selectedDetailCategory:S,basePath:"frontendCoreTech",categoriesMap:b.zl}),(0,v.jsx)(i.Z,{selectedCategory:S,posts:p}),(0,v.jsx)(x,{path:"/frontendCoreTech/",category:S})))}}}]);
//# sourceMappingURL=component---src-pages-frontend-core-tech-tsx-413a89299f793089e357.js.map