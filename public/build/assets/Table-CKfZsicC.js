import{r as t,j as e,q as j,y as f}from"./app-BhyseZvx.js";import{B as i}from"./button-BvIoBRpq.js";import{c as l}from"./shadcn-C-5SdYIA.js";import{u}from"./selected-project-DT7vhEXK.js";import{a as N,b as w}from"./icon-XOgVwml7.js";import{u as y}from"./FormProject-B3j2y_gw.js";import{projectModalKey as T}from"./DialogProject-CWw-n_RY.js";import"./index-Cuq_700K.js";import"./input-M8JoOS5y.js";import"./index-CP3xyWGf.js";import"./textarea-C58l1DiS.js";import"./radio-group-BWIrlt0f.js";import"./CreateOrEdit-Z2CJjb-q.js";import"./Dialog-CBkjNwU5.js";import"./index-DokySTOH.js";import"./FormCreateOrEdit-DIbIC9_J.js";import"./presenter-CLZs53NS.js";const n=t.forwardRef(({className:s,...r},a)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:a,className:l("w-full caption-bottom text-sm",s),...r})}));n.displayName="Table";const x=t.forwardRef(({className:s,...r},a)=>e.jsx("thead",{ref:a,className:l("[&_tr]:border-b",s),...r}));x.displayName="TableHeader";const p=t.forwardRef(({className:s,...r},a)=>e.jsx("tbody",{ref:a,className:l("[&_tr:last-child]:border-0",s),...r}));p.displayName="TableBody";const g=t.forwardRef(({className:s,...r},a)=>e.jsx("tfoot",{ref:a,className:l("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...r}));g.displayName="TableFooter";const m=t.forwardRef(({className:s,...r},a)=>e.jsx("tr",{ref:a,className:l("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...r}));m.displayName="TableRow";const d=t.forwardRef(({className:s,...r},a)=>e.jsx("th",{ref:a,className:l("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",s),...r}));d.displayName="TableHead";const c=t.forwardRef(({className:s,...r},a)=>e.jsx("td",{ref:a,className:l("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",s),...r}));c.displayName="TableCell";const h=t.forwardRef(({className:s,...r},a)=>e.jsx("caption",{ref:a,className:l("mt-4 text-sm text-muted-foreground",s),...r}));h.displayName="TableCaption";function q(){const{toggleModal:s}=y(),{props:{projects:r}}=j(),a=u(o=>o.openProject),b=o=>{a(o),f.visit(`projects/${o.id}`)};return e.jsxs(n,{children:[e.jsx(h,{children:"Lista de Proyectos"}),e.jsx(x,{children:e.jsxs(m,{children:[e.jsx(d,{children:"Nombre"}),e.jsx(d,{children:"Portada"}),e.jsx(d,{className:"text-center",children:"Acciones"})]})}),e.jsx(p,{children:r&&r.map(o=>e.jsxs(m,{className:"hover:bg-gray-200",children:[e.jsxs(c,{children:[e.jsx("p",{children:o.name}),e.jsx("p",{children:o.description??"Proyecto"})]}),e.jsx(c,{children:e.jsx("img",{className:"w-[70px] h-[70px] object-cover",src:o.cover_url,alt:""})}),e.jsxs(c,{className:"text-end flex justify-around ",children:[e.jsxs(i,{onClick:()=>b(o),children:[e.jsx("span",{className:"mr-2",children:"Abrír"}),e.jsx(N,{})]}),e.jsxs(i,{onClick:()=>s(T,!0,o.id),children:[e.jsx("span",{className:"mr-2",children:"Editar"}),e.jsx(w,{})]}),e.jsxs(i,{onClick:()=>{},children:[e.jsx("span",{className:"mr-2",children:"Eliminar"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2rem",height:"1.2rem",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"})})]})]})]},o.id))})]})}export{q as default};