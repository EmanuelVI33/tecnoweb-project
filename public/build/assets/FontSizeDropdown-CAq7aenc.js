import{r as o,j as e,a as c}from"./app-BaRKjdtB.js";import{X as u}from"./transition-B5PYRkYT.js";const x=o.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),n=({children:t})=>{const[s,r]=o.useState(!1),a=()=>{r(l=>!l)};return e.jsx(x.Provider,{value:{open:s,setOpen:r,toggleOpen:a},children:e.jsx("div",{className:"relative",children:t})})},y=({children:t})=>{const{open:s,setOpen:r,toggleOpen:a}=o.useContext(x);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:a,children:t}),s&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},m=({align:t="right",width:s="48",contentClasses:r="py-1 bg-white",children:a})=>{const{open:l,setOpen:p}=o.useContext(x);let i="origin-top";t==="left"?i="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(i="ltr:origin-top-right rtl:origin-top-left end-0");let d="";return s==="48"&&(d="w-48"),e.jsx(e.Fragment,{children:e.jsx(u,{as:o.Fragment,show:l,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${i} ${d}`,onClick:()=>p(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:a})})})})},f=({className:t="",children:s,...r})=>e.jsx(c,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:s});n.Trigger=y;n.Content=m;n.Link=f;const g=n;function j({active:t=!1,className:s="",children:r,...a}){return e.jsx(c,{...a,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${s}`,children:r})}const b=({changeFontSize:t})=>e.jsx("div",{className:"relative ms-3 ",children:e.jsxs(g,{children:[e.jsx(g.Trigger,{children:e.jsx("div",{className:"flex gap-2 justify-center items-center",children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none transition ease-in-out duration-150",children:["Tamaño de Letra",e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})})}),e.jsx(g.Content,{children:e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-700",children:[e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900",onClick:()=>t("text-xs"),children:"XS"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900",onClick:()=>t("text-sm"),children:"SM"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900",onClick:()=>t("text-base"),children:"Base"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900",onClick:()=>t("text-lg"),children:"LG"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900",onClick:()=>t("text-xl"),children:"XL"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900",onClick:()=>t("text-2xl"),children:"2XL"})]})})]})}),k=b;export{g as D,k as F,j as R};
