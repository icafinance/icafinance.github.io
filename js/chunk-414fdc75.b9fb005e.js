(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-414fdc75"],{5792:function(t,e,s){"use strict";s.r(e);var n={data:function(){return{lv:0,amount:0}},methods:{upgradeLevel:function(){var e=this;this.$contracts.ICAToken.upgradeLevel().send({feeLimit:this.$store.state.generalFeeLimit.toSun()}).then(function(t){e.$loading(t).then(function(t){t&&(e.$store.commit("overlayShowChange",0),e.$getBanlance(),e.$toast.success(e.$t("ReceivedSuccessfully")))})}).catch(console.error)}}},a=(s("b04a"),s("2877")),n=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"lv"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("LEVELUP")))]),e("img",{attrs:{src:s("6f9f")}}),e("span",{staticClass:"lvText"},[t._v(t._s(t.$t("LEVELUPText01")))]),e("span",{staticClass:"lvNumber"},[t._v(t._s("V"+t.lv))]),0!=t.amount?e("span",{staticClass:"lvAmount"},[t._v(t._s(t.$t("Get1"))+" "+t._s(t.amount)+" ICA")]):t._e(),e("van-button",{on:{click:t.upgradeLevel}},[t._v(t._s(t.$t("Get")))])],1)},[],!1,null,"1c74e41e",null);e.default=n.exports},"6f9f":function(t,e,s){t.exports=s.p+"img/upLv.828ed713.gif"},"85ef":function(t,e,s){},b04a:function(t,e,s){"use strict";s("85ef")}}]);