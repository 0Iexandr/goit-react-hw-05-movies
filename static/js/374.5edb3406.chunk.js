"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[374],{641:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(942),a=t(439),i=t(791),s=t(87),c=t(689),o=t(390),u="Details_details__zhRZh",l="Details_img__ZUxBG",v="Details_info__9+4L+",p=t(184),f=function(e){var n=e.originalTitle,t=e.originalName,r=e.overview,a=e.year,i=e.vote,s=e.posterPath,c=e.genres;return(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("img",{className:l,src:s?"https://image.tmdb.org/t/p/w500".concat(s):"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png",alt:null!==n&&void 0!==n?n:t}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsxs)("h2",{children:[null!==n&&void 0!==n?n:t," (",a,")"]}),(0,p.jsxs)("p",{children:["Vote: ",i]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:c})]})]})},d=t(639),h="MovieDetails_links__EzCWB",m="MovieDetails_additionalInfo__4J0eA",_="MovieDetails_back__Jj+0O",x="MovieDetails_NavLink__AG3Uu",g="MovieDetails_active__uPNdW",w=t(694),j=t.n(w),k=function(){var e,n,t=(0,c.TH)(),u=(0,c.UO)().idMovie,l=(0,i.useState)(null),v=(0,a.Z)(l,2),w=v[0],k=v[1];if((0,i.useEffect)((function(){(0,o.Pg)(u).then((function(e){k(e)}))}),[u]),w){var b=function(e){var n=[];return e.map((function(e){return n.push(e.name)})),n.join(", ")}(w.genres),N=w.original_title,y=w.original_name,Z=w.overview,D=w.release_date,M=w.vote_average,A=w.poster_path,L=D.slice(0,4),O=M.toFixed(2);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.rU,{className:_,to:null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"Go back"}),(0,p.jsx)(f,{originalTitle:N,originalName:y,overview:Z,year:L,vote:O,posterPath:A,genres:b}),(0,p.jsx)("h3",{className:m,children:"Additional information"}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)(s.OL,{className:function(e){var n=e.isActive;return j()(x,(0,r.Z)({},g,n))},to:"cast",children:"Cast"}),(0,p.jsx)(s.OL,{className:function(e){var n=e.isActive;return j()(x,(0,r.Z)({},g,n))},to:"reviews",children:"Review"})]}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(d.a,{}),children:(0,p.jsx)(c.j3,{})})]})}}},390:function(e,n,t){t.d(n,{Df:function(){return c},M1:function(){return v},Pg:function(){return u},gy:function(){return o},tx:function(){return l}});var r=t(861),a=t(687),i=t.n(a),s=t(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4d1fe51ed84bccfd5906e94a2d193282"}}),c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/all/day",{params:{page:1}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=374.5edb3406.chunk.js.map