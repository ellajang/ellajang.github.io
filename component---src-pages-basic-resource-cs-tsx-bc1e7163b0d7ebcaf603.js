"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[118],{4776:function(e,t,a){a.r(t);var s=a(4600),r=a(6982),l=a(3270),o=a(9481),c=a(6008),u=a(1711),n=a(7563),d=a(7294),g=a(917);t.default=e=>{let{location:{search:t},data:{allMarkdownRemark:{edges:a}}}=e;const i=(0,n.parse)(t),f="string"==typeof i.category&&i.category?i.category:"CS",y={All:0,...c.$4.reduce(((e,t)=>(e[t]=0,e)),{})},x=(0,d.useMemo)((()=>a.reduce(((e,t)=>{let{node:{frontmatter:{categories:a}}}=t;return a.forEach((t=>{c.$4.includes(t)&&(void 0===e[t]?e[t]=1:e[t]++)})),e.All++,e}),y)),[]);return(0,g.jsx)(d.Fragment,null,(0,g.jsx)(u.z,null,(0,g.jsx)(o.Z,null),(0,g.jsx)(l.Z,{titleText:"기초 및 학습 리소스 / 컴퓨터구조"}),(0,g.jsx)(s.Z,{detailCategoryList:x,selectedDetailCategory:f,basePath:"basicResource"}),(0,g.jsx)(r.Z,{selectedCategory:f,posts:a})))}}}]);
//# sourceMappingURL=component---src-pages-basic-resource-cs-tsx-bc1e7163b0d7ebcaf603.js.map