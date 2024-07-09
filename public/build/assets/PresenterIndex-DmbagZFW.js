import{W as E,r as h,j as e}from"./app-BhyseZvx.js";import{A as R}from"./AuthenticatedLayout-jq9rW8Ih.js";import{D as C}from"./Dialog-CBkjNwU5.js";import{o as S,s as F,e as v,u as M,t as A,F as I,a as p,b as a,c as l,d as c,I as b,f as u}from"./input-M8JoOS5y.js";import{J as T}from"./index-CP3xyWGf.js";import{B as N}from"./button-BvIoBRpq.js";import{R as L,a as _}from"./radio-group-BWIrlt0f.js";import{S as j}from"./presenter-CLZs53NS.js";import"./sonner-BGFN5bBd.js";import"./transition-CCyE6tu2.js";import"./icon-XOgVwml7.js";import"./index-DokySTOH.js";import"./shadcn-C-5SdYIA.js";const B=S({full_name:F().min(3),sex:v([j.MALE,j.FEMALE]),photo_url:F()}),O={full_name:"",sex:j.MALE,photo_url:void 0};function w({handleCloseModal:r}){const{data:t,post:m,processing:x,errors:o,progress:d,wasSuccessful:f}=E(O),n=M({resolver:A(B)}),i=h.useRef(null),y=s=>{var g;console.log(s),i.current&&i.current.files&&(t.photo_url=(g=i.current)==null?void 0:g.files[0]),t.full_name=s.full_name,t.sex=s.sex,m("/presenters")};return h.useEffect(()=>{f&&(T.success("Presentador registrado exitosamente"),r())},[f]),e.jsx(e.Fragment,{children:e.jsx(I,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(y),children:[e.jsx(p,{control:n.control,name:"full_name",render:({field:s})=>e.jsxs(a,{className:"mb-3",children:[e.jsx(l,{children:"Nombre Completo"}),e.jsx(c,{children:e.jsxs(e.Fragment,{children:[e.jsx(b,{placeholder:"nombre completo",...s}),o.full_name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:o.full_name})]})}),e.jsx(u,{})]})}),e.jsx(p,{control:n.control,name:"sex",render:({field:s})=>e.jsxs(a,{className:"mb-3",children:[e.jsx(l,{children:"Sexo"}),e.jsx(c,{children:e.jsxs(e.Fragment,{children:[e.jsxs(L,{onValueChange:s.onChange,defaultValue:s.value,className:"flex gap-4 space-y-1",children:[e.jsxs(a,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(c,{children:e.jsx(_,{value:"male"})}),e.jsx(l,{className:"font-normal",children:"Masculino"})]}),e.jsxs(a,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(c,{children:e.jsx(_,{value:"female"})}),e.jsx(l,{className:"font-normal",children:"Femenino"})]})]}),o.sex&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:o.sex})]})}),e.jsx(u,{})]})}),e.jsx(p,{control:n.control,name:"photo_url",render:({field:s})=>e.jsxs(a,{className:"mb-3",children:[e.jsx(l,{children:"Foto"}),e.jsx(c,{children:e.jsxs(e.Fragment,{children:[e.jsx(b,{type:"file",placeholder:"foto",...s,ref:i}),o.photo_url&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:o.photo_url})]})}),e.jsx(u,{})]})}),d&&e.jsxs("progress",{value:d.percentage,max:"100",children:[d.percentage,"%"]}),e.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[e.jsx(N,{type:"button",variant:"destructive",onClick:()=>r(),children:"Cancelar"}),e.jsx(N,{type:"submit",disabled:x,children:"Registrar"})]})]})})})}function D(){const[r,t]=h.useState(!1),m=()=>{t(x=>!x)};return e.jsx(C,{open:r,handleTogleModal:m,title:"Registrando presentador",titleButton:"Registrar presentador",children:e.jsx(w,{handleCloseModal:m})})}function Y({auth:r,presenters:t}){return e.jsx(R,{user:r.user,children:e.jsx(D,{})})}export{Y as default};
