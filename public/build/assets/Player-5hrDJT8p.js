import{r as s,j as t}from"./app-BaRKjdtB.js";import{B as l}from"./button-C30gfhJp.js";import{u as b}from"./selected-project-4RYWI1C4.js";import"./index-Bb4qSo10.js";import"./shadcn-C-5SdYIA.js";import"./index-BwBSd6lz.js";var v={VITE_APP_NAME:"Laravel",VITE_API_BASE_URL:"https://e9d9-179-60-117-99.ngrok-free.app",VITE_D_ID_API:"bnZhbmh6dGg0cEBteHNjb3V0LmNvbQ:kXq6e62LDjYDmGjAfUzaF",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=v.VITE_APP_URL||"http://localhost";function P(){var c;const{elements:o,currentElement:n}=b(),[e,a]=s.useState(n),r=s.useRef(null);s.useEffect(()=>{console.log("Cambio elemento actual"),a(n)},[n]);const i=()=>{r.current&&r.current.play()},u=()=>{r.current&&r.current.pause()},f=()=>{e<o.length-1&&a(e+1)},m=()=>{e>0&&a(e-1)},p=async()=>{if(e!==-1&&r.current&&o[e].videoUrl){console.log("modificando"),console.log(`Video Url: ${o[e].videoUrl}`);const x=`${d}/${o[e].videoUrl}`;r.current.src=x,await r.current.load(),i()}};return s.useEffect(()=>{console.log("Cambio index"),p()},[e]),t.jsxs("div",{className:"py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-between border-8 border-slate-200 dark:border-slate-900",children:[t.jsx("video",{ref:r,controls:!0,className:"w-full max-w-lg h-full rounded-lg mb-4",children:e!==-1&&t.jsx("source",{src:`${d}/${(c=o[e])==null?void 0:c.videoUrl}`,type:"video/mp4"})}),t.jsxs("div",{className:"flex space-x-4 bg-slate-600 p-2 rounded",children:[t.jsx(l,{variant:"blue",onClick:m,disabled:e<=0,children:"Anterior"}),t.jsx(l,{variant:"success",onClick:i,disabled:e===-1,children:"Play"}),t.jsx(l,{variant:"destructive",onClick:u,disabled:e===-1,children:"Pausa"}),t.jsx(l,{variant:"blue",onClick:f,disabled:e>=o.length-1,children:"Siguiente"})]})]})}export{P as default};
