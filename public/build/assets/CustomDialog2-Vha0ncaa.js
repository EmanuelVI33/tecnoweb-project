import{j as s}from"./app-mIvgi7q9.js";import{B as d}from"./button-BhpuKSDX.js";import{D as c,a as m,b as p,c as x}from"./dialog-B_L33db0.js";import{u as g}from"./modal-store-BBDeQdxC.js";function C({children:l,titleButton:r,title:o,icon:e,modalKey:a}){const{modals:t,toggleModal:n}=g(),i=t[a]||{open:!1,isEditing:!1,currentId:null};return s.jsxs("div",{children:[s.jsxs(d,{className:"flex gap-2",onClick:()=>n(a),children:[s.jsx("span",{children:r}),e||null]}),s.jsx(c,{open:i.open,onOpenChange:()=>n(a),children:s.jsxs(m,{className:"sm:max-w-[625px]",children:[s.jsx(p,{children:s.jsx(x,{children:i.isEditing?`Edit ${o}`:`Create ${o}`})}),l]})})]})}export{C};