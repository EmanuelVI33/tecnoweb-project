import{q as n,j as s}from"./app-DRGzXkaU.js";import{z as e}from"./zod-CPptsrG6.js";import{F as t,G as m}from"./GenericForm-DbpjlW8U.js";import"./button-DodD20gp.js";import"./shadcn-C-5SdYIA.js";import"./index-CRukyXja.js";import"./input-BpmZrZAf.js";import"./textarea-Ck2kAl1L.js";import"./react-icons.esm-VBrdgrbj.js";import"./radio-group-B-JKypQc.js";import"./index-CmmoRHAL.js";import"./index-VIEozLWX.js";import"./index-DmsEpVvj.js";import"./modal-store-CzUVHPa0.js";import"./index-BwhF15f_.js";const l=e.object({title:e.string().min(3,{message:"El titulo debe tener al menos 3 caracteres"}),content:e.string().min(3,{message:"El contenido debe tener al menos 3 caracteres"}),news_category_id:e.string().min(1,{message:"El id de la categoria de noticias es obligatorio"})}),c={id:"",title:"",content:"",news_category_id:""},a=[{name:"title",label:"Título de la noticia",placeholder:"título",type:t.TEXT},{name:"content",label:"Contenido",placeholder:"Redacta la noticia",type:t.TEXTAREA},{name:"news_category_id",label:"Categorías",placeholder:"Selecciona una categoría",type:t.SELECT}];function C({modalKey:i}){const{newsCategories:r}=n().props;return a[2].options=r.map(o=>({value:o.id,label:o.name})),s.jsx(m,{modalKey:i,schema:l,defaultValues:c,entityRoute:"news",fields:a})}export{C as default};
