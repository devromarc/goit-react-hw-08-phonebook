(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{176:e=>{"use strict";e.exports=function(e,t,r,n,i,s,o,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,i,s,o,a],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},77:e=>{var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function s(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var a,c,l,u;if(Array.isArray(e)){if((a=e.length)!=o.length)return!1;for(c=a;0!==c--;)if(!s(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!s(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((a=e.length)!=o.length)return!1;for(c=a;0!==c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof o.toString)return e.toString()===o.toString();if((a=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=a;0!==c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=a;0!==c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!s(e[l[c]],o[l[c]]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,t){try{return s(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},50:(e,t,r)=>{"use strict";r.d(t,{B6:()=>G,ql:()=>te});var n=r(791),i=r(77),s=r.n(i),o=r(176),a=r.n(o),c=r(613),l=r.n(c),u=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(u||{}),p={rel:["amphtml","canonical","alternate"]},f={type:["application/ld+json"]},d={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},h=Object.values(u),m={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},y=Object.entries(m).reduce(((e,t)=>{let[r,n]=t;return e[n]=r,e}),{}),g="data-rh",b="defaultTitle",T="defer",A="encodeSpecialCharacters",v="onChangeClientState",O="titleTemplate",w="prioritizeSeoTags",C=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},x=e=>{let t=C(e,"title");const r=C(e,O);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(()=>t));const n=C(e,b);return t||n||void 0},k=e=>C(e,v)||(()=>{}),S=(e,t)=>t.filter((t=>"undefined"!==typeof t[e])).map((t=>t[e])).reduce(((e,t)=>({...e,...t})),{}),j=(e,t)=>t.filter((e=>"undefined"!==typeof e.base)).map((e=>e.base)).reverse().reduce(((t,r)=>{if(!t.length){const n=Object.keys(r);for(let i=0;i<n.length;i+=1){const s=n[i].toLowerCase();if(-1!==e.indexOf(s)&&r[s])return t.concat(r)}}return t}),[]),$=(e,t,r)=>{const n={};return r.filter((t=>{return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&(r=`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`,console&&"function"===typeof console.warn&&console.warn(r)),!1);var r})).map((t=>t[e])).reverse().reduce(((e,r)=>{const i={};r.filter((e=>{let r;const s=Object.keys(e);for(let n=0;n<s.length;n+=1){const i=s[n],o=i.toLowerCase();-1===t.indexOf(o)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===o&&"stylesheet"===e[o].toLowerCase()||(r=o),-1===t.indexOf(i)||"innerHTML"!==i&&"cssText"!==i&&"itemprop"!==i||(r=i)}if(!r||!e[r])return!1;const o=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][o]&&(i[r][o]=!0,!0)})).reverse().forEach((t=>e.push(t)));const s=Object.keys(i);for(let t=0;t<s.length;t+=1){const e=s[t],r={...n[e],...i[e]};n[e]=r}return e}),[]).reverse()},E=(e,t)=>{if(Array.isArray(e)&&e.length)for(let r=0;r<e.length;r+=1){if(e[r][t])return!0}return!1},M=e=>Array.isArray(e)?e.join(""):e,L=(e,t)=>Array.isArray(e)?e.reduce(((e,r)=>(((e,t)=>{const r=Object.keys(e);for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1})(r,t)?e.priority.push(r):e.default.push(r),e)),{priority:[],default:[]}):{default:e,priority:[]},P=(e,t)=>({...e,[t]:void 0}),D=["noscript","script","style"],H=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},I=e=>Object.keys(e).reduce(((t,r)=>{const n="undefined"!==typeof e[r]?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${n}`:n}),""),U=(e,t,r,n)=>{const i=I(r),s=M(t);return i?`<${e} data-rh="true" ${i}>${H(s,n)}</${e}>`:`<${e} data-rh="true">${H(s,n)}</${e}>`},_=function(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.reduce(((t,n)=>{const i=n,s=Object.keys(i).filter((e=>!("innerHTML"===e||"cssText"===e))).reduce(((e,t)=>{const n="undefined"===typeof i[t]?t:`${t}="${H(i[t],r)}"`;return e?`${e} ${n}`:n}),""),o=i.innerHTML||i.cssText||"",a=-1===D.indexOf(e);return`${t}<${e} data-rh="true" ${s}${a?"/>":`>${o}</${e}>`}`}),"")},N=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(((t,r)=>(t[m[r]||r]=e[r],t)),t)},q=(e,t,r)=>{const i=N(r,{key:t,[g]:!0});return[n.createElement("title",i,t)]},z=(e,t)=>t.map(((t,r)=>{const i={key:r,[g]:!0};return Object.keys(t).forEach((e=>{const r=m[e]||e;if("innerHTML"===r||"cssText"===r){const e=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:e}}else i[r]=t[e]})),n.createElement(e,i)})),B=function(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(e){case"title":return{toComponent:()=>q(0,t.title,t.titleAttributes),toString:()=>U(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>N(t),toString:()=>I(t)};default:return{toComponent:()=>z(e,t),toString:()=>_(e,t,r)}}},R=e=>{const{baseTag:t,bodyAttributes:r,encode:n=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:a="",titleAttributes:c,prioritizeSeoTags:l}=e;let{linkTags:u,metaTags:h,scriptTags:m}=e,y={toComponent:()=>{},toString:()=>""};return l&&({priorityMethods:y,linkTags:u,metaTags:h,scriptTags:m}=(e=>{let{metaTags:t,linkTags:r,scriptTags:n,encode:i}=e;const s=L(t,d),o=L(r,p),a=L(n,f);return{priorityMethods:{toComponent:()=>[...z("meta",s.priority),...z("link",o.priority),...z("script",a.priority)],toString:()=>`${B("meta",s.priority,i)} ${B("link",o.priority,i)} ${B("script",a.priority,i)}`},metaTags:s.default,linkTags:o.default,scriptTags:a.default}})(e)),{priority:y,base:B("base",t,n),bodyAttributes:B("bodyAttributes",r,n),htmlAttributes:B("htmlAttributes",i,n),link:B("link",u,n),meta:B("meta",h,n),noscript:B("noscript",s,n),script:B("script",m,n),style:B("style",o,n),title:B("title",{title:a,titleAttributes:c},n)}},V=[],F=!("undefined"===typeof window||!window.document||!window.document.createElement),Y=class{instances=[];canUseDOM=F;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?V:this.instances,add:e=>{(this.canUseDOM?V:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?V:this.instances).indexOf(e);(this.canUseDOM?V:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=R({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},K=n.createContext({}),G=class e extends n.Component{static canUseDOM=F;helmetData;constructor(t){super(t),this.helmetData=new Y(this.props.context||{},e.canUseDOM)}render(){return n.createElement(K.Provider,{value:this.helmetData.value},this.props.children)}},W=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[data-rh]`),i=[].slice.call(n),s=[];let o;return t&&t.length&&t.forEach((t=>{const r=document.createElement(e);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))if("innerHTML"===e)r.innerHTML=t.innerHTML;else if("cssText"===e)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{const n=e,i="undefined"===typeof t[n]?"":t[n];r.setAttribute(e,i)}r.setAttribute(g,"true"),i.some(((e,t)=>(o=t,r.isEqualNode(e))))?i.splice(o,1):s.push(r)})),i.forEach((e=>{var t;return null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)})),s.forEach((e=>r.appendChild(e))),{oldTags:i,newTags:s}},J=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const n=r.getAttribute(g),i=n?n.split(","):[],s=[...i],o=Object.keys(t);for(const a of o){const e=t[a]||"";r.getAttribute(a)!==e&&r.setAttribute(a,e),-1===i.indexOf(a)&&i.push(a);const n=s.indexOf(a);-1!==n&&s.splice(n,1)}for(let a=s.length-1;a>=0;a-=1)r.removeAttribute(s[a]);i.length===s.length?r.removeAttribute(g):r.getAttribute(g)!==o.join(",")&&r.setAttribute(g,o.join(","))},Q=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:a,onChangeClientState:c,scriptTags:l,styleTags:u,title:p,titleAttributes:f}=e;J("body",n),J("html",i),((e,t)=>{"undefined"!==typeof e&&document.title!==e&&(document.title=M(e)),J("title",t)})(p,f);const d={baseTag:W("base",r),linkTags:W("link",s),metaTags:W("meta",o),noscriptTags:W("noscript",a),scriptTags:W("script",l),styleTags:W("style",u)},h={},m={};Object.keys(d).forEach((e=>{const{newTags:t,oldTags:r}=d[e];t.length&&(h[e]=t),r.length&&(m[e]=d[e].oldTags)})),t&&t(),c(e,h,m)},X=null,Z=e=>{X&&cancelAnimationFrame(X),e.defer?X=requestAnimationFrame((()=>{Q(e,(()=>{X=null}))})):(Q(e),X=null)},ee=class extends n.Component{rendered=!1;shouldComponentUpdate(e){return!l()(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let r=null;const n=(i=e.get().map((e=>{const t={...e.props};return delete t.context,t})),{baseTag:j(["href"],i),bodyAttributes:S("bodyAttributes",i),defer:C(i,T),encode:C(i,A),htmlAttributes:S("htmlAttributes",i),linkTags:$("link",["rel","href"],i),metaTags:$("meta",["name","charset","http-equiv","property","itemprop"],i),noscriptTags:$("noscript",["innerHTML"],i),onChangeClientState:k(i),scriptTags:$("script",["src","innerHTML"],i),styleTags:$("style",["cssText"],i),title:x(i),titleAttributes:S("titleAttributes",i),prioritizeSeoTags:E(i,w)});var i;G.canUseDOM?Z(n):R&&(r=R(n)),t(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},te=class extends n.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!s()(P(this.props,"helmetData"),P(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach((t=>{r={...r,[t]:e[t]}})),r}warnOnInvalidChildren(e,t){return a()(h.some((t=>e.type===t)),"function"===typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${h.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),a()(!t||"string"===typeof t||Array.isArray(t)&&!t.some((e=>"string"!==typeof e)),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return n.Children.forEach(e,(e=>{if(!e||!e.props)return;const{children:n,...i}=e.props,s=Object.keys(i).reduce(((e,t)=>(e[y[t]||t]=i[t],e)),{});let{type:o}=e;switch("symbol"===typeof o?o=o.toString():this.warnOnInvalidChildren(e,n),o){case"Symbol(react.fragment)":t=this.mapChildrenToProps(n,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(e,r,s,n);break;default:t=this.mapObjectTypeChildren(e,t,s,n)}})),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:i}=t;if(e&&(r=this.mapChildrenToProps(e,r)),i&&!(i instanceof Y)){i=new Y(i.context,!0),delete r.helmetData}return i?n.createElement(ee,{...r,context:i.value}):n.createElement(K.Consumer,null,(e=>n.createElement(ee,{...r,context:e})))}}},613:e=>{e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var l=s[c];if(!a(l))return!1;var u=e[l],p=t[l];if(!1===(i=r?r.call(n,u,p,l):void 0)||void 0===i&&u!==p)return!1}return!0}}}]);
//# sourceMappingURL=50.5cc9c187.chunk.js.map