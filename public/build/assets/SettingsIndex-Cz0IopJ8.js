import{j as e,Y as n,y as c}from"./app-DRGzXkaU.js";import{I as u}from"./input-BpmZrZAf.js";import{B as p}from"./button-DodD20gp.js";import{AdminLayout as d}from"./AdminLayout-GePJsJZ5.js";import{J as a}from"./index-DmsEpVvj.js";import"./shadcn-C-5SdYIA.js";import"./Navbar-Bp3xYjNz.js";import"./ResponsiveNavLink-DTPdisWX.js";import"./transition-CxwBleVV.js";import"./iconify-DGznik_Q.js";import"./index-Byi4w6Sy.js";import"./Sidebars-Cb-NtNg3.js";import"./sonner-CzAbH38W.js";function C({auth:t,settings:i}){function m(r){r.preventDefault();const l=new FormData(r.target),s=[];for(const o of l.entries())s.push({key:o[0],value:o[1]});c.post(route("settings.store"),{settings:s},{onSuccess:o=>{console.log(o),console.log("Settings saved"),a.success("Configuración guardada correctamente")},onError:()=>{a.error("Ocurrió un error al guardar la configuración")}})}return e.jsxs(d,{user:t.user,children:[e.jsx(n,{title:"Configuración"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:e.jsxs("section",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 my-5",children:"Configuraciones"}),e.jsxs("form",{onSubmit:m,children:[i.map(r=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:r.key,children:r.label}),e.jsx(u,{id:r.key,name:r.key,className:"mt-2",defaultValue:r.type!=="file"?r.value:"",placeholder:r.placeholder,type:r.type})]},r.key)),e.jsx(p,{children:"Guardar"})]})]})})})]})}export{C as default};
