import{c as o}from"./index-CW6atUDg.js";const s=o((t,n)=>({project:void 0,elements:[],isSave:!0,currentElement:-1,openProject:e=>{const l=e.elements;console.log(`Elementos proyecto ${l}`),t(()=>({isSave:!0,currentElement:-1}))},addElement:e=>{t(l=>({elements:[...l.elements,e],isSave:!1}))},togleSave:()=>{t(e=>({isSave:!e.isSave}))},getNewElement:()=>n().elements.filter(l=>l.id===void 0),initElement:e=>{t(()=>({elements:e}))},selectElement:e=>{console.log(`selected ${e}`),t(()=>({currentElement:e}))}}));export{s as u};