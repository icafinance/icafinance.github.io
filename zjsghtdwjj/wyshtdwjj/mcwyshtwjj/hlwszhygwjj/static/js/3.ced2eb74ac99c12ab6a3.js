webpackJsonp([3],{uevj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[n("p",[e._v("当前余额："+e._s(this.balance)+" ICA")]),e._v(" "),n("el-form-item",{attrs:{prop:"address",label:"收款地址",rules:{required:!0,message:"收款地址不能为空"}}},[n("el-input",{attrs:{type:"text"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"amount",label:"数量",rules:{required:!0,message:"数量不能为空"}}},[n("el-input",{attrs:{type:"number"},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}},[n("template",{slot:"append"},[e._v("ICA")])],2)],1),e._v(" "),n("el-form-item",{staticClass:"bottomButton"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提取")])],1)],1)],1)},staticRenderFns:[]},o=n("VU/8")({data:function(){return{form:{address:"",amount:""},balance:0}},created:function(){this.$ICAToken&&this.init()},methods:{init:function(){var e=this;this.$ICAToken.balanceOf("T9yD14Nj9j7xAB4dbGeiX9h8unkLV6KZEN").call(function(t,n){t||(e.balance=n.toString().fromSun())})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.$ICAToken.transferFrom("T9yD14Nj9j7xAB4dbGeiX9h8unkLV6KZEN",e.form.address,e.form.amount.toSun()).send({feeLimit:"100".toSun()}).then(function(t){e.$loading(t).then(function(t){t&&e.$refs.form.resetFields()})})})}}},r,!1,null,null,null);t.default=o.exports}});