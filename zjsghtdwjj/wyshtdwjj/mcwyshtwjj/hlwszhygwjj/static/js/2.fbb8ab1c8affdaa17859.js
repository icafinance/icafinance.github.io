webpackJsonp([2],{"8Hb7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticStyle:{color:"#fff"}},[e._v("当前白名单状态："+e._s(e.enable?"开启":"关闭"))]),e._v(" "),e.enable?n("el-button",{attrs:{type:"primary"},on:{click:e.close}},[e._v("关闭白名单")]):n("el-button",{attrs:{type:"primary"},on:{click:e.open}},[e._v("启动白名单")])],1)},staticRenderFns:[]},o=n("VU/8")({data:function(){return{enable:!1}},created:function(){this.$ICAToken&&this.init()},methods:{init:function(){var e=this;this.$ICAToken.whiteListModeEnable().call().then(function(t){e.enable=t})},open:function(){var e=this;this.$ICAToken.enableWhiteListMode().send({feeLimit:"100".toSun()}).then(function(t){e.$loading(t).then(function(t){t&&e.$refs.form.resetFields()})})},close:function(){var e=this;this.$ICAToken.disableWhiteListMode().send({feeLimit:"100".toSun()}).then(function(t){e.$loading(t).then(function(t){t&&e.$refs.form.resetFields()})})}}},i,!1,null,null,null);t.default=o.exports}});