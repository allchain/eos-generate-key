webpackJsonp([1],{0:function(f,e){},"05Ij":function(f,e){f.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},1:function(f,e){},"1QQ/":function(f,e){f.exports={name:"bigi",version:"1.4.2",description:"Big integers.",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},repository:{url:"https://github.com/cryptocoinjs/bigi",type:"git"},main:"./lib/index.js",scripts:{"browser-test":"./node_modules/.bin/mochify --wd -R spec",test:"./node_modules/.bin/_mocha -- test/*.js",jshint:"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",unit:"./node_modules/.bin/mocha",coverage:"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},dependencies:{},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]}}},"6ZSt":function(f,e){f.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},NHnr:function(f,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("7+uW"),a=t("Dfrr"),c=t.n(a),s={name:"App",data:function(){return{show:!1,publicKey:"",privateKey:"",seed:"",valiPublicKey:"",valiPrivateKey:"",valiPublicStatus:!1,valiPrivateStatus:!1,showPublicTips:!1,showPrivateTips:!1}},methods:{getPrivateKey:function(){var f=this;this.show=!0,c.a.randomKey().then(function(e){f.privateKey=e.toString(),f.publicKey=c.a.privateToPublic(f.privateKey)})},getPrivateKeyBySeed:function(){this.show=!0,this.privateKey=c.a.seedPrivate(this.seed),this.publicKey=c.a.privateToPublic(this.privateKey)},isValidPublic:function(){this.showPublicTips=!0,this.valiPublicStatus=c.a.isValidPublic(this.valiPublicKey)},isValidPrivate:function(){this.showPrivateTips=!0,this.valiPrivateStatus=c.a.isValidPrivate(this.valiPrivateKey)}}},r={render:function(){var f=this,e=f.$createElement,t=f._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{staticStyle:{height:"200px"},attrs:{src:"https://eosfans-static.strahe.com/photo/2018/bc17c8bf-d168-4fdc-b99a-83bea533d752.png?x-oss-process=image/resize,w_1920"}}),f._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:f.show,expression:"show"}]},[t("p",[t("span",[f._v("私钥：")]),f._v(f._s(f.privateKey))]),f._v(" "),t("p",[t("span",[f._v("公钥：")]),f._v(f._s(f.publicKey))])]),f._v(" "),t("hr"),f._v(" "),t("div",{staticStyle:{"margin-top":"40px"}},[t("button",{staticClass:"primary",on:{click:f.getPrivateKey}},[f._v("一键生成私钥/公钥（随机生成）")]),f._v(" "),f._m(0)]),f._v(" "),t("hr"),f._v(" "),t("div",{staticStyle:{"margin-top":"40px"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:f.seed,expression:"seed"}],attrs:{type:"text"},domProps:{value:f.seed},on:{input:function(e){e.target.composing||(f.seed=e.target.value)}}}),f._v(" "),t("button",{staticClass:"primary",on:{click:f.getPrivateKeyBySeed}},[f._v("通过助记词，获取私钥（生成固定私钥）")]),f._v(" "),t("p",[f._v("可以输入一个固定的字符串，生成一个固定的私钥/公钥。")]),f._v(" "),f._m(1)]),f._v(" "),t("div",{staticStyle:{"margin-top":"20px"}},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:f.valiPublicKey,expression:"valiPublicKey"}],attrs:{type:"text"},domProps:{value:f.valiPublicKey},on:{input:function(e){e.target.composing||(f.valiPublicKey=e.target.value)}}}),f._v(" "),t("button",{staticClass:"primary",on:{click:f.isValidPublic}},[f._v("验证公钥格式")])]),f._v(" "),f.showPublicTips?t("p",[t("span",[f._v("验证EOS公钥：")]),f._v(f._s(f.valiPublicStatus?"正确":"错误！"))]):f._e(),f._v(" "),t("p",[f._v("（验证EOS公钥格式）")])]),f._v(" "),t("div",{staticStyle:{"margin-top":"20px"}},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:f.valiPrivateKey,expression:"valiPrivateKey"}],attrs:{type:"text"},domProps:{value:f.valiPrivateKey},on:{input:function(e){e.target.composing||(f.valiPrivateKey=e.target.value)}}}),f._v(" "),t("button",{staticClass:"primary",on:{click:f.isValidPrivate}},[f._v("验证私钥格式")])]),f._v(" "),f.showPrivateTips?t("p",[t("span",[f._v("验证EOS私钥：")]),f._v(f._s(f.valiPrivateStatus?"正确":"错误！"))]):f._e(),f._v(" "),t("p",[f._v("（验证EOS私钥格式）")])])])},staticRenderFns:[function(){var f=this.$createElement,e=this._self._c||f;return e("p",[this._v("通过一键生成私钥和公钥，"),e("span",{staticStyle:{color:"orange"}},[this._v("同时请注意保管好自己的私钥")])])},function(){var f=this.$createElement,e=this._self._c||f;return e("p",[this._v("助记词: 应该是使用至少128个随机位来产生一个好的私钥，"),e("span",{staticStyle:{color:"orange"}},[this._v("同时请注意保管好助记词")])])}]};var o=t("VU/8")(s,r,!1,function(f){t("uUmt")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:o},template:"<App/>"})},uUmt:function(f,e){}},["NHnr"]);
//# sourceMappingURL=app.2b96b1679bf568352494.js.map