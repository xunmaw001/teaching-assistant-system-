(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qingjiaxinxi/add-or-update"],{4177:function(e,i,n){"use strict";n.r(i);var t=n("786a"),r=n("afc7");for(var a in r)"default"!==a&&function(e){n.d(i,e,(function(){return r[e]}))}(a);n("e970");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],t["b"],t["c"],!1,null,"4b587b5b",null,!1,t["a"],o);i["default"]=s.exports},"4cf9":function(e,i,n){},"786a":function(e,i,n){"use strict";var t,r=function(){var e=this,i=e.$createElement;e._self._c},a=[];n.d(i,"b",(function(){return r})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return t}))},8367:function(e,i,n){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,i,n,t,r,a,o){try{var u=e[a](o),s=u.value}catch(h){return void n(h)}u.done?i(s):Promise.resolve(s).then(t,r)}function o(e){return function(){var i=this,n=arguments;return new Promise((function(t,r){var o=e.apply(i,n);function u(e){a(o,t,r,u,s,"next",e)}function s(e){a(o,t,r,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("08a3"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{bianhao:this.getUUID(),biaoti:"",gonghao:"",jiaoshixingming:"",qingjianeirong:"",qingjiariqi:"",jieshuriqi:"",xuehao:"",xueshengxingming:"",sfsh:"",shhf:"",userid:""},gonghaoOptions:[],gonghaoIndex:0,user:{},ro:{bianhao:!1,biaoti:!1,gonghao:!1,jiaoshixingming:!1,qingjianeirong:!1,qingjiariqi:!1,jieshuriqi:!1,xuehao:!1,xueshengxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var i=o(t.default.mark((function i(n){var r,a,o,u;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.getStorageSync("nowTable"),i.next=3,this.$api.session(r);case 3:return a=i.sent,this.user=a.data,this.ruleForm.xuehao=this.user.xuehao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,i.next=9,this.$api.option("jiaoshi","gonghao",{});case 9:if(a=i.sent,this.gonghaoOptions=a.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=19;break}return this.ruleForm.id=n.id,i.next=17,this.$api.info("qingjiaxinxi",this.ruleForm.id);case 17:a=i.sent,this.ruleForm=a.data;case 19:if(!n.cross){i.next=66;break}o=e.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 22:if((i.t1=i.t0()).done){i.next=66;break}if(u=i.t1.value,"bianhao"!=u){i.next=28;break}return this.ruleForm.bianhao=o[u],this.ro.bianhao=!0,i.abrupt("continue",22);case 28:if("biaoti"!=u){i.next=32;break}return this.ruleForm.biaoti=o[u],this.ro.biaoti=!0,i.abrupt("continue",22);case 32:if("gonghao"!=u){i.next=36;break}return this.ruleForm.gonghao=o[u],this.ro.gonghao=!0,i.abrupt("continue",22);case 36:if("jiaoshixingming"!=u){i.next=40;break}return this.ruleForm.jiaoshixingming=o[u],this.ro.jiaoshixingming=!0,i.abrupt("continue",22);case 40:if("qingjianeirong"!=u){i.next=44;break}return this.ruleForm.qingjianeirong=o[u],this.ro.qingjianeirong=!0,i.abrupt("continue",22);case 44:if("qingjiariqi"!=u){i.next=48;break}return this.ruleForm.qingjiariqi=o[u],this.ro.qingjiariqi=!0,i.abrupt("continue",22);case 48:if("jieshuriqi"!=u){i.next=52;break}return this.ruleForm.jieshuriqi=o[u],this.ro.jieshuriqi=!0,i.abrupt("continue",22);case 52:if("xuehao"!=u){i.next=56;break}return this.ruleForm.xuehao=o[u],this.ro.xuehao=!0,i.abrupt("continue",22);case 56:if("xueshengxingming"!=u){i.next=60;break}return this.ruleForm.xueshengxingming=o[u],this.ro.xueshengxingming=!0,i.abrupt("continue",22);case 60:if("userid"!=u){i.next=64;break}return this.ruleForm.userid=o[u],this.ro.userid=!0,i.abrupt("continue",22);case 64:i.next=22;break;case 66:this.styleChange();case 67:case"end":return i.stop()}}),i,this)})));function n(e){return i.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},gonghaoChange:function(){var e=o(t.default.mark((function e(i){var n;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.gonghaoIndex=i.target.value,this.ruleForm.gonghao=this.gonghaoOptions[this.gonghaoIndex],e.next=4,this.$api.follow("jiaoshi","gonghao",{columnValue:this.ruleForm.gonghao});case 4:n=e.sent,n.data.jiaoshixingming&&(this.ruleForm.jiaoshixingming=n.data.jiaoshixingming);case 6:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),qingjiariqiChange:function(e){this.ruleForm.qingjiariqi=e.target.value,this.$forceUpdate()},jieshuriqiChange:function(e){this.ruleForm.jieshuriqi=e.target.value,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=o(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.biaoti){e.next=3;break}return this.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.userid){e.next=6;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("qingjiaxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("qingjiaxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,n=i.getFullYear(),t=i.getMonth()+1,r=i.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(n,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};i.default=s}).call(this,n("543d")["default"])},afc7:function(e,i,n){"use strict";n.r(i);var t=n("8367"),r=n.n(t);for(var a in t)"default"!==a&&function(e){n.d(i,e,(function(){return t[e]}))}(a);i["default"]=r.a},c310:function(e,i,n){"use strict";(function(e){n("403b"),n("921b");t(n("66fd"));var i=t(n("4177"));function t(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,n("543d")["createPage"])},e970:function(e,i,n){"use strict";var t=n("4cf9"),r=n.n(t);r.a}},[["c310","common/runtime","common/vendor"]]]);