import{q as r,j as s}from"./app-D0ROFTDy.js";import{z as e}from"./zod-DyEn_NlX.js";import{F as t,G as m}from"./GenericForm-uXZ8BOlu.js";import"./button-D2uSAnve.js";import"./shadcn-C-5SdYIA.js";import"./index-D_RYPP_Q.js";import"./textarea-DMQgF6Z3.js";import"./react-icons.esm-rHzliqWr.js";import"./radio-group-DEiw_Olf.js";import"./index-z7WupVqH.js";import"./index-FBn3qQOQ.js";import"./modal-store-BaGU3OB5.js";import"./index-BkpDHUFe.js";const l=e.object({title:e.string().min(3,{message:"El titulo debe tener al menos 3 caracteres"}),content:e.string().min(3,{message:"El contenido debe tener al menos 3 caracteres"}),news_category_id:e.string().min(1,{message:"El id de la categoria de noticias es obligatorio"})}),c={id:"",title:"",content:"",news_category_id:""},a=[{name:"title",label:"Título de la noticia",placeholder:"título",type:t.TEXT},{name:"content",label:"Contenido",placeholder:"Redacta la noticia",type:t.TEXTAREA},{name:"news_category_id",label:"Categorías",placeholder:"Selecciona una categoría",type:t.SELECT}];function j({modalKey:i}){const{newsCategories:n}=r().props;return a[2].options=n.map(o=>({value:o.id,label:o.name})),s.jsx(m,{modalKey:i,schema:l,defaultValues:c,entityRoute:"news",fields:a})}export{j as default};
