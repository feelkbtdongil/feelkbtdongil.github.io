import{Q as O}from"./QBar.3120e686.js";import{Q as me}from"./QSelect.3c86eb28.js";import{Q as B}from"./QSpace.ddaf28ca.js";import{R as pe,r as n,j as ve,ad as fe,p as ge,k as _e,o as he,S as w,U as x,V as S,W as r,a7 as be,$ as d,n as t,Y as s,a5 as u,ab as Y,a6 as xe,X as q,a1 as J,bu as Z,bE as W,a0 as g,aa as U,aJ as ye,Z as N,a9 as D,a8 as ke,a2 as X,b8 as we,b9 as Se}from"./index.07fc3cde.js";import{Q as K}from"./QToolbar.e70c6bf5.js";import{Q as qe}from"./QTree.4e1c0b51.js";import{Q as De}from"./QEditor.474a723f.js";/* empty css                        */import"./main.esm.15e3c1e8.js";import{u as Ie}from"./use-quasar.9559018b.js";import{l as ee}from"./lodash.de417675.js";import{j as ae,n as ze}from"./json-util.73e249df.js";import{u as Ee}from"./setUserInfo.4ca40c19.js";import"./QField.2ae85778.js";import"./QItemSection.345ae796.js";import"./QItemLabel.848dda36.js";import"./QMenu.8bcf41ca.js";import"./position-engine.7c438a6d.js";import"./selection.ae892694.js";import"./rtl.276c3f1b.js";import"./QTooltip.63239899.js";import"./_commonjsHelpers.b8add541.js";const te=y=>(we("data-v-2c1e4770"),y=y(),Se(),y),Qe={class:"row q-col-gutter-md"},Ve={class:"col-12 col-md-3"},Ce=te(()=>d("span",{class:"text-subtitle2 q-px-sm"},"\uD504\uB85C\uADF8\uB7A8 \uB9AC\uC2A4\uD2B8",-1)),Ae={class:"row items-center"},Be={class:"text-bold text-blue"},Ue={class:"row items-center"},Ne={class:"row items-center"},$e={class:""},Pe={class:"col-12 col-md-9"},Te=te(()=>d("span",{class:"text-subtitle2 q-px-sm"},"\uD504\uB85C\uADF8\uB7A8 \uC0AC\uC6A9\uC124\uBA85\uC11C \uAD00\uB9AC (\uAD00\uB9AC\uC790\uC6A9)",-1)),Fe={key:0,class:"text-subtitle1 text-bold shadow-5 q-px-lg q-py-xs bg-secondary rounded-borders"},Le={__name:"SysV4010",setup(y){Ee();const l=Ie(),$=n(500),P=ve(()=>({height:`${$.value}px`})),I=n([]),_=n(null),v=n(""),T=n(null),h=n(null),m=n(null),z=n(null),F=n(null),se=()=>{v.value="",T.value.focus()},oe=n(null),i=n({progId:"",contents:""});n(!0);const c=fe({icon:"",message:"",color:""});let f="";const E=n(!1),k=n(!1),L=n(!1),p=n({submenuName:"",menuData:{}}),le=()=>{p.value.menuData=M(I.value,_.value),p.value.menuData?(L.value=!0,p.value.menuData.children.length===0&&(m.value=p.value.menuData.progId,z.value=p.value.menuData.label,ce(m.value),setTimeout(()=>{F.value.focus()},100))):(L.value=!1,k.value=!1,m.value=null,z.value=null,i.value.progId=null,i.value.contents=null)};function M(o,a){for(const e of o){if(e.id===a)return e;if(e.children){const b=M(e.children,a);if(b!==null)return b}}return null}const j=n(0),ne=o=>(j.value=o,{minHeight:o?`calc(100vh - ${o}px)`:"100vh"}),Q=()=>{$.value=window.innerHeight-j.value-180};ge(()=>{window.removeEventListener("resize",Q)}),_e(()=>{ue(),setTimeout(()=>{R()},500)}),he(()=>{window.addEventListener("resize",Q),Q()});const re=()=>{ee.exports.isEqual(i.value,oe.value)?l.dialog({dark:!0,title:"\uC548\uB0B4",message:"\uBCC0\uACBD\uB41C \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. "}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{}):(H(ae.dataJsonParse(f,i.value)),_.value=null)},ie=()=>{f="D",l.dialog({dark:!0,title:"\uC790\uB8CC\uC0AD\uC81C",message:"\uC120\uD0DD\uB41C \uC790\uB8CC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? ",ok:{push:!0,color:"negative"},cancel:{push:!0,color:"grey-7"}}).onOk(()=>{H(ae.dataJsonParse(f,i.value)),_.value=null}).onCancel(()=>{}).onDismiss(()=>{})},R=()=>{G()};let V=[];const C=n([]);function de(o){V=[];const a={};return o.forEach(e=>{a[e.menuId]={...e,children:[]}}),Object.values(a).forEach(e=>{if(C.value.push(e.id),e.menuParent==="#")V.push(e),p.value.submenuName=e.labelExt,p.value.menuData={};else{const b=a[e.menuParent]||a[e.menuId];b&&b.children.push(e)}}),V}const G=async()=>{const o={paramGroupCd:h.value};try{const a=await w.post("/api/sys/sys4010_list",o);I.value=de(a.data.data)}catch(a){console.error("Error fetching users:",a)}},ce=async o=>{const a={paramProgId:o};try{const e=await w.post("/api/sys/sys4010_docA_select",a);ee.exports.isEmpty(e.data.data)?(f="I",i.value.progId=m.value,i.value.contents="",E.value=!0,c.icon="edit_note",c.message="\uC2E0\uADDC\uBAA8\uB4DC \uC785\uB2C8\uB2E4",c.color="orange",k.value=!1):(f="U",i.value.progId=e.data.data[0].progId,i.value.contents=e.data.data[0].contents,E.value=!0,c.icon="edit_note",c.message="\uC218\uC815/\uC0AD\uC81C\uBAA8\uB4DC \uC785\uB2C8\uB2E4",c.color="orange",k.value=!0)}catch(e){console.error("Error fetching users:",e)}},H=o=>{w.post("/api/sys/sys4010_docA_save",o).then(a=>{a.data.rtn==="0"&&f==="I"&&(i.value.oldUserId=i.value.userId),G();let e={};e.rtn=a.data.rtn,e.rtnMsg=a.data.rtnMsg,ze.notifyView(e)}).catch(a=>{console.log("error: ",a)})},A=n([]),ue=async()=>{try{const o=await w.post("/api/sys/prog_group_list",{paramUserId:""});A.value=[],o.data.data.forEach(a=>{h.value||(h.value=a.groupCd),A.value.push(a)})}catch(o){console.error("Error fetching users:",o)}};return(o,a)=>(x(),S(be,{class:"q-pa-xs-xs q-pa-sm-md","style-fn":ne},{default:r(()=>[d("div",Qe,[d("div",Ve,[t(U,{bordered:""},{default:r(()=>[t(O,{class:"q-px-sm"},{default:r(()=>[t(s(u),{name:"list_alt"}),Ce]),_:1}),t(Y,{align:"right",class:"q-pa-none"},{default:r(()=>[t(K,{class:"row"},{default:r(()=>[t(me,{"stack-label":"",dense:"",style:{width:"100px"},"label-color":"orange",label:"\uBA54\uC778\uADF8\uB8F9\uBA85",modelValue:h.value,"onUpdate:modelValue":[a[0]||(a[0]=e=>h.value=e),R],options:A.value,"option-value":"groupCd","option-label":"groupNm","options-dense":"","emit-value":"","map-options":""},null,8,["modelValue","options"]),t(B),t(xe,{dense:"","stack-label":"","label-color":"orange",ref_key:"filterRef",ref:T,modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),label:"\uAC80\uC0C9\uB0B4\uC5D0\uD504\uB85C\uADF8\uB798\uBA85\uAC80\uC0C9",style:{width:"130px"},class:""},{append:r(()=>[t(s(u),{size:"xs",name:v.value!==""?"clear search":"search",class:q(["cursor-pointer",v.value!==""?"q-pr-md":""]),onClick:se},null,8,["name","class"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(J,{size:"3px"}),t(Z,{class:"q-pa-xs"},{default:r(()=>[d("div",{style:W(P.value),class:q(["q-editor q-py-sm",s(l).dark.isActive?"bg-dark":"bg-white"])},[t(qe,{dense:"",nodes:I.value,"node-key":"id",filter:v.value,expanded:C.value,"onUpdate:expanded":a[2]||(a[2]=e=>C.value=e),"no-connectors":"",selected:_.value,"onUpdate:selected":a[3]||(a[3]=e=>_.value=e),onClick:le},{"header-folder":r(e=>[d("div",Ae,[t(s(u),{color:"blue",size:"12px",class:"q-mr-sm",name:e.node.icon||"share"},null,8,["name"]),d("div",Be,g(o.$te(e.node.labelExt)?o.$t(e.node.labelExt):e.node.label),1)])]),"header-file":r(e=>[d("div",Ue,[t(s(u),{color:e.node.docAyn==="Y"?s(l).dark.isActive?"white":"dark":s(l).dark.isActive?"grey-7":"grey-5",class:q([e.node.docAyn==="Y"?"text-bold":"","q-mr-sm"]),size:"12px",name:e.node.icon||"share"},null,8,["color","class","name"]),d("div",{class:q(e.node.docAyn==="Y"?s(l).dark.isActive?"text-bold text-white":"text-bold text-dark":s(l).dark.isActive?"text-grey-5":"text-grey-7")},g(o.$te(e.node.labelExt)?o.$t(e.node.labelExt):e.node.label),3)])]),"default-header":r(e=>[d("div",Ne,[t(s(u),{color:s(l).dark.isActive?"white":"dark",size:"12px",class:"q-mr-sm",name:e.node.icon||"share"},null,8,["color","name"]),d("div",$e,g(o.$te(e.node.labelExt)?o.$t(e.node.labelExt):e.node.label),1)])]),_:1},8,["nodes","filter","expanded","selected"])],6)]),_:1})]),_:1})]),d("div",Pe,[t(U,{bordered:""},{default:r(()=>[t(O,{class:"q-px-sm"},{default:r(()=>[t(s(u),{name:"list_alt"}),Te,t(B),E.value?(x(),S(ye,{key:0,size:"sm",outline:"",color:c.color,class:"q-px-md"},{default:r(()=>[t(s(u),{name:c.icon,class:"q-mr-sm",size:"15px"},null,8,["name"]),N(" "+g(c.message),1)]),_:1},8,["color"])):D("",!0)]),_:1}),t(Y,{align:"right",class:"q-pa-none"},{default:r(()=>[t(K,{class:"row"},{default:r(()=>[m.value?(x(),ke("span",Fe,g(z.value)+" ( "+g(m.value)+" )",1)):D("",!0),t(B),m.value?(x(),S(s(X),{key:1,outline:"",dense:"",color:"primary",onClick:re,class:"q-px-sm q-mr-sm"},{default:r(()=>[t(s(u),{class:"q-mr-xs",name:"save",size:"xs"}),N(" \uC800\uC7A5 ")]),_:1})):D("",!0),k.value?(x(),S(s(X),{key:2,outline:"",dense:"",color:"negative",onClick:ie,class:"q-px-sm q-mr-sm"},{default:r(()=>[t(s(u),{class:"q-mr-xs",name:"delete",size:"xs"}),N(" \uC0AD\uC81C ")]),_:1})):D("",!0)]),_:1})]),_:1}),t(J,{size:"3px"}),t(Z,{class:"q-pa-xs"},{default:r(()=>[t(U,{flat:"",bordered:"",class:"q-ma-xs q-pa-none"},{default:r(()=>[t(De,{disable:!m.value,class:"q-editor",style:W(P.value),ref_key:"contentsFocus",ref:F,modelValue:i.value.contents,"onUpdate:modelValue":a[4]||(a[4]=e=>i.value.contents=e),dense:s(l).screen.lt.md,toolbar:[[{label:s(l).lang.editor.align,icon:s(l).iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:s(l).lang.editor.align,icon:s(l).iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:s(l).lang.editor.formatting,icon:s(l).iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:s(l).lang.editor.fontSize,icon:s(l).iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:s(l).lang.editor.defaultFont,icon:s(l).iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["disable","style","modelValue","dense","toolbar"])]),_:1})]),_:1})]),_:1})])])]),_:1}))}};var ca=pe(Le,[["__scopeId","data-v-2c1e4770"]]);export{ca as default};
