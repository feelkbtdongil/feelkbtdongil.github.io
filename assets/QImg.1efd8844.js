import{j as l,u as Q,r as s,D as T,aZ as H,o as E,h as n,M as F,K as O,a_ as P,w as A,a$ as h,l as K}from"./index.07fc3cde.js";const W={ratio:[String,Number]};function Z(e,o){return l(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const x=1.7778;var J=Q({name:"QImg",props:{...W,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:x},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const y=s(e.initialRatio),_=Z(e,y),m=K(),{registerTimeout:C,removeTimeout:v}=T(),{registerTimeout:z,removeTimeout:b}=T(),f=l(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),L=l(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),t=[s(null),s(f.value)],a=s(0),c=s(!1),g=s(!1),N=l(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),k=l(()=>({width:e.width,height:e.height})),I=l(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),R=l(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function j(){if(b(),e.loadingShowDelay===0){c.value=!0;return}z(()=>{c.value=!0},e.loadingShowDelay)}function S(){b(),c.value=!1}function B({target:i}){h(m)===!1&&(v(),y.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,w(i,1))}function w(i,r){r===1e3||h(m)===!0||(i.complete===!0?D(i):C(()=>{w(i,r+1)},50))}function D(i){h(m)!==!0&&(a.value=a.value^1,t[a.value].value=null,S(),i.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",i.currentSrc||i.src))}function $(i){v(),S(),g.value=!0,t[a.value].value=L.value,t[a.value^1].value=f.value,u("error",i)}function q(i){const r=t[i].value,d={key:"img_"+i,class:I.value,style:R.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...r};return a.value===i?Object.assign(d,{class:d.class+"current",onLoad:B,onError:$}):d.class+="loaded",n("div",{class:"q-img__container absolute-full",key:"img"+i},n("img",d))}function M(){return c.value===!1?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},O(o[g.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[n(P,{color:e.spinnerColor,size:e.spinnerSize})])}{let i=function(){A(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,r=>{v(),g.value=!1,r===null?(S(),t[a.value^1].value=f.value):j(),t[a.value].value=r},{immediate:!0})};H.value===!0?E(i):i()}return()=>{const i=[];return _.value!==null&&i.push(n("div",{key:"filler",style:_.value})),t[0].value!==null&&i.push(q(0)),t[1].value!==null&&i.push(q(1)),i.push(n(F,{name:"q-transition--fade"},M)),n("div",{key:"main",class:N.value,style:k.value,role:"img","aria-label":e.alt},i)}}});export{J as Q};
