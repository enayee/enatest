webpackJsonp([1],{"1YFL":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("hroH"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var r=a("z1ys");var s=function(t){a("mdcu")},l=a("VU/8")(o.a,r.a,!1,s,"data-v-1d192d4c",null);e.default=l.exports},M93x:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("xJD8"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var r=a("VQC0");var s=function(t){a("Qxaq")},l=a("VU/8")(o.a,r.a,!1,s,null,null);e.default=l.exports},NHnr:function(t,e,a){"use strict";var i=a("R6lU"),o=i(a("7+uW")),n=i(a("M93x")),r=i(a("YaEn"));o.default.config.productionTip=!1,new o.default({el:"#app",router:r.default,components:{App:n.default},template:"<App/>"})},Qxaq:function(t,e){},VQC0:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav",[e("div",{staticClass:"logo-container"},[e("img",{attrs:{src:this.Logo}})])]),this._v(" "),e("router-view"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer"}},[e("p",[this._v("Copyright © Winbond Inc.")])])}]};e.a=i},YaEn:function(t,e,a){"use strict";var i=a("R6lU");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("7+uW")),n=i(a("/ocq")),r=i(a("1YFL"));o.default.use(n.default);var s=new n.default({routes:[{path:"/",name:"Form",component:r.default}]});e.default=s},Zqmz:function(t,e,a){t.exports=a.p+"static/img/winbond_logo.d4432b8.jpg"},hroH:function(t,e,a){"use strict";var i=a("R6lU");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("mtWM")),n={components:{},data:function(){return{test:{name:"",companyName:"",role:"",email:"",location:"",sheetId:"1aQUllEx5cLi1g8GGxAMs6b6NCWIkyUFPSuRrl7Yr0P8",fields:"name,companyName,role,email,location,filltime"},sheetArray:[{id:"1qgAXhPKGjYljU9600MdaIa6Jw-_LBF1YVu24oKRC-EQ",key:1},{id:"1Ek5XwJbcx65GxKtnG3ac14FK_2LR7ZpA3ha_ocfo6gM",key:2}],checkboxAgree:!1,completeAction:!1,nickname:""}},computed:{isableToSubmit:function(){var t=this.test,e=t.name,a=t.companyName,i=t.role,o=t.email,n=t.location;return e&&a&&i&&o&&n&&this.checkboxAgree}},methods:{testformsubmit:function(){var t=this,e=new Date,a=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+"  "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),i=this.test,n=i.name;i.companyName,i.role,i.email,i.location;this.test.filltime=a,(0,o.default)({url:"https://script.google.com/macros/s/AKfycbwHvn9o2q6_w3ZmrfOMMzXFFXwkkLB_JdlQfGUZwlifRrUo5NrvfBCv/exec",method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"},params:this.test}).then(function(e){t.nickname=n,alert("填寫成功，等待下一步指示。"),window.scrollTo(0,0)}).catch(function(t){})},testGetForm:function(){console.log("hi"),(0,o.default)({url:"https://script.google.com/macros/s/AKfycbwHvn9o2q6_w3ZmrfOMMzXFFXwkkLB_JdlQfGUZwlifRrUo5NrvfBCv/exec",method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},params:{sheetId:this.test.sheetId,action:"query"},dataType:"JSON"}).then(function(t){console.log("created get",t)}).catch(function(t){console.log(t)})}},created:function(){}};e.default=n},mdcu:function(t,e){},xJD8:function(t,e,a){"use strict";var i=a("R6lU");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("Zqmz")),n={name:"App",data:function(){return{Logo:o.default}}};e.default=n},z1ys:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-root"},[t.completeAction?t._e():a("div",{staticClass:"form-container"},[t._m(0),t._v(" "),a("div",{staticStyle:{width:"100%",margin:"auto","padding-top":"50px"}},[a("div",{staticClass:"field-title",staticStyle:{width:"50%",margin:"auto","text-align":"left"}},[t._v("姓名/Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.test.name,expression:"test.name"}],staticStyle:{width:"50%",margin:"auto","margin-bottom":"20px"},domProps:{value:t.test.name},on:{input:function(e){e.target.composing||t.$set(t.test,"name",e.target.value)}}})]),t._v(" "),a("div",{staticStyle:{width:"100%",margin:"auto"}},[a("div",{staticClass:"field-title",staticStyle:{width:"50%",margin:"auto","text-align":"left"}},[t._v("公司名稱/Company Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.test.companyName,expression:"test.companyName"}],staticStyle:{width:"50%",margin:"auto","margin-bottom":"20px"},domProps:{value:t.test.companyName},on:{input:function(e){e.target.composing||t.$set(t.test,"companyName",e.target.value)}}})]),t._v(" "),a("div",{staticStyle:{width:"100%",margin:"auto"}},[a("div",{staticClass:"field-title",staticStyle:{width:"50%",margin:"auto","text-align":"left"}},[t._v("角色/Role")]),t._v(" "),a("div",{staticClass:"select-wrapper"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.test.role,expression:"test.role"}],staticClass:"select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.test,"role",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"賣方分析師(Sell_side_analyst)"}},[t._v("賣方分析師(Sell_side_analyst)")]),t._v(" "),a("option",{attrs:{value:"買方分析師(Buy_side_analyst)"}},[t._v("買方分析師(Buy_side_analyst)")]),t._v(" "),a("option",{attrs:{value:"投資組合經理(Portfolio_manager)"}},[t._v("投資組合經理(Portfolio_manager)")]),t._v(" "),a("option",{attrs:{value:"新聞工作者(Journalist)"}},[t._v("新聞工作者(Journalist)")]),t._v(" "),a("option",{attrs:{value:"員工(Employee)"}},[t._v("員工(Employee)")]),t._v(" "),a("option",{attrs:{value:"個人投資者(Individual_investor)"}},[t._v("個人投資者(Individual_investor)")])]),t._v(" "),a("div",{staticClass:"arrow"},[t._v("▼")])])]),t._v(" "),a("div",{staticStyle:{width:"100%",margin:"auto"}},[a("div",{staticClass:"field-title",staticStyle:{width:"50%",margin:"auto","text-align":"left"}},[t._v("電子郵件/E-mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.test.email,expression:"test.email"}],staticStyle:{width:"50%",margin:"auto","margin-bottom":"20px"},domProps:{value:t.test.email},on:{input:function(e){e.target.composing||t.$set(t.test,"email",e.target.value)}}})]),t._v(" "),a("div",{staticStyle:{width:"100%",margin:"auto"}},[a("div",{staticClass:"field-title",staticStyle:{width:"50%",margin:"auto","text-align":"left"}},[t._v("所在地/Location")]),t._v(" "),a("div",{staticClass:"select-wrapper"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.test.location,expression:"test.location"}],staticClass:"select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.test,"location",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}}),t._v(" "),a("option",{attrs:{value:"Taiwan"}},[t._v("Taiwan")]),t._v(" "),a("option",{attrs:{value:"Australia"}},[t._v("Australia")]),t._v(" "),a("option",{attrs:{value:"Belgium"}},[t._v("Belgium")]),t._v(" "),a("option",{attrs:{value:"Canada"}},[t._v("Canada")]),t._v(" "),a("option",{attrs:{value:"China"}},[t._v("China")]),t._v(" "),a("option",{attrs:{value:"France"}},[t._v("France")]),t._v(" "),a("option",{attrs:{value:"Germany"}},[t._v("Germany")]),t._v(" "),a("option",{attrs:{value:"Hong Kong"}},[t._v("Hong Kong")]),t._v(" "),a("option",{attrs:{value:"India"}},[t._v("India")]),t._v(" "),a("option",{attrs:{value:"Ireland"}},[t._v("Ireland")]),t._v(" "),a("option",{attrs:{value:"Italy"}},[t._v("Italy")]),t._v(" "),a("option",{attrs:{value:"Japan"}},[t._v("Japan")]),t._v(" "),a("option",{attrs:{value:"Malaysia"}},[t._v("Malaysia")]),t._v(" "),a("option",{attrs:{value:"Netherlands"}},[t._v("Netherlands")]),t._v(" "),a("option",{attrs:{value:"New Zealand"}},[t._v("New Zealand")]),t._v(" "),a("option",{attrs:{value:"Norway"}},[t._v("Norway")]),t._v(" "),a("option",{attrs:{value:"Scotland"}},[t._v("Scotland")]),t._v(" "),a("option",{attrs:{value:"Singapore"}},[t._v("Singapore")]),t._v(" "),a("option",{attrs:{value:"South Africa"}},[t._v("South Africa")]),t._v(" "),a("option",{attrs:{value:"South Korea"}},[t._v("South Korea")]),t._v(" "),a("option",{attrs:{value:"Sweden"}},[t._v("Sweden")]),t._v(" "),a("option",{attrs:{value:"Switzerland"}},[t._v("Switzerland")]),t._v(" "),a("option",{attrs:{value:"UK"}},[t._v("UK")]),t._v(" "),a("option",{attrs:{value:"US"}},[t._v("US")]),t._v(" "),a("option",{attrs:{value:"Other"}},[t._v("Other")])]),t._v(" "),a("div",{staticClass:"arrow"},[t._v("▼")])])]),t._v(" "),a("div",{staticClass:"field-title"},[t._v("重要聲明/Disclaimer： *")]),t._v(" "),t._m(1),t._v(" "),a("div",{staticStyle:{width:"50%",margin:"auto","text-align":"left","margin-bottom":"30px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkboxAgree,expression:"checkboxAgree"}],staticStyle:{width:"auto"},attrs:{type:"checkbox",id:"checkboxAgree"},domProps:{checked:Array.isArray(t.checkboxAgree)?t._i(t.checkboxAgree,null)>-1:t.checkboxAgree},on:{change:function(e){var a=t.checkboxAgree,i=e.target,o=!!i.checked;if(Array.isArray(a)){var n=t._i(a,null);i.checked?n<0&&(t.checkboxAgree=a.concat([null])):n>-1&&(t.checkboxAgree=a.slice(0,n).concat(a.slice(n+1)))}else t.checkboxAgree=o}}}),t._v(" "),a("label",{attrs:{for:"checkboxAgree"}},[t._v(" 我同意以上條款／I agree to the above terms")]),a("br")]),t._v(" "),a("button",{staticClass:"submit-button",attrs:{disabled:!t.isableToSubmit},on:{click:function(e){return t.testformsubmit()}}},[t._v("提交")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-title"},[this._v("\n      Winbond 華邦電子股份有限公司"),e("br"),this._v("\n      2021 2nd Quarter Institutional Investors Conference\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"disclaimer"},[this._v("\n      1.您所提供之個人資料，將僅供本公司及配合廠商之統計及分析使用。如需刪除或停止利用您所留存之個人資料，請與本公司聯絡。\n      "),e("br"),this._v("2.本網路廣播所有內容（包含會議翻譯訊息）僅為參考之用，並非任何投資建議。本公司或其他供應商並不為訪客的投資行為負任何責任。\n      "),e("br"),this._v("3.嚴禁未經授權錄製或散播本網路廣播之影音、文字及簡報內容。\n      "),e("br"),this._v("1.The personal information that you provide will only be used by the Company and third-party providers for statistics and analysis purposes. You may also request Company to delete or terminate use of personal information retained.\n      "),e("br"),this._v("2.All content, including the translation version provided on this webcast, is for informational purposes only, not intended for investment advice. Neither the Company nor any of independent providers is liable for any actions taken in reliance on content contained herein.\n      "),e("br"),this._v("3.Unauthorized recording or re-distribution of the video/audio, text and presentation content of this webcast is strictly prohibited.\n    ")])}]};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.fb67fa904f70f3b5b33a.js.map