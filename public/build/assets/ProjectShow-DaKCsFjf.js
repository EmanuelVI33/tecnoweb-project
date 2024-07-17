var ke=Object.defineProperty;var Pe=(t,s,a)=>s in t?ke(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;var k=(t,s,a)=>Pe(t,typeof s!="symbol"?s+"":s,a);import{j as e,r as n,q as A,W as P,a as _e,y as Me}from"./app-D0ROFTDy.js";import{F as $e,T as Le}from"./FontSizeDropdown-gB3xfv_5.js";import{N as Ie}from"./NavLink-BQ1-lSA8.js";import{u as N,D as h,R as w}from"./index-CYbbjuDm.js";import{u as _,a as j,c as M,d as Oe,P as Fe}from"./react-icons.esm-rHzliqWr.js";import{P as y}from"./index-D_RYPP_Q.js";import{c as Ve,u as $,a as ze,b as L,B as Ge}from"./button-D2uSAnve.js";import{c as g}from"./shadcn-C-5SdYIA.js";import{u as I}from"./selected-project-Bh1rVok3.js";import{e as O,d as Be,f as qe,I as We}from"./radio-group-DEiw_Olf.js";import{a as b}from"./element.model-r3-WMhpT.js";import{E as He,T as Je}from"./TabPresenter-RUVtVwDH.js";import{E as Ke,T as Ue}from"./TabVideo-zH6SAhRs.js";import{J as Ye}from"./index-FBn3qQOQ.js";import Qe from"./Timeline-CdskktpR.js";import{c as F,b as Xe,O as Ze,W as et,C as tt,T as st,D as at,a as V,P as ot,R as rt}from"./index-jLs5eoiS.js";import nt from"./Player-DPFKPRjR.js";import"./transition-CDPvDqU_.js";import"./index-BkpDHUFe.js";import"./zod-DyEn_NlX.js";import"./element-presenter.model-DAjEEdYv.js";import"./index-z7WupVqH.js";function it(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"})})}const z=n.createContext({open:!1,toggleModal:()=>{}}),lt=({children:t})=>{const[s,a]=n.useState(!1),o=()=>{a(r=>!r)};return e.jsx(z.Provider,{value:{open:s,toggleModal:o},children:t})},ct=t=>s=>e.jsx(lt,{children:e.jsx(t,{...s})}),C=()=>n.useContext(z),dt=ct;var mt="Toggle",G=n.forwardRef((t,s)=>{const{pressed:a,defaultPressed:o=!1,onPressedChange:r,...l}=t,[i=!1,m]=_({prop:a,onChange:r,defaultProp:o});return e.jsx(y.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":t.disabled?"":void 0,...l,ref:s,onClick:j(t.onClick,()=>{t.disabled||m(!i)})})});G.displayName=mt;var B=G;const ut=Ve("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),q=n.forwardRef(({className:t,variant:s,size:a,...o},r)=>e.jsx(B,{ref:r,className:g(ut({variant:s,size:a,className:t})),...o}));q.displayName=B.displayName;function ft(){C(),A().props;const{isSave:t,togleSave:s,elements:a}=I(),{props:{project:o}}=A(),{data:r,post:l,wasSuccessful:i,errors:m}=P({elements:[],project_id:o.id.toString()}),f=()=>{t||a.length<1||(r.elements=a,l("/elements"))};return e.jsx(q,{pressed:!t,onPressedChange:f,children:e.jsx(it,{})})}function gt(){const[t,s]=n.useState(!1),{props:a}=A(),{auth:{user:o}}=a,r=a.project,[l,i]=N("dark",!1),[m,f]=N("fontSize","text-base");n.useEffect(()=>{l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[]),n.useEffect(()=>{document.documentElement.classList.remove("text-xs","text-sm","text-base","text-lg","text-xl","text-2xl"),document.documentElement.classList.add(m)},[m]);const d=()=>{document.documentElement.classList.toggle("dark"),i(!l)},u=c=>{f(c)};return e.jsxs("nav",{className:"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-800",children:[e.jsx("div",{className:"max-w-full mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between ali h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(_e,{href:"/",children:e.jsx("img",{className:"h-14",src:"/Logo.jpg",alt:""})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:e.jsx(Ie,{href:route("projects.index"),active:route().current("projects"),children:"Proyectos"})})]}),r&&e.jsxs("div",{className:"flex flex-col md:flex-row gap-2 justify-center items-center text-xs md:text-sm text-center truncate ",children:[e.jsx("p",{className:"font-medium",children:r.name}),e.jsx("p",{children:r.presenter.full_name})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:[e.jsx("button",{className:"rounded text-gray-900 dark:text-gray-100 hover:bg-slate-100 dark:hover:bg-slate-700 px-1 ml-4",onClick:d,children:"🌙"}),e.jsx($e,{changeFontSize:u}),e.jsx("div",{className:"ms-3 relative",children:e.jsxs(h,{children:[e.jsx(h.Trigger,{children:e.jsx("div",{className:" text-slate-600 dark:bg-transparent dark:bg-slate-800 dark:text-white flex gap-2 justify-center items-center",children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-700 dark:text-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[o.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})})}),e.jsxs(h.Content,{children:[e.jsx(h.Link,{href:route("profile.edit"),children:"Perfil"}),e.jsx(h.Link,{href:route("logout"),method:"post",as:"button",children:"Cerrar Sesión"})]})]})})]}),e.jsx(ft,{})]}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>s(c=>!c),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(t?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(w,{href:route("projects.index"),active:route().current("projects"),children:"Dashboard"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:o==null?void 0:o.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:o==null?void 0:o.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(w,{href:route("profile.edit"),children:"Perfil"}),e.jsx(w,{method:"post",href:route("logout"),as:"button",children:"Cerrar Sesión"})]})]})]})]})}function pt({children:t}){const[s,a]=N("dark",!1),[o,r]=N("fontSize","text-base");return n.useEffect(()=>{s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[]),n.useEffect(()=>{document.documentElement.classList.remove("text-xs","text-sm","text-base","text-lg","text-xl","text-2xl"),document.documentElement.classList.add(o)},[o]),e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx(gt,{}),e.jsx(Le,{}),e.jsx("main",{className:"h-screen",children:t})]})}var S="Tabs",[xt,rs]=M(S,[O]),W=O(),[vt,R]=xt(S),H=n.forwardRef((t,s)=>{const{__scopeTabs:a,value:o,onValueChange:r,defaultValue:l,orientation:i="horizontal",dir:m,activationMode:f="automatic",...d}=t,u=Be(m),[c,p]=_({prop:o,onChange:r,defaultProp:l});return e.jsx(vt,{scope:a,baseId:Oe(),value:c,onValueChange:p,orientation:i,dir:u,activationMode:f,children:e.jsx(y.div,{dir:u,"data-orientation":i,...d,ref:s})})});H.displayName=S;var J="TabsList",K=n.forwardRef((t,s)=>{const{__scopeTabs:a,loop:o=!0,...r}=t,l=R(J,a),i=W(a);return e.jsx(qe,{asChild:!0,...i,orientation:l.orientation,dir:l.dir,loop:o,children:e.jsx(y.div,{role:"tablist","aria-orientation":l.orientation,...r,ref:s})})});K.displayName=J;var U="TabsTrigger",Y=n.forwardRef((t,s)=>{const{__scopeTabs:a,value:o,disabled:r=!1,...l}=t,i=R(U,a),m=W(a),f=Z(i.baseId,o),d=ee(i.baseId,o),u=o===i.value;return e.jsx(We,{asChild:!0,...m,focusable:!r,active:u,children:e.jsx(y.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":d,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:f,...l,ref:s,onMouseDown:j(t.onMouseDown,c=>{!r&&c.button===0&&c.ctrlKey===!1?i.onValueChange(o):c.preventDefault()}),onKeyDown:j(t.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&i.onValueChange(o)}),onFocus:j(t.onFocus,()=>{const c=i.activationMode!=="manual";!u&&!r&&c&&i.onValueChange(o)})})})});Y.displayName=U;var Q="TabsContent",X=n.forwardRef((t,s)=>{const{__scopeTabs:a,value:o,forceMount:r,children:l,...i}=t,m=R(Q,a),f=Z(m.baseId,o),d=ee(m.baseId,o),u=o===m.value,c=n.useRef(u);return n.useEffect(()=>{const p=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(p)},[]),e.jsx(Fe,{present:r||u,children:({present:p})=>e.jsx(y.div,{"data-state":u?"active":"inactive","data-orientation":m.orientation,role:"tabpanel","aria-labelledby":f,hidden:!p,id:d,tabIndex:0,...i,ref:s,style:{...t.style,animationDuration:c.current?"0s":void 0},children:p&&l})})});X.displayName=Q;function Z(t,s){return`${t}-trigger-${s}`}function ee(t,s){return`${t}-content-${s}`}var ht=H,te=K,se=Y,ae=X;const bt=ht,oe=n.forwardRef(({className:t,...s},a)=>e.jsx(te,{ref:a,className:g("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",t),...s}));oe.displayName=te.displayName;const D=n.forwardRef(({className:t,...s},a)=>e.jsx(se,{ref:a,className:g("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",t),...s}));D.displayName=se.displayName;const E=n.forwardRef(({className:t,...s},a)=>e.jsx(ae,{ref:a,className:g("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...s}));E.displayName=ae.displayName;class T{static createElement(s){const{id:a,title:o,type:r,element:l,video_url:i}=s,m=(l==null?void 0:l.video_id)??"";console.log(`type Element ${r}`);const f=this.creators[r];if(!f)throw new Error(`Unknown element type: ${r}`);let d={id:a.toString(),title:o,videoUrl:i,type:r,videoId:m};if(r===b.PRESENTER&&l){const{content:u,expression:c}=l;d={...d,content:u,expression:c}}else r===b.VIDEO&&(d={...d});return f.createElement(d)}}k(T,"creators",{[b.PRESENTER]:new He,[b.VIDEO]:new Ke});class jt{static fromElementResponseToEntity(s){return s.map(T.createElement.bind(T))}}var re="AlertDialog",[yt,ns]=M(re,[F]),x=F(),ne=t=>{const{__scopeAlertDialog:s,...a}=t,o=x(s);return e.jsx(rt,{...o,...a,modal:!0})};ne.displayName=re;var Nt="AlertDialogTrigger",wt=n.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...o}=t,r=x(a);return e.jsx(Xe,{...r,...o,ref:s})});wt.displayName=Nt;var At="AlertDialogPortal",ie=t=>{const{__scopeAlertDialog:s,...a}=t,o=x(s);return e.jsx(ot,{...o,...a})};ie.displayName=At;var Dt="AlertDialogOverlay",le=n.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...o}=t,r=x(a);return e.jsx(Ze,{...r,...o,ref:s})});le.displayName=Dt;var v="AlertDialogContent",[Et,Tt]=yt(v),ce=n.forwardRef((t,s)=>{const{__scopeAlertDialog:a,children:o,...r}=t,l=x(a),i=n.useRef(null),m=$(s,i),f=n.useRef(null);return e.jsx(et,{contentName:v,titleName:de,docsSlug:"alert-dialog",children:e.jsx(Et,{scope:a,cancelRef:f,children:e.jsxs(tt,{role:"alertdialog",...l,...r,ref:m,onOpenAutoFocus:j(r.onOpenAutoFocus,d=>{var u;d.preventDefault(),(u=f.current)==null||u.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[e.jsx(ze,{children:o}),e.jsx(St,{contentRef:i})]})})})});ce.displayName=v;var de="AlertDialogTitle",me=n.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...o}=t,r=x(a);return e.jsx(st,{...r,...o,ref:s})});me.displayName=de;var ue="AlertDialogDescription",fe=n.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...o}=t,r=x(a);return e.jsx(at,{...r,...o,ref:s})});fe.displayName=ue;var Ct="AlertDialogAction",ge=n.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...o}=t,r=x(a);return e.jsx(V,{...r,...o,ref:s})});ge.displayName=Ct;var pe="AlertDialogCancel",xe=n.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...o}=t,{cancelRef:r}=Tt(pe,a),l=x(a),i=$(s,r);return e.jsx(V,{...l,...o,ref:i})});xe.displayName=pe;var St=({contentRef:t})=>{const s=`\`${v}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${v}\` by passing a \`${ue}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${v}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return n.useEffect(()=>{var o;document.getElementById((o=t.current)==null?void 0:o.getAttribute("aria-describedby"))||console.warn(s)},[s,t]),null},Rt=ne,kt=ie,ve=le,he=ce,be=ge,je=xe,ye=me,Ne=fe;const Pt=Rt,_t=kt,we=n.forwardRef(({className:t,...s},a)=>e.jsx(ve,{className:g("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s,ref:a}));we.displayName=ve.displayName;const Ae=n.forwardRef(({className:t,...s},a)=>e.jsxs(_t,{children:[e.jsx(we,{}),e.jsx(he,{ref:a,className:g("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...s})]}));Ae.displayName=he.displayName;const De=({className:t,...s})=>e.jsx("div",{className:g("flex flex-col space-y-2 text-center sm:text-left",t),...s});De.displayName="AlertDialogHeader";const Ee=({className:t,...s})=>e.jsx("div",{className:g("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s});Ee.displayName="AlertDialogFooter";const Te=n.forwardRef(({className:t,...s},a)=>e.jsx(ye,{ref:a,className:g("text-lg font-semibold",t),...s}));Te.displayName=ye.displayName;const Ce=n.forwardRef(({className:t,...s},a)=>e.jsx(Ne,{ref:a,className:g("text-sm text-muted-foreground",t),...s}));Ce.displayName=Ne.displayName;const Se=n.forwardRef(({className:t,...s},a)=>e.jsx(be,{ref:a,className:g(L(),t),...s}));Se.displayName=be.displayName;const Re=n.forwardRef(({className:t,...s},a)=>e.jsx(je,{ref:a,className:g(L({variant:"outline"}),"mt-2 sm:mt-0",t),...s}));Re.displayName=je.displayName;const Mt=({error:t})=>{const{message:s,statu:a}=t,{open:o,toggleModal:r}=C();return e.jsx(Pt,{open:o,onOpenChange:()=>r,children:e.jsxs(Ae,{children:[e.jsxs(De,{children:[e.jsxs(Te,{children:["Error: ",a]}),e.jsx(Ce,{children:s})]}),e.jsxs(Ee,{children:[e.jsx(Re,{onClick:()=>r(),children:"Cancel"}),e.jsx(Se,{onClick:()=>r(),children:"Continue"})]})]})})};function $t({project:t,success:s,error:a}){const{toggleModal:o}=C(),{initElement:r,elements:l,togleSave:i}=I(),{post:m,wasSuccessful:f,errors:d}=P({elements:[],project_id:t.id.toString()});n.useEffect(()=>{console.log("activado"),s?(Ye.success("Generando vídeos"),i()):a!=null&&o()},[f,s,d]),n.useEffect(()=>{const c=jt.fromElementResponseToEntity(t.elements);r(c)},[]);const u=async()=>{const c=l.filter(p=>p.type===b.PRESENTER).filter(p=>!p.videoUrl);c.length<1||(Me.post(`/elements/generate/${t.id}`,{elements:JSON.stringify(c),project_id:t.id.toString()}),m(`/elements/generate/${t.id}`))};return e.jsx(pt,{children:e.jsxs("div",{className:"grid grid-rows-4 h-full",children:[e.jsxs("div",{className:"row-span-3 grid grid-cols-2 h-full",children:[e.jsxs(bt,{defaultValue:"account",className:"bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-1",color:"",children:[e.jsxs(oe,{className:"",children:[e.jsx(D,{value:"account",className:"",children:"Presentador"}),e.jsx(D,{value:"password",children:"Video"})]}),e.jsx(E,{value:"account",children:e.jsx(Je,{})}),e.jsx(E,{value:"password",children:e.jsx(Ue,{})})]}),e.jsx(nt,{})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 row-span-1 ",children:[e.jsxs("div",{className:"flex justify-between mx-5",children:[e.jsx("h1",{className:"text-2xl tracking-tight hover:tracking-wid font-bold",children:"Guion"}),e.jsx(Ge,{onClick:u,children:"Generar contenido"})]}),e.jsx(Qe,{})]}),a&&e.jsx(Mt,{error:a})]})})}const is=dt($t);export{is as default};
