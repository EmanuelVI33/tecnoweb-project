import{j as e}from"./app-By1J3KYM.js";import{z as o,u as p,F as u,a as d,b as l,c,d as i,I as x,f as m,t as f}from"./zod-BVQkmHzd.js";import{B as g}from"./button-TXfYIoGU.js";import{R as w,a as b}from"./radio-group-BTcoPrVp.js";import{u as k}from"./selected-project-C6L7njx1.js";import{E as C,a as t}from"./element-presenter.model-DAjEEdYv.js";function v(s){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2.7em",height:"2.7em",viewBox:"0 0 48 48",...s,children:e.jsxs("g",{fill:"none",strokeLinejoin:"round",strokeWidth:4,children:[e.jsx("path",{fill:"#FCD825",stroke:"#000",d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"}),e.jsx("path",{stroke:"black",strokeLinecap:"round",d:"M31 18V19"}),e.jsx("path",{stroke:"black",strokeLinecap:"round",d:"M17 18V19"}),e.jsx("path",{stroke:"black",strokeLinecap:"round",d:"M31 31C31 31 29 35 24 35C19 35 17 31 17 31"})]})})}function S(s){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2.5em",height:"2.5em",viewBox:"0 0 36 36",...s,children:[e.jsx("path",{fill:"#ffcc4d",d:"M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"}),e.jsx("ellipse",{cx:11.5,cy:16.5,fill:"#664500",rx:2.5,ry:3.5}),e.jsx("ellipse",{cx:24.5,cy:16.5,fill:"#664500",rx:2.5,ry:3.5}),e.jsx("path",{fill:"#664500",d:"M25 26H11a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2"})]})}function E(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2.5em",height:"2.5em",viewBox:"0 0 48 48",children:e.jsxs("g",{fill:"none","stroke-linejoin":"round","stroke-width":"4",children:[e.jsx("path",{fill:"#f6d32d",stroke:"#000",d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"}),e.jsx("path",{stroke:"black","stroke-linecap":"round",d:"M31 18V19"}),e.jsx("path",{stroke:"black","stroke-linecap":"round",d:"M17 18V19"}),e.jsx("rect",{width:"12",height:"12",x:"18",y:"24",fill:"#f6f5f4",stroke:"black","stroke-linecap":"round",rx:"6"})]})})}function M(s){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2.4em",height:"2.4em",viewBox:"0 0 36 36",...s,children:[e.jsx("path",{fill:"#ffcc4d",d:"M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"}),e.jsx("path",{fill:"#664500",d:"M25.485 29.879C25.44 29.7 24.317 25.5 18 25.5c-6.318 0-7.44 4.2-7.485 4.379a.499.499 0 0 0 .237.554a.507.507 0 0 0 .6-.077c.019-.019 1.954-1.856 6.648-1.856s6.63 1.837 6.648 1.855a.502.502 0 0 0 .598.081a.5.5 0 0 0 .239-.557m-9.778-12.586C12.452 14.038 7.221 14 7 14a1.001 1.001 0 0 0-.001 2c.029 0 1.925.022 3.983.737c-.593.64-.982 1.634-.982 2.763c0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-.174-.019-.34-.037-.507c.013 0 .025.007.037.007a.999.999 0 0 0 .707-1.707M29 14c-.221 0-5.451.038-8.707 3.293A.999.999 0 0 0 21 19c.013 0 .024-.007.036-.007c-.016.167-.036.333-.036.507c0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-1.129-.389-2.123-.982-2.763A13.928 13.928 0 0 1 29.002 16A1 1 0 0 0 29 14"})]})}class N{createElement(a){return new C({...a})}}const y=o.object({title:o.string().min(3),content:o.string().min(3),expression:o.enum([t.HAPPY,t.NEUTRAL,t.SURPRISE,t.SERIOUS])}),F=[{label:"Neutral",value:t.NEUTRAL,icon:e.jsx(S,{})},{label:"Felíz",value:t.HAPPY,icon:e.jsx(v,{})},{label:"Sorprendido",value:t.SURPRISE,icon:e.jsx(E,{})},{label:"Serio",value:t.SERIOUS,icon:e.jsx(M,{})}];function P(){const s=p({resolver:f(y)}),a=k(r=>r.addElement),h=r=>{const j=new N().createElement({title:r.title,content:r.content,expression:r.expression,isModified:!0});a(j)};return e.jsx(u,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(h),children:[e.jsx(d,{control:s.control,name:"title",render:({field:r})=>e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"title",children:"Nombre del Proyecto"}),e.jsx(i,{children:e.jsx(x,{id:"title",placeholder:"Título",...r})}),e.jsx(m,{})]})}),e.jsx(d,{control:s.control,name:"content",render:({field:r})=>e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"content",children:"Contenido"}),e.jsx(i,{children:e.jsx(x,{id:"content",placeholder:"Contenido",...r})}),e.jsx(m,{})]})}),e.jsx(d,{control:s.control,name:"expression",render:({field:r})=>e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{children:"Expresión"}),e.jsx(i,{children:e.jsx(w,{onValueChange:r.onChange,defaultValue:r.value,className:"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto",children:F.map(n=>e.jsxs(l,{className:"flex items-center space-x-2 space-y-0 mr-3",children:[e.jsx(i,{children:e.jsx(b,{value:n.value})}),e.jsx(c,{className:"font-normal",children:e.jsxs("div",{className:"flex items-center gap-1",children:[n.icon,e.jsx("p",{className:"font-medium",children:n.label})]})})]}))})}),e.jsx(m,{})]})}),e.jsx("div",{className:"flex justify-end p-2",children:e.jsx(g,{className:"",type:"submit",children:"Agregar"})})]})})}const U=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{N as E,P as T,U as a};