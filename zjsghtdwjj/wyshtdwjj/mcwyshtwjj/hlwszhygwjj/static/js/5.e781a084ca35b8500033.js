webpackJsonp([5],{bv6K:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{date:"",list:[]}},created:function(){this.$ICAToken&&this.init()},methods:{init:function(){var t=this;function e(t){return t<10?"0"+t:t}this.$ICAToken.latestTimeOfTopAward().call().then(function(n){var r=new Date(1e3*n.toNumber()),a=r.getFullYear(),s=e(r.getMonth()+1),i=e(r.getDate()),o=e(r.getHours()),d=e(r.getMinutes()),l=e(r.getSeconds());t.date=a+"/"+s+"/"+i+" "+o+":"+d+":"+l}),window.tronWeb.transactionBuilder.triggerConstantContract(this.$ICAToken.address,"distributeTopAwards()",{},[],"TPPAyAWUxFiBN2JM8eifRrnYEkudgkKu79").then(function(e){for(var n=window.tronWeb.utils.abi.decodeParams(["addresses","awards"],["address[10]","uint256[10]"],"0x"+e.constant_result[0]),r=n.addresses,a=n.awards,s=0;s<r.length;s++)t.list.push({address:window.tronWeb.address.fromHex(r[s]),awards:a[s].toString().fromSun()})})},draw:function(){var t=this;this.$ICAToken.distributeTopAwards().send({feeLimit:"100".toSun()}).then(function(e){t.$loading(e).then(function(e){e&&t.init()})})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[n("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"awards",label:"奖励",align:"center"}})],1),t._v(" "),n("p",{staticStyle:{color:"#fff"}},[t._v("上次开奖时间："+t._s(t.date))]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.draw}},[t._v("开奖")])],1)},staticRenderFns:[]},s=n("VU/8")(r,a,!1,null,null,null);e.default=s.exports}});