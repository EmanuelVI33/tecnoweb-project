import{R as i,j as v,r as x}from"./app-BaRKjdtB.js";import{c as z}from"./index-D-FmZWWC.js";import{u as y,S as A}from"./button-C30gfhJp.js";import{b as N}from"./react-icons.esm-DpQRfzkp.js";function D(e){const t=e+"CollectionProvider",[p,S]=z(t),[m,l]=p(t,{collectionRef:{current:null},itemMap:new Map}),u=s=>{const{scope:o,children:d}=s,r=i.useRef(null),n=i.useRef(new Map).current;return v.jsx(m,{scope:o,itemMap:n,collectionRef:r,children:d})};u.displayName=t;const f=e+"CollectionSlot",a=i.forwardRef((s,o)=>{const{scope:d,children:r}=s,n=l(f,d),c=y(o,n.collectionRef);return v.jsx(A,{ref:c,children:r})});a.displayName=f;const C=e+"CollectionItemSlot",b="data-radix-collection-item",h=i.forwardRef((s,o)=>{const{scope:d,children:r,...n}=s,c=i.useRef(null),M=y(o,c),R=l(C,d);return i.useEffect(()=>(R.itemMap.set(c,{ref:c,...n}),()=>void R.itemMap.delete(c))),v.jsx(A,{[b]:"",ref:M,children:r})});h.displayName=C;function E(s){const o=l(e+"CollectionConsumer",s);return i.useCallback(()=>{const r=o.collectionRef.current;if(!r)return[];const n=Array.from(r.querySelectorAll(`[${b}]`));return Array.from(o.itemMap.values()).sort((R,I)=>n.indexOf(R.ref.current)-n.indexOf(I.ref.current))},[o.collectionRef,o.itemMap])}return[{Provider:u,Slot:a,ItemSlot:h},E,S]}var O=x.createContext(void 0);function P(e){const t=x.useContext(O);return e||t||"ltr"}function j(e){const[t,p]=x.useState(void 0);return N(()=>{if(e){p({width:e.offsetWidth,height:e.offsetHeight});const S=new ResizeObserver(m=>{if(!Array.isArray(m)||!m.length)return;const l=m[0];let u,f;if("borderBoxSize"in l){const a=l.borderBoxSize,C=Array.isArray(a)?a[0]:a;u=C.inlineSize,f=C.blockSize}else u=e.offsetWidth,f=e.offsetHeight;p({width:u,height:f})});return S.observe(e,{box:"border-box"}),()=>S.unobserve(e)}else p(void 0)},[e]),t}function L(e){const t=x.useRef({value:e,previous:e});return x.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}export{L as a,j as b,D as c,P as u};
