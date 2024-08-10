import{r as c,t as w,b as L}from"./app-DRGzXkaU.js";import{u as N}from"./button-DodD20gp.js";function j(e,n,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e==null||e(o),t===!1||!o.defaultPrevented)return n==null?void 0:n(o)}}var p=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},R=w.useId||(()=>{}),O=0;function D(e){const[n,t]=c.useState(R());return p(()=>{t(r=>r??String(O++))},[e]),n?`radix-${n}`:""}function g(e){const n=c.useRef(e);return c.useEffect(()=>{n.current=e}),c.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function W({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,o]=E({defaultProp:n,onChange:t}),i=e!==void 0,m=i?e:r,l=g(t),a=c.useCallback(s=>{if(i){const u=typeof s=="function"?s(e):s;u!==e&&l(u)}else o(s)},[i,e,o,l]);return[m,a]}function E({defaultProp:e,onChange:n}){const t=c.useState(e),[r]=t,o=c.useRef(r),i=g(n);return c.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),t}function A(e,n){return c.useReducer((t,r)=>n[t][r]??t,e)}var M=e=>{const{present:n,children:t}=e,r=x(n),o=typeof t=="function"?t({present:r.isPresent}):c.Children.only(t),i=N(r.ref,I(o));return typeof t=="function"||r.isPresent?c.cloneElement(o,{ref:i}):null};M.displayName="Presence";function x(e){const[n,t]=c.useState(),r=c.useRef({}),o=c.useRef(e),i=c.useRef("none"),m=e?"mounted":"unmounted",[l,a]=A(m,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const s=C(r.current);i.current=l==="mounted"?s:"none"},[l]),p(()=>{const s=r.current,f=o.current;if(f!==e){const h=i.current,v=C(s);e?a("MOUNT"):v==="none"||(s==null?void 0:s.display)==="none"?a("UNMOUNT"):a(f&&h!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),p(()=>{if(n){const s=u=>{const v=C(r.current).includes(u.animationName);u.target===n&&v&&L.flushSync(()=>a("ANIMATION_END"))},f=u=>{u.target===n&&(i.current=C(r.current))};return n.addEventListener("animationstart",f),n.addEventListener("animationcancel",s),n.addEventListener("animationend",s),()=>{n.removeEventListener("animationstart",f),n.removeEventListener("animationcancel",s),n.removeEventListener("animationend",s)}}else a("ANIMATION_END")},[n,a]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:c.useCallback(s=>{s&&(r.current=getComputedStyle(s)),t(s)},[])}}function C(e){return(e==null?void 0:e.animationName)||"none"}function I(e){var r,o;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function d(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var S=["color"],Z=c.forwardRef(function(e,n){var t=e.color,r=t===void 0?"currentColor":t,o=d(e,S);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:n}),c.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),P=["color"],B=c.forwardRef(function(e,n){var t=e.color,r=t===void 0?"currentColor":t,o=d(e,P);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:n}),c.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),T=["color"],k=c.forwardRef(function(e,n){var t=e.color,r=t===void 0?"currentColor":t,o=d(e,T);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:n}),c.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),b=["color"],K=c.forwardRef(function(e,n){var t=e.color,r=t===void 0?"currentColor":t,o=d(e,b);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:n}),c.createElement("path",{d:"M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),U=["color"],Q=c.forwardRef(function(e,n){var t=e.color,r=t===void 0?"currentColor":t,o=d(e,U);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:n}),c.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});export{Q as C,M as P,D as a,p as b,j as c,g as d,B as e,Z as f,K as g,k as h,W as u};