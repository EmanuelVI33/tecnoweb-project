import{j as l,a}from"./app-BaRKjdtB.js";import i from"./Layout-BuldfMf6.js";import m from"./CardNews-DeKud_A4.js";import"./FontSizeDropdown-CAq7aenc.js";import"./transition-B5PYRkYT.js";import"./sonner-BPkEyiaZ.js";import"./index-PHITPy16.js";import"./index-3eDVDrx_.js";import"./Image-CspGilLC.js";import"./badge-M0akP4RV.js";import"./index-Bb4qSo10.js";import"./shadcn-C-5SdYIA.js";function b({auth:s,response:r}){return console.log(r),l.jsx(i,{user:s.user,children:l.jsxs("div",{className:"p-2",children:[l.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Noticias del momento"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:r.data.map(e=>l.jsx(m,{news:e},e.id))}),r.links.length>0&&l.jsx("div",{className:"flex justify-center mt-4",children:l.jsx("ul",{className:"flex",children:r.links.map((e,t)=>e.url?l.jsx(a,{href:e.url,dangerouslySetInnerHTML:{__html:t===0||t===r.links.length-1?t===0?"Anterior":"Siguiente":e.label},className:`p-1 mx-1 ${e.active?"text-blue-500 font-bold":""}`},e.label):l.jsx("span",{dangerouslySetInnerHTML:{__html:t===0?"Anterior":"Siguiente"},className:"p-1 mx-1"},e.label))})})]})})}export{b as default};
