(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[0],{67:function(e,t,a){e.exports=a(85)},72:function(e,t,a){},73:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),c=(a(72),a(58)),l=a(23),s=(a(73),a(15)),u=a(16),m=a(46),f=a(20),d=a.n(f),p=a(43),g=a.n(p),b=a(118),h=a(127),E=a(123),v=a(122),y=a(125),w=a(128),k=a(126),O=a(129),j=a(57),N=a.n(j),x=a(124),D=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},repoListItemDesc:{display:"flex",flexDirection:"column"},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),C=new m.a({});function S(e,t,a){var n=this,o=function(e,t,a){var n=e,o={};return function(e){n--,o=d.a.reduce(e,(function(e,t){var a=d.a.get(e,t.week,{total:0,week:t.week,days:[0,0,0,0,0,0,0]});return a.total+=t.total,a.days=d.a.map(a.days,(function(e,a){return e+d.a.get(t,["days",a],0)})),Object.assign({},e,Object(s.a)({},t.week,a))}),o),0==n&&a(Object.assign({},t,{contributions:o,loading:!1}))}}(a.length,e,t);d.a.forEach(a,(function(e){setTimeout(A.bind(n,o,e),400)}))}function A(e,t){C.repos.getCommitActivityStats({owner:t.owner.login,repo:t.name}).then((function(t){e(t.data)}),(function(e){console.log(e)}))}var F=function(){var e=D(),t=Object(n.useState)({user:!1,ownerName:"",repos:[],fromDate:g()().subtract(1,"y"),toDate:g()(),contributions:{},loading:!1,key:""}),a=Object(u.a)(t,2),r=a[0],i=a[1],c=d.a.chain(r.contributions).map((function(e){return e.total})).reduce((function(e,t){return e+t}),0).value();return o.a.createElement("section",null,o.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),C=new m.a({auth:r.key})}},o.a.createElement(h.a,{id:"key",label:"GitHub Personal access key",onChange:function(e){i(Object.assign({},r,{key:e.target.value}))}}),o.a.createElement(E.a,{variant:"contained",color:"primary",type:"submit"},"Authenticate")),o.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),function(e,t){t(Object.assign({},e,{loading:!0})),C.repos.listForOrg({org:e.ownerName}).then((function(a){var n=Object.assign({},e,{user:!0,repos:a.data,loading:!0});t(n),S(n,t,n.repos)}),(function(a){!function(e,t){C.repos.listForUser({username:e.ownerName}).then((function(a){var n=Object.assign({},e,{user:!0,repos:a.data,loading:!0});t(n),S(n,t,n.repos)}),(function(a){console.log(a),t(Object.assign({},e,{loading:!1}))}))}(e,t),console.log(a)}))}(r,i)}},o.a.createElement(h.a,{id:"username",label:"Username",onChange:function(e){i(Object.assign({},r,{ownerName:e.target.value}))}}),o.a.createElement(E.a,{variant:"contained",color:"primary",type:"submit"},"Get")),!d.a.isEmpty(r.repos)&&o.a.createElement("div",null,o.a.createElement("h4",null,"Contributions last one year"),o.a.createElement("span",null,c)),r.loading&&o.a.createElement(x.a,null),o.a.createElement(v.a,{component:"nav","aria-label":"main mailbox folders"},d.a.map(r.repos,(function(t){return o.a.createElement(y.a,{key:t.id},o.a.createElement(k.a,null,o.a.createElement(O.a,null,o.a.createElement(N.a,null))),o.a.createElement("div",{className:e.repoListItemDesc},o.a.createElement(w.a,{primary:t.name,secondary:t.description}),o.a.createElement("a",{href:t.html_url,target:"_blank"},t.html_url)))}))))};var I=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/"},o.a.createElement(F,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.b9220b57.chunk.js.map