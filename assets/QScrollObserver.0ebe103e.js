import{u as v,ai as h,w as m,o as T,p as S,ap as x,N as P,l as C,bg as w,bl as E,bm as M}from"./index.07fc3cde.js";const{passive:p}=w,O=["both","horizontal","vertical"];var N=v({name:"QScrollObserver",props:{axis:{type:String,validator:e=>O.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:h},emits:["scroll"],setup(e,{emit:b}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,l,u;m(()=>e.scrollTarget,()=>{f(),d()});function i(){n!==null&&n();const a=Math.max(0,E(l)),c=M(l),o={top:a-t.position.top,left:c-t.position.left};if(e.axis==="vertical"&&o.top===0||e.axis==="horizontal"&&o.left===0)return;const g=Math.abs(o.top)>=Math.abs(o.left)?o.top<0?"up":"down":o.left<0?"left":"right";t.position={top:a,left:c},t.directionChanged=t.direction!==g,t.delta=o,t.directionChanged===!0&&(t.direction=g,t.inflectionPoint=t.position),b("scroll",{...t})}function d(){l=P(u,e.scrollTarget),l.addEventListener("scroll",r,p),r(!0)}function f(){l!==void 0&&(l.removeEventListener("scroll",r,p),l=void 0)}function r(a){if(a===!0||e.debounce===0||e.debounce==="0")i();else if(n===null){const[c,o]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];n=()=>{o(c),n=null}}}const{proxy:s}=C();return m(()=>s.$q.lang.rtl,i),T(()=>{u=s.$el.parentNode,d()}),S(()=>{n!==null&&n(),f()}),Object.assign(s,{trigger:r,getPosition:()=>t}),x}});export{N as Q};
