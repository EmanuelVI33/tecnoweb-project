import{r as u,j as C}from"./app-BaRKjdtB.js";function $(e,c){const r=u.createContext(c);function a(o){const{children:t,...n}=o,s=u.useMemo(()=>n,Object.values(n));return C.jsx(r.Provider,{value:s,children:t})}function i(o){const t=u.useContext(r);if(t)return t;if(c!==void 0)return c;throw new Error(`\`${o}\` must be used within \`${e}\``)}return a.displayName=e+"Provider",[a,i]}function j(e,c=[]){let r=[];function a(o,t){const n=u.createContext(t),s=r.length;r=[...r,t];function f(p){const{scope:x,children:m,...d}=p,S=(x==null?void 0:x[e][s])||n,h=u.useMemo(()=>d,Object.values(d));return C.jsx(S.Provider,{value:h,children:m})}function v(p,x){const m=(x==null?void 0:x[e][s])||n,d=u.useContext(m);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${p}\` must be used within \`${o}\``)}return f.displayName=o+"Provider",[f,v]}const i=()=>{const o=r.map(t=>u.createContext(t));return function(n){const s=(n==null?void 0:n[e])||o;return u.useMemo(()=>({[`__scope${e}`]:{...n,[e]:s}}),[n,s])}};return i.scopeName=e,[a,P(i,...c)]}function P(...e){const c=e[0];if(e.length===1)return c;const r=()=>{const a=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const t=a.reduce((n,{useScope:s,scopeName:f})=>{const p=s(o)[`__scope${f}`];return{...n,...p}},{});return u.useMemo(()=>({[`__scope${c.scopeName}`]:t}),[t])}};return r.scopeName=c.scopeName,r}export{$ as a,j as c};
