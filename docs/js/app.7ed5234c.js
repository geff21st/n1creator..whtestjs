(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"18e9":function(t){t.exports=JSON.parse('{"monthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekDays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"startWeekDay":0}')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("div",{staticClass:"calendar-demo"},[a("calendar-picker",{attrs:{"initial-date":t.date,"initial-lang":"ru"},on:{select:t.onDateSelect}}),a("div",{staticClass:"calendar-demo__r"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"text"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar"},[n("div",{staticClass:"calendar__top"},[n("div",{staticClass:"calendar__prev-month",on:{click:t.prevMonth}}),n("div",{staticClass:"calendar__date"},[n("div",{staticClass:"calendar__month",domProps:{textContent:t._s(t.month)}}),n("div",{staticClass:"calendar__year",domProps:{textContent:t._s(t.year)}})]),n("div",{staticClass:"calendar__next-month",on:{click:t.nextMonth}})]),n("div",{staticClass:"calendar__week-days"},t._l(t.weekDays,(function(e,a){return n("div",{key:a,staticClass:"calendar__week-day",domProps:{textContent:t._s(e)}})})),0),n("div",{staticClass:"calendar__days"},t._l(t.days,(function(e,a){return n("div",{key:a,staticClass:"calendar__day",class:{active:e.active,fade:e.fade},domProps:{textContent:t._s(e.text)},on:{click:function(n){return t.selectDay(e)}}})})),0),n("div",{staticClass:"calendar__bottom"})])},s=[],c=n("5530"),u="ru",l=0,d=6,f={name:"CalendarPicker",props:{initialDate:String,initialLang:String},data:function(){return{date:null,lang:null,weekDays:[],monthNames:[]}},mounted:function(){if(this.date=this.getInitialDate(this.initialDate)||new Date,this.lang=this.initialLang||this.getDocumentLang(),this.lang)try{var t=n("ea50")("./".concat(this.lang,".json"))||{};this.weekDays=t.weekDays||[],this.monthNames=t.monthNames||[]}catch(e){console.error({error:e})}},methods:{getInitialDate:function(t){var e=null;return t&&(e=new Date(t),e&&e.getTime())?e:null},getDocumentLang:function(){var t=document.querySelector("html");return t&&t.getAttribute("lang")||u},selectDay:function(t){this.date=t.date||null},getDateFormatted:function(t){var e=t.date,n=void 0===e?null:e;return n&&n instanceof Date?n.toLocaleDateString("en-CA"):null},prevMonth:function(){this.date&&this.date instanceof Date&&(this.date=new Date(this.year,this.monthNumber-1,1))},nextMonth:function(){this.date&&this.date instanceof Date&&(this.date=new Date(this.year,this.monthNumber+1,1))}},watch:{initialDate:function(t){var e=this.getInitialDate(t);e&&(this.date=e)},date:function(t){var e={date:t};this.$emit("select",Object(c["a"])(Object(c["a"])({},e),{},{dateFormatted:this.getDateFormatted(e)}))}},computed:{year:function(){return this.date&&this.date instanceof Date?this.date.getFullYear():""},monthNumber:function(){return this.date&&this.date instanceof Date?this.date.getMonth():null},month:function(){return"number"===typeof this.monthNumber&&this.monthNames[this.monthNumber]||""},days:function(){for(var t=new Date(this.year,this.monthNumber+1,0).getDate(),e=[],n=1;n<=t;n++){var a=new Date(this.year,this.monthNumber,n);e.push({text:n,date:a,active:this.date&&this.date.getDate()===n,fade:!1})}var r=e[0]||null;if(r&&r.date&&r.date instanceof Date){var i=r.date.getDay();if(i>l)for(var o=new Date(this.year,this.monthNumber,0).getDate(),s=0;s<i;s++){var c=o-s,u=new Date(this.year,this.monthNumber-1,c);e.unshift({text:c,date:u,fade:!0,active:!1})}}var f=e&&e.length?e[e.length-1]:null;if(f&&f.date&&f.date instanceof Date){var h=d-f.date.getDay();if(h>0)for(var m=1;m<=h;m++){var p=new Date(this.year,this.monthNumber+1,m);e.push({text:m,date:p,fade:!0,active:!1})}}return e}}},h=f,m=(n("cc31"),n("2877")),p=Object(m["a"])(h,o,s,!1,null,"b6caa916",null),v=p.exports,y={name:"App",components:{CalendarPicker:v},data:function(){return{date:"..."}},methods:{onDateSelect:function(t){this.date=t.dateFormatted||"..."}}},g=y,D=(n("034f"),Object(m["a"])(g,r,i,!1,null,null,null)),_=D.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(_)}}).$mount("#app")},"61c6":function(t){t.exports=JSON.parse('{"monthNames":["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],"weekDays":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],"startWeekDay":1}')},"85ec":function(t,e,n){},cc31:function(t,e,n){"use strict";n("f77e")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ea50:function(t,e,n){var a={"./en.json":"18e9","./ru.json":"61c6"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="ea50"},f77e:function(t,e,n){}});
//# sourceMappingURL=app.7ed5234c.js.map