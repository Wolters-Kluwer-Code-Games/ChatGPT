(()=>{"use strict";var e={5608:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(885),o=r(80),i=r(4325),a=r(5821),s=r(2113),l=r(4368),u=r(9093),d=r(2272),f=r(6515);function c(){var e=(0,l.useState)([]),t=(0,n.default)(e,2),r=t[0],c=t[1],h=(0,l.useState)(""),g=(0,n.default)(h,2),p=g[0],b=g[1],m=(0,l.useState)("Results to be shown here"),y=(0,n.default)(m,2),v=(y[0],y[1]);return(0,f.jsxs)(s.default,{style:{flex:1},children:[(0,f.jsx)(s.default,{style:{flex:1,justifyContent:"center"},children:(0,f.jsx)(d.GiftedChat,{messages:r,renderInputToolbar:function(){},user:{_id:1},minInputToolbarHeight:0})}),(0,f.jsxs)(s.default,{style:{flexDirection:"row"},children:[(0,f.jsx)(s.default,{style:{flex:1,marginLeft:10,marginBottom:20,backgroundColor:"white",borderRadius:10,borderColor:"grey",borderWidth:1,height:60,marginLeft:10,marginRight:10,justifyContent:"center",paddingLeft:10,paddingRight:10},children:(0,f.jsx)(i.default,{placeholder:"Please enter your question",onChangeText:function(e){b(e),console.log(e)}})}),(0,f.jsx)(a.default,{onPress:function(){console.log(p);var e={_id:Math.random().toString(36).substring(7),text:p,createdAt:new Date,user:{_id:1}};c((function(t){return d.GiftedChat.append(t,[e])})),fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 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"},body:JSON.stringify({messages:[{role:"user",content:p}],model:"gpt-3.5-turbo"})}).then((function(e){return e.json()})).then((function(e){console.log(e.choices[0].message.content),v(e.choices[0].message.content.trim());var t={_id:Math.random().toString(36).substring(7),text:e.choices[0].message.content.trim(),createdAt:new Date,user:{_id:2,name:"Wolters Kluwer"}};c((function(e){return d.GiftedChat.append(e,[t])}))}))},children:(0,f.jsx)(s.default,{style:{backgroundColor:"green",padding:5,marginRight:10,marginBottom:20,borderRadius:100,width:60,height:60,justifyContent:"center"},children:(0,f.jsx)(u.default,{name:"send",size:30,color:"white",style:{marginLeft:10}})})})]}),(0,f.jsx)(o.default,{style:"auto"})]})}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,i]=e[d],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,l]=n,u=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var d=l(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[326],(()=>r(6466)));n=r.O(n)})();
//# sourceMappingURL=main.576431d1.js.map