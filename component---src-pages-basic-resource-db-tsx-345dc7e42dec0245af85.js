"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[31],{6008:function(e,a,l){l.d(a,{$4:function(){return t},z3:function(){return r},zl:function(){return s}});const t=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],r=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],s=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,a,l){var t=l(7294);a.Z=e=>{let{edges:a,categoriesName:l}=e;const r={All:0,...l.reduce(((e,a)=>(e[a]=0,e)),{})};return(0,t.useMemo)((()=>a.reduce(((e,a)=>{let{node:{frontmatter:{categories:t}}}=a;return t.forEach((a=>{l.includes(a)&&(void 0===e[a]?e[a]=1:e[a]++)})),e.All++,e}),r)),[a,l])}},548:function(e,a,l){l.r(a);var t=l(7294),r=l(7563),s=l(9481),u=l(3270),n=l(4600),o=l(6982),c=l(6008),i=l(1711),d=l(7412),g=l(917);a.default=e=>{let{location:{search:a},data:{allMarkdownRemark:{edges:l}}}=e;const b=(0,r.parse)(a),f="string"==typeof b.category&&b.category?b.category:"DB",v=c.$4.map((e=>e.value)),C=(0,d.Z)({edges:l,categoriesName:v});return(0,g.jsx)(t.Fragment,null,(0,g.jsx)(i.z,null,(0,g.jsx)(s.Z,null),(0,g.jsx)(u.Z,{titleText:"기초 및 학습 리소스 / 데이터베이스"}),(0,g.jsx)(n.Z,{detailCategoryList:C,selectedDetailCategory:f,basePath:"basicResource",categoriesMap:c.$4}),(0,g.jsx)(o.Z,{selectedCategory:f,posts:l})))}}}]);
//# sourceMappingURL=component---src-pages-basic-resource-db-tsx-345dc7e42dec0245af85.js.map