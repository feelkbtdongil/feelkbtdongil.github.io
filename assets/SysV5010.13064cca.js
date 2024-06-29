import{Q as B}from"./QSpace.ddaf28ca.js";import{r as i,U as p,a8 as W,n as o,W as s,a5 as c,Z as g,a0 as P,a2 as q,R as ke,ad as Q,j as xe,p as Ve,o as ye,k as be,S as F,V as x,a7 as Ne,h as Z,Y as t,aJ as X,a9 as V,bu as E,$ as m,bK as f,a1 as U,X as we,bE as Se,af as Ye,aa as H,I as ee,a6 as _,bO as y,ab as _e,b8 as qe,b9 as De}from"./index.07fc3cde.js";import{Q as le}from"./QBar.3120e686.js";import{Q as Ue}from"./QSelect.3c86eb28.js";import{Q as Ae}from"./QToolbar.e70c6bf5.js";import{Q as Ce}from"./QTooltip.63239899.js";import{Q as ze}from"./QForm.b2174062.js";import{C as ae}from"./ClosePopup.d9572fee.js";import{l as Ie}from"./lodash.de417675.js";/* empty css                        */import{A as Re}from"./main.esm.15e3c1e8.js";import{u as Qe}from"./use-quasar.9559018b.js";import{j as oe,n as Fe}from"./json-util.73e249df.js";import"./QField.2ae85778.js";import"./QItemSection.345ae796.js";import"./QItemLabel.848dda36.js";import"./QMenu.8bcf41ca.js";import"./position-engine.7c438a6d.js";import"./selection.ae892694.js";import"./rtl.276c3f1b.js";import"./_commonjsHelpers.b8add541.js";const We={__name:"TestButton",props:["params"],setup(w){const u=w,{updateSelectedValue:h}=u.params,S=i(u.params.data),A=()=>{h(S)};return(C,l)=>(p(),W("div",null,[o(q,{dense:"","no-caps":"",rounded:"",outline:"",color:"secondary",onClick:A,style:{"min-width":"95px","max-width":"95px"},class:"text-body2"},{default:s(()=>[o(c,{name:"search",size:"14px",class:"q-pt-xs"}),g(" "+P(S.value.progId),1)]),_:1})]))}};const te=w=>(qe("data-v-a543b76c"),w=w(),De(),w),Me=te(()=>m("span",{class:"text-subtitle2 q-px-sm"},"\uD504\uB85C\uADF8\uB7A8\uC815\uBCF4 \uB9AC\uC2A4\uD2B8",-1)),Ge={class:"q-gutter-xs q-mr-md"},Be={key:0},Ee={class:"q-gutter-xs"},He={class:"col-6 text-right"},Pe={key:0},Te={key:0},$e=te(()=>m("div",null,"\uD504\uB85C\uADF8\uB7A8 \uC815\uBCF4\uAD00\uB9AC",-1)),je={class:"row justify-start q-col-gutter-x-md"},Oe={class:"col-5"},Je={class:"col-7 q-pt-md q-col-gutter-x-xs"},Le={class:"row justify-start q-col-gutter-x-md"},Ke={class:"col-8"},Ze={class:"col-4"},Xe={class:"row justify-start q-col-gutter-x-md"},el={class:"col-8"},ll={class:"col-4"},al={__name:"SysV5010",setup(w){const u=Qe(),h=i("menu"),S=i(!0),A=i(null),C=i(!1),l=i(null),M=i(null),Y=i(!1),v=i(!1),d=Q({iconNm:"",message:"",color:""});let b=null;const T=i(window.innerHeight),$=i(500),ne=xe(()=>({height:`${$.value}px`})),G=()=>{T.value=window.innerHeight,$.value=T.value-j.value-140},j=i(0),se=n=>(j.value=n,{minHeight:n?`calc(100vh - ${n}px)`:"100vh"});Ve(()=>{window.removeEventListener("resize",G)}),ye(()=>{window.addEventListener("resize",G),G()}),be(()=>{L(),A.value="multiple"});const z=i([]),O=()=>{S.value=!0,v.value||N.value.deselectAll()},re=n=>{z.value=n.api.getSelectedRows(),z.value.length>0?(Y.value=!0,v.value||(d.iconNm="edit_note",d.message="\uC0AD\uC81C\uBAA8\uB4DC \uC785\uB2C8\uB2E4",d.color="negative")):(Y.value=!1,d.iconNm="",d.message="",d.color="")},k={setup(n){const{params:e}=n;return e.value==="Y"?()=>Z(c,{name:"check",color:"",size:"sm"}):()=>{}}},ue={setup(n){const{params:e}=n;return()=>Z(c,{name:e.value,color:"",size:"xs"})}},de=Q({def:{flex:1,minWidth:180,sortable:!0,filter:!0,floatingFilter:!1}}),ie=Q({columns:[{headerName:"",field:"",minWidth:50,maxWidth:50,checkboxSelection:!0,headerCheckboxSelection:!0,editable:!1,filter:!1,sortable:!1,pinned:"left"},{headerName:"\uAD00\uB9AC\uCF54\uB4DC",field:"progId",minWidth:140,maxWidth:140,editable:!1,filter:!0,sortable:!0,resizable:!1,pinned:"left",cellRenderer:We,cellRendererParams:{updateSelectedValue:n=>{C.value=!1,v.value=!0,S.value=!1,b="U",d.iconNm="edit_note",d.message="\uC218\uC815\uBAA8\uB4DC \uC785\uB2C8\uB2E4",d.color="orange",l.value={...n.value},M.value=JSON.parse(JSON.stringify(n.value))}}},{headerName:"\uD504\uB85C\uADF8\uB7A8\uBA85",field:"progNm",minWidth:180,pinned:"left"},{headerName:"Location",field:"location",minWidth:110,cellStyle:{textAlign:"center"}},{headerName:"\uC720\uD615",field:"menuFg",minWidth:80,cellStyle:{textAlign:"center"}},{headerName:"\uC21C\uC11C",field:"menuSeq",minWidth:80,cellStyle:{textAlign:"center"},valueFormatter:n=>{const e=parseFloat(n.value);return isNaN(e)?"":e.toFixed(0)}},{headerName:"Icon",field:"iconNm",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:ue},{headerName:"\uC870\uD68C",field:"scrYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uC2E0\uADDC",field:"newYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uC218\uC815",field:"dbgYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uC0AD\uC81C",field:"delYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uCD9C\uB825",field:"rptYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uC5D1\uC140",field:"excYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uB9C8\uAC10",field:"locYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uC2B9\uC778",field:"appYn",minWidth:80,cellStyle:{textAlign:"center"},cellRenderer:k},{headerName:"\uC124\uBA85",field:"explains"}]});window.extractKeys=function(e){return e.map(a=>a.id)};const N=i(),J=Q({rows:[]}),ce=n=>{N.value=n.api},L=()=>{fe(),I()},me=()=>{b="I",C.value=!0,v.value=!0,d.color="primary",d.message="\uC2E0\uADDC\uBAA8\uB4DC\uC785\uB2C8\uB2E4",d.iconNm="edit";const n={progId:"",progNm:"",location:"",menuFg:"M",menuSeq:0,iconNm:"fas fa-desktop fa-fw",scrYn:"N",newYn:"N",dbgYn:"N",delYn:"N",rptYn:"N",excYn:"N",locYn:"N",appYn:"N",explains:"",oldProgId:""};l.value=n,M.value={}},pe=()=>{u.dialog({dark:!0,title:"\uC790\uB8CC\uC0AD\uC81C",message:"\uC120\uD0DD\uB41C \uC790\uB8CC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? ",ok:{push:!0,color:"negative"},cancel:{push:!0,color:"grey-7"}}).onOk(()=>{b="D";let n=[],e=[];for(let a=0;a<z.value.length;a++){let r='{"mode":"U","data":'+JSON.stringify(z.value[a])+"}";e.push(r)}K(oe.jsonFiller(n,e))}).onCancel(()=>{}).onDismiss(()=>{})},ve=()=>{v.value=!1,Ie.exports.isEqual(l.value,M.value)?u.dialog({dark:!0,title:"\uC548\uB0B4",message:"\uBCC0\uACBD\uB41C \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. "}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{}):K(oe.dataJsonParse(b,l.value))},K=n=>{F.post("/api/sys/sys5010_save",n).then(e=>{let a={};if(e.data.rtn==="0"){if(b==="I"){a.rtn=e.data.rtn,a.rtnMsg=e.data.rtnMsg,l.value.oldProgId=l.value.progId;let r=[l.value];N.value.applyTransaction({add:r,addIndex:0})}else if(b==="U"){a.rtn=e.data.rtn,a.rtnMsg=e.data.rtnMsg;const r=N.value.getSelectedRows();r[0].progId=l.value.progId,r[0].oldProgId=l.value.progId,r[0].progNm=l.value.progNm,r[0].location=l.value.location,r[0].menuFg=l.value.menuFg,r[0].iconNm=l.value.iconNm,r[0].scrYn=l.value.scrYn,r[0].newYn=l.value.newYn,r[0].dbgYn=l.value.dbgYn,r[0].delYn=l.value.delYn,r[0].rptYn=l.value.rptYn,r[0].locYn=l.value.locYn,r[0].appYn=l.value.appYn,r[0].excYn=l.value.excYn,r[0].explains=l.value.explains,r[0].menuSeq=l.value.menuSeq,N.value.applyTransaction({update:r})}else if(b==="D"){a.rtn=e.data.rtn,a.rtnMsg=e.data.rtnMsg;const r=N.value.getSelectedRows();N.value.applyTransaction({remove:r})}}else a.rtn=e.data.rtn,a.rtnMsg=e.data.rtnMsg;Fe.notifyView(a)}).catch(e=>{console.log("error: ",e)})},I=async()=>{try{let n=null;h.value==="group"?n=await F.post("/api/sys/sys5010_group_list",{groupCd:D.value}):n=await F.post("/api/sys/sys5010_menu_list",{groupCd:D.value}),J.rows=n.data.data}catch(n){console.error("Error fetching users:",n)}},R=i([]),D=i(null),fe=async()=>{try{const n=await F.post("/api/sys/prog_group_list",{paramUserId:""});R.value=[],R.value.push({groupNm:"\uC804\uCCB4",groupCd:""}),n.data.data.forEach(e=>{R.value.push(e)}),D.value=null}catch(n){console.error("Error fetching users:",n)}},ge=n=>{I()},he=()=>{O()};return(n,e)=>(p(),x(Ne,{class:"q-pa-xs-xs q-pa-sm-md","style-fn":se},{default:s(()=>[o(H,{bordered:""},{default:s(()=>[o(le,{class:"q-px-sm"},{default:s(()=>[o(t(c),{name:"list_alt"}),Me,o(B),v.value||Y.value?(p(),x(X,{key:0,size:"sm",outline:"",color:d.color,class:"q-px-md"},{default:s(()=>[o(t(c),{name:d.iconNm,class:"q-mr-sm",size:"15px"},null,8,["name"]),g(" "+P(d.message),1)]),_:1},8,["color"])):V("",!0)]),_:1}),o(E,{class:"q-pa-xs"},{default:s(()=>[o(Ae,{class:"row"},{default:s(()=>[m("div",Ge,[o(f,{modelValue:h.value,"onUpdate:modelValue":[e[0]||(e[0]=a=>h.value=a),I],val:"menu",label:"\uC804\uCCB4"},null,8,["modelValue"]),o(f,{modelValue:h.value,"onUpdate:modelValue":[e[1]||(e[1]=a=>h.value=a),I],val:"group",label:"\uADF8\uB8F9\uB9CC"},null,8,["modelValue"])]),h.value==="menu"?(p(),x(Ue,{key:0,dense:"","options-dense":"",class:"q-pb-sm q-pl-sm q-mr-lg","label-color":"orange",modelValue:D.value,"onUpdate:modelValue":[e[2]||(e[2]=a=>D.value=a),ge],options:R.value,"option-value":"groupCd","option-label":"groupNm","option-disable":"inactive","emit-value":"","map-options":"",style:{"min-width":"150px","max-width":"150px"},label:"\uADF8\uB8F9\uC120\uD0DD"},null,8,["modelValue","options"])):V("",!0),o(t(q),{dense:"",outline:"",class:"q-px-md",color:"teal","on:click":e[3]||(e[3]=a=>L())},{default:s(()=>[o(t(c),{name:"refresh",size:"xs",class:"q-pr-sm-sm"}),t(u).screen.gt.sm?(p(),W("span",Be,"\uB2E4\uC2DC\uBD88\uB7EC\uC624\uAE30")):V("",!0)]),_:1}),o(B),m("div",Ee,[m("div",He,[Y.value?V("",!0):(p(),x(t(q),{key:0,dense:"",outline:"",class:"q-px-md",color:"teal","on:click":e[4]||(e[4]=a=>me())},{default:s(()=>[o(t(c),{name:"add",size:"xs",class:"q-pr-sm-sm"}),t(u).screen.gt.sm?(p(),W("span",Pe,"\uC2E0\uADDC")):V("",!0)]),_:1})),Y.value&&!v.value?(p(),x(t(q),{key:1,dense:"",outline:"",class:"q-px-md",color:"negative","on:click":e[5]||(e[5]=a=>pe())},{default:s(()=>[o(t(c),{name:"delete",size:"xs",class:"q-pr-sm-sm"}),t(u).screen.gt.sm?(p(),W("span",Te,"\uC0AD\uC81C")):V("",!0)]),_:1})):V("",!0)])])]),_:1})]),_:1}),o(U,{size:"3px"}),o(E,{class:"q-pa-xs"},{default:s(()=>[m("div",{style:Se(ne.value)},[o(t(Re),{style:{width:"100%",height:"100%"},class:we(t(u).dark.isActive?"ag-theme-alpine-dark":"ag-theme-alpine"),columnDefs:ie.columns,onGridReady:ce,defaultColDef:de.def,rowData:J.rows,pagination:!1,rowSelection:A.value,onSelectionChanged:re,onRowClicked:O,suppressRowClickSelection:S.value},null,8,["class","columnDefs","defaultColDef","rowData","rowSelection","suppressRowClickSelection"])],4)]),_:1}),o(Ye,{persistent:"",modelValue:v.value,"onUpdate:modelValue":e[27]||(e[27]=a=>v.value=a),onHide:he},{default:s(()=>[o(H,{flat:"",bordered:"",style:{"max-width":"450px",width:"100%"}},{default:s(()=>[o(le,null,{default:s(()=>[o(t(c),{name:"list_alt"}),$e,o(B),v.value||Y.value?(p(),x(X,{key:0,size:"sm",outline:"",color:d.color,class:"q-px-md"},{default:s(()=>[o(t(c),{name:d.iconNm,class:"q-mr-sm",size:"15px"},null,8,["name"]),g(" "+P(d.message),1)]),_:1},8,["color"])):V("",!0),ee((p(),x(t(q),{dense:"",flat:"",icon:"close"},{default:s(()=>[o(Ce,null,{default:s(()=>[g(" \uB2EB\uAE30 ")]),_:1})]),_:1})),[[ae]])]),_:1}),o(ze,{class:""},{default:s(()=>[o(H,{class:"q-pa-md"},{default:s(()=>[o(E,null,{default:s(()=>[m("div",je,[m("div",Oe,[o(_,{autofocus:C.value,class:"q-pb-md",modelValue:l.value.progId,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.progId=a),color:t(u).dark.isActive?"orange":"teal","label-color":t(u).dark.isActive?"orange":"teal",label:"\uD504\uB85C\uADF8\uB7A8ID"},null,8,["autofocus","modelValue","color","label-color"])]),m("div",Je,[o(f,{modelValue:l.value.menuFg,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.menuFg=a),val:"G","keep-color":"",color:"teal",label:"\uADF8\uB8F9"},null,8,["modelValue"]),o(f,{modelValue:l.value.menuFg,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.menuFg=a),val:"M","keep-color":"",color:"blue",label:"\uBA54\uB274"},null,8,["modelValue"]),o(f,{modelValue:l.value.menuFg,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.menuFg=a),val:"S","keep-color":"",color:"orange",label:"\uC11C\uBE0C"},null,8,["modelValue"]),o(U,{color:"grey"})])]),m("div",Le,[m("div",Ke,[o(_,{class:"q-pb-md",modelValue:l.value.progNm,"onUpdate:modelValue":e[10]||(e[10]=a=>l.value.progNm=a),color:t(u).dark.isActive?"orange":"teal","label-color":t(u).dark.isActive?"orange":"teal",label:"\uD504\uB85C\uADF8\uB7A8 \uBA85"},null,8,["modelValue","color","label-color"])]),m("div",Ze,[o(_,{class:"q-pb-md",modelValue:l.value.location,"onUpdate:modelValue":e[11]||(e[11]=a=>l.value.location=a),color:t(u).dark.isActive?"orange":"teal","label-color":t(u).dark.isActive?"orange":"teal",label:"Location"},null,8,["modelValue","color","label-color"])])]),m("div",Xe,[m("div",el,[o(_,{readonly:l.value.menuFg==="M",modelValue:l.value.iconNm,"onUpdate:modelValue":e[12]||(e[12]=a=>l.value.iconNm=a),color:t(u).dark.isActive?"orange":"teal","label-color":t(u).dark.isActive?"orange":"teal",label:"\uAE30\uBCF8 \uC544\uC774\uCF58"},null,8,["readonly","modelValue","color","label-color"])]),m("div",ll,[o(_,{type:"number",class:"q-pb-md",modelValue:l.value.menuSeq,"onUpdate:modelValue":e[13]||(e[13]=a=>l.value.menuSeq=a),color:t(u).dark.isActive?"orange":"teal","label-color":t(u).dark.isActive?"orange":"teal",label:"\uBA54\uC778\uC21C\uC11C"},null,8,["modelValue","color","label-color"])])]),o(f,{disable:l.value.menuFg==="G",size:"45px","keep-color":"",modelValue:l.value.iconNm,"onUpdate:modelValue":e[14]||(e[14]=a=>l.value.iconNm=a),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"fas fa-edit fa-fw",color:"primary"},{default:s(()=>[o(t(c),{name:"fas fa-edit fa-fw"}),g(" \uC785\uB825 ")]),_:1},8,["disable","modelValue"]),o(f,{disable:l.value.menuFg==="G",size:"45px","keep-color":"",modelValue:l.value.iconNm,"onUpdate:modelValue":e[15]||(e[15]=a=>l.value.iconNm=a),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"fas fa-desktop fa-fw",color:"primary"},{default:s(()=>[o(t(c),{name:"fas fa-desktop fa-fw"}),g(" \uC870\uD68C ")]),_:1},8,["disable","modelValue"]),o(f,{disable:l.value.menuFg==="G",size:"45px","keep-color":"",modelValue:l.value.iconNm,"onUpdate:modelValue":e[16]||(e[16]=a=>l.value.iconNm=a),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"fas fa-print fa-fw",color:"primary"},{default:s(()=>[o(t(c),{name:"fas fa-print fa-fw"}),g(" \uCD9C\uB825 ")]),_:1},8,["disable","modelValue"]),o(f,{disable:l.value.menuFg==="G",size:"45px","keep-color":"",modelValue:l.value.iconNm,"onUpdate:modelValue":e[17]||(e[17]=a=>l.value.iconNm=a),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"fas fa-check fa-fw",color:"primary"},{default:s(()=>[o(t(c),{name:"fas fa-check fa-fw"}),g(" \uC2B9\uC778 ")]),_:1},8,["disable","modelValue"]),o(U,{spaced:"md",color:"grey",size:"2px"}),o(t(y),{modelValue:l.value.scrYn,"onUpdate:modelValue":e[18]||(e[18]=a=>l.value.scrYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",color:"primary",label:"\uC870\uD68C"},null,8,["modelValue"]),o(t(y),{modelValue:l.value.newYn,"onUpdate:modelValue":e[19]||(e[19]=a=>l.value.newYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",color:"primary",label:"\uC2E0\uADDC"},null,8,["modelValue"]),o(t(y),{modelValue:l.value.dbgYn,"onUpdate:modelValue":e[20]||(e[20]=a=>l.value.dbgYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",color:"primary",label:"\uC218\uC815"},null,8,["modelValue"]),o(t(y),{modelValue:l.value.delYn,"onUpdate:modelValue":e[21]||(e[21]=a=>l.value.delYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",color:"primary",label:"\uC0AD\uC81C"},null,8,["modelValue"]),o(t(y),{modelValue:l.value.rptYn,"onUpdate:modelValue":e[22]||(e[22]=a=>l.value.rptYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",label:"\uCD9C\uB825"},null,8,["modelValue"]),o(t(y),{modelValue:l.value.excYn,"onUpdate:modelValue":e[23]||(e[23]=a=>l.value.excYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",label:"\uC5D1\uC140"},null,8,["modelValue"]),o(t(y),{modelValue:l.value.locYn,"onUpdate:modelValue":e[24]||(e[24]=a=>l.value.locYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",color:"primary",label:"\uB9C8\uAC10"},null,8,["modelValue"]),o(t(y),{modelValue:l.value.appYn,"onUpdate:modelValue":e[25]||(e[25]=a=>l.value.appYn=a),"true-value":"Y","false-value":"N","checked-icon":"check","unchecked-icon":"clear",color:"primary",label:"\uC2B9\uC778"},null,8,["modelValue"]),o(U,{spaced:"md",color:"grey",size:"2px"}),o(_,{type:"textarea",class:"q-pt-sm",modelValue:l.value.explains,"onUpdate:modelValue":e[26]||(e[26]=a=>l.value.explains=a),color:t(u).dark.isActive?"orange":"teal","label-color":t(u).dark.isActive?"orange":"teal",label:"\uC124\uBA85",autogrow:""},null,8,["modelValue","color","label-color"])]),_:1})]),_:1})]),_:1}),o(U,{size:"2px",color:"grey"}),o(_e,{align:"right",class:"q-pa-md"},{default:s(()=>[ee((p(),x(t(q),{color:"primary",onClick:ve},{default:s(()=>[o(t(c),{class:"q-mr-xs",name:"save",size:"xs"}),g(" \uC800\uC7A5 ")]),_:1})),[[ae]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};var wl=ke(al,[["__scopeId","data-v-a543b76c"]]);export{wl as default};
