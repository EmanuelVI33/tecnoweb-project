import{r as p,W as F,q as C,j as e}from"./app-CtOOS7DE.js";import{B as g}from"./button-DoGT9RJy.js";import"./dialog-Ibm_kPre.js";import{z as n,u as y,F as w,a as d,b as i,c,d as a,f as x,t as R}from"./form-CtmRDlmk.js";import{I as b}from"./input-Q-DC7i88.js";import{J as S}from"./index-DdRWKeN6.js";import{T as E}from"./textarea-BveD4Xn_.js";import{R as I,a as P}from"./radio-group-Cmw3PhFA.js";import D from"./CreateOrEdit-DpJ_OCma.js";import"./shadcn-C-5SdYIA.js";import"./index-BpmYaZSh.js";import"./index-BGMcDQWq.js";import"./index-CXbiOPne.js";import"./index-BV_F_IO6.js";import"./Dialog-BgjTUqoT.js";import"./FormCreateOrEdit-Btv6GQSd.js";import"./presenter-CLZs53NS.js";const T=p.createContext({}),B=n.object({name:n.string().min(3),description:n.string().optional(),cover_url:n.string(),presenter_id:n.string()}),G={name:"",description:"",cover_url:void 0,presenter_id:""};function Z(){const{data:l,post:N,processing:_,errors:s,progress:j,wasSuccessful:u}=F(G),{props:{presenters:h}}=C(),{handleTogle:f}=p.useContext(T),o=y({resolver:R(B)}),m=p.useRef(null);console.log(`Desde el form: ${h}`);const v=r=>{var t;console.log(r),m.current&&m.current.files&&(l.cover_url=(t=m.current)==null?void 0:t.files[0]),l.name=r.name,l.description=r.description,l.presenter_id=r.presenter_id,N("/projects")};return p.useEffect(()=>{u&&(S.success("Presentador registrado exitosamente"),f())},[u]),e.jsx(w,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(v),children:[e.jsx(d,{control:o.control,name:"name",render:({field:r})=>e.jsxs(i,{className:"mb-3",children:[e.jsx(c,{htmlFor:"name",children:"Nombre del Proyecto"}),e.jsx(a,{children:e.jsx(b,{id:"name",placeholder:"nombre",...r})}),e.jsx(x,{}),s.name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.name})]})}),e.jsx(d,{control:o.control,name:"description",render:({field:r})=>e.jsxs(i,{className:"mb-3",children:[e.jsx(c,{htmlFor:"description",children:"Descripción"}),e.jsx(a,{children:e.jsx(E,{id:"description",placeholder:"descripción",...r})}),e.jsx(x,{}),s.description&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.description})]})}),e.jsx(d,{control:o.control,name:"cover_url",render:({field:r})=>e.jsxs(i,{className:"mb-3",children:[e.jsx(c,{children:"Portada"}),e.jsx(a,{children:e.jsx(b,{type:"file",placeholder:"foto",...r,ref:m})}),e.jsx(x,{}),s.cover_url&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.cover_url})]})}),e.jsx(d,{control:o.control,name:"presenter_id",render:({field:r})=>e.jsxs(i,{className:"mb-3",children:[e.jsxs(c,{className:"flex justify-between py-1",children:[e.jsx("p",{className:"text-lg  font-semibold",children:"Seleccionar Presentador"}),e.jsx(D,{})]}),e.jsx(a,{children:e.jsx(I,{onValueChange:r.onChange,defaultValue:r.value,className:"flex flex-row  space-y-1",children:e.jsx("div",{className:"w-full h-56 grid grid-cols-3 overflow-y-auto",children:h&&h.map(t=>e.jsxs(i,{className:" flex space-x-3",children:[e.jsx(a,{children:e.jsx(P,{value:t.id.toString()})}),e.jsx(c,{children:e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-md mb-1",children:t.full_name}),e.jsx("img",{className:"h-20 w-20",src:t.photo_url,alt:t.full_name})]})})]}))})})}),e.jsx(x,{}),s.presenter_id&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.presenter_id})]})}),j&&e.jsxs("progress",{value:j.percentage,max:"100",children:[j.percentage,"%"]}),e.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[e.jsx(g,{type:"button",variant:"destructive",onClick:()=>f(),children:"Cancelar"}),e.jsx(g,{type:"submit",disabled:_,children:"Registrar"})]})]})})}export{Z as default};
