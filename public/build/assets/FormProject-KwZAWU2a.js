import{r as f,R as Dr,q as jr,W as wr,j as s}from"./app-tVRsxUsU.js";import{z as R,u as Er,t as Fr,F as Ar,a as ie,b as G,c as Y,d as V,f as ae}from"./zod-CUDSeozq.js";import{B as We}from"./button--FPewx8G.js";import{I as _r}from"./input-CTqy2mB1.js";import{J as He}from"./index-BFvE2hbB.js";import{T as Or}from"./textarea-CeDxcxNp.js";import{R as Pr,a as Cr}from"./radio-group-CH8P2r-s.js";import Sr from"./CreateOrEdit-Cf4C273Q.js";import{u as Ir}from"./modal-store-Br4zjeGU.js";import{P as p}from"./index-DSJlBJTg.js";import{_ as $,a as K,b as Ue,c as Ge}from"./index-GLeNLMMt.js";import{I as Ye}from"./Image-CTCefPrf.js";import"./shadcn-8RyR4BqC.js";import"./index-2b_LZfIK.js";import"./index-Bb4qSo10.js";import"./react-icons.esm-d0s31DWt.js";import"./index-CQn2alBU.js";import"./index-Daj5fNum.js";import"./index-BfNlyqcv.js";import"./FormCreateOrEdit-DV2CF-zc.js";import"./presenter-CLZs53NS.js";import"./index-Cdp76zax.js";import"./CustomDialog2-Di9vDOcH.js";import"./dialog-Ci5fGAI2.js";import"./index-VqwAea44.js";var Tr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function J(e,r){var t=Rr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Rr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=Tr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var kr=[".DS_Store","Thumbs.db"];function zr(e){return $(this,void 0,void 0,function(){return K(this,function(r){return ce(e)&&Mr(e.dataTransfer)?[2,Kr(e.dataTransfer,e.type)]:Lr(e)?[2,Nr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,$r(e)]:[2,[]]})})}function Mr(e){return ce(e)}function Lr(e){return ce(e)&&ce(e.target)}function ce(e){return typeof e=="object"&&e!==null}function Nr(e){return Ee(e.target.files).map(function(r){return J(r)})}function $r(e){return $(this,void 0,void 0,function(){var r;return K(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return J(n)})]}})})}function Kr(e,r){return $(this,void 0,void 0,function(){var t,n;return K(this,function(i){switch(i.label){case 0:return e.items?(t=Ee(e.items).filter(function(a){return a.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Br))]):[3,2];case 1:return n=i.sent(),[2,Ve(or(n))];case 2:return[2,Ve(Ee(e.files).map(function(a){return J(a)}))]}})})}function Ve(e){return e.filter(function(r){return kr.indexOf(r.name)===-1})}function Ee(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Br(e){if(typeof e.webkitGetAsEntry!="function")return qe(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?ir(r):qe(e)}function or(e){return e.reduce(function(r,t){return Ue(Ue([],Ge(r),!1),Ge(Array.isArray(t)?or(t):[t]),!1)},[])}function qe(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=J(r);return Promise.resolve(t)}function Wr(e){return $(this,void 0,void 0,function(){return K(this,function(r){return[2,e.isDirectory?ir(e):Hr(e)]})})}function ir(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function a(){var u=this;r.readEntries(function(l){return $(u,void 0,void 0,function(){var g,O,w;return K(this,function(x){switch(x.label){case 0:if(l.length)return[3,5];x.label=1;case 1:return x.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return g=x.sent(),t(g),[3,4];case 3:return O=x.sent(),n(O),[3,4];case 4:return[3,6];case 5:w=Promise.all(l.map(Wr)),i.push(w),a(),x.label=6;case 6:return[2]}})})},function(l){n(l)})}a()})}function Hr(e){return $(this,void 0,void 0,function(){return K(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var a=J(i,e.fullPath);t(a)},function(i){n(i)})})]})})}var Ur=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return t.some(function(u){var l=u.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?a===l.replace(/\/.*$/,""):i===l})}return!0};function Je(e){return Vr(e)||Yr(e)||sr(e)||Gr()}function Gr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vr(e){if(Array.isArray(e))return Fe(e)}function Qe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Xe(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Qe(Object(t),!0).forEach(function(n){ar(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Qe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ar(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function q(e,r){return Qr(e)||Jr(e,r)||sr(e,r)||qr()}function qr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sr(e,r){if(e){if(typeof e=="string")return Fe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fe(e,r)}}function Fe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Jr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,u,l;try{for(t=t.call(e);!(i=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));i=!0);}catch(g){a=!0,l=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function Qr(e){if(Array.isArray(e))return e}var Xr="file-invalid-type",Zr="file-too-large",et="file-too-small",rt="too-many-files",tt=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Xr,message:"File type must be ".concat(t)}},Ze=function(r){return{code:Zr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},er=function(r){return{code:et,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},nt={code:rt,message:"Too many files"};function cr(e,r){var t=e.type==="application/x-moz-file"||Ur(e,r);return[t,t?null:tt(r)]}function lr(e,r,t){if(k(e.size))if(k(r)&&k(t)){if(e.size>t)return[!1,Ze(t)];if(e.size<r)return[!1,er(r)]}else{if(k(r)&&e.size<r)return[!1,er(r)];if(k(t)&&e.size>t)return[!1,Ze(t)]}return[!0,null]}function k(e){return e!=null}function ot(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,a=e.multiple,u=e.maxFiles,l=e.validator;return!a&&r.length>1||a&&u>=1&&r.length>u?!1:r.every(function(g){var O=cr(g,t),w=q(O,1),x=w[0],y=lr(g,n,i),E=q(y,1),P=E[0],C=l?l(g):null;return x&&P&&!C})}function le(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function se(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function rr(e){e.preventDefault()}function it(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function at(e){return e.indexOf("Edge/")!==-1}function st(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return it(e)||at(e)}function _(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];return r.some(function(l){return!le(n)&&l&&l.apply(void 0,[n].concat(a)),le(n)})}}function ct(){return"showOpenFilePicker"in window}function lt(e){if(k(e)){var r=Object.entries(e).filter(function(t){var n=q(t,2),i=n[0],a=n[1],u=!0;return ur(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),u=!1),(!Array.isArray(a)||!a.every(fr))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),u=!1),u}).reduce(function(t,n){var i=q(n,2),a=i[0],u=i[1];return Xe(Xe({},t),{},ar({},a,u))},{});return[{description:"Files",accept:r}]}return e}function ut(e){if(k(e))return Object.entries(e).reduce(function(r,t){var n=q(t,2),i=n[0],a=n[1];return[].concat(Je(r),[i],Je(a))},[]).filter(function(r){return ur(r)||fr(r)}).join(",")}function ft(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function pt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function ur(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function fr(e){return/^.*\.[\w]+$/.test(e)}var dt=["children"],mt=["open"],gt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],vt=["refKey","onChange","onClick"];function bt(e){return xt(e)||ht(e)||pr(e)||yt()}function yt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xt(e){if(Array.isArray(e))return Ae(e)}function we(e,r){return wt(e)||jt(e,r)||pr(e,r)||Dt()}function Dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pr(e,r){if(e){if(typeof e=="string")return Ae(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ae(e,r)}}function Ae(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function jt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,u,l;try{for(t=t.call(e);!(i=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));i=!0);}catch(g){a=!0,l=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function wt(e){if(Array.isArray(e))return e}function tr(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?tr(Object(t),!0).forEach(function(n){_e(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tr(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function _e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ue(e,r){if(e==null)return{};var t=Et(e,r),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Et(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Pe=f.forwardRef(function(e,r){var t=e.children,n=ue(e,dt),i=mr(n),a=i.open,u=ue(i,mt);return f.useImperativeHandle(r,function(){return{open:a}},[a]),Dr.createElement(f.Fragment,null,t(d(d({},u),{},{open:a})))});Pe.displayName="Dropzone";var dr={disabled:!1,getFilesFromEvent:zr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Pe.defaultProps=dr;Pe.propTypes={children:p.func,accept:p.objectOf(p.arrayOf(p.string)),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,autoFocus:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,onError:p.func,validator:p.func};var Oe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function mr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},dr),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,a=r.maxSize,u=r.minSize,l=r.multiple,g=r.maxFiles,O=r.onDragEnter,w=r.onDragLeave,x=r.onDragOver,y=r.onDrop,E=r.onDropAccepted,P=r.onDropRejected,C=r.onFileDialogCancel,B=r.onFileDialogOpen,S=r.useFsAccessApi,Q=r.autoFocus,v=r.preventDropOnDocument,A=r.noClick,fe=r.noKeyboard,Ce=r.noDrag,I=r.noDragEventsBubbling,pe=r.onError,W=r.validator,H=f.useMemo(function(){return ut(t)},[t]),Se=f.useMemo(function(){return lt(t)},[t]),de=f.useMemo(function(){return typeof B=="function"?B:nr},[B]),X=f.useMemo(function(){return typeof C=="function"?C:nr},[C]),h=f.useRef(null),F=f.useRef(null),gr=f.useReducer(Ft,Oe),Ie=we(gr,2),me=Ie[0],D=Ie[1],vr=me.isFocused,Te=me.isFileDialogActive,Z=f.useRef(typeof window<"u"&&window.isSecureContext&&S&&ct()),Re=function(){!Z.current&&Te&&setTimeout(function(){if(F.current){var c=F.current.files;c.length||(D({type:"closeDialog"}),X())}},300)};f.useEffect(function(){return window.addEventListener("focus",Re,!1),function(){window.removeEventListener("focus",Re,!1)}},[F,Te,X,Z]);var z=f.useRef([]),ke=function(c){h.current&&h.current.contains(c.target)||(c.preventDefault(),z.current=[])};f.useEffect(function(){return v&&(document.addEventListener("dragover",rr,!1),document.addEventListener("drop",ke,!1)),function(){v&&(document.removeEventListener("dragover",rr),document.removeEventListener("drop",ke))}},[h,v]),f.useEffect(function(){return!n&&Q&&h.current&&h.current.focus(),function(){}},[h,Q,n]);var T=f.useCallback(function(o){pe?pe(o):console.error(o)},[pe]),ze=f.useCallback(function(o){o.preventDefault(),o.persist(),ne(o),z.current=[].concat(bt(z.current),[o.target]),se(o)&&Promise.resolve(i(o)).then(function(c){if(!(le(o)&&!I)){var m=c.length,b=m>0&&ot({files:c,accept:H,minSize:u,maxSize:a,multiple:l,maxFiles:g,validator:W}),j=m>0&&!b;D({isDragAccept:b,isDragReject:j,isDragActive:!0,type:"setDraggedFiles"}),O&&O(o)}}).catch(function(c){return T(c)})},[i,O,T,I,H,u,a,l,g,W]),Me=f.useCallback(function(o){o.preventDefault(),o.persist(),ne(o);var c=se(o);if(c&&o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return c&&x&&x(o),!1},[x,I]),Le=f.useCallback(function(o){o.preventDefault(),o.persist(),ne(o);var c=z.current.filter(function(b){return h.current&&h.current.contains(b)}),m=c.indexOf(o.target);m!==-1&&c.splice(m,1),z.current=c,!(c.length>0)&&(D({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),se(o)&&w&&w(o))},[h,w,I]),ee=f.useCallback(function(o,c){var m=[],b=[];o.forEach(function(j){var U=cr(j,H),N=we(U,2),ve=N[0],be=N[1],ye=lr(j,u,a),oe=we(ye,2),he=oe[0],xe=oe[1],De=W?W(j):null;if(ve&&he&&!De)m.push(j);else{var je=[be,xe];De&&(je=je.concat(De)),b.push({file:j,errors:je.filter(function(xr){return xr})})}}),(!l&&m.length>1||l&&g>=1&&m.length>g)&&(m.forEach(function(j){b.push({file:j,errors:[nt]})}),m.splice(0)),D({acceptedFiles:m,fileRejections:b,type:"setFiles"}),y&&y(m,b,c),b.length>0&&P&&P(b,c),m.length>0&&E&&E(m,c)},[D,l,H,u,a,g,y,E,P,W]),re=f.useCallback(function(o){o.preventDefault(),o.persist(),ne(o),z.current=[],se(o)&&Promise.resolve(i(o)).then(function(c){le(o)&&!I||ee(c,o)}).catch(function(c){return T(c)}),D({type:"reset"})},[i,ee,T,I]),M=f.useCallback(function(){if(Z.current){D({type:"openDialog"}),de();var o={multiple:l,types:Se};window.showOpenFilePicker(o).then(function(c){return i(c)}).then(function(c){ee(c,null),D({type:"closeDialog"})}).catch(function(c){ft(c)?(X(c),D({type:"closeDialog"})):pt(c)?(Z.current=!1,F.current?(F.current.value=null,F.current.click()):T(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):T(c)});return}F.current&&(D({type:"openDialog"}),de(),F.current.value=null,F.current.click())},[D,de,X,S,ee,T,Se,l]),Ne=f.useCallback(function(o){!h.current||!h.current.isEqualNode(o.target)||(o.key===" "||o.key==="Enter"||o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),M())},[h,M]),$e=f.useCallback(function(){D({type:"focus"})},[]),Ke=f.useCallback(function(){D({type:"blur"})},[]),Be=f.useCallback(function(){A||(st()?setTimeout(M,0):M())},[A,M]),L=function(c){return n?null:c},ge=function(c){return fe?null:L(c)},te=function(c){return Ce?null:L(c)},ne=function(c){I&&c.stopPropagation()},br=f.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.refKey,m=c===void 0?"ref":c,b=o.role,j=o.onKeyDown,U=o.onFocus,N=o.onBlur,ve=o.onClick,be=o.onDragEnter,ye=o.onDragOver,oe=o.onDragLeave,he=o.onDrop,xe=ue(o,gt);return d(d(_e({onKeyDown:ge(_(j,Ne)),onFocus:ge(_(U,$e)),onBlur:ge(_(N,Ke)),onClick:L(_(ve,Be)),onDragEnter:te(_(be,ze)),onDragOver:te(_(ye,Me)),onDragLeave:te(_(oe,Le)),onDrop:te(_(he,re)),role:typeof b=="string"&&b!==""?b:"presentation"},m,h),!n&&!fe?{tabIndex:0}:{}),xe)}},[h,Ne,$e,Ke,Be,ze,Me,Le,re,fe,Ce,n]),yr=f.useCallback(function(o){o.stopPropagation()},[]),hr=f.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.refKey,m=c===void 0?"ref":c,b=o.onChange,j=o.onClick,U=ue(o,vt),N=_e({accept:H,multiple:l,type:"file",style:{display:"none"},onChange:L(_(b,re)),onClick:L(_(j,yr)),tabIndex:-1},m,F);return d(d({},N),U)}},[F,t,l,re,n]);return d(d({},me),{},{isFocused:vr&&!n,getRootProps:br,getInputProps:hr,rootRef:h,inputRef:F,open:L(M)})}function Ft(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},Oe),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},Oe);default:return e}}function nr(){}const At=R.object({name:R.string().min(3,{message:"El nombre debe tener al menos 3 caracteres"}),description:R.string().optional().nullable(),cover_url:R.union([R.string(),R.instanceof(File)]),presenter_id:R.string().min(1,{message:"Seleccione un presentador para su proyecto"})}),_t={id:"",name:"",description:"",cover_url:"",presenter_id:""};function en({modalKey:e}){const{props:{presenters:r,projects:t}}=jr(),{modals:n,toggleModal:i}=Ir(),a=n[e]||{open:!1,isEditing:!1,currentId:null},u=Ot(a,t)||_t,{data:l,post:g,wasSuccessful:O,progress:w,processing:x,errors:y}=wr({...u,_method:a.isEditing?"PUT":void 0});f.useRef(null);const E=Er({resolver:Fr(At),defaultValues:{...u}}),P=f.useCallback(v=>{},[]),{getRootProps:C,getInputProps:B,acceptedFiles:S}=mr({onDrop:P}),Q=v=>{console.log(v,l),l.name=v.name,v.description&&(l.description=v.description),l.presenter_id=v.presenter_id,l.cover_url=S[0]||v.cover_url,a.isEditing?g(route("projects.update",a.currentId),{onError:A=>{console.log(A)},onSuccess:()=>{He.success("Proyecto registrado exitosamente"),i(e)}}):g(route("projects.store"),{onError:A=>{console.log(A)},onSuccess:()=>{He.success("Proyecto actualizado exitosamente"),i(e)}})};return s.jsx(Ar,{...E,children:s.jsxs("form",{onSubmit:E.handleSubmit(Q),children:[y.id&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:y.id}),s.jsx(ie,{control:E.control,name:"name",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsx(Y,{htmlFor:"name",children:"Nombre del Proyecto"}),s.jsx(V,{children:s.jsx(_r,{id:"name",placeholder:"nombre",...v})}),s.jsx(ae,{}),y.name&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:y.name})]})}),s.jsx(ie,{control:E.control,name:"description",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsx(Y,{htmlFor:"description",children:"Descripción"}),s.jsx(V,{children:s.jsx(Or,{...v,id:"description",placeholder:"descripción",value:u.description??""})}),s.jsx(ae,{}),y.description&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:y.description})]})}),s.jsx(ie,{control:E.control,name:"cover_url",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsx(Y,{children:"Portada"}),s.jsx(V,{children:s.jsxs(s.Fragment,{children:[a.isEditing&&u.cover_url&&!S[0]&&s.jsx("div",{children:s.jsx(Ye,{src:u.cover_url+"",alt:u.name,className:"h-20 w-20"})}),S[0]&&s.jsx("div",{children:s.jsx("img",{src:URL.createObjectURL(S[0]),alt:"Preview",style:{width:"100px"}})}),s.jsxs("div",{...C(),style:{border:"2px dashed #ccc",padding:"20px",marginBottom:"10px",textAlign:"center"},children:[s.jsx("input",{...B()}),"Drag & Drop to Upload Image or Click to Select"]})]})}),s.jsx(ae,{}),y.cover_url&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:y.cover_url})]})}),s.jsx(ie,{control:E.control,name:"presenter_id",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsxs(Y,{className:"flex justify-between py-1",children:[s.jsx("p",{className:"text-lg  font-semibold",children:"Seleccionar Presentador"}),s.jsx(Sr,{})]}),s.jsx(V,{children:s.jsx(Pr,{onValueChange:v.onChange,defaultValue:v.value,className:"flex flex-row  space-y-1",children:s.jsx("div",{className:"w-full h-56 grid grid-cols-3 overflow-y-auto",children:r&&r.map(A=>s.jsxs(G,{className:" flex space-x-3",children:[s.jsx(V,{children:s.jsx(Cr,{value:A.id.toString()})}),s.jsx(Y,{children:s.jsxs("div",{className:"",children:[s.jsx("p",{className:"text-md mb-1",children:A.full_name}),s.jsx(Ye,{src:A.photo_url,alt:A.full_name,className:"h-20 w-20"})]})})]}))})})}),s.jsx(ae,{}),y.presenter_id&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:y.presenter_id})]})}),w&&s.jsxs("progress",{value:w.percentage,max:"100",children:[w.percentage,"%"]}),s.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[s.jsx(We,{type:"button",variant:"destructive",onClick:()=>i(e),children:"Cancelar"}),s.jsx(We,{type:"submit",disabled:x,children:a.isEditing?"Actualizar":"Registrar"})]})]})})}const Ot=(e,r)=>{if(e.isEditing){const t=r.find(n=>n.id===e.currentId);if(t)return{id:t.id,name:t.name,description:t.description,cover_url:t.cover_url,presenter_id:t.presenter.id.toString()}}return null};export{en as default};
