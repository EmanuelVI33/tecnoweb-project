import{W as y,r as h,j as e}from"./app-DRGzXkaU.js";import{o as S,s as g,e as M,u as R,F as C,a as x,b as t,c as a,d as l,f as d,t as L}from"./zod-CPptsrG6.js";import{J as I}from"./index-DmsEpVvj.js";import{B as b}from"./button-DodD20gp.js";import{R as A,a as F}from"./radio-group-B-JKypQc.js";import{I as _}from"./input-BpmZrZAf.js";import{S as p}from"./presenter-CLZs53NS.js";import{u as T}from"./modal-store-CzUVHPa0.js";import"./shadcn-C-5SdYIA.js";import"./index-CRukyXja.js";import"./react-icons.esm-VBrdgrbj.js";import"./index-CmmoRHAL.js";import"./index-BwhF15f_.js";const w=S({full_name:g().min(3,{message:"El nombre completo del presentador debe tener minimo 3 caracteres"}),sex:M([p.MALE,p.FEMALE],{errorMap:(n,m)=>n.code==="invalid_enum_value"?{message:"El sexo debe ser masculino o femenino"}:{message:"Seleccione un sexo para el presentador"}}),photo_url:g().url({message:"La URL de la foto no es válida"})}),B={full_name:"",sex:p.MALE,photo_url:void 0};function Z({modalKey:n}){const{data:m,post:N,processing:v,errors:r,progress:i,wasSuccessful:u,reset:G}=y(B),o=R({resolver:L(w)}),{modals:J,toggleModal:f}=T(),c=h.useRef(null),E=s=>{var j;console.log(s),c.current&&c.current.files&&(m.photo_url=(j=c.current)==null?void 0:j.files[0]),m.full_name=s.full_name,m.sex=s.sex,N("/presenters")};return h.useEffect(()=>{u&&(I.success("Presentador registrado exitosamente"),f(n))},[u]),e.jsx(e.Fragment,{children:e.jsx(C,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(E),children:[e.jsx(x,{control:o.control,name:"full_name",render:({field:s})=>e.jsxs(t,{className:"mb-3",children:[e.jsx(a,{children:"Nombre Completo"}),e.jsx(l,{children:e.jsxs(e.Fragment,{children:[e.jsx(_,{placeholder:"nombre completo",...s}),r.full_name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:r.full_name})]})}),e.jsx(d,{})]})}),e.jsx(x,{control:o.control,name:"sex",render:({field:s})=>e.jsxs(t,{className:"mb-3",children:[e.jsx(a,{children:"Sexo"}),e.jsx(l,{children:e.jsxs(e.Fragment,{children:[e.jsxs(A,{onValueChange:s.onChange,defaultValue:s.value,className:"flex gap-4 space-y-1",children:[e.jsxs(t,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(l,{children:e.jsx(F,{value:"male"})}),e.jsx(a,{className:"font-normal",children:"Masculino"})]}),e.jsxs(t,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(l,{children:e.jsx(F,{value:"female"})}),e.jsx(a,{className:"font-normal",children:"Femenino"})]})]}),r.sex&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:r.sex})]})}),e.jsx(d,{})]})}),e.jsx(x,{control:o.control,name:"photo_url",render:({field:s})=>e.jsxs(t,{className:"mb-3",children:[e.jsx(a,{children:"Foto"}),e.jsx(l,{children:e.jsxs(e.Fragment,{children:[e.jsx(_,{type:"file",placeholder:"foto",...s,ref:c}),r.photo_url&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:r.photo_url})]})}),e.jsx(d,{})]})}),i&&e.jsxs("progress",{value:i.percentage,max:"100",children:[i.percentage,"%"]}),e.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[e.jsx(b,{type:"button",variant:"destructive",onClick:()=>f(n),children:"Cancelar"}),e.jsx(b,{type:"submit",disabled:v,children:"Registrar"})]})]})})})}export{Z as default};
