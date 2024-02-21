"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26170],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,h=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},84855:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Taro.startSoterAuthentication(option)",sidebar_label:"startSoterAuthentication"},o=void 0,u={unversionedId:"apis/open-api/soter/startSoterAuthentication",id:"apis/open-api/soter/startSoterAuthentication",title:"Taro.startSoterAuthentication(option)",description:"Starts SOTER biometric authentication. For the verification procedure, see description.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/open-api/soter/startSoterAuthentication.md",sourceDirName:"apis/open-api/soter",slug:"/apis/open-api/soter/startSoterAuthentication",permalink:"/taro-docs/en/docs/next/apis/open-api/soter/startSoterAuthentication",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/open-api/soter/startSoterAuthentication.md",tags:[],version:"current",frontMatter:{title:"Taro.startSoterAuthentication(option)",sidebar_label:"startSoterAuthentication"},sidebar:"API",previous:{title:"chooseInvoice",permalink:"/taro-docs/en/docs/next/apis/open-api/invoice/chooseInvoice"},next:{title:"checkIsSupportSoterAuthentication",permalink:"/taro-docs/en/docs/next/apis/open-api/soter/checkIsSupportSoterAuthentication"}},c={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"requestAuthModes",id:"requestauthmodes",level:3},{value:"API Support",id:"api-support",level:4},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support-1",level:2}],s={toc:p},d="wrapper";function k(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(d,a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starts SOTER biometric authentication. For the verification procedure, see ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/bio-auth.html"}),"description"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"resultJSON description")),(0,r.kt)("p",null,"This data is the JSON data obtained in the device's TEE by combining the incoming challenge parameter and other security information in the TEE. The fields are described as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"raw"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The challenge factor passed in by the caller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fid"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"(Supported only on Android) The ID of the biometric information for the current biometric recognition and authentication (for example, for fingerprint recognition, this field indicates the ID of fingerprint information in this device).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"counter"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A parameter of the anti-replay feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"tee_n"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"TEE name (for example, Qualcomm or trustonic)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"tee_v"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"TEE version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fp_n"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The provider of the fingerprints and related logic modules (such as the FPC)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fp_v"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The version of the fingerprints and related modules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"cpu_id"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The unique device ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"uid"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"App ID, which is similar to the UID defined on Android.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/soter/wx.startSoterAuthentication.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"challenge"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Challenge factor, which is the key recognition information of a string used for signing that is prepared by the caller for the current biometric authentication. It serves as a part of ",(0,r.kt)("code",null,"resultJSON")," to help the caller recognize this request. For example, if the user is requested to authorize and confirm an order, the order number can be entered in this parameter.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"requestAuthModes"),(0,r.kt)("td",null,(0,r.kt)("code",null,'("fingerPrint" | "facial" | "speech")[]')),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Accepted biometric authentication methods in the request")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"authContent"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Verification description, i.e. the hint in a dialog box displayed on the UI during recognition.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",a({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"authMode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Biometric authentication method")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"resultJSON"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The device security information (for example, the name and version of the Trusted Execution Environment (TEE), and anti-replay parameters) obtained in the TEE and information for this authentication (for example, the fingerprint ID. It is supported only on Android).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"resultJSONSignature"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The signature (SHA-256 with RSA/PSS, saltlen=20) on ",(0,r.kt)("code",null,"resultJSON")," generated using the SOTER security key")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Error code")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Error message")))),(0,r.kt)("h3",a({},{id:"requestauthmodes"}),"requestAuthModes"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"fingerPrint"),(0,r.kt)("td",null,"Fingerprint recognition")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"facial"),(0,r.kt)("td",null,"Face recognition")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"speech"),(0,r.kt)("td",null,"Voiceprint recognition (not supported)")))),(0,r.kt)("h4",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"requestAuthModes.speech"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.startSoterAuthentication({\n   requestAuthModes: ['fingerPrint'],\n   challenge: '123456',\n   authContent: 'Unlock with your fingerprint',\n   success: function (res) { }\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "raw":"msg",\n  "fid":"2",\n  "counter":123,\n  "tee_n":"TEE Name",\n  "tee_v":"TEE Version",\n  "fp_n":"Fingerprint Sensor Name",\n  "fp_v":"Fingerprint Sensor Version",\n  "cpu_id":"CPU Id",\n  "uid":"21"\n}\n')),(0,r.kt)("h2",a({},{id:"api-support-1"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.startSoterAuthentication"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);