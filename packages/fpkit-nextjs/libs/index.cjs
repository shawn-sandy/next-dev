'use strict';

var chunkSSDNK5IR_cjs = require('./chunk-SSDNK5IR.cjs');
var chunkG7TXK6LK_cjs = require('./chunk-G7TXK6LK.cjs');
var chunkBTR5PMZR_cjs = require('./chunk-BTR5PMZR.cjs');
var react = require('@fpkit/react');
var jsxRuntime = require('react/jsx-runtime');
var J = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var J__default = /*#__PURE__*/_interopDefault(J);

var w=({route:e,styles:t,children:r,...o})=>jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsx(react.Tag,{as:"li",styles:t,...o,children:jsxRuntime.jsx(react.Tag,{as:"a",href:e,styles:{textTransform:"capitalize"},children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:r})})})}),D=({children:e,styles:t,...r})=>jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsx(react.Tag,{as:"nav",style:t,...r,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e})})}),u=D;D.displayName="Nav";function Z(e){let t=[];return e.forEach(r=>{r.kind==="Folder"&&t.push(r);}),t}var We=({data:e,brand:t,styles:r})=>{let o=Z(e);return jsxRuntime.jsxs(u,{styles:r,children:[!!t&&jsxRuntime.jsx(react.Tag,{as:"div",children:jsxRuntime.jsx(react.Title,{elm:"h1",styles:{"--fs":"1.2rem"},children:jsxRuntime.jsx(react.Tag,{as:"a",href:t.url,styles:{textTransform:"capitalize"},children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:t.logo})})})}),jsxRuntime.jsx(react.Tag,{as:"ul",children:o.map(a=>jsxRuntime.jsx(w,{route:a.route,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:a.name})},a.name))})]})};var ee=({pages:e,styles:t,...r})=>e?jsxRuntime.jsx(react.Tag,{as:"ul",styles:t,...r,children:e?.map(o=>{let{route:a}=o;return jsxRuntime.jsx(react.Tag,{as:"li",children:jsxRuntime.jsx(react.Link,{href:a,children:o.frontMatter?.title})},J__default.default.useId())})},J__default.default.useId()):null;ee.displayName="NavList";var tt=({url:e,logo:t})=>jsxRuntime.jsx(react.Tag,{as:"div",children:jsxRuntime.jsx(react.Title,{elm:"h1",styles:{"--fs":"1.2rem"},children:jsxRuntime.jsx(react.Link,{href:e,styles:{textTransform:"capitalize"},children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:t})})})});var h=({styles:e,children:t,...r})=>jsxRuntime.jsx(react.Tag,{as:"header",styles:e,...r,children:jsxRuntime.jsx(react.Tag,{as:"section",children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:t})})}),N=({children:e,styles:t={minHeight:"40vh"},...r})=>jsxRuntime.jsx(react.Tag,{as:"main",styles:t,...r,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e})}),X=({children:e,styles:t,...r})=>jsxRuntime.jsx(react.Tag,{as:"footer",...r,styles:t,children:jsxRuntime.jsx(react.Tag,{as:"section",children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e})})}),z=({children:e,styles:t,...r})=>jsxRuntime.jsx(react.Tag,{as:"aside",styles:t,...r,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e})}),g=({children:e,styles:t,...r})=>jsxRuntime.jsx(react.Tag,{as:"section",styles:t,...r,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e})}),K=({children:e,styles:t,...r})=>jsxRuntime.jsx(react.Tag,{as:"article",styles:t,...r,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e})});var se=({children:e,sideBar:t,styles:r,classes:o})=>jsxRuntime.jsx(N,{styles:r,children:jsxRuntime.jsxs(g,{"data-content":!0,children:[jsxRuntime.jsx(K,{children:e}),jsxRuntime.jsx(z,{children:t})]})});se.displayName="Main";var le=({styles:e,children:t,...r})=>jsxRuntime.jsx(h,{styles:e,...r,children:t});function de({title:e,link:t,linkLabel:r,description:o}){return jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx(react.Title,{elm:"h2",children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e})}),o&&jsxRuntime.jsx(react.Text,{elm:"p",children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:o})}),jsxRuntime.jsx(react.Text,{elm:"p",children:jsxRuntime.jsx(react.Tag,{as:"a",href:t,"data-btn":!0,"data-variant":"primary","data-style":"pill",children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:r||"Get Started"})})})]})}var me=({title:e,link:t,linkLabel:r,description:o,styles:a,children:n})=>{if(!e)throw new Error("ThemeHeader requires a title prop");return jsxRuntime.jsx(le,{children:n||jsxRuntime.jsx(de,{title:e,link:t,linkLabel:r,description:o})})};me.displayName="Header";var A=({orgName:e="FPKit",copyInfo:t="All right reserved",styles:r,children:o,...a})=>jsxRuntime.jsxs(X,{styles:r,...a,children:[!!o&&jsxRuntime.jsx(g,{children:o}),jsxRuntime.jsxs("p",{children:[t," \xA9 ",e," ",new Date().getFullYear()]})]});A.displayName="ThemeFooter";var L=({children:e})=>jsxRuntime.jsx(jsxRuntime.Fragment,{children:e}),ye=({title:e="Header Title",styles:t,children:r,...o})=>jsxRuntime.jsxs(h,{styles:t,...o,children:[jsxRuntime.jsx(react.Title,{elm:"h2",children:e}),jsxRuntime.jsx(jsxRuntime.Fragment,{children:r})]}),Te=({children:e,styles:t,...r})=>jsxRuntime.jsx(N,{styles:t,...r,children:jsxRuntime.jsx(g,{children:e})}),xe=({copyInfo:e,orgName:t,styles:r,children:o,...a})=>jsxRuntime.jsx(A,{styles:r,orgName:t,copyInfo:e,...a,children:o}),ue=({children:e,styles:t,...r})=>jsxRuntime.jsx(u,{styles:t,...r,children:e});L.Header=ye;L.Main=Te;L.Footer=xe;L.Nav=ue;var ke=({showDescription:e=!1,elm:t="h2",as:r="article",postList:o,...a})=>jsxRuntime.jsx(jsxRuntime.Fragment,{children:o?.map(n=>{let{route:k}=n;return jsxRuntime.jsx(react.Tag,{as:r,...a,children:e?jsxRuntime.jsxs(react.Article,{styles:{paddingBlock:"1rem"},children:[jsxRuntime.jsx(react.Title,{elm:t,children:jsxRuntime.jsx(react.Link,{href:k,children:n.frontMatter?.title})}),jsxRuntime.jsx("p",{children:n.frontMatter?.description}),jsxRuntime.jsx("p",{children:jsxRuntime.jsx(react.Link,{href:k,"data-btn":!0,"data-variant":"primary","data-style":"pill",children:"Continue Reading"})}),jsxRuntime.jsx("hr",{})]}):jsxRuntime.jsx(react.Link,{href:k,children:n.frontMatter?.title})},J__default.default.useId())})});ke.displayName="PostsList";var b=({title:e,description:t,linkText:r,route:o,img:a,styles:n})=>jsxRuntime.jsxs(react.Article,{styles:n,children:[!!a&&jsxRuntime.jsx(react.Link,{href:o,rel:"Cover image",children:jsxRuntime.jsx(react.Tag,{as:"figure",children:jsxRuntime.jsx(react.Img,{src:a,alt:e,width:820,height:320})})}),jsxRuntime.jsx(react.Title,{elm:"h2",children:jsxRuntime.jsx(react.Link,{href:o,children:e})}),jsxRuntime.jsx("p",{children:t}),jsxRuntime.jsx(react.Tag,{children:jsxRuntime.jsx(react.Link,{href:o,"data-btn":"pill","data-variant":"primary",children:r??="Continue Reading"})})]});b.displayName="ArticleList";var Bt=({data:e,styles:t,...r})=>e.length<=0?null:jsxRuntime.jsx(jsxRuntime.Fragment,{children:e?.map(o=>jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx(b,{title:o.frontMatter?.title,route:o.route,description:o?.frontMatter?.description,styles:t,...r},o.route),jsxRuntime.jsx("hr",{})]}))});var Be=({items:e,styles:t,children:r,dataStyles:o})=>e.length<=1?null:jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsxs("div",{children:[r??jsxRuntime.jsx(react.Tag,{as:"h3",children:"Table of contents"}),jsxRuntime.jsx(react.Tag,{as:"ul",styles:t,"data-fp-list":`unstyled ${o}`,children:!!e&&e.map(a=>jsxRuntime.jsx(we,{...a},J__default.default.useId()))})]})}),we=({depth:e,value:t,id:r})=>jsxRuntime.jsx("li",{children:jsxRuntime.jsx("a",{href:`#${r}`,children:t})});Be.displayName="Toc";

