import{r as t,j as e}from"./app-BhyseZvx.js";import{E as j}from"./element-presenter.model-DAjEEdYv.js";import{c as o}from"./shadcn-C-5SdYIA.js";import{u as N}from"./selected-project-DT7vhEXK.js";import"./element.model-r3-WMhpT.js";import"./index-Cuq_700K.js";const c=t.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("rounded-xl border bg-card text-card-foreground shadow",a),...r}));c.displayName="Card";const n=t.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("flex flex-col space-y-1.5 p-6",a),...r}));n.displayName="CardHeader";const i=t.forwardRef(({className:a,...r},s)=>e.jsx("h3",{ref:s,className:o("font-semibold leading-none tracking-tight",a),...r}));i.displayName="CardTitle";const m=t.forwardRef(({className:a,...r},s)=>e.jsx("p",{ref:s,className:o("text-sm text-muted-foreground",a),...r}));m.displayName="CardDescription";const p=t.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("p-6 pt-0",a),...r}));p.displayName="CardContent";const u=t.forwardRef(({className:a,...r},s)=>e.jsx("div",{ref:s,className:o("flex items-center p-6 pt-0",a),...r}));u.displayName="CardFooter";function b(){const{elements:a,selectElement:r,currentElement:s}=N();return e.jsx("div",{className:"h-2/3 bg-slate-500 p-2 m-2 rounded-2xl overflow-x-auto overflow-y-auto",children:e.jsx("div",{className:" flex gap-5 p-2",children:a.map((d,l)=>{const{title:f}=d,x=f.length*.4;return e.jsxs(c,{className:`w[${x}rem] ${s===l?"bg-slate-800 text-white":""}`,onClick:()=>r(l),children:[e.jsxs(n,{children:[e.jsx(i,{children:d.title}),e.jsx(m,{children:d.labelTypeElement})]}),d instanceof j&&e.jsx(p,{className:"",children:e.jsx("p",{className:"text-balance truncate",children:d.content})})]},l)})})})}export{b as default};
