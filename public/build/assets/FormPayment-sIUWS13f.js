import{j as m}from"./app-BaRKjdtB.js";import{z as e}from"./zod-D-FX55y3.js";import{F as t,G as i}from"./GenericForm-DgiSTv0g.js";import"./button-C30gfhJp.js";import"./index-Bb4qSo10.js";import"./shadcn-C-5SdYIA.js";import"./index-D6bo__k1.js";import"./input-tlqmm_wc.js";import"./textarea-VSgJof85.js";import"./select-oqDrh3DF.js";import"./react-icons.esm-DpQRfzkp.js";import"./index-DyIyYHEl.js";import"./index-D-FmZWWC.js";import"./index-VZJt8L05.js";import"./radio-group-Co8iXW3w.js";import"./index-DI5U6nVU.js";import"./index-PHITPy16.js";import"./modal-store-D8dGraW3.js";import"./index-BwBSd6lz.js";const r=e.object({id:e.string().optional(),customer_name:e.string().optional(),customer_ci:e.string().optional(),phone:e.string().optional(),type_payment:e.string().optional()}),p={id:"",customer_name:"",customer_ci:"",phone:"",type_payment:""},n=[{name:"id",label:"ID",type:t.TEXT,hidden:!0},{name:"customer_name",label:"Nombre del cliente",type:t.TEXT},{name:"customer_ci",label:"C.I. del cliente",type:t.TEXT},{name:"phone",label:"Teléfono",type:t.TEXT},{name:"type_payment",label:"Tipo de pago",type:t.SELECT,options:[{label:"QR",value:"1"},{label:"Tigo Money",value:"2"}]}];function v({modalKey:o}){return m.jsx(i,{modalKey:o,schema:r,defaultValues:p,entityRoute:"news-categories",fields:n})}export{v as default};
