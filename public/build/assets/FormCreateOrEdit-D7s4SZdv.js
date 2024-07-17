import{r as x,W as F,q as C,j as e}from"./app-D0ROFTDy.js";import{B as g}from"./button-D2uSAnve.js";import"./dialog-7gWUyN6Y.js";import{z as n,u as y,F as R,a as d,b as a,c as i,d as c,I as b,f as p,t as w}from"./zod-DyEn_NlX.js";import{J as S}from"./index-FBn3qQOQ.js";import{T as E}from"./textarea-DMQgF6Z3.js";import{R as I,a as P}from"./radio-group-DEiw_Olf.js";import D from"./CreateOrEdit-o-FWgYnc.js";import"./shadcn-C-5SdYIA.js";import"./index-jLs5eoiS.js";import"./react-icons.esm-rHzliqWr.js";import"./index-z7WupVqH.js";import"./index-D_RYPP_Q.js";import"./FormCreateOrEdit-2de2rhXh.js";import"./presenter-CLZs53NS.js";import"./modal-store-BaGU3OB5.js";import"./index-BkpDHUFe.js";import"./CustomDialog2-Cej1XJKh.js";const L=x.createContext({}),T=n.object({name:n.string().min(3,{message:"El nombre debe tener al menos 3 caracteres"}),description:n.string().optional(),cover_url:n.string().url({message:"La URL de la portada no es válida"}),presenter_id:n.string().min(1,{message:"Seleccione un presentador para su proyecto"})}),B={name:"",description:"",cover_url:void 0,presenter_id:""};function ee(){const{data:l,post:N,processing:v,errors:s,progress:j,wasSuccessful:h}=F(B),{props:{presenters:u}}=C(),{handleTogle:f}=x.useContext(L),o=y({resolver:w(T)}),m=x.useRef(null);console.log(`Desde el form: ${u}`);const _=r=>{var t;console.log(r),m.current&&m.current.files&&(l.cover_url=(t=m.current)==null?void 0:t.files[0]),l.name=r.name,l.description=r.description,l.presenter_id=r.presenter_id,N("/projects")};return x.useEffect(()=>{h&&(S.success("Presentador registrado exitosamente"),f())},[h]),e.jsx(R,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(_),children:[e.jsx(d,{control:o.control,name:"name",render:({field:r})=>e.jsxs(a,{className:"mb-3",children:[e.jsx(i,{htmlFor:"name",children:"Nombre del Proyecto"}),e.jsx(c,{children:e.jsx(b,{id:"name",placeholder:"nombre",...r})}),e.jsx(p,{}),s.name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.name})]})}),e.jsx(d,{control:o.control,name:"description",render:({field:r})=>e.jsxs(a,{className:"mb-3",children:[e.jsx(i,{htmlFor:"description",children:"Descripción"}),e.jsx(c,{children:e.jsx(E,{id:"description",placeholder:"descripción",...r})}),e.jsx(p,{}),s.description&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.description})]})}),e.jsx(d,{control:o.control,name:"cover_url",render:({field:r})=>e.jsxs(a,{className:"mb-3",children:[e.jsx(i,{children:"Portada"}),e.jsx(c,{children:e.jsx(b,{type:"file",placeholder:"foto",...r,ref:m})}),e.jsx(p,{}),s.cover_url&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.cover_url})]})}),e.jsx(d,{control:o.control,name:"presenter_id",render:({field:r})=>e.jsxs(a,{className:"mb-3",children:[e.jsxs(i,{className:"flex justify-between py-1",children:[e.jsx("p",{className:"text-lg  font-semibold",children:"Seleccionar Presentador"}),e.jsx(D,{})]}),e.jsx(c,{children:e.jsx(I,{onValueChange:r.onChange,defaultValue:r.value,className:"flex flex-row  space-y-1",children:e.jsx("div",{className:"w-full h-56 grid grid-cols-3 overflow-y-auto",children:u&&u.map(t=>e.jsxs(a,{className:" flex space-x-3",children:[e.jsx(c,{children:e.jsx(P,{value:t.id.toString()})}),e.jsx(i,{children:e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-md mb-1",children:t.full_name}),e.jsx("img",{className:"h-20 w-20",src:t.photo_url,alt:t.full_name})]})})]}))})})}),e.jsx(p,{}),s.presenter_id&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.presenter_id})]})}),j&&e.jsxs("progress",{value:j.percentage,max:"100",children:[j.percentage,"%"]}),e.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[e.jsx(g,{type:"button",variant:"destructive",onClick:()=>f(),children:"Cancelar"}),e.jsx(g,{type:"submit",disabled:v,children:"Registrar"})]})]})})}export{ee as default};