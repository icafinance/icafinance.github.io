(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-63fda69b"],{"111b":function(t,e,n){},"3f32":function(t,e,n){"use strict";n.r(e);var s=(n("a9e3"),n("d3b7"),n("25f0"),n("5530")),o={data:function(){return{trx:0,usdt:0}},computed:Object(s.a)(Object(s.a)({},Vuex.mapState(["token"])),Vuex.mapState(["isBind"])),methods:{goJustSwap:function(){this.isBind||this.$store.commit("overlayShowChange",1)},init:function(){}},watch:{token:function(){var e=this;Number(this.token)&&this.$tronWeb.callNotDeployed({contractAddress:this.$contracts.ICASwapTRX.address,method:"getTrxToTokenOutputPrice(uint256)",parameter:[{type:"uint256",value:Number(this.token)}]}).then(function(t){e.trx=t.constant_result[0].decode(["uint256"]).toString().toNum(),e.$tronWeb.callNotDeployed({contractAddress:e.$contracts.USDTSwapTRX.address,method:"getTrxToTokenInputPrice(uint256)",parameter:[{type:"uint256",value:Number(e.trx)}]}).then(function(t){e.usdt=t.constant_result[0].decode(["uint256"]).toString().toNum()})})}},mounted:function(){this.$tronWeb&&this.init()}},s=(n("e2c0"),n("2877")),o=Object(s.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"getBalance"},[e("PurpleTitle",[e("div",[e("img",{attrs:{src:n("fd99")}}),e("span",[t._v(t._s(t.$t("GetICA")))])])]),e("div",{staticClass:"getBalanceContent"},[e("div",[e("span",[t._v(t._s(t.$t("Bal"))+"：")]),e("span",[t._v(t._s(t.token.toNum())+" ICA")])]),e("div",[e("span",[t._v("≈ "+t._s(t.trx)+" TRX")]),e("span",[t._v("≈ "+t._s(t.usdt)+" USDT")])]),e("van-button",{on:{click:t.goJustSwap}},[t._v(t._s(t.$t("GotoJustSwapforICA")))])],1)],1)},[],!1,null,"155891a2",null);e.default=o.exports},e2c0:function(t,e,n){"use strict";n("111b")},fd99:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAEjUlEQVRYR82YSagdVRCGvxInnHHGeZ4QXTgg4kJEBEUEQcGFSHDpUrIMIsGVKxciLrIRxIWouBLRTTThCaIGRTTGROOAxpjEWYM8LPku1Ze+/fr2vTfvCRY03fd2nXP+qlP1V50OBiQzTwTOBE4DTgFOAo4FjgSOqXszw0HA6y/gd+Bn4EfgG2B/RPw9tFbzLrpKmXkOcC1waQGYZ55ZOsvATuATr4jwd6+MARWQ24ELpuhq/b6y/lfgzx694wCvE4CTgaN7dJznfWBLRPg8ISNAmXkTcAdwWOuti39Rlu2JCEEsJJkpqLOAy4BLapubOTTo1YjY0Z40MvNq4L7Wn7p1a0R8t9DqM5Qz83DgCuBW4NRS/wd4PiI0fCQCegQ4HfDlKxHx8VoC6YlRd0EHXFXvvo2ITW1Aj9ePvRHxzH8Jppk7M3WAjlCWI+KJPkD+twV4aygLVgs4M6WLB4DzxiAiGqeMtmz8oxTkkCVgW0TIKWsimSl/XQfc3JN9T0bEKGv7ALUBfAXsAr4H3Ou5ARYAM+xs4GLg3AHLnooIiXQFoBeBWypV+8bLG3rwt7q3Cc4skoOOr3sfB41iBvi8eOqMWuTpiJBmJgFF7WWR5EVFklo5bfI12U7guYj4ciqgnlTVcrlDBvbZWnYUcD1wxAAqt0GPSCl99a8Zqndeiog9EzHUeGgeszPzLuDGlq6L7gZkXu/7+rI1MzXIeikhS5RutWLx3XRIgDJTTz1aEwnkPeDtiDC+5pbMtHt4sMXcO7tZtjEiXGBQMtMCvK6U3o2I12aNmfa+Q5IHu4Dcx5mlowPIzHs5IsychaSo4d4qvI7d3QWkd7YC7wxxTgdQA8JmbBvwWUTsH/CIjd6FwJV1b3cYKwA185gZnwJ6a1c3OKcAamPQa7Yrf7T+lDrsPJsg7sO8AtDeqvxtZb02Ymrgl2pNJb87S8k2xcXsfRYVM2s7cE0NXAFoYzVTpqNNlYVwlmyOiM1FpjZhEmnDWW1v6PUDdWnE11WOllv1dBJQl4cy08nlDNsFPWC6C7INdARoFuqh93MDGgjMdtr/7wDZ8koXM/mrz8BOggxv2ZweUs14eH2RPjwzTYwbqrtoUn8E6LHWaeOF7ilgDqvaKmaj/ZOHQwtr+5hjcTXtjcvzq09qc9CYGB8CbDUU0/BNz01DW9Bxs9kzxC2z4t01BTsGZPY8XG1FM9giacH8MCJ+6s7YAWSGySVWb9Peo/eQGGvynbxmZ+ARaMMYkA9Vve9p1ZTuNjjY7RCcW6Hb7y+liSzLTK21ijcnWNX0okZ6Heh6fyLt2yuX5Z5itXTebVjbtJ8StFopqIZ5JcZuADZDlyLijVmBMpCxenJ9vd+x4uvHFICCkaXdCu967+4CaUwIyL5oIS6qSmCoNHG3NBegKSA9o3s1Ymx9UCeKH/rAZaaGmfoeiy6v9G/Gm23PHjKgSgY/33hs6oqeEqDdgSIQP37p4T6Rr/wSsn1VgAqUcXbbwFluKLw8rX7kSbn53LNqQM1q1RsLzu5Abms+Xqmix5qPXLYg0ognYe8T8i+i7tjU8GyvBgAAAABJRU5ErkJggg=="}}]);