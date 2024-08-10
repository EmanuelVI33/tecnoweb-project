import{r as I}from"./app-DRGzXkaU.js";const ge=Object.freeze({left:0,top:0,width:16,height:16}),D=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),K=Object.freeze({...ge,...D}),Q=Object.freeze({...K,body:"",hidden:!1});function Le(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(o.rotate=r),o}function ne(e,t){const o=Le(e,t);for(const r in Q)r in D?r in e&&!(r in o)&&(o[r]=D[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function Fe(e,t){const o=e.icons,r=e.aliases||Object.create(null),n=Object.create(null);function i(s){if(o[s])return n[s]=[];if(!(s in n)){n[s]=null;const c=r[s]&&r[s].parent,f=c&&i(c);f&&(n[s]=[c].concat(f))}return n[s]}return Object.keys(o).concat(Object.keys(r)).forEach(i),n}function Ae(e,t,o){const r=e.icons,n=e.aliases||Object.create(null);let i={};function s(c){i=ne(r[c]||n[c],i)}return s(t),o.forEach(s),ne(e,i)}function me(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const r=Fe(e);for(const n in r){const i=r[n];i&&(t(n,Ae(e,n,i)),o.push(n))}return o}const E=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,o,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),f=n.pop(),l={provider:n.length>0?n[0]:r,prefix:f,name:c};return t&&!A(l)?null:l}const i=n[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!A(c)?null:c}if(o&&r===""){const c={provider:r,prefix:"",name:i};return t&&!A(c,o)?null:c}return null},A=(e,t)=>e?!!((e.provider===""||e.provider.match(E))&&(t&&e.prefix===""||e.prefix.match(E))&&e.name.match(E)):!1,Ne={provider:"",aliases:{},not_found:{},...ge};function H(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function ye(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,Ne))return null;const o=t.icons;for(const n in o){const i=o[n];if(!n.match(E)||typeof i.body!="string"||!H(i,Q))return null}const r=t.aliases||Object.create(null);for(const n in r){const i=r[n],s=i.parent;if(!n.match(E)||typeof s!="string"||!o[s]&&!r[s]||!H(i,Q))return null}return t}const oe=Object.create(null);function De(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const o=oe[e]||(oe[e]=Object.create(null));return o[t]||(o[t]=De(e,t))}function W(e,t){return ye(t)?me(t,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function Re(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let O=!1;function be(e){return typeof e=="boolean"&&(O=e),O}function re(e){const t=typeof e=="string"?R(e,!0,O):e;if(t){const o=k(t.provider,t.prefix),r=t.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function _e(e,t){const o=R(e,!0,O);if(!o)return!1;const r=k(o.provider,o.prefix);return Re(r,o.name,t)}function Be(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),O&&!t&&!e.prefix){let n=!1;return ye(e)&&(e.prefix="",me(e,(i,s)=>{s&&_e(i,s)&&(n=!0)})),n}const o=e.prefix;if(!A({provider:t,prefix:o,name:"a"}))return!1;const r=k(t,o);return!!W(r,e)}const we=Object.freeze({width:null,height:null}),xe=Object.freeze({...we,...D}),He=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ze=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ie(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const r=e.split(He);if(r===null||!r.length)return e;const n=[];let i=r.shift(),s=ze.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?n.push(i):n.push(Math.ceil(c*t*o)/o)}else n.push(i);if(i=r.shift(),i===void 0)return n.join("");s=!s}}function Qe(e,t="defs"){let o="";const r=e.indexOf("<"+t);for(;r>=0;){const n=e.indexOf(">",r),i=e.indexOf("</"+t);if(n===-1||i===-1)break;const s=e.indexOf(">",i);if(s===-1)break;o+=e.slice(n+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:o,content:e}}function Ue(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ve(e,t,o){const r=Qe(e);return Ue(r.defs,t+r.content+o)}const qe=e=>e==="unset"||e==="undefined"||e==="none";function $e(e,t){const o={...K,...e},r={...xe,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let i=o.body;[o,r].forEach(b=>{const u=[],d=b.hFlip,v=b.vFlip;let w=b.rotate;d?v?w+=2:(u.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),u.push("scale(-1 1)"),n.top=n.left=0):v&&(u.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),u.push("scale(1 -1)"),n.top=n.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=n.height/2+n.top,u.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:u.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:x=n.width/2+n.left,u.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(n.left!==n.top&&(x=n.left,n.left=n.top,n.top=x),n.width!==n.height&&(x=n.width,n.width=n.height,n.height=x)),u.length&&(i=Ve(i,'<g transform="'+u.join(" ")+'">',"</g>"))});const s=r.width,c=r.height,f=n.width,l=n.height;let a,h;s===null?(h=c===null?"1em":c==="auto"?l:c,a=ie(h,f/l)):(a=s==="auto"?f:s,h=c===null?ie(a,l/f):c==="auto"?l:c);const m={},p=(b,u)=>{qe(u)||(m[b]=u.toString())};p("width",a),p("height",h);const y=[n.left,n.top,f,l];return m.viewBox=y.join(" "),{attributes:m,viewBox:y,body:i}}const Ge=/\sid="(\S+)"/g,Je="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ke=0;function We(e,t=Je){const o=[];let r;for(;r=Ge.exec(e);)o.push(r[1]);if(!o.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(i=>{const s=typeof t=="function"?t(i):t+(Ke++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const U=Object.create(null);function Xe(e,t){U[e]=t}function V(e){return U[e]||U[""]}function X(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Y=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],N=[];for(;j.length>0;)j.length===1||Math.random()>.5?N.push(j.shift()):N.push(j.pop());Y[""]=X({resources:["https://api.iconify.design"].concat(N)});function Ye(e,t){const o=X(t);return o===null?!1:(Y[e]=o,!0)}function Z(e){return Y[e]}const Ze=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let se=Ze();function et(e,t){const o=Z(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let n=0;o.resources.forEach(s=>{n=Math.max(n,s.length)});const i=t+".json?icons=";r=o.maxURL-n-o.path.length-i.length}return r}function tt(e){return e===404}const nt=(e,t,o)=>{const r=[],n=et(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return o.forEach((f,l)=>{c+=f.length+1,c>=n&&l>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=f.length),s.icons.push(f)}),r.push(s),r};function ot(e){if(typeof e=="string"){const t=Z(e);if(t)return t.path}return"/"}const rt=(e,t,o)=>{if(!se){o("abort",424);return}let r=ot(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),f=new URLSearchParams({icons:c});r+=i+".json?"+f.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let n=503;se(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{o(tt(s)?"abort":"next",s)});return}return n=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",n)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",n)})},it={prepare:nt,send:rt};function st(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,i)=>n.provider!==i.provider?n.provider.localeCompare(i.provider):n.prefix!==i.prefix?n.prefix.localeCompare(i.prefix):n.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const i=n.provider,s=n.prefix,c=n.name,f=o[i]||(o[i]=Object.create(null)),l=f[s]||(f[s]=k(i,s));let a;c in l.icons?a=t.loaded:s===""||l.missing.has(c)?a=t.missing:a=t.pending;const h={provider:i,prefix:s,name:c};a.push(h)}),t}function Se(e,t){e.forEach(o=>{const r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(n=>n.id!==t))})}function ct(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const r=e.provider,n=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(f=>{if(f.prefix!==n)return!0;const l=f.name;if(e.icons[l])s.loaded.push({provider:r,prefix:n,name:l});else if(e.missing.has(l))s.missing.push({provider:r,prefix:n,name:l});else return o=!0,!0;return!1}),s.pending.length!==c&&(o||Se([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let ft=0;function lt(e,t,o){const r=ft++,n=Se.bind(null,o,r);if(!t.pending.length)return n;const i={id:r,icons:t,callback:e,abort:n};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),n}function at(e,t=!0,o=!1){const r=[];return e.forEach(n=>{const i=typeof n=="string"?R(n,t,o):n;i&&r.push(i)}),r}var ut={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function dt(e,t,o,r){const n=e.resources.length,i=e.random?Math.floor(Math.random()*n):e.index;let s;if(e.random){let g=e.resources.slice(0);for(s=[];g.length>1;){const S=Math.floor(Math.random()*g.length);s.push(g[S]),g=g.slice(0,S).concat(g.slice(S+1))}s=s.concat(g)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let f="pending",l=0,a,h=null,m=[],p=[];typeof r=="function"&&p.push(r);function y(){h&&(clearTimeout(h),h=null)}function b(){f==="pending"&&(f="aborted"),y(),m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function u(g,S){S&&(p=[]),typeof g=="function"&&p.push(g)}function d(){return{startTime:c,payload:t,status:f,queriesSent:l,queriesPending:m.length,subscribe:u,abort:b}}function v(){f="failed",p.forEach(g=>{g(void 0,a)})}function w(){m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function x(g,S,T){const L=S!=="success";switch(m=m.filter(C=>C!==g),f){case"pending":break;case"failed":if(L||!e.dataAfterTimeout)return;break;default:return}if(S==="abort"){a=T,v();return}if(L){a=T,m.length||(s.length?B():v());return}if(y(),w(),!e.random){const C=e.resources.indexOf(g.resource);C!==-1&&C!==e.index&&(e.index=C)}f="completed",p.forEach(C=>{C(T)})}function B(){if(f!=="pending")return;y();const g=s.shift();if(g===void 0){if(m.length){h=setTimeout(()=>{y(),f==="pending"&&(w(),v())},e.timeout);return}v();return}const S={status:"pending",resource:g,callback:(T,L)=>{x(S,T,L)}};m.push(S),l++,h=setTimeout(B,e.rotate),o(g,t,S.callback)}return setTimeout(B),d}function Ie(e){const t={...ut,...e};let o=[];function r(){o=o.filter(c=>c().status==="pending")}function n(c,f,l){const a=dt(t,c,f,(h,m)=>{r(),l&&l(h,m)});return o.push(a),a}function i(c){return o.find(f=>c(f))||null}return{query:n,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function ce(){}const z=Object.create(null);function ht(e){if(!z[e]){const t=Z(e);if(!t)return;const o=Ie(t),r={config:t,redundancy:o};z[e]=r}return z[e]}function pt(e,t,o){let r,n;if(typeof e=="string"){const i=V(e);if(!i)return o(void 0,424),ce;n=i.send;const s=ht(e);s&&(r=s.redundancy)}else{const i=X(e);if(i){r=Ie(i);const s=e.resources?e.resources[0]:"",c=V(s);c&&(n=c.send)}}return!r||!n?(o(void 0,424),ce):r.query(t,n,o)().abort}const fe="iconify2",M="iconify",ve=M+"-count",le=M+"-version",Ce=36e5,gt=168,mt=50;function q(e,t){try{return e.getItem(t)}catch{}}function ee(e,t,o){try{return e.setItem(t,o),!0}catch{}}function ae(e,t){try{e.removeItem(t)}catch{}}function $(e,t){return ee(e,ve,t.toString())}function G(e){return parseInt(q(e,ve))||0}const _={local:!0,session:!0},ke={local:new Set,session:new Set};let te=!1;function yt(e){te=e}let F=typeof window>"u"?{}:window;function Te(e){const t=e+"Storage";try{if(F&&F[t]&&typeof F[t].length=="number")return F[t]}catch{}_[e]=!1}function je(e,t){const o=Te(e);if(!o)return;const r=q(o,le);if(r!==fe){if(r){const c=G(o);for(let f=0;f<c;f++)ae(o,M+f.toString())}ee(o,le,fe),$(o,0);return}const n=Math.floor(Date.now()/Ce)-gt,i=c=>{const f=M+c.toString(),l=q(o,f);if(typeof l=="string"){try{const a=JSON.parse(l);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>n&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&t(a,c))return!0}catch{}ae(o,f)}};let s=G(o);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,$(o,s)):ke[e].add(c))}function Ee(){if(!te){yt(!0);for(const e in _)je(e,t=>{const o=t.data,r=t.provider,n=o.prefix,i=k(r,n);if(!W(i,o).length)return!1;const s=o.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function bt(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const r in _)je(r,n=>{const i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function wt(e,t){te||Ee();function o(r){let n;if(!_[r]||!(n=Te(r)))return;const i=ke[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=G(n),s>=mt||!$(n,s+1))return;const c={cached:Math.floor(Date.now()/Ce),provider:e.provider,data:t};return ee(n,M+s.toString(),JSON.stringify(c))}t.lastModified&&!bt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function ue(){}function xt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,ct(e)}))}function St(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let i;if(!n||!(i=V(o)))return;i.prepare(o,r,n).forEach(c=>{pt(o,c,f=>{if(typeof f!="object")c.icons.forEach(l=>{e.missing.add(l)});else try{const l=W(e,f);if(!l.length)return;const a=e.pendingIcons;a&&l.forEach(h=>{a.delete(h)}),wt(e,f)}catch(l){console.error(l)}xt(e)})})}))}const It=(e,t)=>{const o=at(e,!0,be()),r=st(o);if(!r.pending.length){let f=!0;return t&&setTimeout(()=>{f&&t(r.loaded,r.missing,r.pending,ue)}),()=>{f=!1}}const n=Object.create(null),i=[];let s,c;return r.pending.forEach(f=>{const{provider:l,prefix:a}=f;if(a===c&&l===s)return;s=l,c=a,i.push(k(l,a));const h=n[l]||(n[l]=Object.create(null));h[a]||(h[a]=[])}),r.pending.forEach(f=>{const{provider:l,prefix:a,name:h}=f,m=k(l,a),p=m.pendingIcons||(m.pendingIcons=new Set);p.has(h)||(p.add(h),n[l][a].push(h))}),i.forEach(f=>{const{provider:l,prefix:a}=f;n[l][a].length&&St(f,n[l][a])}),t?lt(t,r,i):ue};function vt(e,t){const o={...e};for(const r in t){const n=t[r],i=typeof n;r in we?(n===null||n&&(i==="string"||i==="number"))&&(o[r]=n):i===typeof o[r]&&(o[r]=r==="rotate"?n%4:n)}return o}const Ct=/[\s,]+/;function kt(e,t){t.split(Ct).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Tt(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/n,i%1===0?r(i):0)}}return t}function jt(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function Et(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Pt(e){return"data:image/svg+xml,"+Et(e)}function Ot(e){return'url("'+Pt(e)+'")'}let P;function Mt(){try{P=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{P=null}}function Lt(e){return P===void 0&&Mt(),P?P.createHTML(e):e}const Pe={...xe,inline:!1},Ft={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},At={display:"inline-block"},J={backgroundColor:"currentColor"},Oe={backgroundColor:"transparent"},de={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},he={WebkitMask:J,mask:J,background:Oe};for(const e in he){const t=he[e];for(const o in de)t[e+o]=de[o]}const Nt={...Pe,inline:!0};function pe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Dt=(e,t,o)=>{const r=t.inline?Nt:Pe,n=vt(r,t),i=t.mode||"svg",s={},c=t.style||{},f={...i==="svg"?Ft:{}};if(o){const u=R(o,!1,!0);if(u){const d=["iconify"],v=["provider","prefix"];for(const w of v)u[w]&&d.push("iconify--"+u[w]);f.className=d.join(" ")}}for(let u in t){const d=t[u];if(d!==void 0)switch(u){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":f.ref=d;break;case"className":f[u]=(f[u]?f[u]+" ":"")+d;break;case"inline":case"hFlip":case"vFlip":n[u]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&kt(n,d);break;case"color":s.color=d;break;case"rotate":typeof d=="string"?n[u]=Tt(d):typeof d=="number"&&(n[u]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete f["aria-hidden"];break;default:r[u]===void 0&&(f[u]=d)}}const l=$e(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),i==="svg"){f.style={...s,...c},Object.assign(f,a);let u=0,d=t.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),f.dangerouslySetInnerHTML={__html:Lt(We(l.body,d?()=>d+"ID"+u++:"iconifyReact"))},I.createElement("svg",f)}const{body:h,width:m,height:p}=e,y=i==="mask"||(i==="bg"?!1:h.indexOf("currentColor")!==-1),b=jt(h,{...a,width:m+"",height:p+""});return f.style={...s,"--svg":Ot(b),width:pe(a.width),height:pe(a.height),...At,...y?J:Oe,...c},I.createElement("span",f)};be(!0);Xe("",it);if(typeof document<"u"&&typeof window<"u"){Ee();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Be(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const r="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;Ye(o,n)||console.error(r)}catch{console.error(r)}}}}function Me(e){const[t,o]=I.useState(!!e.ssr),[r,n]=I.useState({});function i(p){if(p){const y=e.icon;if(typeof y=="object")return{name:"",data:y};const b=re(y);if(b)return{name:y,data:b}}return{name:""}}const[s,c]=I.useState(i(!!e.ssr));function f(){const p=r.callback;p&&(p(),n({}))}function l(p){if(JSON.stringify(s)!==JSON.stringify(p))return f(),c(p),!0}function a(){var p;const y=e.icon;if(typeof y=="object"){l({name:"",data:y});return}const b=re(y);if(l({name:y,data:b}))if(b===void 0){const u=It([y],a);n({callback:u})}else b&&((p=e.onLoad)===null||p===void 0||p.call(e,y))}I.useEffect(()=>(o(!0),f),[]),I.useEffect(()=>{t&&a()},[e.icon,t]);const{name:h,data:m}=s;return m?Dt({...K,...m},e,h):e.children?e.children:I.createElement("span",{})}const _t=I.forwardRef((e,t)=>Me({...e,_ref:t}));I.forwardRef((e,t)=>Me({inline:!0,...e,_ref:t}));export{_t as I};
