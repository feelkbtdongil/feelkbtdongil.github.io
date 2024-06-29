import{Q as U}from"./QBar.aa6ab1e6.js";import{Q as F}from"./QSpace.d904af94.js";import{Q as G}from"./QToolbar.963c8e72.js";import{r as i,j as $,ad as y,p as L,k as P,o as Z,S as z,U as _,V as k,W as r,a7 as X,$ as p,n as s,Y as l,a5 as f,ab as K,a2 as h,Z as g,a9 as B,a1 as ee,bu as te,bE as ae,X as se,aa as oe}from"./index.7f77393b.js";/* empty css                        */import{A as le}from"./main.esm.3000f5c9.js";import{u as ne}from"./use-quasar.49a49e75.js";import{l as w}from"./lodash.de417675.js";import{j as J,n as re}from"./json-util.159ec565.js";import{u as ie}from"./setYearInfo.8b7f3a45.js";import"./_commonjsHelpers.b8add541.js";const de={class:"row q-col-gutter-md"},ue={class:"col-12"},ce=p("span",{class:"text-subtitle2 q-px-sm"},"\uD3C9\uAC00\uB300\uC0C1\uADF8\uB8F9\uB9AC\uC2A4\uD2B8",-1),me={class:"q-gutter-xs"},ke={__name:"MstV2060",setup(fe){const N=ie(),S=ne(),Q=i(500),O=$(()=>({height:`${Q.value}px`})),c=i(null),o=y({rows:[]}),x=i([]),n=i([]),u=i(!1),v=i(!1);L(()=>{window.removeEventListener("resize",C)}),P(()=>{E.value="multiple",D()}),Z(()=>{window.addEventListener("resize",C),C()});const V=e=>{c.value=e.api},W=y({def:{flex:1,sortable:!0,filter:!0,floatingFilter:!1,editable:!0}}),R=y({columns:[{headerName:"",field:"",maxWidth:50,minWidth:50,checkboxSelection:!0,headerCheckboxSelection:!0,filter:!1,pinned:"left"},{headerName:"\uCF54\uB4DC",field:"evtgCd",maxWidth:80,minWidth:80,cellEditorParams:{maxLength:5}},{headerName:"\uC9C1\uBD84\uB958\uBA85",field:"evtgNm",maxWidth:150,minWidth:150},{headerName:"\uCC98\uB9AC\uC21C\uC11C",field:"seq",maxWidth:100,minWidth:100,cellEditor:"agNumberCellEditor",cellEditorParams:{precision:2,step:1,showStepperButtons:!0}}]}),m=i(),Y=e=>{m.value=e.api.getSelectedRows(),m.value.length===1?(v.value=!0,u.value=!0):m.value.length>1?(v.value=!0,u.value=!1):v.value=!1},A=()=>{n.value=[];for(let e=0;x.value.length>e;e++)JSON.stringify(x.value[e])!==JSON.stringify(o.rows[e])&&o.rows[e].iuD==="U"&&n.value.push(o.rows[e]);n.value.length>0&&(u.value=!0)},E=i(null),I=()=>{u.value=!0,n.value=[];const e=0,a={stdYear:N.setYear,evtgCd:"",oldEvtgCd:"",evtgNm:"",seq:o.rows.length+1,iuD:"I"};o.rows.splice(e,0,a),c.value.setRowData(o.rows),c.value.setFocusedCell(e,"evtgCd")},M=()=>{S.dialog({dark:!0,title:"\uC790\uB8CC\uC0AD\uC81C",message:"\uC120\uD0DD\uB41C \uC790\uB8CC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? ",ok:{push:!0,color:"negative"},cancel:{push:!0,color:"grey-7"}}).onOk(()=>{let e=[],a=[];for(let d=0;d<m.value.length;d++){let T='{"mode":"D","data":'+JSON.stringify(m.value[d])+"}";a.push(T)}b(J.jsonFiller(e,a));const t=c.value.getSelectedRows();c.value.applyTransaction({remove:t})}).onCancel(()=>{}).onDismiss(()=>{})},j=()=>{let e=[],a=[];for(let t=0;t<o.rows.length;t++)if(!w.exports.isEmpty(o.rows[t].evtgCd)&&o.rows[t].iuD==="I"){let d='{"mode": "'+o.rows[t].iuD+'","data":'+JSON.stringify(o.rows[t])+"}";e.push(d)}for(let t=0;t<n.value.length;t++)if(!w.exports.isEmpty(n.value[t].evtgCd)&&n.value[t].iuD==="U"){let d='{"mode": "'+n.value[t].iuD+'","data":'+JSON.stringify(n.value[t])+"}";e.push(d)}console.log("iu ::: ",JSON.stringify(e)),w.exports.isEmpty(e)&&w.exports.isEmpty(a)?S.dialog({dark:!0,title:"\uC548\uB0B4",message:"\uBCC0\uACBD\uB41C \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. "}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{}):(b(J.jsonFiller(e,a)),setTimeout(()=>{D()},500))},q=i(0),H=e=>(q.value=e,{minHeight:e?`calc(100vh - ${e}px)`:"100vh"}),C=()=>{Q.value=window.innerHeight-q.value-180},D=async()=>{try{const e=await z.post("/api/mst/mst2060_list",{paramSetYear:N.setYear});o.rows=e.data.data,x.value=JSON.parse(JSON.stringify(e.data.data)),n.value=[]}catch(e){console.error("Error fetching users:",e)}},b=e=>{z.post("/api/mst/mst2060_save",e).then(a=>{let t={};a.data.rtn==="0"?(t.rtn=1,t.rtn1=a.data.rtnMsg1,t.rtn2="\uC790\uB8CC\uC800\uC7A5 \uC644\uB8CC"):(t.rtn=a.data.rtn,t.rtn1=a.data.rtnMsg1,t.rtn2=a.data.rtnMsg2),u.value=!1,re.notifyView(t)}).catch(a=>{console.log("error: ",a)})};return(e,a)=>(_(),k(X,{class:"q-pa-xs-xs q-pa-sm-md","style-fn":H},{default:r(()=>[p("div",de,[p("div",ue,[s(oe,{bordered:""},{default:r(()=>[s(U,{class:"q-px-sm"},{default:r(()=>[s(l(f),{name:"list_alt"}),ce]),_:1}),s(K,{align:"right",class:"q-pa-none"},{default:r(()=>[s(G,{class:"row"},{default:r(()=>[s(l(h),{outline:"",color:"positive",dense:"",onClick:D},{default:r(()=>[s(l(f),{name:"refresh",size:"xs",class:"q-mr-sm"}),g("\uB2E4\uC2DC\uBD88\uB7EC\uC624\uAE30")]),_:1}),s(F),p("div",me,[v.value?(_(),k(l(h),{key:0,outline:"",color:"negative",dense:"",onClick:M},{default:r(()=>[s(l(f),{name:"delete",size:"xs"}),g(" \uC0AD\uC81C")]),_:1})):B("",!0),u.value?(_(),k(l(h),{key:1,outline:"",color:"primary",dense:"",onClick:j},{default:r(()=>[s(l(f),{name:"save",size:"xs"}),g(" \uC800\uC7A5 ")]),_:1})):B("",!0),s(l(h),{outline:"",color:"positive",dense:"",onClick:I},{default:r(()=>[s(l(f),{name:"add",size:"xs"}),g(" \uC2E0\uADDC ")]),_:1})])]),_:1})]),_:1}),s(ee,{size:"3px"}),s(te,{class:"q-pa-xs"},{default:r(()=>[p("div",{style:ae(O.value)},[s(l(le),{ref:"myGrid",style:{width:"100%",height:"100%"},class:se(l(S).dark.isActive?"ag-theme-alpine-dark":"ag-theme-alpine"),columnDefs:R.columns,rowData:o.rows,defaultColDef:W.def,rowSelection:E.value,onSelectionChanged:Y,onCellValueChanged:A,onGridReady:V},null,8,["class","columnDefs","rowData","defaultColDef","rowSelection"])],4)]),_:1})]),_:1})])])]),_:1}))}};export{ke as default};
