/*! For license information please see component---src-templates-tag-template-tag-template-tsx-53316fedbc1d04d46ab8.js.LICENSE.txt */
(self.webpackChunkinfosecdecompress=self.webpackChunkinfosecdecompress||[]).push([[854],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},1717:function(e,t,a){"use strict";a.d(t,{f:function(){return l}});var n=a(7294),r=a(1597),o="Feed-module--link--GNuXE",l=function(e){var t=e.edges;return n.createElement("div",{className:"Feed-module--feed--3dYe7"},t.map((function(e){return n.createElement("div",{className:"Feed-module--item--ooOky",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--ECIPa"},n.createElement("time",{className:"Feed-module--time--17yla",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),n.createElement("span",{className:"Feed-module--divider--3kBgQ"}),n.createElement("span",{className:"Feed-module--category--DGEwP"},n.createElement(r.Link,{to:e.node.fields.categorySlug,className:o},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--1qA0W"},n.createElement(r.Link,{className:o,to:e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--UXUO2"},e.node.frontmatter.description),n.createElement(r.Link,{className:"Feed-module--more--Axk8-",to:e.node.fields.slug},"Read"))})))}},2679:function(e,t,a){"use strict";a.d(t,{t:function(){return c}});var n=a(7294),r=a(5900),o=a.n(r),l=a(1597),i=a(1098),s="Pagination-module--disable--4zAQA",c=function(e){var t,a,r=e.prevPagePath,c=e.nextPagePath,m=e.hasNextPage,d=e.hasPrevPage,u=o()("Pagination-module--previousLink--1mLDH",((t={})[s]=!d,t)),g=o()("Pagination-module--nextLink--DTlD5",((a={})[s]=!m,a));return n.createElement("div",{className:"Pagination-module--pagination--3KtNE"},n.createElement("div",{className:"Pagination-module--previous--3Jp_8"},n.createElement(l.Link,{rel:"prev",to:d?r:"/",className:u},i.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--PX9hj"},n.createElement(l.Link,{rel:"next",to:m?c:"/",className:g},i.X.NEXT_PAGE)))}},9922:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(1717),o=a(3402),l=a(2391),i=a(2679),s=a(3099),c=a(1900);t.default=function(e){var t=e.data,a=e.pageContext,m=(0,c.$W)(),d=m.title,u=m.subtitle,g=a.group,f=a.pagination,p=f.currentPage,P=f.prevPagePath,v=f.nextPagePath,E=f.hasPrevPage,h=f.hasNextPage,N=t.allMarkdownRemark.edges,k=p>0?g+" - Page "+p+" - "+d:g+" - "+d;return n.createElement(o.A,{title:k,description:u},n.createElement(s.Y,null),n.createElement(l.T,{title:g},n.createElement(r.f,{edges:N}),n.createElement(i.t,{prevPagePath:P,nextPagePath:v,hasPrevPage:E,hasNextPage:h})))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-tag-template-tsx-53316fedbc1d04d46ab8.js.map