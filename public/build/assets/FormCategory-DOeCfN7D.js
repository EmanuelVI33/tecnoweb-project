import{j as t}from"./app-D0ROFTDy.js";import{z as e}from"./zod-DyEn_NlX.js";import{F as r,G as i}from"./GenericForm-uXZ8BOlu.js";import"./button-D2uSAnve.js";import"./shadcn-C-5SdYIA.js";import"./index-D_RYPP_Q.js";import"./textarea-DMQgF6Z3.js";import"./react-icons.esm-rHzliqWr.js";import"./radio-group-DEiw_Olf.js";import"./index-z7WupVqH.js";import"./index-FBn3qQOQ.js";import"./modal-store-BaGU3OB5.js";import"./index-BkpDHUFe.js";const m=e.object({name:e.string().min(3,{message:"El nombre debe tener al menos 3 caracteres"}),description:e.string().optional()}),a={id:"",name:"",description:""},n=[{name:"name",label:"Nombre de la Categoría",placeholder:"nombre",type:r.TEXT},{name:"description",label:"Descripción",placeholder:"descripción",type:r.TEXTAREA}];function h({modalKey:o}){return t.jsx(i,{modalKey:o,schema:m,defaultValues:a,entityRoute:"news-categories",fields:n})}export{h as default};
