(this["webpackJsonpproducts-table"]=this["webpackJsonpproducts-table"]||[]).push([[0],{41:function(t,e,c){},63:function(t,e,c){},64:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),a=c(16),i=c.n(a),o=c(11),s=c(14),j=(c(41),c(15)),u=c(31),d=c.n(u),l=c(3),b=c(32),O=c(9),h=c(1);var p=function(t){var e=t.gid,c=t.gname,n=t.gprice,a=t.onSelectProduct,i=r.a.useState(0),o=Object(j.a)(i,2),s=o[0],u=o[1],d=r.a.useState(0),l=Object(j.a)(d,2),b=l[0],O=l[1];return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e}),Object(h.jsx)("td",{children:c}),Object(h.jsx)("td",{children:n}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",onChange:function(t){O(b),u(t.target.value*n);var r={id:e,count:Number(t.target.value),totalPrice:t.target.value*n,name:c};a(r)},defaultValue:b})}),Object(h.jsx)("td",{children:s})]})};var f=function(t){var e=t.products,c=t.onSelectProduct,n=Object(l.f)().id,r=[];return r=void 0!==n?e.filter((function(t){return t.rid===n})):e,Object(h.jsx)("table",{children:e&&r.map((function(t,e){return Object(h.jsxs)("tbody",{children:[Object(h.jsx)("tr",{children:Object(h.jsx)("th",{colSpan:"5",children:Object(h.jsx)("h1",{children:t.rname})})}),t.goods.map((function(t){return Object(h.jsx)(p,Object(O.a)(Object(O.a)({},t),{},{onSelectProduct:c}),t.gid)}))]},t.rid+"_"+e)}))})};c(63);var x=function(t){var e=t.products;return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)("ul",{children:e&&e.map((function(t,e){return Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/".concat(t.rid),children:t.rname})},t+"_"+e)}))})})};var v=function(){var t=Object(s.b)(),e=r.a.useState([]),c=Object(j.a)(e,2),n=c[0],a=c[1],i=Object(s.c)((function(t){return t.cart})),o=i.items,u=i.totalCount,O=i.totalPrice;r.a.useEffect((function(){fetch("https://datainlife.ru/junior_task/get_products.php").then((function(t){return t.json()})).then((function(t){return a(t)}))}),[]);var p=function(e){t({type:"ADD_TO_CART",payload:e})};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{products:n}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0,children:Object(h.jsx)(f,{products:n,onSelectProduct:p})}),Object(h.jsx)(l.a,{path:"/:id",exact:!0,children:Object(h.jsx)(f,{products:n,onSelectProduct:p})})]})]}),Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsxs)("div",{children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0437\u0430 \u0442\u043e\u0432\u0430\u0440\u044b: ",Object(h.jsx)("span",{children:O})]}),Object(h.jsxs)("div",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",Object(h.jsx)("span",{children:u})]}),Object(h.jsx)("button",{onClick:function(){var t={product:{}};Object.keys(o).forEach((function(e){t.product[e]=o[e].count}));var e=Object(b.serialize)(t);d()({url:"https://datainlife.ru/junior_task/add_basket.php",method:"POST",data:e,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(t){var e=t.data;return console.log(e)}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})},m=c(12),_=c(33),g=c(18),S={items:{},totalPrice:0,totalCount:0},y=function(t){return Object.keys(t).reduce((function(e,c){return t[c].totalPrice+e}),0)},P=function(t){return Object.keys(t).reduce((function(e,c){return t[c].count+e}),0)},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":var c=Object(O.a)(Object(O.a)({},t.items),{},Object(g.a)({},e.payload.id,e.payload));return Object(O.a)(Object(O.a)({},t),{},{items:c,totalPrice:y(c),totalCount:P(c)});default:return t}},C=Object(m.b)({cart:k}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.c,T=Object(m.d)(C,E(Object(m.a)(_.a)));i.a.render(Object(h.jsx)(s.a,{store:T,children:Object(h.jsx)(o.a,{children:Object(h.jsx)(v,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.9cf36c98.chunk.js.map