"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[118],{6008:function(e,a,t){t.d(a,{$4:function(){return l},z3:function(){return s},zl:function(){return r}});const l=[{value:"CS",label:"컴퓨터구조"},{value:"DB",label:"데이터베이스"},{value:"DS",label:"자료구조"},{value:"NETWORK",label:"네트워크"},{value:"OS",label:"운영체제"}],s=[{value:"REACT",label:"REACT"},{value:"TYPESCRIPT",label:"TYPESCRIPT"}],r=[{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JAVASCRIPT",label:"JAVASCRIPT"}]},7412:function(e,a,t){var l=t(7294);a.Z=e=>{let{edges:a,categoriesName:t}=e;const s={All:0,...t.reduce(((e,a)=>(e[a]=0,e)),{})};return(0,l.useMemo)((()=>a.reduce(((e,a)=>{let{node:{frontmatter:{categories:l}}}=a;return l.forEach((a=>{t.includes(a)&&(void 0===e[a]?e[a]=1:e[a]++)})),e.All++,e}),s)),[a,t])}},4776:function(e,a,t){t.r(a);var l=t(4316),s=t(7294),r=t(7563),n=t(9481),u=t(3270),o=t(4600),c=t(6982),g=t(6008),i=t(1711),f=t(7412),d=t(4769),C=t(2146),b=t(5689),p=t(7896),v=t(7007),j=t(5907),x=t(917);a.default=e=>{let{data:{allMarkdownRemark:{edges:a}}}=e;const t=(0,p.useLocation)(),l=(0,r.parse)(t.search),S="string"==typeof l.category&&l.category?l.category:"CS",h=g.$4.map((e=>e.value)),T=(0,f.Z)({edges:a,categoriesName:h}),P="string"==typeof l.page?parseInt(l.page,10):1,{currentItems:Z,setCurrentPage:R,maxPage:A}=(0,v.h)(a,b.D);return(0,s.useEffect)((()=>{R(P)}),[t.search]),(0,x.jsx)(s.Fragment,null,(0,x.jsx)(i.z,null,(0,x.jsx)(j.ZP,null),(0,x.jsx)(n.Z,null),(0,x.jsx)(u.Z,{titleText:"기초 및 학습 리소스 / 컴퓨터구조"}),(0,x.jsx)(o.Z,{detailCategoryList:T,selectedDetailCategory:S,basePath:"basicResource",categoriesMap:g.$4}),(0,x.jsx)(c.Z,{selectedCategory:S,posts:Z}),(0,x.jsx)(y,null,(0,x.jsx)(C.Z,{count:A,onChange:R,defaultPage:P,path:"/basicResource/CS",category:S})),(0,x.jsx)(m,null,(0,x.jsx)(d.Z,null))))};const m=(0,l.Z)("footer",{target:"e4zj85e1"})({name:"1f4hu7k",styles:"transform:translateY(280%)"}),y=(0,l.Z)("div",{target:"e4zj85e0"})({name:"o94h2j",styles:"margin-top:280px"})}}]);
//# sourceMappingURL=component---src-pages-basic-resource-cs-tsx-3b1545fcb71d422d4ad1.js.map