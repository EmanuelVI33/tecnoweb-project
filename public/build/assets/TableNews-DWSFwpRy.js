import{q as h,r as f,j as e,y as x}from"./app-DRGzXkaU.js";import{B as l}from"./button-DodD20gp.js";import{T as s}from"./table-D3BE-7P7.js";import{u}from"./modal-store-CzUVHPa0.js";import{C as j}from"./CustomTable-xNUN5qFq.js";import q from"./ConfirmDelete-DrexRCaB.js";import{newsModalKey as g}from"./DialogNews-DagI8xoS.js";import"./shadcn-C-5SdYIA.js";import"./index-BwhF15f_.js";import"./dialog-BKACdtwg.js";import"./index-CwjA-pLr.js";import"./react-icons.esm-VBrdgrbj.js";import"./index-CmmoRHAL.js";import"./index-VIEozLWX.js";import"./index-CRukyXja.js";import"./CustomDialog2-BRyu_rVd.js";import"./FormNews-CsNSes1W.js";import"./zod-CPptsrG6.js";import"./GenericForm-DbpjlW8U.js";import"./input-BpmZrZAf.js";import"./textarea-Ck2kAl1L.js";import"./radio-group-B-JKypQc.js";import"./index-DmsEpVvj.js";const w="news-categories",C=["Título","Contenido","Acciones"];function G(){const{toggleModal:a}=u(),{props:{news:n}}=h(),[i,r]=f.useState({isOpen:!1,id:null}),m=t=>{t&&r({isOpen:!0,id:t})},d=()=>{i.id&&(x.delete(route(`${w}.destroy`,i.id)),r({isOpen:!1,id:null}))},c=t=>{if(!t)return;const o=n.find(p=>p.id===t);o&&(console.log(`Ingresa a editar ${o}`),a(g,!0,t,o))};return e.jsxs(e.Fragment,{children:[e.jsx(j,{caption:"Lista de Categorías",headers:C,data:n,renderRow:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx("p",{children:t.title})}),e.jsx(s,{children:e.jsx("p",{children:t.content??"Descripción"})}),e.jsxs(s,{className:"text-end flex justify-around ",children:[e.jsxs(l,{onClick:()=>c(t.id),children:[e.jsx("span",{className:"mr-2",children:"Editar"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.28em",height:"1em",viewBox:"0 0 1792 1408",children:e.jsx("path",{fill:"currentColor",d:"m888 1056l116-116l-152-152l-116 116v56h96v96zm440-720q-16-16-33 1L945 687q-17 17-1 33t33-1l350-350q17-17 1-33m80 594v190q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-14 14-32 8q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q15-15 35-7t20 29m-96-738l288 288l-672 672H640V864zm444 132l-92 92l-288-288l92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68"})})]}),e.jsxs(l,{onClick:()=>m(t.id),children:[e.jsx("span",{className:"mr-2",children:"Eliminar"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2rem",height:"1.2rem",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"})})]})]})]})}),e.jsx(q,{isOpen:i.isOpen,onClose:()=>r({isOpen:!1,id:null}),onConfirm:d,title:"Confirmar eliminación",description:"¿Estás seguro de que deseas eliminar esta Noticia? Esta acción no se puede deshacer."})]})}export{G as default};
