import{j as e}from"./app-mIvgi7q9.js";import{E as c}from"./element-presenter.model-DAjEEdYv.js";import{C as i,a as m,b as d,c as p,d as x}from"./card-MS-GRVv3.js";import{u}from"./selected-project-CdBfUX0R.js";import"./element.model-r3-WMhpT.js";import"./shadcn-C-5SdYIA.js";import"./index-CCEhCbIn.js";function N(){const{elements:s,selectElement:a,currentElement:l}=u();return e.jsx("div",{className:"h-2/3 bg-slate-500 p-2 m-2 rounded-2xl overflow-x-auto overflow-y-auto",children:e.jsx("div",{className:" flex gap-5 p-2",children:s.map((t,r)=>{const{title:o}=t,n=o.length*.4;return e.jsxs(i,{className:`w[${n}rem] ${l===r?"bg-slate-800 text-white":""}`,onClick:()=>a(r),children:[e.jsxs(m,{children:[e.jsx(d,{children:t.title}),e.jsx(p,{children:t.labelTypeElement})]}),t instanceof c&&e.jsx(x,{className:"",children:e.jsx("p",{className:"text-balance truncate",children:t.content})})]},r)})})})}export{N as default};