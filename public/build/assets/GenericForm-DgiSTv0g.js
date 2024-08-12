import{W as v,r as C,j as e}from"./app-BaRKjdtB.js";import{u as f,t as I,F as R,a as T,b as V,c as b,d as M,f as N}from"./zod-D-FX55y3.js";import{B as E}from"./button-C30gfhJp.js";import{I as S}from"./input-tlqmm_wc.js";import{T as y}from"./textarea-VSgJof85.js";import{S as A,a as G,g as O,c as P,f as $}from"./select-oqDrh3DF.js";import{R as B,a as J}from"./radio-group-Co8iXW3w.js";import{J as w}from"./index-PHITPy16.js";import{u as z}from"./modal-store-D8dGraW3.js";function L({modalKey:a,schema:l,defaultValues:h,entityRoute:i}){const{modals:m,toggleModal:o}=z(),n=m[a]||{open:!1,isEditing:!1,currentId:null},c=n.model||h,{data:g,post:u,wasSuccessful:d,progress:j,processing:s,errors:r}=v({...c,_method:n.isEditing?"PUT":"POST"}),p=f({resolver:I(l),defaultValues:{...c}}),x=t=>{console.log(t),console.log(l.safeParse(t)),l.safeParse(t),Object.assign(g,t),n.isEditing?u(route(`${i}.update`,n.currentId)):u(route(`${i}.store`))};return C.useEffect(()=>{d&&(w.success(`Entidad ${n.isEditing?"actualizada":"creada"} exitosamente`),o(a))},[d]),{form:p,errors:r,progress:j,processing:s,submit:x,modalState:n,toggleModal:o,modalKey:a}}var U=(a=>(a.TEXT="text",a.TEXTAREA="textarea",a.SELECT="select",a.RADIO="radio",a.NUMBER="number",a))(U||{});function Y({modalKey:a,schema:l,defaultValues:h,entityRoute:i,fields:m}){const{form:o,errors:n,progress:c,processing:g,submit:u,modalState:d,toggleModal:j}=L({modalKey:a,schema:l,defaultValues:h,entityRoute:i});return console.log(`Campos ${JSON.stringify(m)}`),e.jsx(R,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(u),children:[m.map(s=>e.jsx(T,{control:o.control,name:s.name,render:({field:r})=>{var p,x;return e.jsxs(V,{className:"mb-3",children:[e.jsx(b,{htmlFor:s.name,children:s.label}),e.jsx(M,{children:e.jsxs(e.Fragment,{children:[s.type==="number"&&e.jsx(S,{id:s.name,type:"number",placeholder:s.placeholder,hidden:s.hidden??!1,...r}),s.type==="text"&&e.jsx(S,{id:s.name,placeholder:s.placeholder,hidden:s.hidden??!1,...r}),s.type==="textarea"&&e.jsx(y,{id:s.name,placeholder:s.placeholder,...r}),s.type==="select"&&e.jsxs(A,{defaultValue:r.value,onValueChange:r.onChange,children:[e.jsx(G,{children:e.jsx(O,{placeholder:s.placeholder})}),e.jsx(P,{children:(p=s.options)==null?void 0:p.map(t=>e.jsx($,{value:t.value+"",children:t.label},t.value))})]}),s.type==="radio"&&e.jsx(B,{onValueChange:r.onChange,defaultValue:r.value,children:(x=s.options)==null?void 0:x.map(t=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(J,{value:t.value.toString()}),e.jsx(b,{children:t.label})]},t.value))})]})}),e.jsx(N,{})]})}},s.name)),c&&e.jsxs("progress",{value:c.percentage,max:"100",children:[c.percentage,"%"]}),e.jsxs("div",{className:"flex justify-between gap-5 mt-5",children:[e.jsx(E,{type:"button",variant:"destructive",onClick:()=>j(a),children:"Cancelar"}),e.jsx(E,{type:"submit",disabled:g,children:d.isEditing?"Actualizar":"Registrar"})]})]})})}export{U as F,Y as G};
