import{q as u,r as f,j as e,y as m}from"./app-DRGzXkaU.js";import{B as l}from"./button-DodD20gp.js";import{a as g,b as v,c as w,d as c,e as d,f as q,T as a}from"./table-D3BE-7P7.js";import{u as b}from"./selected-project-hl05As6Z.js";import{u as C}from"./modal-store-CzUVHPa0.js";import{projectModalKey as T}from"./DialogProject--ofFN-Om.js";import y from"./ConfirmDelete-DrexRCaB.js";import{u as H}from"./index-Byi4w6Sy.js";import"./shadcn-C-5SdYIA.js";import"./index-BwhF15f_.js";import"./FormProject-ZEzC_alK.js";import"./zod-CPptsrG6.js";import"./index-CRukyXja.js";import"./input-BpmZrZAf.js";import"./index-DmsEpVvj.js";import"./textarea-Ck2kAl1L.js";import"./radio-group-B-JKypQc.js";import"./react-icons.esm-VBrdgrbj.js";import"./index-CmmoRHAL.js";import"./CreateOrEdit-BlDW-SaJ.js";import"./FormCreateOrEdit-BQERAtGa.js";import"./presenter-CLZs53NS.js";import"./CustomDialog2-BRyu_rVd.js";import"./dialog-BKACdtwg.js";import"./index-CwjA-pLr.js";import"./index-VIEozLWX.js";const P=()=>{const[r,t]=H("path","/");return{path:r,setPath:t}};function ee(){const{path:r}=P(),{toggleModal:t}=C(),{props:{projects:n}}=u(),p=b(s=>s.openProject),[o,i]=f.useState({isOpen:!1,id:null}),h=s=>{p(s),m.visit(`projects/${s.id}`)},x=s=>{s&&i({isOpen:!0,id:s})},j=()=>{o.id&&(m.delete(route("projects.destroy",o.id)),i({isOpen:!1,id:null}))};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(v,{children:"Lista de Proyectos"}),e.jsx(w,{children:e.jsxs(c,{children:[e.jsx(d,{children:"Portada"}),e.jsx(d,{className:"text-center",children:"Acciones"})]})}),e.jsx(q,{children:n&&n.map(s=>e.jsxs(c,{className:"hover:bg-gray-200 hover:dark:bg-gray-800",children:[e.jsxs(a,{children:[e.jsx("p",{children:s.name}),e.jsx("p",{children:s.description??"Proyecto"})]}),e.jsx(a,{children:e.jsx("img",{className:"w-[70px] h-[70px] object-cover",src:`${r}${s.cover_url}`,alt:""})}),e.jsxs(a,{className:"text-end flex justify-around ",children:[e.jsxs(l,{onClick:()=>h(s),children:[e.jsx("span",{className:"mr-2",children:"Abrír"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1200 1200",children:e.jsx("path",{fill:"currentColor",d:"m249.17 117.7l-83.716 108.032H0v609.972l123.572-465.318H993.75V225.732h-402.1L507.935 117.7zM0 1016.612v65.688h993.75L1200 410.669H175.134z"})})]}),e.jsxs(l,{onClick:()=>t(T,!0,s.id),children:[e.jsx("span",{className:"mr-2",children:"Editar"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.28em",height:"1em",viewBox:"0 0 1792 1408",children:e.jsx("path",{fill:"currentColor",d:"m888 1056l116-116l-152-152l-116 116v56h96v96zm440-720q-16-16-33 1L945 687q-17 17-1 33t33-1l350-350q17-17 1-33m80 594v190q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-14 14-32 8q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q15-15 35-7t20 29m-96-738l288 288l-672 672H640V864zm444 132l-92 92l-288-288l92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68"})})]}),e.jsxs(l,{onClick:()=>x(s.id),children:[e.jsx("span",{className:"mr-2",children:"Eliminar"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2rem",height:"1.2rem",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"})})]})]})]},s.id))})]}),e.jsx(y,{isOpen:o.isOpen,onClose:()=>i({isOpen:!1,id:null}),onConfirm:j,title:"Confirmar eliminación",description:"¿Estás seguro de que deseas eliminar este proyecto? Esta acción no se puede deshacer."})]})}export{ee as default};