import{u as f,A as E,aP as L,C as K,aQ as Q,r as m,j as n,h as o,l as S,aH as I,ao as R,x as j,K as w}from"./index.07fc3cde.js";var P=f({name:"QItem",props:{...E,...L,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:s}){const{proxy:{$q:c}}=S(),b=K(e,c),{hasLink:r,linkAttrs:q,linkClass:k,linkTag:y,navigateOnClick:h}=Q(),u=m(null),l=m(null),v=n(()=>e.clickable===!0||r.value===!0||e.tag==="label"),a=n(()=>e.disable!==!0&&v.value===!0),g=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(b.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=n(()=>{if(e.insetLevel===void 0)return null;const t=c.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function C(t){a.value===!0&&(l.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===u.value?l.value.focus():document.activeElement===l.value&&u.value.focus()),h(t))}function B(t){if(a.value===!0&&I(t,[13,32])===!0){R(t),t.qKeyEvent=!0;const d=new MouseEvent("click",t);d.qKeyEvent=!0,u.value.dispatchEvent(d)}s("keyup",t)}function x(){const t=j(i.default,[]);return a.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:l})),t}return()=>{const t={ref:u,class:g.value,style:_.value,role:"listitem",onClick:C,onKeyup:B};return a.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,q.value)):v.value===!0&&(t["aria-disabled"]="true"),o(y.value,t,x())}}}),$=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const s=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:s.value},w(i.default))}});export{P as Q,$ as a};
