(this.webpackJsonppiwko=this.webpackJsonppiwko||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(32),i=c.n(r),a=(c(39),c(21)),j=c(6),l=(c(40),c(20));c(41),c(26),c(58);l.a.initializeApp({apiKey:"AIzaSyC7n089yKLBsASh9poL8I9xse6iIm2x46k",authDomain:"piwko-10443.firebaseapp.com",projectId:"piwko-10443",storageBucket:"piwko-10443.appspot.com",messagingSenderId:"406560500620",appId:"1:406560500620:web:87450c7e032b04e14084a9"});var o=l.a,b=c(9),d=(c(44),c(45),c(1)),u=function(){return Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("div",{className:"homeButton",children:Object(d.jsx)("svg",{fill:"white",width:"45",height:"45",viewBox:"0 0 25 25",children:Object(d.jsx)("path",{d:"M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"})})})})},h=c(17),O=function(e){var t=e.name,c=e.type,n=e.picture,s=(e.origin,e.brewery),r=e.id,i=e.beers.filter((function(e){return e.id===r}))[0].rating;var a,j=(a=i).reduce((function(e,t){return e+t}),0)/a.length;return Object(d.jsx)(b.b,{to:"/beers/".concat(r),children:Object(d.jsxs)("div",{className:"BeerTile",children:[Object(d.jsx)("h3",{className:"BeerTile__name",children:t}),Object(d.jsx)("h4",{className:"BeerTile__type",children:c}),Object(d.jsx)("img",{className:"BeerTile__img",src:n,alt:"Girl in a jacket",height:"160px"}),Object(d.jsxs)("div",{className:"BeerTile__rating",children:[Object(d.jsx)("div",{children:[1,2,3,4,5].map((function(e){return Object(d.jsx)(h.a,{name:"star",color:Math.round(j)>=e?"red":"grey",type:"solid",size:20},e)}))}),Object(d.jsxs)("p",{className:"BeerTile__rating--number",children:[Math.round(isNaN(j)?0:Math.round(j)),"/5"]})]}),Object(d.jsx)("h4",{className:"BeerTile__brewery",children:s})]})})},x=(c(51),function(e){var t=e.beers,c=e.search;return Object(d.jsxs)("main",{children:[Object(d.jsx)("p",{className:"TileContainer__p",children:"Odkryj dobre piwo"}),Object(d.jsx)("div",{className:"TileContainer__div",children:t&&t.filter((function(e){var t=e.name,n=e.brewery;return t.trim().toLowerCase().includes(c.trim().toLowerCase())||n.trim().toLowerCase().includes(c.trim().toLowerCase())})).map((function(e,c){return Object(d.jsx)(O,Object(a.a)(Object(a.a)({},e),{},{beers:t}),c)}))})]})}),m=(c(52),c(53),function(e){var t=e.setSearch;return Object(d.jsx)("div",{className:"searchbox",children:Object(d.jsx)("input",{type:"text",placeholder:"wyszukaj piwo...",onChange:function(e){t(e.target.value)}})})}),p=c(5),f=function(e){return e.isLoggedIn?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:"header__button",onClick:function(){o.auth().signOut()},children:"wyloguj mnie"})}):Object(d.jsx)(b.b,{to:"/login",children:Object(d.jsx)("button",{className:"header__button",children:"ZALOGUJ SI\u0118 ABY DODAWA\u0106 KOMENTARZE"})})},g=function(e){var t=e.setSearch,c=e.isLoggedIn;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("h1",{className:"header__logo",children:"PIWKO"})}),Object(d.jsx)(p.a,{exact:!0,path:"/",children:Object(d.jsx)(m,{setSearch:t})}),Object(d.jsx)(f,{isLoggedIn:c})]})},v=(c(54),c(30),function(e){var t=e.beers,c=e.id,n=[];return Object(d.jsx)("div",{className:"Comments-box",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("h3",{children:"Komentarze"}),(t.filter((function(e){return e.id===c}))[0].commentary.map((function(e){return n.push(e)})),n.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"commentary__container",children:[Object(d.jsx)("p",{className:"commentary__login",children:e.login}),Object(d.jsx)("p",{className:"commentary__text",children:e.text})]})},t)})))]})})}),N=c(34),_=(c(55),function(e){var t=e.id,c=e.token,s=e.fetchBeers,r=e.isLoggedIn,i=Object(n.useState)(""),a=Object(j.a)(i,2),l=a[0],u=a[1],O=Object(n.useState)(null),x=Object(j.a)(O,2),m=x[0],p=x[1];return r?Object(d.jsx)("div",{className:"Input_box",children:Object(d.jsxs)("form",{className:"Input_form",onSubmit:function(e){o.firestore().collection("Beers").doc(t).get().then((function(e){var n=e.data().rating;n.push(m),o.firestore().collection("Beers").doc(t).update({commentary:o.firestore.FieldValue.arrayUnion({login:c.email.split("@")[0],text:l}),rating:n}).then(s)})),e.preventDefault(),u(""),p(null)},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Oce\u0144 i skomentuj"}),Object(N.a)(Array(5)).map((function(e,t){var c=t+1;return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:"rating",value:c,onClick:function(e){return p(c)},required:!0}),Object(d.jsx)(h.a,{size:20,color:c<=m?"red":"grey"})]},t)})),Object(d.jsxs)("p",{className:"Rating_number",children:[m,"/5"]})]}),Object(d.jsx)("input",{type:"text",required:!0,value:l,onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("input",{id:"name",className:"Input_submit",type:"submit",value:"Dodaj"})]})}):Object(d.jsx)(b.b,{to:"/login",children:Object(d.jsx)("p",{className:"blueText",children:"ZALOGUJ SI\u0118 ABY DODAWA\u0106 KOMENTARZE"})})}),y=function(e){var t=e.beers,c=e.id,n=t.filter((function(e){return e.id===c}))[0].rating;var s,r=(s=n).reduce((function(e,t){return e+t}),0)/s.length;return Object(d.jsxs)("div",{className:"Rating_stars",children:[Object(d.jsx)("div",{children:[1,2,3,4,5].map((function(e){return Object(d.jsx)(h.a,{name:"star",color:Math.round(r)>=e?"red":"grey",type:"solid",size:20},e)}))}),Object(d.jsxs)("p",{className:"Rating_number",children:[Math.round(isNaN(r)?0:Math.round(r)),"/5"]})]})};var S=function(e){var t=e.beers,c=e.token,n=e.fetchBeers,s=e.isLoggedIn,r=Object(p.f)().id,i=t.find((function(e){return e.id===r}));return void 0===i?null:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"BeerCard-container",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"BeerCard",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"BeerCard-box",children:[Object(d.jsx)("div",{className:"BeerCard-rating",children:Object(d.jsx)(y,{id:r,beers:t})}),Object(d.jsx)("img",{src:i.picture,alt:"Girl in a jacket",height:"400px"})]})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"product_name",children:[Object(d.jsx)("h1",{children:i.name}),Object(d.jsx)("h2",{children:i.brewery})]}),Object(d.jsxs)("div",{className:"product_info",children:[Object(d.jsxs)("p",{className:"BeerCard_description",children:[Object(d.jsx)("strong",{children:"Informacje:"}),i.description]}),Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Rodzaj:"}),Object(d.jsx)("td",{children:i.type})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Alkohol%:"}),Object(d.jsx)("td",{children:i.alcohol})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Pochodzenie:"}),Object(d.jsx)("td",{children:i.origin})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Ekstrakt:"}),Object(d.jsx)("td",{children:i.extract})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Pojemno\u015b\u0107:"}),Object(d.jsx)("td",{children:i.volume})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Gorycz:"}),Object(d.jsx)("td",{children:i.bitterness})]})]})}),Object(d.jsxs)("p",{className:"BeerCard_description",children:[Object(d.jsx)("strong",{children:"Sk\u0142adniki:"}),i.ingredients]})]}),Object(d.jsx)(_,{id:r,token:c,fetchBeers:n,isLoggedIn:s})]}),Object(d.jsx)(v,{id:r,beers:t})]})]})})},k=(c(56),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(j.a)(r,2),a=i[0],o=i[1],b=function(){l.a.firestore().collection("Beers").add({name:c,alcohol:a})};return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("form",{onSubmit:function(e){b(),e.preventDefault()},children:[Object(d.jsxs)("label",{children:["name:",Object(d.jsx)("input",{className:"adder__text",type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(d.jsxs)("label",{children:["alcohol:",Object(d.jsx)("input",{className:"adder__text",type:"text",value:a,onChange:function(e){o(e.target.value)}})]}),Object(d.jsx)("input",{type:"submit",value:"Wy\u015blij"}),Object(d.jsx)("button",{onClick:function(e){b(),e.preventDefault()},children:"kliknij"})]})})}),I=(c(31),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=(t[0],t[1],Object(n.useState)("")),s=Object(j.a)(c,2),r=(s[0],s[1],Object(n.useState)("")),i=Object(j.a)(r,2),a=i[0],l=i[1],h=Object(n.useState)(""),O=Object(j.a)(h,2),x=O[0],m=O[1];return Object(d.jsxs)("div",{style:{margin:"40px"},children:[Object(d.jsx)(u,{}),Object(d.jsxs)("form",{className:"form",onSubmit:function(e){o.auth().signInWithEmailAndPassword(a,x).then((function(e){console.log("UID usera to "+e.user.uid+" Email usera to "+e.user.email)})),e.preventDefault()},children:[Object(d.jsxs)("label",{children:["email:",Object(d.jsx)("input",{className:"formInput",onChange:function(e){l(e.target.value)}})]}),Object(d.jsxs)("label",{children:["password:",Object(d.jsx)("input",{className:"formInput",onChange:function(e){m(e.target.value)}})]}),Object(d.jsx)("input",{className:"login__submit formInput ",type:"submit",value:"Zaloguj mnie"}),Object(d.jsx)(b.b,{to:"/signup",children:Object(d.jsx)("button",{className:"signForm__button2",children:"Nie masz konta? Zarejestruj si\u0119!"})})]})]})}),w=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(j.a)(r,2),a=i[0],l=i[1],h=Object(n.useState)(""),O=Object(j.a)(h,2),x=(O[0],O[1],Object(n.useState)("")),m=Object(j.a)(x,2);m[0],m[1];return Object(d.jsxs)("div",{style:{margin:"40px"},children:[Object(d.jsx)(u,{}),Object(d.jsxs)("form",{className:"form",onSubmit:function(e){o.auth().createUserWithEmailAndPassword(c,a).then((function(e){o.firestore().collection("Users").doc(e.user.uid).set({email:e.user.email})})),e.preventDefault()},children:[Object(d.jsxs)("label",{children:["email:",Object(d.jsx)("input",{className:"formInput",onChange:function(e){s(e.target.value)}})]}),Object(d.jsxs)("label",{children:["password:",Object(d.jsx)("input",{className:"formInput",onChange:function(e){l(e.target.value)}})]}),Object(d.jsx)("input",{className:"login__submit formInput",type:"submit",value:"Zarejestruj mnie"}),Object(d.jsx)(b.b,{to:"/login",children:Object(d.jsx)("button",{className:"signForm__button2",children:"Masz konto? Zaloguj si\u0119!"})})]})]})};var B=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(j.a)(r,2),l=i[0],b=i[1],u=Object(n.useState)(!1),h=Object(j.a)(u,2),O=h[0],m=h[1],f=Object(n.useState)(null),v=Object(j.a)(f,2),N=v[0],_=v[1];function y(){o.firestore().collection("Beers").get().then((function(e){var t=e.docs.map((function(e){return Object(a.a)({id:e.id},e.data())}));s(t)}))}return o.auth().onAuthStateChanged((function(e){null!==e?(m(!0),_(e)):m(!1)})),Object(n.useEffect)(y,[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{setSearch:b,isLoggedIn:O}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{beers:c,search:l})}),Object(d.jsx)(p.a,{path:"/beers/:id",children:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(S,{beers:c,token:N,fetchBeers:y,isLoggedIn:O})})}),Object(d.jsx)(p.a,{path:"/login",children:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(I,{})})}),Object(d.jsx)(p.a,{path:"/signup",children:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(w,{})})}),Object(d.jsx)(p.a,{path:"/admin",children:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k,{})})})]})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b.a,{children:Object(d.jsx)(B,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.543c36b8.chunk.js.map