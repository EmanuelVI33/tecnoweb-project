import{r as s,j as e,a as d}from"./app-mIvgi7q9.js";import{X as u}from"./transition-D1nVVH86.js";const g=s.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),i=({children:t})=>{const[n,o]=s.useState(!1),r=()=>{o(a=>!a)};return e.jsx(g.Provider,{value:{open:n,setOpen:o,toggleOpen:r},children:e.jsx("div",{className:"relative",children:t})})},x=({children:t})=>{const{open:n,setOpen:o,toggleOpen:r}=s.useContext(g);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:r,children:t}),n&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)})]})},f=({align:t="right",width:n="48",contentClasses:o="py-1 bg-white",children:r})=>{const{open:a,setOpen:p}=s.useContext(g);let l="origin-top";t==="left"?l="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(l="ltr:origin-top-right rtl:origin-top-left end-0");let c="";return n==="48"&&(c="w-48"),e.jsx(e.Fragment,{children:e.jsx(u,{as:s.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${c}`,onClick:()=>p(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:r})})})})},m=({className:t="",children:n,...o})=>e.jsx(d,{...o,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:n});i.Trigger=x;i.Content=f;i.Link=m;const h=i;function v({active:t=!1,className:n="",children:o,...r}){return e.jsx(d,{...r,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${n}`,children:o})}export{h as D,v as R};
