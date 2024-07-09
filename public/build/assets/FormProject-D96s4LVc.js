import{g as jr,r as p,R as Er,q as wr,W as Fr,j as s}from"./app-CtOOS7DE.js";import{z as R,u as _r,t as Or,F as Ar,a as ie,b as G,c as Y,d as V,f as ae}from"./form-CtmRDlmk.js";import{B as Be}from"./button-DoGT9RJy.js";import{I as Pr}from"./input-Q-DC7i88.js";import{J as Cr}from"./index-DdRWKeN6.js";import{T as Tr}from"./textarea-BveD4Xn_.js";import{R as Sr,a as Ir}from"./radio-group-Cmw3PhFA.js";import Rr from"./CreateOrEdit-DpJ_OCma.js";import{u as kr}from"./modal-store-Bxz4c53i.js";import{_ as $,b as W,c as He,d as Ue}from"./index-BpmYaZSh.js";import"./shadcn-C-5SdYIA.js";import"./index-CXbiOPne.js";import"./index-BGMcDQWq.js";import"./index-BV_F_IO6.js";import"./Dialog-BgjTUqoT.js";import"./dialog-Ibm_kPre.js";import"./FormCreateOrEdit-Btv6GQSd.js";import"./presenter-CLZs53NS.js";import"./index-gOUqg7wj.js";var tr={exports:{}},zr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Lr=zr,Mr=Lr;function nr(){}function or(){}or.resetWarningCache=nr;var Nr=function(){function e(n,i,a,u,l,m){if(m!==Mr){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:or,resetWarningCache:nr};return t.PropTypes=t,t};tr.exports=Nr();var $r=tr.exports;const f=jr($r);var Wr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function J(e,r){var t=Kr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Kr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=Wr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Br=[".DS_Store","Thumbs.db"];function Hr(e){return $(this,void 0,void 0,function(){return W(this,function(r){return ce(e)&&Ur(e.dataTransfer)?[2,qr(e.dataTransfer,e.type)]:Gr(e)?[2,Yr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Vr(e)]:[2,[]]})})}function Ur(e){return ce(e)}function Gr(e){return ce(e)&&ce(e.target)}function ce(e){return typeof e=="object"&&e!==null}function Yr(e){return we(e.target.files).map(function(r){return J(r)})}function Vr(e){return $(this,void 0,void 0,function(){var r;return W(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return J(n)})]}})})}function qr(e,r){return $(this,void 0,void 0,function(){var t,n;return W(this,function(i){switch(i.label){case 0:return e.items?(t=we(e.items).filter(function(a){return a.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Jr))]):[3,2];case 1:return n=i.sent(),[2,Ge(ir(n))];case 2:return[2,Ge(we(e.files).map(function(a){return J(a)}))]}})})}function Ge(e){return e.filter(function(r){return Br.indexOf(r.name)===-1})}function we(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Jr(e){if(typeof e.webkitGetAsEntry!="function")return Ye(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?ar(r):Ye(e)}function ir(e){return e.reduce(function(r,t){return He(He([],Ue(r),!1),Ue(Array.isArray(t)?ir(t):[t]),!1)},[])}function Ye(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=J(r);return Promise.resolve(t)}function Qr(e){return $(this,void 0,void 0,function(){return W(this,function(r){return[2,e.isDirectory?ar(e):Xr(e)]})})}function ar(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function a(){var u=this;r.readEntries(function(l){return $(u,void 0,void 0,function(){var m,x,w;return W(this,function(D){switch(D.label){case 0:if(l.length)return[3,5];D.label=1;case 1:return D.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=D.sent(),t(m),[3,4];case 3:return x=D.sent(),n(x),[3,4];case 4:return[3,6];case 5:w=Promise.all(l.map(Qr)),i.push(w),a(),D.label=6;case 6:return[2]}})})},function(l){n(l)})}a()})}function Xr(e){return $(this,void 0,void 0,function(){return W(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var a=J(i,e.fullPath);t(a)},function(i){n(i)})})]})})}var Zr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return t.some(function(u){var l=u.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?a===l.replace(/\/.*$/,""):i===l})}return!0};function Ve(e){return tt(e)||rt(e)||cr(e)||et()}function et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tt(e){if(Array.isArray(e))return Fe(e)}function qe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Je(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?qe(Object(t),!0).forEach(function(n){sr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function sr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function q(e,r){return it(e)||ot(e,r)||cr(e,r)||nt()}function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(e,r){if(e){if(typeof e=="string")return Fe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fe(e,r)}}function Fe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ot(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,u,l;try{for(t=t.call(e);!(i=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));i=!0);}catch(m){a=!0,l=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function it(e){if(Array.isArray(e))return e}var at="file-invalid-type",st="file-too-large",ct="file-too-small",lt="too-many-files",ut=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:at,message:"File type must be ".concat(t)}},Qe=function(r){return{code:st,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Xe=function(r){return{code:ct,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},pt={code:lt,message:"Too many files"};function lr(e,r){var t=e.type==="application/x-moz-file"||Zr(e,r);return[t,t?null:ut(r)]}function ur(e,r,t){if(k(e.size))if(k(r)&&k(t)){if(e.size>t)return[!1,Qe(t)];if(e.size<r)return[!1,Xe(r)]}else{if(k(r)&&e.size<r)return[!1,Xe(r)];if(k(t)&&e.size>t)return[!1,Qe(t)]}return[!0,null]}function k(e){return e!=null}function ft(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,a=e.multiple,u=e.maxFiles,l=e.validator;return!a&&r.length>1||a&&u>=1&&r.length>u?!1:r.every(function(m){var x=lr(m,t),w=q(x,1),D=w[0],b=ur(m,n,i),F=q(b,1),A=F[0],P=l?l(m):null;return D&&A&&!P})}function le(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function se(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ze(e){e.preventDefault()}function dt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function mt(e){return e.indexOf("Edge/")!==-1}function gt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return dt(e)||mt(e)}function O(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];return r.some(function(l){return!le(n)&&l&&l.apply(void 0,[n].concat(a)),le(n)})}}function vt(){return"showOpenFilePicker"in window}function yt(e){if(k(e)){var r=Object.entries(e).filter(function(t){var n=q(t,2),i=n[0],a=n[1],u=!0;return pr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),u=!1),(!Array.isArray(a)||!a.every(fr))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),u=!1),u}).reduce(function(t,n){var i=q(n,2),a=i[0],u=i[1];return Je(Je({},t),{},sr({},a,u))},{});return[{description:"Files",accept:r}]}return e}function bt(e){if(k(e))return Object.entries(e).reduce(function(r,t){var n=q(t,2),i=n[0],a=n[1];return[].concat(Ve(r),[i],Ve(a))},[]).filter(function(r){return pr(r)||fr(r)}).join(",")}function ht(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function xt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function pr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function fr(e){return/^.*\.[\w]+$/.test(e)}var Dt=["children"],jt=["open"],Et=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],wt=["refKey","onChange","onClick"];function Ft(e){return At(e)||Ot(e)||dr(e)||_t()}function _t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ot(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function At(e){if(Array.isArray(e))return _e(e)}function Ee(e,r){return Tt(e)||Ct(e,r)||dr(e,r)||Pt()}function Pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dr(e,r){if(e){if(typeof e=="string")return _e(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _e(e,r)}}function _e(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ct(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,u,l;try{for(t=t.call(e);!(i=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));i=!0);}catch(m){a=!0,l=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function Tt(e){if(Array.isArray(e))return e}function er(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?er(Object(t),!0).forEach(function(n){Oe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):er(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Oe(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ue(e,r){if(e==null)return{};var t=St(e,r),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function St(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Pe=p.forwardRef(function(e,r){var t=e.children,n=ue(e,Dt),i=gr(n),a=i.open,u=ue(i,jt);return p.useImperativeHandle(r,function(){return{open:a}},[a]),Er.createElement(p.Fragment,null,t(d(d({},u),{},{open:a})))});Pe.displayName="Dropzone";var mr={disabled:!1,getFilesFromEvent:Hr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Pe.defaultProps=mr;Pe.propTypes={children:f.func,accept:f.objectOf(f.arrayOf(f.string)),multiple:f.bool,preventDropOnDocument:f.bool,noClick:f.bool,noKeyboard:f.bool,noDrag:f.bool,noDragEventsBubbling:f.bool,minSize:f.number,maxSize:f.number,maxFiles:f.number,disabled:f.bool,getFilesFromEvent:f.func,onFileDialogCancel:f.func,onFileDialogOpen:f.func,useFsAccessApi:f.bool,autoFocus:f.bool,onDragEnter:f.func,onDragLeave:f.func,onDragOver:f.func,onDrop:f.func,onDropAccepted:f.func,onDropRejected:f.func,onError:f.func,validator:f.func};var Ae={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function gr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},mr),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,a=r.maxSize,u=r.minSize,l=r.multiple,m=r.maxFiles,x=r.onDragEnter,w=r.onDragLeave,D=r.onDragOver,b=r.onDrop,F=r.onDropAccepted,A=r.onDropRejected,P=r.onFileDialogCancel,K=r.onFileDialogOpen,C=r.useFsAccessApi,Q=r.autoFocus,v=r.preventDropOnDocument,T=r.noClick,pe=r.noKeyboard,Ce=r.noDrag,S=r.noDragEventsBubbling,fe=r.onError,B=r.validator,H=p.useMemo(function(){return bt(t)},[t]),Te=p.useMemo(function(){return yt(t)},[t]),de=p.useMemo(function(){return typeof K=="function"?K:rr},[K]),X=p.useMemo(function(){return typeof P=="function"?P:rr},[P]),h=p.useRef(null),_=p.useRef(null),vr=p.useReducer(It,Ae),Se=Ee(vr,2),me=Se[0],j=Se[1],yr=me.isFocused,Ie=me.isFileDialogActive,Z=p.useRef(typeof window<"u"&&window.isSecureContext&&C&&vt()),Re=function(){!Z.current&&Ie&&setTimeout(function(){if(_.current){var c=_.current.files;c.length||(j({type:"closeDialog"}),X())}},300)};p.useEffect(function(){return window.addEventListener("focus",Re,!1),function(){window.removeEventListener("focus",Re,!1)}},[_,Ie,X,Z]);var z=p.useRef([]),ke=function(c){h.current&&h.current.contains(c.target)||(c.preventDefault(),z.current=[])};p.useEffect(function(){return v&&(document.addEventListener("dragover",Ze,!1),document.addEventListener("drop",ke,!1)),function(){v&&(document.removeEventListener("dragover",Ze),document.removeEventListener("drop",ke))}},[h,v]),p.useEffect(function(){return!n&&Q&&h.current&&h.current.focus(),function(){}},[h,Q,n]);var I=p.useCallback(function(o){fe?fe(o):console.error(o)},[fe]),ze=p.useCallback(function(o){o.preventDefault(),o.persist(),ne(o),z.current=[].concat(Ft(z.current),[o.target]),se(o)&&Promise.resolve(i(o)).then(function(c){if(!(le(o)&&!S)){var g=c.length,y=g>0&&ft({files:c,accept:H,minSize:u,maxSize:a,multiple:l,maxFiles:m,validator:B}),E=g>0&&!y;j({isDragAccept:y,isDragReject:E,isDragActive:!0,type:"setDraggedFiles"}),x&&x(o)}}).catch(function(c){return I(c)})},[i,x,I,S,H,u,a,l,m,B]),Le=p.useCallback(function(o){o.preventDefault(),o.persist(),ne(o);var c=se(o);if(c&&o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return c&&D&&D(o),!1},[D,S]),Me=p.useCallback(function(o){o.preventDefault(),o.persist(),ne(o);var c=z.current.filter(function(y){return h.current&&h.current.contains(y)}),g=c.indexOf(o.target);g!==-1&&c.splice(g,1),z.current=c,!(c.length>0)&&(j({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),se(o)&&w&&w(o))},[h,w,S]),ee=p.useCallback(function(o,c){var g=[],y=[];o.forEach(function(E){var U=lr(E,H),N=Ee(U,2),ve=N[0],ye=N[1],be=ur(E,u,a),oe=Ee(be,2),he=oe[0],xe=oe[1],De=B?B(E):null;if(ve&&he&&!De)g.push(E);else{var je=[ye,xe];De&&(je=je.concat(De)),y.push({file:E,errors:je.filter(function(Dr){return Dr})})}}),(!l&&g.length>1||l&&m>=1&&g.length>m)&&(g.forEach(function(E){y.push({file:E,errors:[pt]})}),g.splice(0)),j({acceptedFiles:g,fileRejections:y,type:"setFiles"}),b&&b(g,y,c),y.length>0&&A&&A(y,c),g.length>0&&F&&F(g,c)},[j,l,H,u,a,m,b,F,A,B]),re=p.useCallback(function(o){o.preventDefault(),o.persist(),ne(o),z.current=[],se(o)&&Promise.resolve(i(o)).then(function(c){le(o)&&!S||ee(c,o)}).catch(function(c){return I(c)}),j({type:"reset"})},[i,ee,I,S]),L=p.useCallback(function(){if(Z.current){j({type:"openDialog"}),de();var o={multiple:l,types:Te};window.showOpenFilePicker(o).then(function(c){return i(c)}).then(function(c){ee(c,null),j({type:"closeDialog"})}).catch(function(c){ht(c)?(X(c),j({type:"closeDialog"})):xt(c)?(Z.current=!1,_.current?(_.current.value=null,_.current.click()):I(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):I(c)});return}_.current&&(j({type:"openDialog"}),de(),_.current.value=null,_.current.click())},[j,de,X,C,ee,I,Te,l]),Ne=p.useCallback(function(o){!h.current||!h.current.isEqualNode(o.target)||(o.key===" "||o.key==="Enter"||o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),L())},[h,L]),$e=p.useCallback(function(){j({type:"focus"})},[]),We=p.useCallback(function(){j({type:"blur"})},[]),Ke=p.useCallback(function(){T||(gt()?setTimeout(L,0):L())},[T,L]),M=function(c){return n?null:c},ge=function(c){return pe?null:M(c)},te=function(c){return Ce?null:M(c)},ne=function(c){S&&c.stopPropagation()},br=p.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.refKey,g=c===void 0?"ref":c,y=o.role,E=o.onKeyDown,U=o.onFocus,N=o.onBlur,ve=o.onClick,ye=o.onDragEnter,be=o.onDragOver,oe=o.onDragLeave,he=o.onDrop,xe=ue(o,Et);return d(d(Oe({onKeyDown:ge(O(E,Ne)),onFocus:ge(O(U,$e)),onBlur:ge(O(N,We)),onClick:M(O(ve,Ke)),onDragEnter:te(O(ye,ze)),onDragOver:te(O(be,Le)),onDragLeave:te(O(oe,Me)),onDrop:te(O(he,re)),role:typeof y=="string"&&y!==""?y:"presentation"},g,h),!n&&!pe?{tabIndex:0}:{}),xe)}},[h,Ne,$e,We,Ke,ze,Le,Me,re,pe,Ce,n]),hr=p.useCallback(function(o){o.stopPropagation()},[]),xr=p.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.refKey,g=c===void 0?"ref":c,y=o.onChange,E=o.onClick,U=ue(o,wt),N=Oe({accept:H,multiple:l,type:"file",style:{display:"none"},onChange:M(O(y,re)),onClick:M(O(E,hr)),tabIndex:-1},g,_);return d(d({},N),U)}},[_,t,l,re,n]);return d(d({},me),{},{isFocused:yr&&!n,getRootProps:br,getInputProps:xr,rootRef:h,inputRef:_,open:M(L)})}function It(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},Ae),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},Ae);default:return e}}function rr(){}const Rt=R.object({name:R.string().min(3),description:R.string().optional(),cover_url:R.union([R.string(),R.instanceof(File)]),presenter_id:R.string()}),kt={id:"",name:"",description:"",cover_url:"",presenter_id:""};function tn({modalKey:e}){const{props:{presenters:r,projects:t}}=wr(),{modals:n,toggleModal:i}=kr(),a=n[e]||{open:!1,isEditing:!1,currentId:null},u=zt(a,t)||kt,{data:l,post:m,wasSuccessful:x,progress:w,processing:D,errors:b}=Fr({...u,_method:a.isEditing?"PUT":void 0}),F=_r({resolver:Or(Rt),defaultValues:{...u}}),A=p.useCallback(v=>{},[]),{getRootProps:P,getInputProps:K,acceptedFiles:C}=gr({onDrop:A}),Q=v=>{console.log(v,l),l.name=v.name,l.description=v.description,l.presenter_id=v.presenter_id,l.cover_url=C[0]||v.cover_url,a.isEditing?m(route("projects.update",a.currentId)):m(route("projects.store"))};return p.useEffect(()=>{x&&(Cr.success(`Projecto ${a.isEditing?"actualizado":"creado"} exitosamente`),i(e))},[x]),s.jsx(Ar,{...F,children:s.jsxs("form",{onSubmit:F.handleSubmit(Q),children:[b.id&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:b.id}),s.jsx(ie,{control:F.control,name:"name",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsx(Y,{htmlFor:"name",children:"Nombre del Proyecto"}),s.jsx(V,{children:s.jsx(Pr,{id:"name",placeholder:"nombre",...v})}),s.jsx(ae,{}),b.name&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:b.name})]})}),s.jsx(ie,{control:F.control,name:"description",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsx(Y,{htmlFor:"description",children:"Descripción"}),s.jsx(V,{children:s.jsx(Tr,{id:"description",placeholder:"descripción",...v})}),s.jsx(ae,{}),b.description&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:b.description})]})}),s.jsx(ie,{control:F.control,name:"cover_url",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsx(Y,{children:"Portada"}),s.jsx(V,{children:s.jsxs(s.Fragment,{children:[a.isEditing&&u.cover_url&&!C[0]&&s.jsx("div",{children:s.jsx("img",{src:u.cover_url,alt:"Current Cover",style:{width:"100px"}})}),C[0]&&s.jsx("div",{children:s.jsx("img",{src:URL.createObjectURL(C[0]),alt:"Preview",style:{width:"100px"}})}),s.jsxs("div",{...P(),style:{border:"2px dashed #ccc",padding:"20px",marginBottom:"10px",textAlign:"center"},children:[s.jsx("input",{...K()}),"Drag & Drop to Upload Image or Click to Select"]})]})}),s.jsx(ae,{}),b.cover_url&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:b.cover_url})]})}),s.jsx(ie,{control:F.control,name:"presenter_id",render:({field:v})=>s.jsxs(G,{className:"mb-3",children:[s.jsxs(Y,{className:"flex justify-between py-1",children:[s.jsx("p",{className:"text-lg  font-semibold",children:"Seleccionar Presentador"}),s.jsx(Rr,{})]}),s.jsx(V,{children:s.jsx(Sr,{onValueChange:v.onChange,defaultValue:v.value,className:"flex flex-row  space-y-1",children:s.jsx("div",{className:"w-full h-56 grid grid-cols-3 overflow-y-auto",children:r&&r.map(T=>s.jsxs(G,{className:" flex space-x-3",children:[s.jsx(V,{children:s.jsx(Ir,{value:T.id.toString()})}),s.jsx(Y,{children:s.jsxs("div",{className:"",children:[s.jsx("p",{className:"text-md mb-1",children:T.full_name}),s.jsx("img",{className:"h-20 w-20",src:T.photo_url,alt:T.full_name})]})})]}))})})}),s.jsx(ae,{}),b.presenter_id&&s.jsx("p",{className:"mt-2 text-sm text-red-600",children:b.presenter_id})]})}),w&&s.jsxs("progress",{value:w.percentage,max:"100",children:[w.percentage,"%"]}),s.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[s.jsx(Be,{type:"button",variant:"destructive",onClick:()=>i(e),children:"Cancelar"}),s.jsx(Be,{type:"submit",disabled:D,children:a.isEditing?"Actualizar":"Registrar"})]})]})})}const zt=(e,r)=>{if(e.isEditing){const t=r.find(n=>n.id===e.currentId);if(t)return{id:t.id,name:t.name,description:t.description,cover_url:t.cover_url,presenter_id:t.presenter.id.toString()}}return null};export{tn as default};
