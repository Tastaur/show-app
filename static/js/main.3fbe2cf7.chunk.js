(this["webpackJsonpshow-app"]=this["webpackJsonpshow-app"]||[]).push([[0],{113:function(e,t,A){"use strict";A.r(t);var r,i,n,c,a,s,o,l,u,h,b,p,g,j,w,O,d,m,B,C,f,x,y,E,k,Q,S=A(2),I=A(1),G=A(50),R=A.n(G),D=(A(33),A(17)),J=A(10),F=A(15),z=A(11),K=A.n(z),U=A(16),L=A(51),M=A(4),v=A(22),N=A(3),H=(A(34),A(0)),Y=(r=function(){function e(){Object(F.a)(this,e),Object(M.a)(this,"id",i,this),Object(M.a)(this,"url",n,this),Object(M.a)(this,"name",c,this),Object(M.a)(this,"type",a,this),Object(M.a)(this,"language",s,this),Object(M.a)(this,"genres",o,this),Object(M.a)(this,"status",l,this),Object(M.a)(this,"runtime",u,this),Object(M.a)(this,"premiered",h,this),Object(M.a)(this,"officialSite",b,this),Object(M.a)(this,"time",p,this),Object(M.a)(this,"schedule",g,this),Object(M.a)(this,"rating",j,this),Object(M.a)(this,"weight",w,this),Object(M.a)(this,"network",O,this),Object(M.a)(this,"webChannel",d,this),Object(M.a)(this,"externals",m,this),Object(M.a)(this,"image",B,this),Object(M.a)(this,"summary",C,this),Object(M.a)(this,"updated",f,this),Object(M.a)(this,"_link",x,this)}return Object(v.a)(e,[{key:"fromAPI",value:function(e){this.id=e.id,this.url=e.url,this.name=e.name,this.type=e.type,this.language=e.language,this.genres=e.genres,this.status=e.status,this.runtime=e.runtime,this.premiered=e.premiered,this.officialSite=e.officialSite,this.time=e.time,this.schedule=e.schedule,this.rating=e.rating,this.weight=e.weight,this.network=e.network,this.webChannel=e.webChannel,this.externals=e.externals,this.image=e.image,this.summary=e.summary,this.updated=e.updated,this._link=e._link}},{key:"genreToString",get:function(){return this.genres&&this.genres.length>0?this.genres.join(", "):"Without genres"}},{key:"getCurrentRating",get:function(){return this.rating.average?"".concat(this.rating.average):"Without rating"}}]),e}(),i=Object(N.a)(r.prototype,"id",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),n=Object(N.a)(r.prototype,"url",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=Object(N.a)(r.prototype,"name",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),a=Object(N.a)(r.prototype,"type",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(N.a)(r.prototype,"language",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),o=Object(N.a)(r.prototype,"genres",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),l=Object(N.a)(r.prototype,"status",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=Object(N.a)(r.prototype,"runtime",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),h=Object(N.a)(r.prototype,"premiered",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b=Object(N.a)(r.prototype,"officialSite",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=Object(N.a)(r.prototype,"time",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),g=Object(N.a)(r.prototype,"schedule",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{days:[],time:""}}}),j=Object(N.a)(r.prototype,"rating",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{average:null}}}),w=Object(N.a)(r.prototype,"weight",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),O=Object(N.a)(r.prototype,"network",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{country:{code:"",name:"",timezone:""},id:0,name:""}}}),d=Object(N.a)(r.prototype,"webChannel",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=Object(N.a)(r.prototype,"externals",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{imdb:"",thetvdb:0,tvrage:0}}}),B=Object(N.a)(r.prototype,"image",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{medium:"",original:""}}}),C=Object(N.a)(r.prototype,"summary",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=Object(N.a)(r.prototype,"updated",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),x=Object(N.a)(r.prototype,"_link",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{previousepisode:{href:""},self:{href:""}}}}),Object(N.a)(r.prototype,"genreToString",[H.k],Object.getOwnPropertyDescriptor(r.prototype,"genreToString"),r.prototype),Object(N.a)(r.prototype,"getCurrentRating",[H.k],Object.getOwnPropertyDescriptor(r.prototype,"getCurrentRating"),r.prototype),Object(N.a)(r.prototype,"fromAPI",[H.i],Object.getOwnPropertyDescriptor(r.prototype,"fromAPI"),r.prototype),r),T=function(){var e=Object(U.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/shows?page=1",t={method:"GET"},e.next=4,fetch("https://api.tvmaze.com/shows?page=1",t).then(function(){var e=Object(U.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<400)){e.next=2;break}return e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(function(){var e=Object(U.a)(K.a.mark((function e(t){var A;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,t.json();case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=void 0;case 7:return A=e.t0,e.abrupt("return",A);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw new Error(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=A(52),W=(y=function(){function e(t){var A=this;Object(F.a)(this,e),this.store=t,Object(M.a)(this,"shows",E,this),Object(M.a)(this,"isLoading",k,this),Object(M.a)(this,"isFinishLoading",Q,this),this.getSortedShowList=Object(P.a)((function(e){return""!==e?A.showsList.filter((function(t){var A;return null===(A=t.genres)||void 0===A?void 0:A.includes(e)})):A.showsList})),Object(H.x)(this)}return Object(v.a)(e,[{key:"clearStore",value:function(){this.shows=new Map}},{key:"workerAfterFetch",value:function(e){this.clearStore();var t,A=Object(L.a)(e);try{for(A.s();!(t=A.n()).done;){var r=t.value;this.setShowItem(r)}}catch(i){A.e(i)}finally{A.f()}this.isLoading=!1,this.isFinishLoading=!0}},{key:"getShows",value:function(){var e=Object(U.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,T();case 4:t=e.sent,this.workerAfterFetch(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"setShowItem",value:function(e){var t=new Y;t.fromAPI(e),this.shows.set(t.id,t)}},{key:"getShowById",value:function(e){return this.shows.get(e)}},{key:"showsList",get:function(){return Array.from(this.shows.values())}},{key:"genreList",get:function(){var e=new Set;return this.showsList.forEach((function(t){var A;return null===(A=t.genres)||void 0===A?void 0:A.forEach((function(t){return e.add(t)}))})),Array.from(e.values())}}]),e}(),E=Object(N.a)(y.prototype,"shows",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),k=Object(N.a)(y.prototype,"isLoading",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Q=Object(N.a)(y.prototype,"isFinishLoading",[H.z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(N.a)(y.prototype,"showsList",[H.k],Object.getOwnPropertyDescriptor(y.prototype,"showsList"),y.prototype),Object(N.a)(y.prototype,"genreList",[H.k],Object.getOwnPropertyDescriptor(y.prototype,"genreList"),y.prototype),Object(N.a)(y.prototype,"clearStore",[H.i],Object.getOwnPropertyDescriptor(y.prototype,"clearStore"),y.prototype),Object(N.a)(y.prototype,"workerAfterFetch",[H.i],Object.getOwnPropertyDescriptor(y.prototype,"workerAfterFetch"),y.prototype),Object(N.a)(y.prototype,"getShows",[H.i],Object.getOwnPropertyDescriptor(y.prototype,"getShows"),y.prototype),Object(N.a)(y.prototype,"setShowItem",[H.i],Object.getOwnPropertyDescriptor(y.prototype,"setShowItem"),y.prototype),Object(N.a)(y.prototype,"getShowById",[H.i],Object.getOwnPropertyDescriptor(y.prototype,"getShowById"),y.prototype),y),q=new function e(){Object(F.a)(this,e),this.showStore=void 0,this.showStore=new W(this)},V=function(){return Object(I.useMemo)((function(){return q}),[])},Z=A(53),X=A.n(Z),_=function(){return Object(S.jsx)("div",{className:X.a.wrapper,children:Object(S.jsx)("img",{src:"data:image/gif;base64,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",alt:""})})},$=A(30),ee=A.n($),te=function(e){for(var t=e.totalCount,A=e.currentPage,r=e.pageSize,i=e.setCurrentPage,n=Math.ceil(t/r),c=[],a=1;a<=n;a++)c.push(a);return r>t?null:Object(S.jsxs)("div",{className:ee.a.wrapper,children:[Object(S.jsx)("button",{disabled:1===A,onClick:function(){i(A-1)},children:"\u2190"}),c.map((function(e){return Object(S.jsx)("span",{className:A===e?ee.a.active:"",onClick:function(){return i(e)},children:e},e)})),Object(S.jsx)("button",{disabled:n<=A,onClick:function(){return i(A+1)},children:"\u2192"})]})},Ae=A(54),re=A.n(Ae),ie=function(e){var t=e.isShowImage,A=e.imgSrc;return Object(S.jsx)("tr",{children:Object(S.jsx)("td",{className:re.a.imgWrapper,onClick:function(){return t(!1)},children:Object(S.jsx)("img",{src:A})})})},ne=A(12),ce=A(55),ae=A.n(ce),se=Object(J.a)((function(e){var t=e.id,A=V().showStore,r=Object(I.useState)(!1),i=Object(D.a)(r,2),n=i[0],c=i[1],a=A.getShowById(t);if(!a)return null;var s=a.image,o=a.name,l=a.genreToString,u=a.runtime,h=a.getCurrentRating;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(S.jsx)("img",{src:s.medium,alt:"",onClick:function(){return c(!0)}})}),Object(S.jsx)("td",{children:Object(S.jsx)(ne.b,{to:"/".concat(t),className:ae.a.link,children:Object(S.jsx)("h4",{children:o})})}),Object(S.jsx)("td",{children:Object(S.jsx)("h4",{children:l})}),Object(S.jsx)("td",{children:Object(S.jsx)("h4",{children:u})}),Object(S.jsx)("td",{children:Object(S.jsx)("h4",{children:h})})]}),n?Object(S.jsx)(ie,{imgSrc:s.original,isShowImage:c}):null]})})),oe=A(57),le=A.n(oe),ue=function(){return Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:le.a.row,children:[Object(S.jsx)("td",{children:null}),Object(S.jsx)("td",{children:Object(S.jsx)("h2",{children:"Title"})}),Object(S.jsx)("td",{children:Object(S.jsx)("h2",{children:"Genres"})}),Object(S.jsx)("td",{children:Object(S.jsx)("h2",{children:"Duration"})}),Object(S.jsx)("td",{children:Object(S.jsx)("h2",{children:"Rating"})})]})})},he=A(24),be=A.n(he),pe=function(e){var t=e.showList,A=e.searchText,r=A?"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(A," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"):"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e";return Object(S.jsx)(S.Fragment,{children:t.length>0?Object(S.jsxs)("table",{className:be.a.table,children:[Object(S.jsx)(ue,{}),Object(S.jsx)("tbody",{className:be.a.body,children:t.map((function(e){return Object(S.jsx)(se,{id:e.id},e.id)}))})]}):Object(S.jsx)("div",{className:be.a.empty,children:Object(S.jsx)("h2",{children:r})})})},ge=A(20),je=A.n(ge),we=Object(J.a)((function(e){var t=e.setCurrentGenre,A=e.setSearchText,r=e.searchText,i=e.selectGenre,n=V().showStore.genreList;return Object(S.jsxs)("header",{className:je.a.wrapper,children:[Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:"Show list"})}),Object(S.jsxs)("div",{className:je.a.setting,children:[Object(S.jsx)("div",{children:Object(S.jsx)("input",{className:je.a.input,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",type:"text",value:r,onChange:function(e){e&&A(e.currentTarget.value)}})}),Object(S.jsx)("div",{children:Object(S.jsxs)("select",{className:je.a.select,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",value:i,onChange:function(e){var r;e&&(A(""),t(null===(r=e.currentTarget)||void 0===r?void 0:r.value))},children:[Object(S.jsx)("option",{value:"",children:"All"}),n.map((function(e){return Object(S.jsx)("option",{value:e,children:e},e)}))]})})]})]})})),Oe=A(58),de=A.n(Oe),me=Object(J.a)((function(){var e=V().showStore;Object(I.useEffect)((function(){e.getShows()}),[]);var t=Object(I.useState)(1),A=Object(D.a)(t,2),r=A[0],i=A[1],n=Object(I.useState)(""),c=Object(D.a)(n,2),a=c[0],s=c[1],o=Object(I.useState)(""),l=Object(D.a)(o,2),u=l[0],h=l[1];if(Object(I.useEffect)((function(){i(1)}),[u,a]),e.isLoading)return Object(S.jsx)(_,{});var b=e.getSortedShowList(u).filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),p=b.slice(50*(r-1),50*r);return Object(S.jsxs)("div",{className:de.a.wrapper,children:[Object(S.jsx)(we,{searchText:a,selectGenre:u,setCurrentGenre:h,setSearchText:s}),Object(S.jsx)(pe,{showList:p,searchText:a}),Object(S.jsx)(te,{totalCount:b.length,currentPage:r,pageSize:50,setCurrentPage:i})]})})),Be=A(5),Ce=A(59),fe=A.n(Ce),xe=A(60),ye=A.n(xe),Ee=Object(J.a)((function(e){var t=e.id,A=V().showStore.getShowById(Number(t));if(!A)return Object(S.jsx)(Be.a,{to:"/"});var r=A.image,i=A.name,n=A.genreToString,c=A.summary,a=A.getCurrentRating,s=A.runtime;return Object(S.jsxs)("div",{className:ye.a.wrapper,children:[Object(S.jsx)("img",{src:r.original||r.medium,alt:""}),Object(S.jsx)("h3",{children:i}),Object(S.jsxs)("p",{children:["Genres : ",n]}),Object(S.jsxs)("p",{children:["Duration : ",s]}),Object(S.jsxs)("p",{children:["Rating : ",a]}),Object(S.jsxs)("p",{children:["Description: ",fe()(c)]}),Object(S.jsx)(ne.b,{to:"/",children:Object(S.jsx)("button",{children:"Back to list"})})]})})),ke=Object(J.a)((function(){var e=Object(Be.f)().id,t=V().showStore;return Object(I.useEffect)((function(){0===t.shows.size&&t.getShows()}),[]),t.isFinishLoading?Object(S.jsx)("div",{children:Object(S.jsx)(Ee,{id:e})}):Object(S.jsx)(_,{})}));var Qe=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(Be.b,{path:"/:id",render:function(){return Object(S.jsx)(ke,{})}}),Object(S.jsx)(Be.b,{path:"/",exact:!0,render:function(){return Object(S.jsx)(me,{})}})]})},Se=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,114)).then((function(t){var A=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;A(e),r(e),i(e),n(e),c(e)}))};R.a.render(Object(S.jsx)(ne.a,{children:Object(S.jsx)(Qe,{})}),document.getElementById("root")),Se()},20:function(e,t,A){e.exports={wrapper:"style_wrapper__3peFL",setting:"style_setting__147Cl",input:"style_input__1Pjwh",select:"style_select__2Slm8"}},24:function(e,t,A){e.exports={table:"style_table__3_EUg",body:"style_body__PX0p1",empty:"style_empty__dNcId"}},30:function(e,t,A){e.exports={wrapper:"style_wrapper__3iGyh",active:"style_active__2RfW2"}},33:function(e,t,A){},53:function(e,t,A){e.exports={wrapper:"style_wrapper__Nz6Uz"}},54:function(e,t,A){e.exports={imgWrapper:"style_imgWrapper__3OlWx"}},55:function(e,t,A){e.exports={link:"style_link__35B3Y"}},57:function(e,t,A){e.exports={row:"style_row__3HZkc"}},58:function(e,t,A){e.exports={wrapper:"style_wrapper__3OToL"}},60:function(e,t,A){e.exports={wrapper:"style_wrapper__19kxv"}},95:function(e,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.3fbe2cf7.chunk.js.map