import{j as e,W as C,r as j}from"./app-C-HIOc8u.js";import{A as E}from"./AuthenticatedLayout-CqAY433c.js";import{B as h}from"./button-DvkWWrnf.js";import{D as R,a as S,b as v,c as D,e as A}from"./dialog-w-oIVjRF.js";import{o as I,s as b,e as M,u as T,t as L,F as O,a as p,b as i,c,d as m,I as N,f as u}from"./zod-aP5e4tLB.js";import{J as w}from"./index-V0nIi_yY.js";import{R as B,a as _}from"./radio-group-ObUd5EK8.js";import{S as f}from"./presenter-CLZs53NS.js";import"./index-CVfHNZYF.js";import"./transition-CeAxsi8B.js";import"./NavLink-y57SSI9K.js";import"./FontSizeDropdown-V95aNAU9.js";import"./shadcn-C-5SdYIA.js";import"./index-BJ3R_yW2.js";import"./react-icons.esm-DSdeRlrx.js";import"./index--3I3_3Ml.js";import"./index-B5ArENHk.js";import"./tslib.es6-DjSP9Sqm.js";function k({children:t,titleButton:o,title:n,open:a=!1,handleTogleModal:r}){return e.jsxs(R,{open:a,onOpenChange:r,children:[e.jsx(h,{type:"button",onClick:()=>r(),children:o}),e.jsxs(S,{className:"sm:max-w-[625px]",children:[e.jsx(v,{children:e.jsx(D,{children:n})}),t,e.jsx(A,{className:"sm:justify-start"})]})]})}const G=I({full_name:b().min(3),sex:M([f.MALE,f.FEMALE]),photo_url:b()}),J={full_name:"",sex:f.MALE,photo_url:void 0};function V({handleCloseModal:t}){const{data:o,post:n,processing:a,errors:r,progress:d,wasSuccessful:g}=C(J),l=T({resolver:L(G)}),x=j.useRef(null),y=s=>{var F;console.log(s),x.current&&x.current.files&&(o.photo_url=(F=x.current)==null?void 0:F.files[0]),o.full_name=s.full_name,o.sex=s.sex,n("/presenters")};return j.useEffect(()=>{g&&(w.success("Presentador registrado exitosamente"),t())},[g]),e.jsx(e.Fragment,{children:e.jsx(O,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(y),children:[e.jsx(p,{control:l.control,name:"full_name",render:({field:s})=>e.jsxs(i,{className:"mb-3",children:[e.jsx(c,{children:"Nombre Completo"}),e.jsx(m,{children:e.jsxs(e.Fragment,{children:[e.jsx(N,{placeholder:"nombre completo",...s}),r.full_name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:r.full_name})]})}),e.jsx(u,{})]})}),e.jsx(p,{control:l.control,name:"sex",render:({field:s})=>e.jsxs(i,{className:"mb-3",children:[e.jsx(c,{children:"Sexo"}),e.jsx(m,{children:e.jsxs(e.Fragment,{children:[e.jsxs(B,{onValueChange:s.onChange,defaultValue:s.value,className:"flex gap-4 space-y-1",children:[e.jsxs(i,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(m,{children:e.jsx(_,{value:"male"})}),e.jsx(c,{className:"font-normal",children:"Masculino"})]}),e.jsxs(i,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(m,{children:e.jsx(_,{value:"female"})}),e.jsx(c,{className:"font-normal",children:"Femenino"})]})]}),r.sex&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:r.sex})]})}),e.jsx(u,{})]})}),e.jsx(p,{control:l.control,name:"photo_url",render:({field:s})=>e.jsxs(i,{className:"mb-3",children:[e.jsx(c,{children:"Foto"}),e.jsx(m,{children:e.jsxs(e.Fragment,{children:[e.jsx(N,{type:"file",placeholder:"foto",...s,ref:x}),r.photo_url&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:r.photo_url})]})}),e.jsx(u,{})]})}),d&&e.jsxs("progress",{value:d.percentage,max:"100",children:[d.percentage,"%"]}),e.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[e.jsx(h,{type:"button",variant:"destructive",onClick:()=>t(),children:"Cancelar"}),e.jsx(h,{type:"submit",disabled:a,children:"Registrar"})]})]})})})}function H(){const[t,o]=j.useState(!1),n=()=>{o(a=>!a)};return e.jsx(k,{open:t,handleTogleModal:n,title:"Registrando presentador",titleButton:"Registrar presentador",children:e.jsx(V,{handleCloseModal:n})})}function le({auth:t,presenters:o}){return e.jsx(E,{user:t.user,children:e.jsx(H,{})})}export{le as default};
