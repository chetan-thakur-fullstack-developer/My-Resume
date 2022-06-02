/*! For license information please see main.4e3bac5b.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-resume-template"]=this["webpackJsonpreact-resume-template"]||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),i=a.n(o),l=a(20),c=a.n(l),s=a(1),m=a(2),d=a(5),u=a(4),p=a(31),h=a(13),f=a(120),g=a(121),v=a(17),b=a(56),w=a.n(b),y=a(32),k=a.n(y),E=h.a.div({float:"left",color:"#dedeea",fontSize:"36px"}),j=(i.a.Component,a(60)),N=a.n(j),C={width:"100%",height:" 100vh",top:0},S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{style:C,id:"tsparticles",options:{fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onhover:{enable:!0,mode:"grab"}},modes:{push:{quantity:1},grab:{distance:200,line_linked:{opacity:.1}}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:800},value:20},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}))}}]),a}(i.a.Component),O=a(119),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:this.props.id},i.a.createElement(O.a,null,i.a.createElement("h2",{className:"section-title mb-5"},this.props.title),this.props.children))}}]),a}(i.a.Component),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.backgroundColor?e.backgroundColor:"##342054",a=h.a.div(n||(n=Object(p.a)(["\n      background-color: ",";\n    "])),t);return i.a.createElement(a,{className:"service-box rounded data-background padding-30 text-center text-light shadow-blue mb-4"},i.a.createElement("img",{src:e.image,alt:e.title}),i.a.createElement("h3",{className:"mb-3 mt-0"},e.title),e.children)}}]),a}(i.a.Component),L=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){e&&!n.state.loaded&&n.setState({completed:n.props.percent,loaded:!0})},n.state={completed:0,loaded:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.backgroundColor?e.backgroundColor:"#f1f1f1";return i.a.createElement("div",{className:"skill-item mb-4"},i.a.createElement(k.a,{onChange:this.onChange},i.a.createElement("div",{className:"skill-info clearfix"},i.a.createElement("h4",{className:"float-left mb-3 mt-0"},e.title),i.a.createElement("span",{className:"float-right"},"".concat(e.percent,"%")))),i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:"progress-bar data-background",style:{width:"".concat(this.state.completed,"%"),backgroundColor:"".concat(t)}})))}}]),a}(i.a.Component),I=a(85),A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=h.a.div({background:"#fff",fontSize:"24px",color:"#ff4c60",position:"absolute",left:this.props.left?this.props.left:"-10px",top:0,zIndex:1,fontWeight:900});return i.a.createElement("div",{className:"timeline-container"},i.a.createElement(I,{bottom:!0},i.a.createElement("div",{className:"content"},i.a.createElement("span",{className:"time"},this.props.time),i.a.createElement("h3",{className:"title"},this.props.title),this.props.children)),i.a.createElement(t,null,i.a.createElement(v.a,{icon:e.icon})))}}]),a}(i.a.Component),M=a(71),P=a(61),D=["offset"],H=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).smoothScroll=function(t){var a;t.preventDefault();var n=0;e.props.offset&&(n=e.props.offset);var r=null===(a=t.currentTarget.getAttribute("href"))||void 0===a?void 0:a.slice(1);if(r){var o=document.getElementById(r);if(o){var i=o.getBoundingClientRect().top+window.pageYOffset;window.scroll({top:i-n,behavior:"smooth"})}}e.props.onClick&&e.props.onClick(t)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){P.polyfill()}},{key:"render",value:function(){var e=this.props,t=(e.offset,Object(M.a)(e,D));return i.a.createElement("a",Object.assign({},t,{onClick:this.smoothScroll}),this.props.children)}}]),a}(i.a.Component),_=a(28),q=(h.a.div(r||(r=Object(p.a)(["\n  font-weight: 500;\n  font-size: 18px;\n"]))),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(x,{id:"about",title:"About Me"},i.a.createElement(f.a,null,i.a.createElement(g.a,{md:12,className:" triangle-top-sm"},i.a.createElement("div",{className:"rounded bg-white shadow-dark padding-30"},i.a.createElement(f.a,null,i.a.createElement(g.a,{md:8},i.a.createElement("div",{style:{textAlign:"justify"},dangerouslySetInnerHTML:{__html:_.objective}}),i.a.createElement("div",{className:"mt-3 mb-3"},i.a.createElement("a",{href:"https://www.linkedin.com/in/chetan-thakur/",className:"btn btn-kd",target:"_blank"},"View on LinkedIn"))),i.a.createElement(g.a,{md:4},i.a.createElement("h3",null,"Expertise "),_.skills.map((function(e){return i.a.createElement(L,{key:e.name,title:e.name,percent:e.confidence,backgroundColor:e.color})}))))))))}}]),a}(i.a.Component)),W=a(24),J=W.education,F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(x,{id:"education",title:"Education"},i.a.createElement(f.a,null,i.a.createElement(g.a,{md:12},i.a.createElement("div",{className:"timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden"},J.map((function(e){return i.a.createElement(A,{key:e.degree,time:e.period,title:e.school,icon:["fas","graduation-cap"]},i.a.createElement("b",null,e.degree),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}}))})),i.a.createElement("span",{className:"line"})))))}}]),a}(i.a.Component),U=W.career,R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(x,{id:"experience",title:"Experience"},i.a.createElement(f.a,null,i.a.createElement(g.a,{md:12},i.a.createElement("div",{className:"timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden"},U.map((function(e){return i.a.createElement(A,{key:e.company,time:e.period,title:e.title,icon:["fas","briefcase"],left:"-7px"},i.a.createElement(g.a,{md:12},i.a.createElement("b",null,e.company),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.role}})))})),i.a.createElement("span",{className:"line"})))))}}]),a}(i.a.Component),z=h.a.footer({marginTop:"110px"}),B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(z,{className:"footer"},i.a.createElement(O.a,null,i.a.createElement("span",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," ",_.username,".")))}}]),a}(i.a.Component),G=a(122),Y=a(123),V=a(15),Q=h.a.span({color:"#fff",fontSize:"36px",fontFamily:"Rubik, sans-serif",fontWeight:700,lineHeight:"36px"}),K=h.a.span({color:"#ff4c60",display:"inline"}),Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"kd-header fixed-top"},i.a.createElement(O.a,null,i.a.createElement(G.a,{expand:"lg",variant:"dark"},i.a.createElement(G.a.Brand,{href:"#"},i.a.createElement(Q,null,V.firstName,i.a.createElement(K,null,V.middleName),V.lastName)),i.a.createElement(G.a.Toggle,{"aria-controls":"navbarNavDropdown"}),i.a.createElement(G.a.Collapse,{id:"navbarNavDropdown"},i.a.createElement(Y.a,{className:"ml-auto",as:"ul"},i.a.createElement(Y.a.Item,{as:"li"},i.a.createElement(H,{href:"#home",className:"nav-link"},"Home")),i.a.createElement(Y.a.Item,{as:"li"},i.a.createElement(H,{href:"#about",className:"nav-link"},"About")),i.a.createElement(Y.a.Item,{as:"li"},i.a.createElement(H,{href:"#education",className:"nav-link"},"Education & Experience")),i.a.createElement(Y.a.Item,{as:"li"},i.a.createElement(H,{href:"#recommendations",className:"nav-link"},"Recommendations")),i.a.createElement(Y.a.Item,{as:"li"},i.a.createElement(H,{href:"#contact",className:"nav-link"},"Contact")))))))}}]),a}(i.a.Component),$=a(70),X=a(34),ee=h.a.div({color:"#ff4c60",display:"inline"}),te=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:"home",className:"home d-flex align-items-center"},i.a.createElement(S,null),i.a.createElement(O.a,null,i.a.createElement("div",{className:"intro"},i.a.createElement("img",{src:V.avatar,alt:"Chetan Thakur",className:"mb-4 "}),i.a.createElement("h1",{className:"mb-2 mt-0"},V.firstName,i.a.createElement(ee,null,V.middleName),V.lastName),i.a.createElement("span",null,"I'm a"," ",i.a.createElement($.a,{springConfig:{stiffness:180,damping:10},interval:2e3},V.titles.map((function(e){return i.a.createElement("b",null,i.a.createElement("i",{key:e},e))})))),i.a.createElement("ul",{className:"social-icons light list-inline mb-0 mt-4"},V.socialNetworks.map((function(e){return i.a.createElement("li",{className:"list-inline-item",key:e.iconName},i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(v.a,{icon:X.a[e.iconName]})))}))),i.a.createElement("div",{className:"mt-4"},i.a.createElement(H,{href:"#contact",className:"btn btn-kd"},"Contact me"),i.a.createElement("p",null," "),i.a.createElement("a",{href:"./Chetan-Thakur-Resume.pdf",className:"btn btn-kd",target:"_blank",role:"button"},"Download reesume"))),i.a.createElement("div",{className:"scroll-down"},i.a.createElement(H,{href:"#about",className:"mouse-wrapper"},i.a.createElement("span",null,"Scroll Down"),i.a.createElement("span",{className:"mouse"},i.a.createElement("span",{className:"wheel"}))))))}}]),a}(i.a.Component),ae=a(48),ne=ae.services,re=a(96),oe=(i.a.Component,a(65)),ie=a.n(oe),le=(a(112),a(113),a(66).recommendations),ce=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e={dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1,pauseOnHover:!0};return i.a.createElement(x,{id:"recommendations",title:"Recommendations"},i.a.createElement(f.a,null,i.a.createElement(g.a,{md:{span:8,offset:2}},i.a.createElement(ie.a,e,le.map((function(e){return i.a.createElement("div",{className:"slick-slide",key:e.name},i.a.createElement("div",{className:"text-center mx-auto"},i.a.createElement("div",{className:"mb-3 mx-auto"},i.a.createElement("img",{className:"roundImg",src:e.avatar,alt:e.name})),i.a.createElement("h4",{className:"mt-3 mb-0"},e.name),i.a.createElement("span",{className:"subtitle"},e.jobTitle),i.a.createElement("div",{className:"bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ml-4 mr-4"},i.a.createElement("p",{className:"mb-0"},e.recommendation),i.a.createElement("div",{className:"mt-3 mb-3"},i.a.createElement("a",{href:e.profileLink,className:"btn btn-kd",target:"_blank"},"LinkedIn profile"))," ")))}))))))}}]),a}(i.a.Component),se=a(67).tools,me=(i.a.Component,a(10)),de=function(){var e=Object(o.useState)(!1),t=Object(me.a)(e,2),a=t[0],n=t[1];return window.addEventListener("scroll",(function(){!a&&window.pageYOffset>400?n(!0):a&&window.pageYOffset<=400&&n(!1)})),i.a.createElement("div",{id:"return-to-top",style:{display:a?"block":"none"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},i.a.createElement(v.a,{icon:["fas","arrow-up"]}))},ue=a(21),pe=a(68),he=a(69);ue.b.add(pe.a,he.a,X.a);a(114);var fe=W.certification,ge=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(x,{id:"Certification",title:"Certification"},i.a.createElement(f.a,null,i.a.createElement(g.a,{md:12},i.a.createElement("div",{className:"timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden"},fe.map((function(e){return i.a.createElement(A,{key:e.degree,time:e.period,title:e.school,icon:["fas","graduation-cap"]},i.a.createElement("b",null,e.degree),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}}))})),i.a.createElement("span",{className:"line"})))))}}]),a}(i.a.Component),ve=a(3),be=a(35),we=a(49);function ye(){ye=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function c(e,t,a,n){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new j(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return C()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=y(i,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=s(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var m={};function d(){}function u(){}function p(){}var h={};l(h,r,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(N([])));g&&g!==t&&a.call(g,r)&&(h=g);var v=p.prototype=d.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(r,o){function i(){return new t((function(n,i){!function n(r,o,i,l){var c=s(e[r],e,o);if("throw"!==c.type){var m=c.arg,d=m.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){m.value=e,i(m)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return u.prototype=p,l(v,"constructor",p),l(p,"constructor",u),u.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new w(c(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),l(v,i,"Generator"),l(v,r,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;E(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:N(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var ke=function(){var e=function(e){var t=Object(o.useState)((null===e||void 0===e?void 0:e.initialValues)||{}),a=Object(me.a)(t,2),n=a[0],r=a[1],i=Object(o.useState)({}),l=Object(me.a)(i,2),c=l[0],s=l[1];return{data:n,handleChange:function(e,t){return function(a){var o=t?t(a.target.value):a.target.value;r(Object(we.a)(Object(we.a)({},n),{},Object(be.a)({},e,o)))}},handleSubmit:function(){var t=Object(ve.a)(ye().mark((function t(a){var r,o,i,l,c,m,d,u,p,h;return ye().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(r=null===e||void 0===e?void 0:e.validations)){t.next=9;break}for(l in o=!0,i={},r)m=n[l],(null===(d=r[l])||void 0===d||null===(c=d.required)||void 0===c?void 0:c.value)&&!m&&(o=!1,i[l]=null===d||void 0===d||null===(u=d.required)||void 0===u?void 0:u.message),(null===(p=null===d||void 0===d?void 0:d.pattern)||void 0===p?void 0:p.value)&&!RegExp(p.value).test(m)&&(o=!1,i[l]=p.message),(null===(h=null===d||void 0===d?void 0:d.custom)||void 0===h?void 0:h.isValid)&&!h.isValid(m)&&(o=!1,i[l]=h.message);if(o){t.next=9;break}return s(i),t.abrupt("return");case 9:s({}),(null===e||void 0===e?void 0:e.onSubmit)&&e.onSubmit();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),errors:c}}({validations:{name:{pattern:{value:"^[A-Za-z]*$",message:"You're not allowed to use special characters or numbers in your name."}},companyName:{pattern:{value:"^[A-Za-z]*$",message:"You're not allowed to use special characters or numbers in company name."}},contact:{pattern:{value:"^[0-9]*$",message:"Contact number should be numeric."},custom:{isValid:function(e){return e.length>=10},message:"The contact number needs to be at least 10 number long."}},message:{custom:{isValid:function(e){return e.length>10},message:"The message needs to be at least 10 characters long."}}},onSubmit:function(){alert("User submitted!")}}),t=e.handleChange,a=e.handleSubmit,n=e.data,r=e.errors;return i.a.createElement(x,{id:"contact",title:"Get In Touch"},i.a.createElement("form",{className:"registration-wrapper",onSubmit:a},i.a.createElement(f.a,null,i.a.createElement(g.a,{md:6},i.a.createElement("input",{className:"kd-form-control",placeholder:"Name*",value:n.name||"",onChange:t("name"),required:!0}),r.name&&i.a.createElement("p",{className:"error"},r.name)),i.a.createElement(g.a,{md:6},i.a.createElement("input",{className:"kd-form-control",placeholder:"Contact*",value:n.contact||"",onChange:t("contact"),required:!0}),r.contact&&i.a.createElement("p",{className:"error"},r.contact))),i.a.createElement(f.a,null,i.a.createElement(g.a,{md:6},i.a.createElement("input",{className:"kd-form-control",placeholder:"Email*",type:"email",value:n.email||"",onChange:t("email"),required:!0})),i.a.createElement(g.a,{md:6},i.a.createElement("input",{className:"kd-form-control",placeholder:"Company name",value:n.companyName||"",onChange:t("companyName")}),r.companyName&&i.a.createElement("p",{className:"error"},r.companyName))),i.a.createElement(f.a,null,i.a.createElement(g.a,{md:12},i.a.createElement("input",{className:"kd-form-control",placeholder:"Message",value:n.message||"",onChange:t("message"),required:!0}),r.message&&i.a.createElement("p",{className:"error"},r.message))),i.a.createElement(f.a,null,i.a.createElement(g.a,{md:12},i.a.createElement("button",{className:"btn btn-kd",type:"submit"},"Send message")))))};var Ee=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,null),i.a.createElement("main",null,i.a.createElement(te,null),i.a.createElement(ce,null),i.a.createElement(q,null),i.a.createElement(F,null),i.a.createElement(R,null),i.a.createElement(ge,null),i.a.createElement(ke,null)),i.a.createElement(B,null),i.a.createElement(de,null))};a(115);c.a.render(i.a.createElement(Ee,null),document.getElementById("root"))},15:function(e){e.exports=JSON.parse('{"firstName":"Chetan","middleName":" ","lastName":"Thakur","avatar":"./images/CHETAN_THAKUR.png","titles":["Fullstack developer","Front-End developer","Back-End developer"],"socialNetworks":[{"link":"https://github.com/chetan-thakur-fullstack-developer/","iconName":"faGithub"},{"link":"https://www.linkedin.com/in/chetan-thakur/","iconName":"faLinkedin"}]}')},24:function(e){e.exports=JSON.parse('{"education":[{"period":"2010 \u2013 2013","school":"Guru Nank Dev University","degree":"Bachelor of Computer Application","description":"Amritsar, Punjab, India"},{"period":"2010 \u2013 2013","school":"Guru Gobind Singh Indraprasth University","degree":"Master of Computer Apllication","description":"New Delhi, Delhi, India"}],"certification":[{"period":"2021","school":"Microsoft Certified: Azure fundamentals","degree":"Microsoft","description":"<p>Dallas, Texas, USA</p>"},{"period":"2019","school":"Amazon web services (AWS): the complete intorduction","degree":"Udemy","description":"<p>Dallas, Texas, USA</p>"},{"period":"2019","school":"Microservices fundamentals","degree":"Udemy","description":"<p>Dallas, Texas, USA</p>"},{"period":"2019","school":"The complete microservices with spring core","degree":"Udemy","description":"<p>Dallas, Texas, USA</p>"},{"period":"2018","school":"Safe 4 Practitioner Certification","degree":"Scaled Agile Inc.","description":"<p>Dallas, Texas, USA</p>"},{"period":"2015","school":"Core & Advance Java with framework","degree":"Tech Mentro","description":"New Delhi, Delhi, India"}],"career":[{"period":"Jul 2019 - Present","company":"HCL America Inc.","title":"Technical Lead","description":"<p>Dallas, Texas, USA</p>","role":"Working as a Tech Lead with having technologies like (TypeScript, NodeJS, AWS, Microsoft Azure, MongoDb, Restful API, Microservices). Currently working for Verizon on technology NodeJS and AngularJS to create microservices and UI. Contributing to requirement gathering, design and coding. Working with the Business analyst, Project Manager, Product Owner and Testing team closely to meet project requirements and deadline. Coordinating with users in completing Test cases, UAT and issue resolutions. "},{"period":"Nov 2016 - July 2019","company":"ITBRIZ LLC.","title":"Senior Software Engineer","description":"<p>Dallas, Texas, USA</p>","role":"Worked as a Full-stack Developer & Tester for various web application development with reporting and analytics feature. Contributed to requirement gathering, design and coding. Worked with Business analyst, Project Manager and Testing team to meet project deadline. Helped users in completing Test cases, UAT and issue resolutions. Worked on Market data web analytics application, Sales opportunity, issues and order management web applications development, enhancement, and issue resolutions"},{"period":"Oct 2015 - Nov 2016","company":"Saffron Tech Pvt.Ltd","title":"System Analyst Engineer","description":"<p>New Delhi, Delhi, India</p>","role":"Worked as Java Developer for various purchasing portal to build secure portal to buy their products quickly and safely. Worked with the team leader for designing and developing the code according to the end user requirements. Worked on Bluefish Sport, Asaf-Ganot, Anima domus"},{"period":"Oct 2013 - Oct 2014","company":"Total Wireless Technolgies Pvt. Ltd.","title":"Software developer","description":"<p>New Delhi, Delhi, India</p>","role":"Worked as a Junior Java developer for various GPS tracking web application development, design and coding. Worked with Project Manager and Testing team to meet project requirements. Helped Project Manager to provide solutions related to requirement of Users tracking Systems. Worked on GPS online solutions, Tracker Home & Vehicle Tracking Station."},{"period":"Aug 2010 - Nov 2016","company":"Webspro Technosys","title":"Freelance","description":"<p>New Delhi, Delhi, India</p>","role":"Worked as Web developer for various freelance web application development, design and coding. Worked with team to meet project requirements. Helped Project Manager to provide solutions related to requirement specific."}]}')},28:function(e){e.exports=JSON.parse('{"username":"Chetan Thakur","avatar":"/images/Chetan.svg","objective":"<p><b>Fullstack developer</b> over <b>11+ years</b> of experience in developing, implementing and maintaining <b>Java Spring Boot, Angular,ReactJS, TypeScript, NodeJs,</b>  Restful API, Microservices based web applications, components and interfaces. <li>Solid Front End UX/UI Developer <b>(Angular, ReactJS, HTML5, CSS3, JSP, JS)</b> with solid understanding of database <b>(MYSQL, Oracle, SQL Server, Cassandra), Core Java & J2EE (Struts, Hibernate, Spring, Spring boot, microservice)</b>development skills including Multithreading, Synchronization, Collections and Serialization.</li> <li>Actively worked on creating <b>NodeJS</b> and <b>Spring Boot</b> microservices. </li> <li>Worked closely with Business and QA team members to understand requirements, design & ensure system meets business and technical objectives. </li> <li>Participated in the entire software development lifecycles, wrote well documented and efficient code with version code management. </li><li>Hands on experience in <b>Amazon web services (AWS)</b> like codeCommit, codeWatch, SQS, Lambda also created dashboard for to monitor production env.Excellent experience in Onshore-Offshore model interacting with clients and onsite managers.</li><li>Extensively worked on <b>Responsive Web Design (RWD)</b> using Bootstrap and CSS3 Media Queries.</li></p>","resumeUrl":"https://www.linkedin.com/in/chetan-thakur/","skills":[{"name":"TypeScript","confidence":92,"color":"#FF4500"},{"name":"ReactJS","confidence":95,"color":"#1E90FF"},{"name":"Angular","confidence":90,"color":"#FF6347"},{"name":"NodeJS","confidence":90,"color":"#32CD32"},{"name":"Java spring boot","confidence":90,"color":"#00FF7F"},{"name":"NoSQL","confidence":85,"color":"rgb(108, 108, 229)"},{"name":"SQL","confidence":85,"color":"#0000FF"},{"name":"AWS Cloud","confidence":85,"color":"#FF8C00"}],"statistics":[{"number":28,"title":"Open-source projects","iconPrefix":"fab","iconName":"osi"},{"number":59,"title":"Projects completed","iconPrefix":"fas","iconName":"tasks"},{"number":3285,"title":"Cup of coffee","iconPrefix":"fas","iconName":"coffee"},{"number":2,"title":"Publications","iconPrefix":"far","iconName":"newspaper"}]}')},48:function(e){e.exports=JSON.parse('{"customContent":"Looking for custom jobs? <a href=\\"#contact\\">Click here</a> to contact me! <span role=\\"img\\" aria-label=\\"wave\\">\ud83d\udc4b</span>","services":[{"title":"UI/UX design","photo":"/images/service-1.svg","backgroundColor":"rgb(108, 108, 229)","content":"Create better interfaces and experiences for the user, making the web, application\'s and technology easier for the user.","delay":0},{"title":"Web Development","photo":"/images/service-2.svg","backgroundColor":"rgb(249, 215, 76)","content":"Tailor website for search engine optimisation, content organisation, user-friendly site, and effective calls to action.","delay":1000},{"title":"Photography","photo":"/images/service-3.svg","backgroundColor":"rgb(249, 123, 139)","content":"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.","delay":2000},{"title":"Photography","photo":"/images/service-3.svg","backgroundColor":"rgb(249, 123, 139)","content":"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.","delay":2000},{"title":"Photography","photo":"/images/service-3.svg","backgroundColor":"rgb(249, 123, 139)","content":"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.","delay":2000},{"title":"Photography","photo":"/images/service-3.svg","backgroundColor":"rgb(249, 123, 139)","content":"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.","delay":2000}]}')},66:function(e){e.exports=JSON.parse('{"recommendations":[{"name":"Rod Simms","avatar":"./images/recommendation/RodSimms.jpg","jobTitle":"Sr. Project Program Manager / Automation & Analytics","recommendation":"Chetan has shown himself to be an excellent developer. He has a great attitude, and command of the subject matter. I found him to always meet his dates and milestones, to be punctual, and very open with quality feedback. I would love the chance to work with him again, and feel he would add tremendous value to any organization.","profileLink":"https://www.linkedin.com/in/rod-simms-7b1b171b9/"},{"name":"Rakhee Sawant","avatar":"./images/recommendation/Rakhee.jpg","jobTitle":"Lead Technical Program Manager at Mastercard","recommendation":"Chetan is an extremely skilled software engineer with an always ready to help attitude. He is very knowledgeable and does not think twice before sharing his knowledge with others. He is always ready to take on challenges, be it projects or learning new technologies. His can do attitude always helps scrum team achieve all the goals. I was fortunate to have Chetan in my scrum team.","profileLink":"https://www.linkedin.com/in/rakhee-sawant/"},{"name":"Bob Stanturf","avatar":"./images/recommendation/bob.jpg","jobTitle":"Mona Consulting LLC.","recommendation":"I thoroughly enjoyed working with Chetan. We were involved in an extremely complex project and his technical knowledge and work attitude truly impressed me. Chetan is an extremely good listener and was always willing to go the extra mile to provide a quality end result while at the same time providing understandable explanations to the approach being pursued. Would love to work with him again in the future.","profileLink":"https://www.linkedin.com/in/bob-stanturf-a676b63/"},{"name":"Sudha Gopal","avatar":"./images/recommendation/Sudha.jpg","jobTitle":"Engineering e-commerce software","recommendation":"I worked with Chetan for a few months in 2019 when he was part of the commerce tools development team at AT&T. He was one of the key developers our team relied on when building our product structure as part of the product and offers platform. He was very knowledgeable and skilled, and always completed his deliverables on time with focus on quality. He had excellent work ethics and attitude and worked well with everyone. I highly recommend Chetan and believe he will be a valuable asset to any company.","profileLink":"https://www.linkedin.com/in/sudha-gopal-b4836b9/"},{"name":"Chris Svajlenka","avatar":"./images/recommendation/Chris.jpg","jobTitle":"Engineering e-commerce software","recommendation":"Chetan is bright, helpful and a pleasure to work with. They navigated some seriously confusing code with ease. Chetan was essential to our team, providing excellent assistance with implementing new features and bug correction. I cannot recommend working with Chetan enough. I hope I get another chance to work with them in the future!","profileLink":"https://www.linkedin.com/in/svajlenka/"},{"name":"Andy Raghvendra","avatar":"./images/recommendation/Andy.jpg","jobTitle":"Agile Coach","recommendation":"It was pleasure to have Chetan in my team, he is a very versatile, detail oriented, hard working team member. He is a very collaborative member who has good listening ears and clear way of communicating his point of view. Chetan exhibited good influencing skills in brain storming sessions by leading & closing the design sessions with fellow team members. He will be a great asset to any team he joins. I wish him good luck in all his future endeavors.","profileLink":"https://www.linkedin.com/in/andyrags/"},{"name":"Dankit Patel","avatar":"./images/recommendation/Dankit.jpg","jobTitle":"Lead Product Manager","recommendation":"Chetan is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline oriented and intelligent person with exceptional product catalog and development skills. Highly recommended.","profileLink":"https://www.linkedin.com/in/dankit-patel-245422159/"},{"name":"Meghan Kelly Montana","avatar":"./images/recommendation/Meghan.jpg","jobTitle":"Product Manager","recommendation":"Chetan and his team are some of the best developers I have worked with in my 16+ years at AT&T. He was always willing to be creative in his approaches and give suggestions and solutions that best fit the business need and the timeline. He is extremely patient, especially with people like myself who are less technical, never showing any frustration with my endless questions! Chetan is truly a wonderful teammate and will be a huge benefit to any company that he works for. ","profileLink":"https://www.linkedin.com/in/meghan-kelly-montana/"},{"name":"Neha Singh","avatar":"./images/recommendation/Neha.jpg","jobTitle":"Senior Devops Engieeer","recommendation":"I worked with Chetan at AT&T during new project as well as sustainment releases. He always turned out to be an outstanding performer in his area and would almost always have the solutions to problems that were reported. His key strengths are in angularjs, reactjs, jsp javascript areas and he\'s remarkable at handling any projects assigned to him in general.","profileLink":"https://www.linkedin.com/in/itsnehasingh/"},{"name":"Itoro Akpan","avatar":"./images/recommendation/Itoro.jpg","jobTitle":"Software developer","recommendation":"I worked with Chetan for about a year. In that time, I have known him to be the consummate professional who knows his stuff. He is a fast learner and is able to quickly adapt to whatever technology we adopted on projects. Most importantly, Chetan is always available to help us, his teammates, even if it means dropping what he has at hand. To me, that\'s the ultimate example of a true team player. If given the opportunity, I would definitely work with him again.","profileLink":"https://www.linkedin.com/in/itoro-akpan-iquot-845a533/"},{"name":"Kapil Bhargava","avatar":"./images/recommendation/Kapil.jpg","jobTitle":"Digital Marketing Consultant","recommendation":"Chetan is very proactive and clear in his approach. He is a quick decision maker who very well knows how to retain customers. With his ideology, I gained what I really expected","profileLink":"https://www.linkedin.com/in/erkapilb/"}]}')},67:function(e){e.exports=JSON.parse('{"tools":[{"name":"jquery","image":"/images/jquery-bw.svg"},{"name":"html5","image":"/images/html5-bw.svg"},{"name":"typescript","image":"/images/typescript-bw.svg"},{"name":"css3","image":"/images/css3-bw.svg"},{"name":"sql server","image":"/images/sqlserver-bw.svg"},{"name":"azure","image":"/images/azure-bw.svg"},{"name":".net core","image":"/images/dotnetcore-bw.svg"},{"name":"graphql","image":"/images/graphql-bw.svg"}]}')},72:function(e,t,a){e.exports=a(117)}},[[72,1,2]]]);
//# sourceMappingURL=main.4e3bac5b.chunk.js.map