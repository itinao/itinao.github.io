(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{375:function(t,e,n){var content=n(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("251afe00",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);var l={components:{},data:function(){return{darkMode:!1,colorMode:"light"}},mounted:function(){this.setLightMode()},methods:{setDarkMode:function(){this.darkMode=!0,this.colorMode="dark",this.$colorMode.preference=this.colorMode},setLightMode:function(){this.darkMode=!1,this.colorMode="light",this.$colorMode.preference=this.colorMode}}},o=n(45),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.darkMode?e("i",{staticClass:"fas fa-moon btn",staticStyle:{"font-size":"35px"},on:{click:this.setLightMode}}):e("i",{staticClass:"fas fa-sun btn",staticStyle:{"font-size":"35px",color:"white"},on:{click:this.setDarkMode}})])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{}}},o=n(45),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-auto"},[n("h2",{staticClass:"mb-5"},[t._v("\n    "+t._s(t.$t("workExperiences.title"))+"\n  ")]),t._v(" "),t._l(t.$t("workExperiences.works"),(function(e){return n("div",{key:e.title,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[n("div",{staticClass:"resume-content mr-auto"},[n("h3",{staticClass:"mb-0"},[t._v("\n        "+t._s(e.position)+"\n      ")]),t._v(" "),t._l(e.responsabilities,(function(e){return n("p",{key:e},[t._v("\n        - "+t._s(e)+"\n      ")])}))],2),t._v(" "),n("div",{staticClass:"resume-date text-md-right"},[n("span",{staticClass:"text-primary"},[t._v(t._s(e.startEndDate))])])])}))],2)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{}}},o=n(45),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-auto"},[n("h2",{staticClass:"mb-5"},[t._v("\n    "+t._s(t.$t("skills.title"))+"\n  ")]),t._v(" "),n("div",{staticClass:"subheading mb-3"},[t._v("\n    "+t._s(t.$t("skills.iconsTitle"))+"\n  ")]),t._v(" "),n("ul",{staticClass:"list-inline list-icons",staticStyle:{"text-align":"center"}},t._l(t.$t("skills.devIcons"),(function(t){return n("li",{key:t,staticClass:"list-inline-item"},[n("i",{class:t})])})),0),t._v(" "),n("div",{staticClass:"subheading mb-3"},[t._v("\n    "+t._s(t.$t("skills.workflow"))+"\n  ")]),t._v(" "),n("ul",{staticClass:"fa-ul mb-0"},t._l(t.$t("skills.itemList"),(function(e){return n("li",{key:e},[n("i",{staticClass:"fa-li fa fa-check"}),t._v("\n      "+t._s(e)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{}}},o=n(45),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-auto"},[n("h1",{staticClass:"mb-0"},[t._v("\n    "+t._s(t.$t("personalInfo.name"))+"\n    "),n("span",{staticClass:"text-primary"},[t._v(t._s(t.$t("personalInfo.lastName")))])]),t._v(" "),n("h3",{staticClass:"mb-4"},[n("vue-typer",{attrs:{text:t.$t("personalInfo.subHeadingText"),repeat:1/0,shuffle:!0,"initial-action":"typing","pre-type-delay":100,"type-delay":82,"pre-erase-delay":2e3,"erase-delay":30,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"blink"}})],1),t._v(" "),n("div",{staticClass:"subheading mb-5"},[t._v("\n    "+t._s(t.$t("personalInfo.city"))+" ·\n    "),n("a",{attrs:{href:"mailto:name@email.com"}},[t._v(t._s(t.$t("personalInfo.email")))])]),t._v(" "),n("p",{staticClass:"mb-5"},[t._v("\n    "+t._s(t.$t("personalInfo.myDescription"))+"\n  ")]),t._v(" "),n("ul",{staticClass:"list-inline list-social-icons mb-0"},[n("li",{staticClass:"list-inline-item"},[n("a",{attrs:{target:"blank",href:t.$t("personalInfo.github")}},[t._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"fa-stack fa-lg"},[e("i",{staticClass:"fas fa-circle fa-stack-2x"}),this._v(" "),e("i",{staticClass:"fab fa-github-alt fa-stack-1x fa-inverse"})])}],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);var l=n(379),o=n(377),r=n(378),c={components:{Presentation:l.default,Experience:o.default,Skills:r.default},methods:{}},d=n(45),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"page-top"}},[e("div",{staticClass:"container-fluid p-0"},[e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:"about"}},[e("Presentation")],1),this._v(" "),e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"experience"}},[e("Experience")],1),this._v(" "),e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"skills"}},[e("Skills")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Presentation:n(379).default,Experience:n(377).default,Skills:n(378).default})},383:function(t,e,n){"use strict";n(375)},384:function(t,e,n){(e=n(61)(!1)).push([t.i,"h1[data-v-2586daa8]{font-size:3rem;line-height:5.5rem}@media (min-width:992px){.resume[data-v-2586daa8]{padding-top:0;padding-left:17rem}}",""]),t.exports=e},385:function(t,e,n){"use strict";n.r(e);var l=n(380),o=n(376),r=function(t,b,e,n){return(t/=n/2)<1?e/2*t*t+b:-e/2*(--t*(t-2)-1)+b},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=function(){var element=void 0,t=void 0,e=void 0,n=void 0,l=void 0,o=void 0,d=void 0,f=void 0,v=void 0,m=void 0,_=void 0,h=void 0;function k(){return window.scrollY||window.pageYOffset}function C(element){return element.getBoundingClientRect().top+t}function x(e){v||(v=e),_=l(m=e-v,t,d,f),window.scrollTo(0,_),m<f?window.requestAnimationFrame(x):function(){window.scrollTo(0,t+d),element&&o&&(element.setAttribute("tabindex","-1"),element.focus());"function"==typeof h&&h();v=!1}()}return function(v){var m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(f=m.duration||1e3,n=m.offset||0,h=m.callback,l=m.easing||r,o=m.a11y||!1,t=k(),void 0===v?"undefined":c(v)){case"number":element=void 0,o=!1,e=t+v;break;case"object":e=C(element=v);break;case"string":element=document.querySelector(v),e=C(element)}switch(d=e-t+n,c(m.duration)){case"number":f=m.duration;break;case"function":f=m.duration(d)}window.requestAnimationFrame(x)}}(),f={components:{Resume:l.default,DarkModeBtn:o.default},head:function(){return{title:"itinao"}},methods:{jumpTo:function(element){d(element)}}},v=(n(383),n(45)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#"},on:{click:function(e){return t.jumpTo("#about")}}},[t._v(t._s(t.$t("links.about")))])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#"},on:{click:function(e){return t.jumpTo("#experience")}}},[t._v(t._s(t.$t("links.experience")))])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#"},on:{click:function(e){return t.jumpTo("#skills")}}},[t._v(t._s(t.$t("links.skills")))])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("div",{staticStyle:{position:"fixed",bottom:"10px",left:"10px","z-index":"1000"}},[n("DarkModeBtn")],1)])])])]),t._v(" "),n("div",{staticClass:"resume"},[n("Resume")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[e("span",{staticClass:"d-block d-lg-none"},[this._v("Resume itinao")]),this._v(" "),e("span",{staticClass:"d-none d-lg-block"},[e("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:"https://avatars3.githubusercontent.com/u/759472?s=460&v=4",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"2586daa8",null);e.default=component.exports;installComponents(component,{DarkModeBtn:n(376).default,Resume:n(380).default})}}]);