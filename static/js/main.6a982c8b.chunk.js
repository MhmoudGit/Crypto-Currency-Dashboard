(this["webpackJsonpcrypto-dashboard"]=this["webpackJsonpcrypto-dashboard"]||[]).push([[0],{21:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),a=t(16),s=t.n(a),i=(t(21),t(3)),j=t(0),d=function(e){var c=e.exhcangeRate,t=e.chosenPrimaryCurrency,n=e.chosenSecondaryCurrency;return Object(j.jsxs)("div",{className:"exchange-rate",children:[Object(j.jsx)("h3",{children:"Exchange Rate"}),Object(j.jsx)("h1",{children:c}),Object(j.jsxs)("p",{children:[t," to ",n]})]})},o=t(6),u=t.n(o),b=function(){var e=["BTC","ETH","USD","XRP","LTC","ADA"],c=Object(n.useState)("BTC"),t=Object(i.a)(c,2),r=t[0],a=t[1],s=Object(n.useState)("BTC"),o=Object(i.a)(s,2),b=o[0],h=o[1],l=Object(n.useState)(1),O=Object(i.a)(l,2),p=O[0],x=O[1],m=Object(n.useState)(0),y=Object(i.a)(m,2),v=y[0],f=y[1],C=Object(n.useState)("BTC"),g=Object(i.a)(C,2),S=g[0],E=g[1],N=Object(n.useState)("BTC"),R=Object(i.a)(N,2),T=R[0],w=R[1],B=Object(n.useState)(0),k=Object(i.a)(B,2),A=k[0],P=k[1];return Object(j.jsxs)("div",{className:"currency-converter",children:[Object(j.jsx)("h2",{children:"CurrencyConverter"}),Object(j.jsxs)("div",{className:"input-box",children:[Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Primary Currency"}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"number",name:"currency-amount1",value:p,onChange:function(e){return x(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("select",{value:r,name:"currency-option1",className:"currency-options",onChange:function(e){return a(e.target.value)},children:e.map((function(c){return Object(j.jsx)("option",{children:c},e.indexOf(c))}))})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Secondary Currency"}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"number",name:"currency-amount2",value:A,disabled:!0})}),Object(j.jsx)("td",{children:Object(j.jsx)("select",{value:b,name:"currency-option2",className:"currency-options",onChange:function(e){return h(e.target.value)},children:e.map((function(c){return Object(j.jsx)("option",{children:c},e.indexOf(c))}))})})]})]})}),Object(j.jsx)("button",{id:"convertbtn",onClick:function(){var e={method:"GET",url:"https://alpha-vantage.p.rapidapi.com/query",params:{from_currency:r,function:"CURRENCY_EXCHANGE_RATE",to_currency:b},headers:{"x-rapidapi-host":"alpha-vantage.p.rapidapi.com","x-rapidapi-key":"a18eb88b9cmsh12ebb6d581c982cp105ef6jsn74d30ce25380"}};u.a.request(e).then((function(e){f(e.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]),P(v*p),E(r),w(b)})).catch((function(e){console.error(e)}))},children:"convert"})]}),Object(j.jsx)(d,{exhcangeRate:v,chosenPrimaryCurrency:S,chosenSecondaryCurrency:T})]})},h=function(){var e=Object(n.useState)(null),c=Object(i.a)(e,2),t=c[0],r=c[1];Object(n.useEffect)((function(){u.a.request({method:"GET",url:"https://crypto-news-live3.p.rapidapi.com/news",headers:{"x-rapidapi-host":"crypto-news-live3.p.rapidapi.com","x-rapidapi-key":"a18eb88b9cmsh12ebb6d581c982cp105ef6jsn74d30ce25380"}}).then((function(e){r(e.data)})).catch((function(e){console.error(e)}))}),[]);var a=null===t||void 0===t?void 0:t.slice(1,18);return Object(j.jsxs)("div",{className:"news-feed",children:[Object(j.jsx)("h2",{children:"News Feed :"}),null===a||void 0===a?void 0:a.map((function(e){return Object(j.jsx)("a",{href:e.url,children:Object(j.jsx)("p",{children:e.title})},a.indexOf(e))}))]})},l=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Crypto Dashboard"}),Object(j.jsxs)("div",{className:"dash",children:[Object(j.jsx)(b,{}),Object(j.jsx)(h,{})]})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6a982c8b.chunk.js.map