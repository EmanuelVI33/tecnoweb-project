import{r as c,j as x,c as S,b as L}from"./app-mIvgi7q9.js";import{u as O}from"./button-BhpuKSDX.js";function h(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var P=["color"],W=c.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=h(e,P);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),E=["color"],k=c.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=h(e,E);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.createElement("path",{d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),M=["color"],Z=c.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=h(e,M);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),A=["color"],F=c.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=h(e,A);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.createElement("path",{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:r}))});function K(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Y(e,t){const n=c.createContext(t);function r(s){const{children:i,...a}=s,f=c.useMemo(()=>a,Object.values(a));return x.jsx(n.Provider,{value:f,children:i})}function o(s){const i=c.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return r.displayName=e+"Provider",[r,o]}function q(e,t=[]){let n=[];function r(s,i){const a=c.createContext(i),f=n.length;n=[...n,i];function u(l){const{scope:d,children:v,...C}=l,N=(d==null?void 0:d[e][f])||a,R=c.useMemo(()=>C,Object.values(C));return x.jsx(N.Provider,{value:R,children:v})}function m(l,d){const v=(d==null?void 0:d[e][f])||a,C=c.useContext(v);if(C)return C;if(i!==void 0)return i;throw new Error(`\`${l}\` must be used within \`${s}\``)}return u.displayName=s+"Provider",[u,m]}const o=()=>{const s=n.map(i=>c.createContext(i));return function(a){const f=(a==null?void 0:a[e])||s;return c.useMemo(()=>({[`__scope${e}`]:{...a,[e]:f}}),[a,f])}};return o.scopeName=e,[r,b(o,...t)]}function b(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const i=r.reduce((a,{useScope:f,scopeName:u})=>{const l=f(s)[`__scope${u}`];return{...a,...l}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function w(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function z({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=I({defaultProp:t,onChange:n}),s=e!==void 0,i=s?e:r,a=w(n),f=c.useCallback(u=>{if(s){const l=typeof u=="function"?u(e):u;l!==e&&a(l)}else o(u)},[s,e,o,a]);return[i,f]}function I({defaultProp:e,onChange:t}){const n=c.useState(e),[r]=n,o=c.useRef(r),s=w(t);return c.useEffect(()=>{o.current!==r&&(s(r),o.current=r)},[r,o,s]),n}var g=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},_=S.useId||(()=>{}),$=0;function G(e){const[t,n]=c.useState(_());return g(()=>{e||n(r=>r??String($++))},[e]),e||(t?`radix-${t}`:"")}function T(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var j=e=>{const{present:t,children:n}=e,r=y(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),s=O(r.ref,U(o));return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:s}):null};j.displayName="Presence";function y(e){const[t,n]=c.useState(),r=c.useRef({}),o=c.useRef(e),s=c.useRef("none"),i=e?"mounted":"unmounted",[a,f]=T(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const u=p(r.current);s.current=a==="mounted"?u:"none"},[a]),g(()=>{const u=r.current,m=o.current;if(m!==e){const d=s.current,v=p(u);e?f("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?f("UNMOUNT"):f(m&&d!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),g(()=>{if(t){const u=l=>{const v=p(r.current).includes(l.animationName);l.target===t&&v&&L.flushSync(()=>f("ANIMATION_END"))},m=l=>{l.target===t&&(s.current=p(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:c.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function p(e){return(e==null?void 0:e.animationName)||"none"}function U(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}export{Z as C,F as D,j as P,G as a,K as b,q as c,W as d,g as e,w as f,Y as g,k as h,z as u};
