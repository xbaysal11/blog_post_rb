(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),s=(n(26),n(2)),i=n(3),u=n(5),l=n(4),d=n(6),m=n(8),p=n.n(m),h=n(19),f=n(7),v=n.n(f);v.a.defaults.baseURL="http://localhost:3000";var b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={error:null,isLoaded:!1,storefront:"/api/v2/storefront",product:[],user_model:{grant_type:"password",username:"spree@example.com",password:"spree123"}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark(function e(){var t,n,a,r,o=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.user_model,a=t.storefront,r=t.token,e.next=3,v.a.post("/spree_oauth/token",n).then(function(e){return e.data.access_token}).then(function(e){o.setState({isLoaded:!0,token:e}),localStorage.setItem("API_TOKEN",e)},function(e){o.setState({isLoaded:!0,error:e})});case 3:return e.next=5,v.a.get("".concat(a,"/products"),{params:{},headers:{Authorization:"Bearer ".concat(r)}}).then(function(e){return e.data.data}).then(function(e){o.setState({isLoaded:!0,product:e}),console.log("\ud83d\udc49 Returned data:",e)},function(e){o.setState({isLoaded:!0,error:e})});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.product;return r.a.createElement("div",{className:"card-list"},t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement("div",{className:"card"},a.map(function(e){return r.a.createElement("div",{className:"card-item",key:e.id},r.a.createElement("div",{className:"img"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,e.attributes.name),r.a.createElement("h5",null,e.type),r.a.createElement("p",null,e.attributes.description),r.a.createElement("h3",null,e.attributes.display_price)))})):r.a.createElement("div",null,"Loading..."))}}]),t}(a.Component),E=(n(45),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.a4c2de92.chunk.js.map