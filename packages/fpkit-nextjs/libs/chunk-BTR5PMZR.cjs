'use strict';

function g(o,r="date",a="descending"){let t=[];return o.forEach(e=>{e.kind==="MdxPage"&&e.frontMatter?.description&&e.frontMatter?.type!=="page"?t.push(e):e.kind==="Folder"&&e.children&&e.children.forEach(n=>{n.kind==="MdxPage"&&n.frontMatter?.type!=="page"&&n.frontMatter?.description&&t.push(n);});}),r&&i(t,r,a),t}function f(o,r="page"){let a=[];return o.forEach(t=>{t.kind==="MdxPage"&&t.frontMatter?.type===r?a.push(t):t.kind==="Folder"&&t.children&&t.children.forEach(e=>{e.kind==="MdxPage"&&e.frontMatter?.type==="page"&&e.frontMatter?.description&&a.push(e);});}),a}function i(o,r,a){o.sort((t,e)=>{switch(r){case"date":let n=new Date(t.frontMatter?.date),s=new Date(e.frontMatter?.date);return a==="ascending"?n.getTime()-s.getTime():s.getTime()-n.getTime();case"name":let d=t.name.toLowerCase(),p=e.name.toLowerCase();return a==="ascending"?d.localeCompare(p):p.localeCompare(d);default:return 0}});}function c(o,r,a){let t=Math.ceil(o.length/r),e=(a-1)*r,n=o.slice(e,e+r);return {totalPages:t,currentPage:a,hasNextPage:a<t,hasPrevPage:a>1,pages:n}}var M=g;

exports.a = g;
exports.b = f;
exports.c = i;
exports.d = c;
exports.e = M;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-BTR5PMZR.cjs.map