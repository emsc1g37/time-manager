(function(e){function t(t){for(var r,a,s=t[0],u=t[1],l=t[2],d=0,m=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"4b18":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("User",{on:{login:e.onLogin,logout:e.onLogout}})],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user"},[""!=e.error?n("div",{staticClass:"error-message"},[e._v(e._s(e.error))]):e._e(),0==e.state?n("div",{staticClass:"logged-out"},[n("button",{on:{click:e.goToLogin}},[e._v("Se connecter")]),n("button",{on:{click:e.goToSignUp}},[e._v("S'inscrire")])]):e._e(),0!=e.state&&3!=e.state?n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("label",{attrs:{for:"email"}},[e._v("Adresse mail :")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("label",{attrs:{for:"username"}},[e._v("Nom d'utilisateur :")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",name:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{attrs:{type:"submit"},domProps:{value:e.getSubmitButtonText()}})]):e._e(),3==e.state?n("div",{attrs:{id:"logged-in"}},[e._v("\n    Bonjour "+e._s(e.username)+"\n    "),n("button",{on:{click:function(t){e.state=4}}},[e._v("Modifier mon profil")]),n("button",{on:{click:e.deleteUser}},[e._v("Supprimer mon compte")]),n("button",{on:{click:e.goToLogout}},[e._v("Déconnexion")])]):e._e()])},s=[],u=n("bc3a"),l=n.n(u),c={name:"User",data:function(){return{email:"",error:"",username:"",state:0}},methods:{clearFields:function(){this.email="",this.id=0,this.username=""},deleteUser:function(){var e=this;l.a.delete(y.BASE_URL+"/users/"+this.id).then((function(t){e.goToLogout()})).catch((function(t){e.error="Erreur lors de la suppression de votre compte. Merci de réessayer."}))},editUser:function(){var e=this;this.validateForm()&&l.a.patch(y.BASE_URL+"/users/"+this.id,{user:{email:this.email,username:this.username}}).then((function(t){e.email=t.data.data.email,e.username=t.data.data.username,e.goToLoggedIn()})).catch((function(t){e.error="Erreur lors de la modification de vos informations. Veuillez réessayer."}))},getSubmitButtonText:function(){return 1==this.state?"Se connecter":2==this.state?"S'inscrire":4==this.state?"Mettre à jour":void 0},goToLoggedIn:function(){this.error="",this.state=3,this.$emit("login",this.id,this.email,this.username)},goToLogin:function(){this.clearFields(),this.state=1},goToLogout:function(){this.clearFields(),this.error="",this.id=0,this.state=0,this.$emit("logout")},goToSignUp:function(){this.clearFields(),this.state=2},login:function(){var e=this;this.validateForm()&&l.a.get(y.BASE_URL+"/users/?email="+this.email+"&username="+this.username).then((function(t){null==t.data.data?e.error="Adresse mail ou nom d'utilisateur invalide.":(e.email=t.data.data.email,e.id=t.data.data.id,e.username=t.data.data.username,e.goToLoggedIn())})).catch((function(t){e.error="Erreur de connexion au réseau."}))},onSubmit:function(){1==this.state?this.login():2==this.state?this.signUp():4==this.state&&this.editUser()},signUp:function(){var e=this;this.validateForm()&&l.a.post(y.BASE_URL+"/users",{user:{email:this.email,username:this.username}}).then((function(t){e.email=t.data.data.email,e.id=t.data.data.id,e.username=t.data.data.username,e.goToLoggedIn()})).catch((function(t){e.error="Erreur lors de l'inscription. Veuillez réessayer."}))},validateForm:function(){return""!=this.email&&""!=this.username||(this.error="Veuillez compléter le formulaire.",!1)}}},d=c,m=(n("dc89"),n("2877")),f=Object(m["a"])(d,a,s,!1,null,"5fa9c544",null),h=f.exports,p={name:"app",components:{User:h},data:function(){return{email:"",id:0,username:""}},methods:{onLogin:function(e,t,n){this.email=t,this.id=e,this.username=n},onLogout:function(e){this.email="",this.id=0,this.username=""}}},g=p,v=(n("034f"),Object(m["a"])(g,i,o,!1,null,null,null)),b=v.exports,_="http://localhost:4000/api",y=t["default"]={BASE_URL:_};r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,n){},dc89:function(e,t,n){"use strict";var r=n("4b18"),i=n.n(r);i.a}});
//# sourceMappingURL=app.e7ad9d5e.js.map