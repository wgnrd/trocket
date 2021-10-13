(this.webpackJsonptrocket=this.webpackJsonptrocket||[]).push([[0],{57:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var c,a,r=t(8),i=t.n(r),s=t(46),l=t.n(s),o=(t(57),t(33)),d=(t(58),t(71)),j=(t(59),t(70)),u=t(39),b=t(80),h=Object(b.a)(c||(c=Object(u.a)(["\n  query countryByCode($code: String!) {\n    countries(where: { alpha2Code: { eq: $code } }) {\n      id\n      name\n      population\n      capital {\n        name\n      }\n      continent {\n        name\n      }\n      currencies {\n        id\n        name\n        unitSymbols\n      }\n      languages {\n        id\n        name\n      }\n    }\n  }\n"]))),p=Object(b.a)(a||(a=Object(u.a)(["\n  query {\n    client {\n      ipAddress {\n        country {\n          alpha2Code\n        }\n      }\n    }\n    countries {\n      id\n      alpha2Code\n    }\n  }\n"]))),O=t(3),x=function(e){var n=e.onChange,t=Object(j.a)(p),c=t.data,a=t.loading,s=t.error,l=Object(r.useState)(),d=Object(o.a)(l,2),u=d[0],b=d[1],h="e.g. RU";if(s)return Object(O.jsx)("h1",{children:"Error.."});if(a)return Object(O.jsx)("input",{disabled:!0,placeholder:h,value:""});if(void 0===u){var x=c.client.ipAddress.country.alpha2Code.toUpperCase();b(x),n(x)}return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)("input",{type:"text",name:"searchbar",id:"sbAlphaCode",placeholder:h,maxLength:"2",value:u,onChange:function(e){var t=e.target;b(t.value.toUpperCase()),n(t.value.toUpperCase())},list:"alphaCodes",className:"searchbar"}),Object(O.jsx)("datalist",{id:"alphaCodes",children:c&&c.countries.map((function(e){return Object(O.jsx)("option",{value:e.alpha2Code},e.id)}))})]})},m=(t(62),function(e){var n=e.loading,t=e.data;if(!t||n)return Object(O.jsx)("div",{className:"loader"});if(0===t.countries.length)return Object(O.jsx)("p",{className:"notfound",children:"No country found \ud83e\udd14"});return t.countries.map((function(e){var n,t,c;return Object(O.jsxs)("div",{className:"result",children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Population: "}),Object(O.jsx)("span",{children:(c=e.population,c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Continent: "}),Object(O.jsx)("span",{children:null===(n=e.continent)||void 0===n?void 0:n.name})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Capital City: "}),Object(O.jsx)("span",{children:null===(t=e.capital)||void 0===t?void 0:t.name})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Currency: "}),Object(O.jsx)("ul",{className:"result__list",children:e.currencies.map((function(e){return Object(O.jsxs)("li",{children:[e.name," | ",e.unitSymbols]},e.id)}))})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Language: "}),Object(O.jsx)("ul",{className:"result__list",children:e.languages.map((function(e){return Object(O.jsx)("li",{children:e.name},e.id)}))})]})]},e.id)}))});var v=function(){var e=Object(d.a)(h),n=Object(o.a)(e,2),t=n[0],c=n[1],a=c.data,r=c.loading;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"searcharea",children:[Object(O.jsx)("h1",{children:"Trocket"}),Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("p",{children:"Usless stuff about countries"}),Object(O.jsx)(x,{onChange:function(e){e.length<2||t({variables:{code:e}})}})]})]}),Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsx)(m,{data:a,loading:r})})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))},f=t(72),C=t(78),S=t(77),_=t(79),E=t(76),y=t(49),N=Object(y.a)((function(e){var n=e.graphqlErrors;e.networkError;n&&n.map((function(e){var n=e.message;e.location,e.path;return console.error("GraphQl error ".concat(n)),null}))})),T=Object(f.a)([N,new C.a({uri:"https://api.everbase.co/graphql?apikey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_EVERBASE_API_KEY)})]),w=new S.a({cache:new _.a,link:T});l.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(E.a,{client:w,children:Object(O.jsx)(v,{})})}),document.getElementById("root")),g()}},[[63,1,2]]]);
//# sourceMappingURL=main.f48e958c.chunk.js.map