var b=Object.defineProperty;var E=(o,r,s)=>r in o?b(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s;var c=(o,r,s)=>E(o,typeof r!="symbol"?r+"":r,s);import{r as v,j as e}from"./app-CYo2BHhq.js";import{z as a,u as F,F as g,a as d,b as u,c as f,d as j,I as x,f as p,t as y}from"./zod-BXRWu9-D.js";import{B as V}from"./button-CzNbViCz.js";import{u as S}from"./selected-project-Br4KN_Fa.js";import{E as T,a as _}from"./element.model-r3-WMhpT.js";const I="Video";class N extends T{constructor({id:s,title:n,file:t,isModified:l,videoUrl:i}){super({id:s,title:n,type:_.VIDEO,typeElement:I,isModified:l,videoUrl:i});c(this,"file");this.file=t}}class C{createElement(r){return new N({...r})}}const M=a.object({title:a.string().min(3),video_url:a.string()});function O(){const o=F({resolver:y(M)}),r=v.useRef(null),s=S(t=>t.addElement),n=t=>{var m;console.log(t);const l=new C;if(!r.current||!r.current.files)return;const i=(m=r.current)==null?void 0:m.files[0],h=l.createElement({...t,file:i,isModified:!0});s(h)};return e.jsx(g,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(n),children:[e.jsx(d,{control:o.control,name:"title",render:({field:t})=>e.jsxs(u,{className:"mb-3",children:[e.jsx(f,{htmlFor:"name",children:"Titulo"}),e.jsx(j,{children:e.jsx(x,{id:"name",placeholder:"nombre",...t})}),e.jsx(p,{})]})}),e.jsx(d,{control:o.control,name:"video_url",render:({field:t})=>e.jsxs(u,{className:"mb-3",children:[e.jsx(f,{children:"Vídeo"}),e.jsx(j,{children:e.jsx(x,{type:"file",placeholder:"video",accept:"video/mp4,video/x-m4v,video/*",...t,ref:r})}),e.jsx(p,{})]})}),e.jsx("div",{className:"flex justify-end p-2",children:e.jsx(V,{className:"",type:"submit",children:"Agregar"})})]})})}const D=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{C as E,O as T,D as a};