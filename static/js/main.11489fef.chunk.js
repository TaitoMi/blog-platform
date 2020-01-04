(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{194:function(e,r,a){e.exports=a.p+"static/media/realworld.ea1785a0.png"},196:function(e,r,a){e.exports=a(388)},206:function(e,r,a){},388:function(e,r,a){"use strict";a.r(r);var t={};a.r(t),a.d(t,"registration",(function(){return N})),a.d(t,"login",(function(){return O})),a.d(t,"createArticle",(function(){return j})),a.d(t,"clear",(function(){return R})),a.d(t,"exit",(function(){return A}));var n=a(0),l=a.n(n),i=a(35),o=a.n(i),c=a(6),u=a(7),s=a(182),m=a(183),d=(a(204),a(205),a(206),a(37)),p=a(10),b=a(389),h=a(127),E=a(21),f=a(28),g=function(e){var r=e.label,a=e.changer,t=e.blur,n=e.idName,i=e.value,o=e.touched,c=e.error,u=e.apiError;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form__row"},l.a.createElement("span",{className:"form__label"},r[0].toUpperCase()+r.slice(1)),l.a.createElement(b.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ".concat(r),onChange:a,onBlur:t,id:n,name:n,value:i,className:"form__input ".concat(o&&c?"has-error":"")})),o&&c?l.a.createElement("div",{className:"input__error"},c):null,u?l.a.createElement("div",{className:"input__error"},u):null)};g.defaultProps={label:"",idName:"",value:"",error:"",apiError:"",changer:null,blur:null,touched:null};var v=g,_=a(14),y=a.n(_),N=function(e){var r=e.email,a=e.username,t=e.password;return function(e){var n,l;return y.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,y.a.awrap(fetch("https://conduit.productionready.io/api/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:r,username:a,password:t}})}));case 2:if(!(n=i.sent).ok){i.next=5;break}return i.abrupt("return",e({type:"USER_REGISTERED",payload:{reg:!0}}));case 5:return i.next=7,y.a.awrap(n.json().then((function(e){return{type:"REG_ERROR",payload:{error:e.errors}}})));case 7:return l=i.sent,i.abrupt("return",e(l));case 9:case"end":return i.stop()}}))}},w=a(12),O=function(e){var r=e.email,a=e.password;return function(e){var t,n,l;return y.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,y.a.awrap(fetch("https://conduit.productionready.io/api/users/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:r,password:a}})}));case 2:if(!(t=i.sent).ok){i.next=8;break}return i.next=6,y.a.awrap(t.json().then((function(e){return{type:"USER_LOGIN",payload:Object(w.a)({},e)}})));case 6:return n=i.sent,i.abrupt("return",e(n));case 8:return i.next=10,y.a.awrap(t.json().then((function(){return{type:"LOGIN_ERROR"}})));case 10:return l=i.sent,i.abrupt("return",e(l));case 12:case"end":return i.stop()}}))}},j=function(e,r){return function(a){var t;return y.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.awrap(fetch("https://conduit.productionready.io/api/articles",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(r)},body:JSON.stringify({article:Object(w.a)({},e)})}));case 2:return t=a.sent,console.log(t.json()),a.abrupt("return","ku");case 5:case"end":return a.stop()}}))}},R=function(){return{type:"ERROR_CLEAR"}},A=function(){return{type:"LOGIN_EXIT"}},S=f.object().shape({password:f.string().min(8,"\u041d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 8").max(40,"\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 40"),email:f.string().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441")}),x=function(e){var r=e.error,a=e.isAuthorized,t=e.login,n=e.clear;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,{exact:!0,path:"/login",render:function(){return a?l.a.createElement(d.a,{to:"/"}):null}}),l.a.createElement(E.c,{initialValues:{password:"",email:""},validationSchema:S,onSubmit:function(e){t(e)}},(function(e){var a=e.values,t=e.errors,i=e.touched,o=e.handleChange,c=e.handleBlur;return l.a.createElement(E.b,{className:"form"},r?l.a.createElement("div",null,"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"):null,l.a.createElement(v,{label:"email",changer:o,blur:c,idName:"email",value:a.email,touched:i.email,error:t.email,apiError:r?r.email:null}),l.a.createElement("div",{className:"form__row"},l.a.createElement("span",{className:"form__label"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement(b.a.Password,{onChange:o,onBlur:c,value:a.password,id:"password",name:"password"})),l.a.createElement("div",{className:"form__row"},l.a.createElement(h.a,{htmlType:"submit",className:"form__submit-btn",type:"primary"},"\u0412\u043e\u0439\u0442\u0438"),l.a.createElement(p.b,{to:"/signup",onClick:n},l.a.createElement(h.a,{type:"danger"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))})))};x.defaultProps={login:null,error:null,isAuthorized:null,clear:null};var C=Object(u.b)((function(e){return{error:e.user.error,isAuthorized:e.user.isAuthorized}}),(function(e){var r=Object(c.bindActionCreators)(t,e);return{login:r.login,clear:r.clear}}))(x),k=f.object().shape({username:f.string().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(4,"\u041d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),password:f.string().min(8,"\u041d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 8").max(40,"\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 40"),email:f.string().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441")}),z=function(e){var r=e.isSuccessful,a=e.error,t=e.clear,n=e.registration;return l.a.createElement(E.c,{initialValues:{username:"",password:"",email:""},validationSchema:k,onSubmit:function(e,a){(0,a.setSubmitting)(r),n(e)}},(function(e){var n=e.values,i=e.errors,o=e.touched,c=e.handleChange,u=e.handleBlur;return l.a.createElement(E.b,{className:"form"},l.a.createElement(v,{label:"\u0438\u043c\u044f",changer:c,blur:u,idName:"username",value:n.username,touched:o.username,error:i.username,apiError:a?a.username:null}),l.a.createElement(v,{label:"email",changer:c,blur:u,idName:"email",value:n.email,touched:o.email,error:i.email,apiError:a?a.email:null}),l.a.createElement("div",{className:"form__row"},l.a.createElement("span",{className:"form__label"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement(b.a.Password,{onChange:c,onBlur:u,value:n.password,id:"password",name:"password"})),l.a.createElement("div",{className:"form__row"},l.a.createElement(h.a,{className:"form__submit-btn",htmlType:"submit",type:"primary"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),l.a.createElement(p.b,{to:"/login",onClick:t},l.a.createElement(h.a,{type:"danger"},"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"))),r?l.a.createElement("div",null,"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c"):null)}))};z.defaultProps={registration:null,isSuccessful:null,error:null,clear:null};var L=Object(u.b)((function(e){return{isSuccessful:e.user.isSuccessful,error:e.user.error}}),(function(e){var r=Object(c.bindActionCreators)(t,e);return{registration:r.registration,clear:r.clear}}))(z),T=a(194),I=a.n(T),G=Object(u.b)((function(e){return{isAuthorized:e.user.isAuthorized}}))((function(e){var r=e.isAuthorized?l.a.createElement("div",{className:"header__right"},l.a.createElement(p.b,{to:"/"},l.a.createElement(h.a,{type:"primary"},"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"))):l.a.createElement("div",{className:"header__right"},l.a.createElement(p.b,{to:"/login"},l.a.createElement(h.a,{type:"primary"},"\u0412\u043e\u0439\u0442\u0438")),l.a.createElement(p.b,{to:"/signup"},l.a.createElement(h.a,{type:"danger"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")));return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(p.b,{to:"/"},l.a.createElement("img",{className:"header__logo",src:I.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f RealWorld"}))),r)})),P=function(e){var r=e.id,a=e.email,t=e.username,n=e.exit;return l.a.createElement("form",{className:"user",onSubmit:n},l.a.createElement("div",{className:"user__info"},l.a.createElement("div",{className:"user__row"},"id: ",r),l.a.createElement("div",{className:"user__row"},"email: ",a),l.a.createElement("div",{className:"user__row"},"username: ",t)),l.a.createElement(p.b,{to:"/add"},l.a.createElement(h.a,{type:"primary"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")),l.a.createElement(h.a,{htmlType:"submit",className:"user__btn",type:"danger"},"\u0412\u044b\u0445\u043e\u0434"))};P.defaultProps={id:"",email:"",username:"",exit:null};var B=Object(u.b)((function(e){return{id:e.user.id,email:e.user.email,username:e.user.username}}),(function(e){return{exit:Object(c.bindActionCreators)(t,e).exit}}))(P),J=Object(u.b)((function(e){return{isAuthorized:e.user.isAuthorized,token:e.user.token}}),(function(e){var r=Object(c.bindActionCreators)(t,e);return{createArticle:r.createArticle,login:r.login}}))((function(e){e.isAuthorized;var r=e.createArticle,a=e.token,t=e.login;return l.a.createElement(E.c,{initialValues:{title:"",description:"",body:"",tagList:[""]},onSubmit:function(e){var t=Object(w.a)({},e,{tagList:e.tagList.filter((function(e){return""!==e}))});r(t,a)}},(function(e){var r=e.values,a=e.errors,n=e.touched,i=e.handleChange,o=e.handleBlur;return l.a.createElement(E.b,{className:"form"},l.a.createElement(v,{label:"title",changer:i,blur:o,idName:"title",value:r.title,touched:n.title,error:a.title}),l.a.createElement(v,{label:"description",changer:i,blur:o,idName:"description",value:r.description,touched:n.description,error:a.description}),l.a.createElement(v,{label:"body",changer:i,blur:o,idName:"body",value:r.body,touched:n.body,error:a.body}),l.a.createElement(E.a,{name:"tagList",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form__row-tags"},r.tagList.map((function(e,a){var t="tag-".concat(a);return l.a.createElement("div",{key:t,className:"form__row"},l.a.createElement(b.a,{className:"form__tag",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u044d\u0433",onChange:i,onBlur:o,value:r.tagList[a],id:"tagList".concat(a),name:"tagList.".concat(a)}))}))),l.a.createElement(h.a,{type:"button",onClick:function(){return e.push("")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u044d\u0433"))}}),l.a.createElement("div",{className:"form__row"},l.a.createElement(h.a,{htmlType:"submit",className:"form__submit-btn",type:"primary"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e")),l.a.createElement("button",{type:"button",onClick:function(){return t({email:"gfdaker96@gmail.com",password:"321zxc321"})}},"login"))}))})),U=function(e){var r=e.isAuthorized;return l.a.createElement(p.a,null,l.a.createElement(G,null),l.a.createElement("div",{className:"App"},l.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r?l.a.createElement(B,null):l.a.createElement(d.a,{to:"/login"})}}),l.a.createElement(d.b,{path:"/login",component:C}),l.a.createElement(d.b,{path:"/signup",component:L}),l.a.createElement(d.b,{path:"/add",component:J})))};U.defaultProps={isAuthorized:null};var W=Object(u.b)((function(e){return{isAuthorized:e.user.isAuthorized}}))(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q={isSuccessful:null,error:null,isAuthorized:null},D=Object(c.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,r=arguments.length>1?arguments[1]:void 0,a=r.payload;switch(r.type){case"USER_REGISTERED":return Object(w.a)({},e,{isSuccessful:a.reg,error:null});case"REG_ERROR":return Object(w.a)({},e,{isSuccessful:null,error:a.error});case"USER_LOGIN":return Object(w.a)({},e,{},a.user,{isAuthorized:!0});case"LOGIN_ERROR":return Object(w.a)({},e,{error:!0});case"LOGIN_EXIT":return Object(w.a)({},q);case"ERROR_CLEAR":return Object(w.a)({},e,{error:null});default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return r.type,e}}),F=Object(c.createStore)(D,Object(s.composeWithDevTools)(Object(c.applyMiddleware)(m.a)));o.a.render(l.a.createElement(u.a,{store:F},l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[196,1,2]]]);
//# sourceMappingURL=main.11489fef.chunk.js.map