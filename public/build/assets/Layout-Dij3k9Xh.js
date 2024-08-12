import{r as i,j as e,a as r}from"./app-DHScwIJP.js";import{F as f,D as s,R as o}from"./FontSizeDropdown-NgfIUDY_.js";import{T as v}from"./sonner-CFUsm2HJ.js";import{u as m}from"./index-CnT3avPY.js";import{I as y}from"./Image-doebdu9k.js";import"./transition-CDOrn4jv.js";import"./index-CzqeV4UM.js";function D({user:t,header:d,children:x}){const[a,h]=i.useState(!1),[l,u]=m("dark"),[c,g]=m("fontSize","text-base");i.useEffect(()=>{l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[]);const p=()=>{document.documentElement.classList.toggle("dark"),u(!l)};i.useEffect(()=>{document.documentElement.classList.remove("text-xs","text-sm","text-base","text-lg","text-xl","text-2xl"),document.documentElement.classList.add(c)},[c]);const j=n=>{g(n)};return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100",children:[e.jsxs("nav",{className:"bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800",children:[e.jsx("div",{className:"max-w-full mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(r,{href:"/",children:e.jsx(y,{src:"Logo.jpg",alt:"Logo",className:"h-14"})})}),e.jsxs("div",{className:"flex justify-evenly gap-5",children:[e.jsx(r,{href:route("user.index"),children:"Inicio"}),e.jsx(r,{href:route("subscriptions.index"),children:"Suscripciones"}),e.jsx(r,{href:route("payments.index"),children:"Pagos"})]})]}),e.jsxs("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:[e.jsx("button",{className:"rounded text-gray-900 dark:text-gray-100 hover:bg-slate-100 dark:hover:bg-slate-700 px-1 ml-4",onClick:p,children:"🌙"}),e.jsx(f,{changeFontSize:j}),e.jsx("div",{className:"ms-3 relative",children:e.jsxs(s,{children:[e.jsx(s.Trigger,{children:e.jsx("div",{className:"flex gap-2 justify-center items-center",children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none transition ease-in-out duration-150",children:[`${t.name}${t.is_premium?" Premium":""}`,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})})}),e.jsxs(s.Content,{children:[e.jsx(s.Link,{href:route("profile.edit"),children:"Perfil"}),e.jsx(s.Link,{href:route("logout"),method:"post",as:"button",children:"Cerrar Sesión"})]})]})})]}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>h(n=>!n),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(a?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(o,{href:route("projects.index"),active:route().current("projects"),children:"Dashboard"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:t.name}),"className",e.jsx("div",{className:"font-medium text-sm text-gray-500",children:t.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(o,{href:route("profile.edit"),children:"Perfil"}),e.jsx(o,{method:"post",href:route("logout"),as:"button",children:"Cerrar Sesión"})]})]})]})]}),d&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:d})}),e.jsx("main",{children:x}),e.jsx(v,{})]})}export{D as default};
