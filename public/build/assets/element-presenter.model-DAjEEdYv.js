var R=Object.defineProperty;var c=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var s=(e,t,r)=>c(e,typeof t!="symbol"?t+"":t,r);import{E as m,a as u}from"./element.model-r3-WMhpT.js";var n=(e=>(e.NEUTRAL="neutral",e.HAPPY="happy",e.SURPRISE="surprise",e.SERIOUS="serious",e))(n||{});const S="Presentador";class T extends m{constructor({id:r,title:a,content:E="",expression:o=n.NEUTRAL,isModified:l,videoUrl:p,videoId:P}){super({id:r,title:a,type:u.PRESENTER,typeElement:S,isModified:l,videoUrl:p,videoId:P});s(this,"content");s(this,"expression");this.content=E,this.expression=o}}export{T as E,n as a};