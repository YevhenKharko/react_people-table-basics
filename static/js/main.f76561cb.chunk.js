(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c(6),s=(c(31),c(32),c(2)),r=c(10),j=c.n(r),i=c(3),l=function(){var e=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.b,{className:e,to:"/",children:"Home"}),Object(i.jsx)(a.b,{className:e,to:"/people",children:"People"})]})})})},o=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=c(4),d=c(0),h=(c(34),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"".concat(null===t||void 0===t?void 0:t.slug),className:j()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},x=function(e){var t=e.people,c=Object(s.q)().slug,n=function(e){return t.find((function(t){return t.name===e}))};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=n(e.motherName||"-"),a=n(e.fatherName||"-");return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===e.slug}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(u,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:t?Object(i.jsx)(u,{person:t}):e.motherName||"-"}),Object(i.jsx)("td",{children:a?Object(i.jsx)(u,{person:a}):e.fatherName||"-"})]},e.slug)}))})]})},p=function(){var e=Object(d.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!1),s=Object(b.a)(a,2),r=s[0],j=s[1],l=Object(d.useState)(!0),o=Object(b.a)(l,2),u=o[0],p=o[1];return Object(d.useEffect)((function(){O().then((function(e){return n(e)})).then((function(){return p(!1)})).catch((function(){p(!1),j(!0)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:u?Object(i.jsx)(h,{}):r?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):c.length?Object(i.jsx)(x,{people:c}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})})]})},m=(c(35),function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})}),f=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(o,{})}),Object(i.jsx)(s.b,{path:"/people",element:Object(i.jsx)(p,{}),children:Object(i.jsx)(s.b,{path:":slug",element:Object(i.jsx)(p,{})})}),Object(i.jsx)(s.b,{path:"/*",element:Object(i.jsx)(m,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(f,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f76561cb.chunk.js.map