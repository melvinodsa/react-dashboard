(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[0],{64:function(e,a,t){e.exports=t(83)},69:function(e,a,t){},70:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),c=t.n(o),l=(t(69),t(54)),i=t(21),s=(t(70),t(15)),m=t(123),u=t(120),d=t(119),p=t(121),f=t(125),h=t(122),E=t(124),b=t(53),g=t.n(b),v=t(56),w=t(49),y=t.n(w),N=t(115),O=Object(N.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},repoListItemDesc:{display:"flex",flexDirection:"column"}}})),j=new v.a({});var k=function(){var e=O(),a=Object(n.useState)({user:!1,ownerName:"",repos:[]}),t=Object(s.a)(a,2),o=t[0],c=t[1];return r.a.createElement("section",null,r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),function(e,a){j.repos.listForOrg({org:e.ownerName}).then((function(t){a(Object.assign({},e,{user:!1,repos:t.data}))}),(function(e){console.log(e)})),j.repos.listForUser({username:e.ownerName}).then((function(t){a(Object.assign({},e,{user:!0,repos:t.data}))}),(function(e){console.log(e)}))}(o,c)}},r.a.createElement(m.a,{id:"standard-basic",label:"Username",onChange:function(e){c(Object.assign({},o,{ownerName:e.target.value}))}}),r.a.createElement(u.a,{variant:"contained",color:"primary",type:"submit"},"Get")),r.a.createElement(d.a,{component:"nav","aria-label":"main mailbox folders"},y.a.map(o.repos,(function(a){return r.a.createElement(p.a,{key:a.id},r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,null))),r.a.createElement("div",{className:e.repoListItemDesc},r.a.createElement(f.a,{primary:a.name,secondary:a.description}),r.a.createElement("a",{href:a.html_url,target:"_blank"},a.html_url)))}))))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.190e7268.chunk.js.map