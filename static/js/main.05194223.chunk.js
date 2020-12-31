(this["webpackJsonpnotepad-app"]=this["webpackJsonpnotepad-app"]||[]).push([[0],{231:function(e,t,n){e.exports=n(459)},236:function(e,t,n){},459:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(33),i=n.n(a),c=(n(236),n(26)),l=n(27),u=n(461),s=n(47);function d(){var e=Object(c.a)(["\n\tfont-size: ",";\n\tcolor: ",";\n\tpadding: 10px 20px;\n\tmargin: auto 0 !important;\n"]);return d=function(){return e},e}var v=l.a.h5(d(),(function(e){return e.fontsize?e.fontsize:"black"}),(function(e){return e.color?e.color:"10px"})),f=function(e){return console.log(e),o.a.createElement(v,{color:e.color,fontsize:e.fontsize},e.children)},g=n(472),p=n(23);function h(){var e=Object(c.a)(["\n\tmargin: 15px !important;\n\tpadding: 10px !important;\n\tcolor: teal;\n\t.search.icon {\n\t\tcolor: teal;\n\t\tfont-weight: 900;\n\t}\n\t.prompt {\n\t\tborder-color: teal !important;\n\t}\n\tinput {\n\t\twidth: 300px;\n\t}\n"]);return h=function(){return e},e}var b=Object(l.a)(g.a)(h()),m=function(e){var t,n=Object(p.c)((function(e){return e.searchReducer.isLoading})),r=Object(p.c)((function(e){return e.searchReducer.resultsCount})),a=Object(p.b)(),i=function(e){return a({type:"SET_LOADING",val:e})},c=function(e){return a({type:"SEARCH",value:e})};return o.a.createElement(b,{loading:n,onSearchChange:function(e,n){var r,o,a=n.value;i(!0),clearTimeout(t),r=c,o=a,t=setTimeout((function(){r(o),i(!1)}),500)},size:"big",results:[{title:e.isLoading?"":r?r+" results found":"0 results found"}]})};function E(){var e=Object(c.a)(["\n\tdisplay: flex;\n"]);return E=function(){return e},e}function O(){var e=Object(c.a)(["\n\tmargin: 0px !important;\n"]);return O=function(){return e},e}function w(){var e=Object(c.a)(["\n\tmargin: 15px !important;\n\tpadding: 10px !important;\n\tbackground: white !important;\n"]);return w=function(){return e},e}var j=Object(l.a)(u.a)(w()),N=Object(l.a)(s.a)(O()),y=l.a.div(E()),T=function(){var e=Object(p.b)();return o.a.createElement(y,null,o.a.createElement(f,{color:"teal",fontsize:"15px"},"Hari's Notepad"),o.a.createElement(j,{width:"100px",height:"50px",onClick:function(){return e({type:"CREATE_NOTE"})}},o.a.createElement(N,{name:"edit outline",size:"big",color:"teal"})),o.a.createElement(j,{width:"60px",height:"40px",onClick:function(){return e({type:"DELETE_NOTE"})}},o.a.createElement(N,{name:"trash alternate",size:"big",color:"teal"})),o.a.createElement(m,null))},k=n(219),S=n(474),x=n(470),_=n(473),R=n(475),A=n(471),C=n(207),W=n.n(C),D=function(e){return o.a.createElement(W.a,{source:e.input})};function I(){var e=Object(c.a)(["\n\theight: 75vh !important;\n\twidth: 100% !important;\n\t*{\n\t\tmargin: 0;\n\t}\n"]);return I=function(){return e},e}function L(){var e=Object(c.a)(["\ndisplay: flex;\njustify-content: flex-end;\n.ui.button {\n\tbackground-color: teal;\n\tcolor: white;\n}\nmargin-right: 20px;\nmargin-top: 20px;\n"]);return L=function(){return e},e}var U=l.a.div(L()),z=l.a.div(I()),J=function(){var e=Object(r.useState)(!1),t=Object(k.a)(e,2),n=t[0],a=t[1],i=Object(p.c)((function(e){return e.notesReducer.notes})),c=Object(p.c)((function(e){return e.notesReducer.currentNote})),l=Object(p.c)((function(e){return e.searchReducer.searchValue})),s=Object(p.b)(),d=function(e){var t;t=e.target.value,s({type:"NOTE_TEXT",noteText:t}),console.log(e.target.value)};Object(r.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(i)),localStorage.setItem("currentNote",JSON.stringify(c))}),[i,c]);return o.a.createElement(_.a.Pushable,{as:R.a,style:{border:"solid 1px teal"}},o.a.createElement(_.a,{as:S.a,icon:"labeled",vertical:!0,visible:!0,width:"thin",style:{border:"0px"}},function(){var e,t;return""===l||void 0===l?e=i:(e=null===i||void 0===i?void 0:i.filter((function(e){return e.value.includes(l)})),t=e.length,s({type:"RESULTS",resultsCount:t})),e.map((function(e){var t=(null===e||void 0===e?void 0:e.id)===c?"rgba(0, 168, 168, 0.25)":"white";return console.log(t),o.a.createElement(S.a.Item,{as:"a",key:null===e||void 0===e?void 0:e.id,onClick:function(){return t=e.id,s({type:"CURRENT_NOTE",currentNoteId:t});var t},style:{backgroundColor:t}},o.a.createElement("p",null,null===e||void 0===e?void 0:e.date),console.log(null===e||void 0===e?void 0:e.date),o.a.createElement("p",null,null===e||void 0===e?void 0:e.value.slice(0,10)))}))}()),o.a.createElement(_.a.Pusher,null,o.a.createElement(R.a,{basic:!0},o.a.createElement(A.a,{style:{maxWidth:"85%"}},function(){var e,t,r,a;return n?o.a.createElement(x.a,{style:{height:"80vh",width:"100%"},placeholder:i.length?"Start writing your note...":"",onChange:d,value:null!==(e=null===i||void 0===i||null===(t=i.filter((function(e){return e.id===c}))[0])||void 0===t?void 0:t.value)&&void 0!==e?e:""}):o.a.createElement(z,null,o.a.createElement(D,{input:null!==(r=null===i||void 0===i||null===(a=i.filter((function(e){return e.id===c}))[0])||void 0===a?void 0:a.value)&&void 0!==r?r:""}))}(),o.a.createElement(U,null,o.a.createElement(u.a,{onClick:function(){a(!n)}},n?"Save":"Edit"))))))},V=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement(J,null))};var X=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(V,null))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M,B,G=n(64),K=n(131),Q=n(16),Y={notes:null!==(M=JSON.parse(localStorage.getItem("notes")))&&void 0!==M?M:[],currentNote:null!==(B=JSON.parse(localStorage.getItem("currentNote")))&&void 0!==B?B:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NOTE":var n=Date.now();return console.log("create note"),console.log(Object(Q.a)(Object(Q.a)({},e),{},{notes:[].concat(Object(K.a)(e.notes),[{id:n,value:"",date:(new Date).toDateString()}]),currentNote:n})),Object(Q.a)(Object(Q.a)({},e),{},{notes:[].concat(Object(K.a)(e.notes),[{id:n,value:"",date:(new Date).toDateString()}]),currentNote:n});case"NOTE_TEXT":return console.log(Object(Q.a)(Object(Q.a)({},e),{},{notes:e.notes.map((function(n){return n.id===e.currentNote?Object(Q.a)(Object(Q.a)({},n),{},{value:t.noteText}):n}))})),Object(Q.a)(Object(Q.a)({},e),{},{notes:e.notes.map((function(n){return n.id===e.currentNote?Object(Q.a)(Object(Q.a)({},n),{},{value:t.noteText}):n}))});case"CURRENT_NOTE":return console.log(t.currentNoteId),Object(Q.a)(Object(Q.a)({},e),{},{currentNote:t.currentNoteId});case"DELETE_NOTE":return console.log("delete note"),Object(Q.a)(Object(Q.a)({},e),{},{notes:e.notes.filter((function(t){return t.id!==e.currentNote}))});default:return e}},F={},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return console.log("search reducer",t.value),Object(Q.a)(Object(Q.a)({},e),{},{searchValue:t.value});case"RESULTS":return Object(Q.a)(Object(Q.a)({},e),{},{resultsCount:t.resultsCount});case"SET_LOADING":return Object(Q.a)(Object(Q.a)({},e),{},{isLoading:t.val});default:return e}},Z=Object(G.b)({notesReducer:q,searchReducer:$}),ee=Object(G.c)(Z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(p.a,{store:ee},o.a.createElement(X,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PWA-notes-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/PWA-notes-App","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}();var te=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}("BImYznJgvAQVQkKk_o7xnkEoUmGx8g6kVh7hT8rpt_0oJX7pkVrM1q1QXivTn6JRarWnrYHwT_EHwMLCMd-kUJE");"serviceWorker"in navigator?navigator.serviceWorker.ready.then((function(e){return console.log("A service worker is active:",e.active),console.log("registration",e),e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:te})})):console.log("Service workers are not supported."),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){console.log("registration",e),console.log("Notification.permission",Notification.permission),"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then((function(e){return console.log("reg",e),e.showNotification("Hello!!",{body:"Welcome to my notes app",icon:"https://harinathvutla.github.io/PWA-notes-App/logo192.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}})}))}))}},[[231,1,2]]]);
//# sourceMappingURL=main.05194223.chunk.js.map