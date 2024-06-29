import{u as te,z as ae,ah as T,ai as oe,B as ne,r as E,j as f,aj as ie,D as le,ak as se,E as re,al as ue,w as k,p as C,am as x,an as H,N as ce,h as j,M as de,l as fe,K as he,ao as ve}from"./index.7f77393b.js";import{u as me,v as A,a as ge,p as D,b as Te,c as pe,r as M,s as ye,d as Se}from"./position-engine.150cbc63.js";import{c as q}from"./selection.004dbe93.js";var Oe=te({name:"QTooltip",inheritAttrs:!1,props:{...me,...ae,...T,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...T.transitionShow,default:"jump-down"},transitionHide:{...T.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:oe,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ne],setup(e,{slots:L,emit:p,attrs:h}){let i,l;const v=fe(),{proxy:{$q:a}}=v,s=E(null),c=E(!1),B=f(()=>D(e.anchor,a.lang.rtl)),N=f(()=>D(e.self,a.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:W,removeTick:R}=ie(),{registerTimeout:d}=le(),{transitionProps:_,transitionStyle:z}=se(e),{localScrollTarget:y,changeScrollEvent:I,unconfigureScrollTarget:K}=Te(e,w),{anchorEl:o,canShow:U,anchorEvents:r}=pe({showing:c,configureAnchorEl:Y}),{show:V,hide:m}=re({showing:c,canShow:U,handleShow:F,handleHide:G,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:X});const{showPortal:S,hidePortal:b,renderPortal:$}=ue(v,s,ee,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?Se:M)(t)}),C(()=>{M(t)})}function F(t){S(),W(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=k(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{S(!0),p("show",t)},e.transitionDuration)}function G(t){R(),b(),P(),d(()=>{b(!0),p("hide",t)},e.transitionDuration)}function P(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),K(),x(r,"tooltipTemp")}function u(){ye({targetEl:s.value,offset:e.offset,anchorEl:o.value,anchorOrigin:B.value,selfOrigin:N.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(a.platform.is.mobile===!0){q(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[g,O,"delayHide","passiveCapture"]);H(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function X(t){a.platform.is.mobile===!0&&(x(r,"tooltipTemp"),q(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function Y(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];H(r,"anchor",t)}function w(){if(o.value!==null||e.scrollTarget!==void 0){y.value=ce(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;I(y.value,t)}}function Z(){return c.value===!0?j("div",{...h,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,z.value],role:"tooltip"},he(L.default)):null}function ee(){return j(de,_.value,Z)}return C(P),Object.assign(v.proxy,{updatePosition:u}),$}});export{Oe as Q};
