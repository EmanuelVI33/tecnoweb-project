import{j as t}from"./app-tVRsxUsU.js";import{z as e}from"./zod-CUDSeozq.js";import{F as r,G as i}from"./GenericForm-BQWYI2c7.js";import"./button--FPewx8G.js";import"./index-Bb4qSo10.js";import"./shadcn-8RyR4BqC.js";import"./index-2b_LZfIK.js";import"./input-CTqy2mB1.js";import"./textarea-CeDxcxNp.js";import"./select-Bs6jrS0B.js";import"./react-icons.esm-d0s31DWt.js";import"./index-Daj5fNum.js";import"./index-CQn2alBU.js";import"./index-GLeNLMMt.js";import"./radio-group-CH8P2r-s.js";import"./index-BfNlyqcv.js";import"./index-BFvE2hbB.js";import"./modal-store-Br4zjeGU.js";import"./index-Cdp76zax.js";const m=e.object({name:e.string().min(3,{message:"El nombre debe tener al menos 3 caracteres"}),description:e.string().optional()}),p={id:"",name:"",description:""},a=[{name:"name",label:"Nombre de la Categoría",placeholder:"nombre",type:r.TEXT},{name:"description",label:"Descripción",placeholder:"descripción",type:r.TEXTAREA}];function G({modalKey:o}){return t.jsx(i,{modalKey:o,schema:m,defaultValues:p,entityRoute:"news-categories",fields:a})}export{G as default};
