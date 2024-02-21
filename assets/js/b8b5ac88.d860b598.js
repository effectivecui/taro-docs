"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39001],{79874:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return g}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},N="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=m(n),u=r,g=N["".concat(p,".").concat(u)]||N[u]||o[u]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[N]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94645:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"General",sidebar_label:"General"},d=void 0,p={unversionedId:"apis/General",id:"version-2.x/apis/General",title:"General",description:"\u53c2\u6570",source:"@site/versioned_docs/version-2.x/apis/General.md",sourceDirName:"apis",slug:"/apis/General",permalink:"/taro-docs/docs/2.x/apis/General",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/General.md",tags:[],version:"2.x",frontMatter:{title:"General",sidebar_label:"General"},sidebar:"version-2.x/API",previous:{title:"\u6d88\u606f\u673a\u5236",permalink:"/taro-docs/docs/2.x/apis/about/events"},next:{title:"canIUse",permalink:"/taro-docs/docs/2.x/apis/base/canIUse"}},m={},k=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"CallbackResult",id:"callbackresult",level:3},{value:"BluetoothError",id:"bluetootherror",level:3},{value:"WifiError",id:"wifierror",level:3},{value:"NFCError",id:"nfcerror",level:3},{value:"IBeaconError",id:"ibeaconerror",level:3},{value:"SafeAreaResult",id:"safearearesult",level:3},{value:"AdErrCode",id:"aderrcode",level:3},{value:"BluetoothErrCode",id:"bluetootherrcode",level:3},{value:"IBeaconErrCode",id:"ibeaconerrcode",level:3},{value:"WifiErrCode",id:"wifierrcode",level:3},{value:"NFCErrCode",id:"nfcerrcode",level:3},{value:"LaunchOptionsApp",id:"launchoptionsapp",level:3},{value:"ReferrerInfo",id:"referrerinfo",level:4}],N={toc:k},o="wrapper";function u(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)(o,r({},N,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h3",r({},{id:"callbackresult"}),"CallbackResult"),(0,a.kt)("p",null,"\u901a\u7528\u9519\u8bef"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f")))),(0,a.kt)("h3",r({},{id:"bluetootherror"}),"BluetoothError"),(0,a.kt)("p",null,"\u84dd\u7259\u9519\u8bef"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"`0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10000")))),(0,a.kt)("h3",r({},{id:"wifierror"}),"WifiError"),(0,a.kt)("p",null,"WIFI \u9519\u8bef"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"`0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12000")))),(0,a.kt)("h3",r({},{id:"nfcerror"}),"NFCError"),(0,a.kt)("p",null,"NFC \u9519\u8bef"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"`0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13000")))),(0,a.kt)("h3",r({},{id:"ibeaconerror"}),"IBeaconError"),(0,a.kt)("p",null,"iBeacon \u9519\u8bef"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"`0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11000")))),(0,a.kt)("h3",r({},{id:"safearearesult"}),"SafeAreaResult"),(0,a.kt)("p",null,"\u5728\u7ad6\u5c4f\u6b63\u65b9\u5411\u4e0b\u7684\u5b89\u5168\u533a\u57df"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5b89\u5168\u533a\u57df\u53f3\u4e0b\u89d2\u7eb5\u5750\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5b89\u5168\u533a\u57df\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4d\u903b\u8f91\u50cf\u7d20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5b89\u5168\u533a\u57df\u5de6\u4e0a\u89d2\u6a2a\u5750\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5b89\u5168\u533a\u57df\u53f3\u4e0b\u89d2\u6a2a\u5750\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5b89\u5168\u533a\u57df\u5de6\u4e0a\u89d2\u7eb5\u5750\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5b89\u5168\u533a\u57df\u7684\u5bbd\u5ea6\uff0c\u5355\u4f4d\u903b\u8f91\u50cf\u7d20")))),(0,a.kt)("h3",r({},{id:"aderrcode"}),"AdErrCode"),(0,a.kt)("p",null,"\u5e7f\u544a\u9519\u8bef\u7801"),(0,a.kt)("p",null,"\u9519\u8bef\u7801\u662f\u901a\u8fc7onError\u83b7\u53d6\u5230\u7684\u9519\u8bef\u4fe1\u606f\u3002\u8c03\u8bd5\u671f\u95f4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f02\u5e38\u8fd4\u56de\u6765\u6355\u83b7\u4fe1\u606f\u3002\n\u5728\u5c0f\u7a0b\u5e8f\u53d1\u5e03\u4e0a\u7ebf\u4e4b\u540e\uff0c\u5982\u679c\u9047\u5230\u5f02\u5e38\u95ee\u9898\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("a",r({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"\u201c\u8fd0\u7ef4\u4e2d\u5fc3\u201c"),"\u91cc\u9762\u641c\u5bfb\u9519\u8bef\u65e5\u5fd7\uff0c\u8fd8\u53ef\u4ee5\u9488\u5bf9\u5f02\u5e38\u8fd4\u56de\u52a0\u4e0a\u9002\u5f53\u7684\u76d1\u63a7\u4fe1\u606f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5f02\u5e38\u60c5\u51b5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u7406\u7531"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u89e3\u51b3\u65b9\u6848"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1000"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u540e\u7aef\u63a5\u53e3\u8c03\u7528\u5931\u8d25")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1001"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u53c2\u6570\u9519\u8bef")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f7f\u7528\u65b9\u6cd5\u9519\u8bef")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u53ef\u4ee5\u524d\u5f80 developers.weixin.qq.com \u786e\u8ba4\u5177\u4f53\u6559\u7a0b\uff08\u5c0f\u7a0b\u5e8f\u548c\u5c0f\u6e38\u620f\u5206\u522b\u6709\u5404\u81ea\u7684\u6559\u7a0b\uff0c\u53ef\u4ee5\u5728\u9876\u90e8\u9009\u9879\u4e2d\uff0c\u201c\u8bbe\u8ba1\u201d\u4e00\u680f\u7684\u53f3\u4fa7\u8fdb\u884c\u5207\u6362\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1002"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u5355\u5143\u65e0\u6548")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u53ef\u80fd\u662f\u62fc\u5199\u9519\u8bef\u3001\u6216\u8005\u8bef\u7528\u4e86\u5176\u4ed6APP\u7684\u5e7f\u544aID")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u91cd\u65b0\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5e7f\u544a\u4f4dID\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1003"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5185\u90e8\u9519\u8bef")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1004"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u65e0\u5408\u9002\u7684\u5e7f\u544a")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u4f1a\u51fa\u73b0\uff0c\u8fd9\u6b21\u6ca1\u6709\u51fa\u73b0\u53ef\u80fd\u662f\u7531\u4e8e\u8be5\u7528\u6237\u4e0d\u9002\u5408\u6d4f\u89c8\u5e7f\u544a")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5c5e\u4e8e\u6b63\u5e38\u60c5\u51b5\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1005"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u7ec4\u4ef6\u5ba1\u6838\u4e2d")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f60\u7684\u5e7f\u544a\u6b63\u5728\u88ab\u5ba1\u6838\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1006"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u9a73\u56de")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f60\u7684\u5e7f\u544a\u5ba1\u6838\u5931\u8d25\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1007"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u5c01\u7981")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f60\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5c01\u7981\uff0c\u5c01\u7981\u671f\u95f4\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5c0f\u7a0b\u5e8f\u5e7f\u544a\u5c01\u7981\u72b6\u6001\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1008"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u5355\u5143\u5df2\u5173\u95ed")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8be5\u5e7f\u544a\u4f4d\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5173\u95ed")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u91cd\u65b0\u6253\u5f00\u5bf9\u5e94\u5e7f\u544a\u4f4d\u7684\u5c55\u73b0\u3002"))))),(0,a.kt)("h3",r({},{id:"bluetootherrcode"}),"BluetoothErrCode"),(0,a.kt)("p",null,"\u84dd\u7259\u9519\u8bef\u7801"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5f02\u5e38\u60c5\u51b5"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6b63\u5e38")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10000"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not init")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u672a\u521d\u59cb\u5316\u84dd\u7259\u9002\u914d\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10001"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not available")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u84dd\u7259\u9002\u914d\u5668\u4e0d\u53ef\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10002"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no device")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6ca1\u6709\u627e\u5230\u6307\u5b9a\u8bbe\u5907")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10003"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"connection fail")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fde\u63a5\u5931\u8d25")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10004"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no service")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6ca1\u6709\u627e\u5230\u6307\u5b9a\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10005"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no characteristic")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6ca1\u6709\u627e\u5230\u6307\u5b9a\u7279\u5f81\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10006"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no connection")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u8fde\u63a5\u5df2\u65ad\u5f00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10007"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"property not support")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u7279\u5f81\u503c\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10008"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system error")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5176\u4f59\u6240\u6709\u7cfb\u7edf\u4e0a\u62a5\u7684\u5f02\u5e38")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10009"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system not support")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Android \u7cfb\u7edf\u7279\u6709\uff0c\u7cfb\u7edf\u7248\u672c\u4f4e\u4e8e 4.3 \u4e0d\u652f\u6301 BLE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10012"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"operate time out")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fde\u63a5\u8d85\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10013"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"invalid_data")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fde\u63a5 deviceId \u4e3a\u7a7a\u6216\u8005\u662f\u683c\u5f0f\u4e0d\u6b63\u786e")))),(0,a.kt)("h3",r({},{id:"ibeaconerrcode"}),"IBeaconErrCode"),(0,a.kt)("p",null,"iBeacon \u9519\u8bef\u7801"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5f02\u5e38\u60c5\u51b5"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6b63\u5e38")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11000"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"unsupport")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u6216\u8bbe\u5907\u4e0d\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11001"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"bluetooth service unavailable")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u84dd\u7259\u670d\u52a1\u4e0d\u53ef\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11002"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"location service unavailable")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4f4d\u7f6e\u670d\u52a1\u4e0d\u53ef\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11003"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"already start")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5df2\u7ecf\u5f00\u59cb\u641c\u7d22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11004"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not startBeaconDiscovery")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fd8\u672a\u5f00\u59cb\u641c\u7d22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11005"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system error")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u9519\u8bef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11006"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"invalid data")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u6570\u4e0d\u6b63\u786e")))),(0,a.kt)("h3",r({},{id:"wifierrcode"}),"WifiErrCode"),(0,a.kt)("p",null,"WIFI \u9519\u8bef\u7801"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5f02\u5e38\u60c5\u51b5"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6b63\u5e38")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12000"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not init")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u672a\u5148\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"startWifi")," \u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12001"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system not support")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u7cfb\u7edf\u4e0d\u652f\u6301\u76f8\u5173\u80fd\u529b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12002"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"password error Wi-Fi")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5bc6\u7801\u9519\u8bef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12003"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"connection timeout")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fde\u63a5\u8d85\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12004"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"duplicate request")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u91cd\u590d\u8fde\u63a5 Wi-Fi")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12005"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"wifi not turned on")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Android \u7279\u6709\uff0c\u672a\u6253\u5f00 Wi-Fi \u5f00\u5173")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12006"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"wifi not turned on")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Android \u7279\u6709\uff0c\u672a\u6253\u5f00 GPS \u5b9a\u4f4d\u5f00\u5173")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12007"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"user denied")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7528\u6237\u62d2\u7edd\u6388\u6743\u94fe\u63a5 Wi-Fi")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12008"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"invalid SSID")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u65e0\u6548 SSID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12009"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system config err")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u8fd0\u8425\u5546\u914d\u7f6e\u62d2\u7edd\u8fde\u63a5 Wi-Fi")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12010"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system internal error")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u5176\u4ed6\u9519\u8bef\uff0c\u9700\u8981\u5728 errmsg \u6253\u5370\u5177\u4f53\u7684\u9519\u8bef\u539f\u56e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12011"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"weapp in background")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5e94\u7528\u5728\u540e\u53f0\u65e0\u6cd5\u914d\u7f6e Wi-Fi")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"12013"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"wifi config may be expired")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u4fdd\u5b58\u7684 Wi-Fi \u914d\u7f6e\u8fc7\u671f\uff0c\u5efa\u8bae\u5fd8\u8bb0 Wi-Fi \u540e\u91cd\u8bd5")))),(0,a.kt)("h3",r({},{id:"nfcerrcode"}),"NFCErrCode"),(0,a.kt)("p",null,"NFC \u9519\u8bef\u7801"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5f02\u5e38\u60c5\u51b5"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6b63\u5e38")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13000"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u8bbe\u5907\u4e0d\u652f\u6301NFC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13001"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u8bbe\u5907\u652f\u6301NFC\uff0c\u4f46\u7cfb\u7edfNFC\u5f00\u5173\u672a\u5f00\u542f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13002"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u8bbe\u5907\u652f\u6301NFC\uff0c\u4f46\u4e0d\u652f\u6301HCE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13003"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"AID\u5217\u8868\u53c2\u6570\u683c\u5f0f\u9519\u8bef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13004"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u672a\u8bbe\u7f6e\u5fae\u4fe1\u4e3a\u9ed8\u8ba4NFC\u652f\u4ed8\u5e94\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13005"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fd4\u56de\u7684\u6307\u4ee4\u4e0d\u5408\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"13006"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6ce8\u518cAID\u5931\u8d25")))),(0,a.kt)("h3",r({},{id:"launchoptionsapp"}),"LaunchOptionsApp"),(0,a.kt)("p",null,"\u542f\u52a8\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684 query \u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"referrerInfo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ReferrerInfo")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"td"},"{}"),"\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"scene"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684",(0,a.kt)("a",r({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"}),"\u573a\u666f\u503c"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"shareTicket"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"shareTicket\uff0c\u8be6\u89c1",(0,a.kt)("a",r({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html"}),"\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f"))))),(0,a.kt)("h4",r({},{id:"referrerinfo"}),"ReferrerInfo"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"appId"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u7684 appId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"extraData"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0cscene=1037\u62161038\u65f6\u652f\u6301")))))}u.isMDXComponent=!0}}]);