Object.defineProperty(exports, 'useConfig', {
	enumerable: true,
	get: function () { return chunkSSDNK5IR_cjs.b; }
});
Object.defineProperty(exports, 'usePageOpts', {
	enumerable: true,
	get: function () { return chunkSSDNK5IR_cjs.a; }
});
Object.defineProperty(exports, 'MDXComponents', {
	enumerable: true,
	get: function () { return chunkG7TXK6LK_cjs.a; }
});
Object.defineProperty(exports, 'FilterMdxPages', {
	enumerable: true,
	get: function () { return chunkBTR5PMZR_cjs.a; }
});
Object.defineProperty(exports, 'FilterPageType', {
	enumerable: true,
	get: function () { return chunkBTR5PMZR_cjs.b; }
});
Object.defineProperty(exports, 'paginateMdxPages', {
	enumerable: true,
	get: function () { return chunkBTR5PMZR_cjs.d; }
});
Object.defineProperty(exports, 'sortMdxPages', {
	enumerable: true,
	get: function () { return chunkBTR5PMZR_cjs.c; }
});
exports.Article = K;
exports.Aside = z;
exports.DefaultHeader = de;
exports.Footer = X;
exports.FooterSection = xe;
exports.Header = h;
exports.HeaderBase = le;
exports.HeaderSection = ye;
exports.Main = N;
exports.MainSection = Te;
exports.Nav = D;
exports.NavBrand = tt;
exports.NavItem = w;
exports.NavList = ee;
exports.NavSection = ue;
exports.Navigation = We;
exports.PG = L;
exports.PageFooter = A;
exports.PageHeader = me;
exports.PageList = Bt;
exports.PageMain = se;
exports.PostsList = ke;
exports.Section = g;
exports.Toc = Be;
exports.TocItems = we;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map