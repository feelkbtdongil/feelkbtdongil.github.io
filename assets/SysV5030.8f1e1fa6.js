import{R as le,r as p,o as A,S as q,j as ne,p as oe,U as H,V as P,W as l,a7 as re,n as a,a5 as g,Z as r,a2 as m,X as ie,Y as de,a1 as v,$ as n,bu as D,ab as ce,a6 as ue,a9 as pe,aa as y,bE as O,a0 as me,b8 as _e,b9 as fe}from"./index.07fc3cde.js";import{Q as ge}from"./QBanner.bf865535.js";import{Q as B}from"./QItemLabel.848dda36.js";import{Q as L}from"./QSpace.ddaf28ca.js";import{Q as ve}from"./QSelect.3c86eb28.js";import{$ as o,_ as he}from"./IconList.cfe89e04.js";import{u as ye}from"./use-quasar.9559018b.js";import{j as M,n as be}from"./json-util.73e249df.js";import"./QField.2ae85778.js";import"./QItemSection.345ae796.js";import"./QMenu.8bcf41ca.js";import"./position-engine.7c438a6d.js";import"./selection.ae892694.js";import"./rtl.276c3f1b.js";import"./_commonjsHelpers.b8add541.js";const _=S=>(_e("data-v-3c861c28"),S=S(),fe(),S),xe=_(()=>n("span",{class:"text-subtitle1 text-bold"}," \uC990\uACA8\uCC3E\uAE30 \uBA54\uB274\uC124\uC815 \uC791\uC5C5\uC785\uB2C8\uB2E4.",-1)),je=_(()=>n("br",null,null,-1)),Se=_(()=>n("br",null,null,-1)),we=_(()=>n("span",{class:"material-icons-outlined"}," folder ",-1)),Ie=_(()=>n("br",null,null,-1)),ze=_(()=>n("br",null,null,-1)),ke=_(()=>n("br",null,null,-1)),Te=_(()=>n("br",null,null,-1)),Ne={class:"row q-col-gutter-sm"},qe={class:"col-12 col-md-6 col-lg-3"},Ce={id:"progTree",ref:"progTree"},Ve={class:"col-12 col-md-6 col-lg-4"},Qe={class:"row q-pa-sm"},De={class:"col-3"},Oe={class:"col-9 text-right q-gutter-xs"},Be={id:"menuTree",ref:"menuTree"},Re={class:"col-12 col-md-6 col-lg-5"},Ue={class:"row q-pa-sm"},Ee={__name:"SysV5030",setup(S){const C=ye(),Z=p(""),R=p("");let w="";const $=t=>{let e=o("#menuTree").jstree(!0),s=e.get_selected();if(w=e.get_icon(s),R.value=t,!s.length)return h("\uC548\uB0B4","\uBA54\uB274\uC124\uC815 \uBAA9\uB85D\uC5D0\uC11C \uBA54\uB274\uB97C \uC120\uD0DD\uD558\uC138\uC694"),!1;e.set_icon(s,t)},F=()=>{if(w!==""){let t=o("#menuTree").jstree(!0),e=t.get_selected();if(!e.length)return h("\uC548\uB0B4","\uC120\uD0DD\uB41C \uBA54\uB274\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),!1;t.set_icon(e,w),w=""}else h("\uC548\uB0B4","\uBCC0\uACBD\uB41C \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")},I=p(null),c=p([]),d=p([]);A(()=>{o("#progTree").jstree({core:{data:c.value},plugins:["dnd","search","json_data","types"],search:{case_insensitive:!0,show_only_matches:!0,show_only_matches_children:!0}}),U(),o("#menuTree").jstree({core:{multiple:!0,themes:{responsive:!1},check_callback:!0,data:d.value},types:{"#":{max_depth:5},file:{icon:"fa-regular fa-file",max_children:0,max_depth:0},default:{icon:"fa-solid fa-folder-open"}},plugins:["dnd","contextmenu","state","types"],contextmenu:{items:function(t){let e=o("#menuTree").jstree(!0);return{Create:{separator_before:!1,separator_after:!1,label:"\uC2E0\uADDC \uB4F1\uB85D",action:function(s){t=e.create_node(t),e.edit(t)}},Rename:{separator_before:!1,separator_after:!1,label:"\uC774\uB984 \uBCC0\uACBD",action:function(s){e.edit(t)}},Remove:{separator_before:!1,separator_after:!1,label:"\uD56D\uBAA9 \uC0AD\uC81C",action:function(s){e.delete_node(t)}}}}}}).on("changed.jstree",function(t,e){o("#treeMessageView").html('<span class="text-red">\uC120\uD0DD\uC790</span> : ( '+e.instance.get_node(e.selected[0]).parent+" ) : ( "+e.instance.get_node(e.selected[0]).id+" ) : ( <span class='text-blue'>"+e.instance.get_node(e.selected[0]).text+"</span> )"),o("#treeMessageView").html('<span class="text-red">\uC120\uD0DD\uC790</span> : ( '+e.instance.get_node(e.selected[0]).parent+" ) : ( "+e.instance.get_node(e.selected[0]).id+" ) : ( <span class='text-blue'>"+e.instance.get_node(e.selected[0]).text+"</span> ) : ( <span class='text-red'>"+JSON.stringify(e.instance.get_node(e.selected[0]))+"</span> )")}).bind("loaded.jstree",function(t,e){}).bind("create_node.jstree",function(t,e){}).bind("rename_node.jstree",function(t,e){}).bind("move_node.jstree",function(t,e){}).bind("delete_node.jstree",function(t,e){console.log("delete data old : 	"+e.node),console.log("delete data : 		"+e.node.id+" = "+e.node.parent+" = "+e.node.text);let s,x=[],u=[];s={mode:"D",data:{menuId:e.node.id}},u.push(JSON.stringify(s)),o("#"+e.node.id).find("li").each((k,T)=>{let N={};N.menuId=T.id,console.log("del id : "+T.id),s={mode:"D",data:N},u.push(JSON.stringify(s))});let j=M.jsonFiller(x,u);console.log("del ::",u),JSON.stringify(j).replace(/null/gi,"")}),o(document).bind("dnd_stop.vakata",function(t,e){}).bind("dnd_start.vakata",function(t,e){}),z()});const G=()=>{if(!f.value)return h("\uC548\uB0B4","\uC0AC\uC6D0\uC744 \uC120\uD0DD\uD558\uC138\uC694"),!1;o("#menuTree").jstree("create_node","#",{text:"\uC0C8\uB85C\uC6B4 \uADF8\uB8F9\uBA85",type:"folder1"},"last")},K=()=>{let t=o("#menuTree").jstree(!0),e=t.get_selected();if(!e.length)return h("\uC548\uB0B4","\uADF8\uB8F9\uBA54\uB274\uB97C \uCD94\uAC00\uD560 \uBA54\uB274\uBAA9\uB85D\uC744 \uC120\uD0DD\uD558\uC138\uC694"),!1;e=e[0],e=t.create_node(e,{text:"\uC0C8\uB85C\uC6B4 \uADF8\uB8F9\uBA85",type:"folder2"}),e&&t.edit(e)},W=()=>{let t=o("#menuTree").jstree(!0).get_json("#",{flat:!0});if(t.length<=0)return h("\uC548\uB0B4","\uC800\uC7A5\uD560 \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"),!1;C.dialog({dark:!0,title:"\uC790\uB8CC\uC800\uC7A5",message:"\uC2DC\uC2A4\uD15C \uBA54\uB274\uC124\uC815\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",cancel:!0,persistent:!0}).onOk(()=>{let e=[],s=[],x="",u="",j="",k="";for(let i=0;i<t.length;i++)typeof t[i].a_attr.progId=="undefined"?k="":k=t[i].a_attr.progId,typeof t[i].a_attr.type=="undefined"?j="folder":j=t[i].a_attr.type,x={userId:f.value,groupCd:"",seq:i,menuId:t[i].id,menuParent:t[i].parent,progNm:t[i].text,progId:k,type:j,icon:t[i].icon,stateOpened:t[i].state.opened},u='{"mode":"I","data":'+JSON.stringify(x)+"}",e.push(u);u='{"mode":"D","data":'+JSON.stringify(x)+"}",s.push(u);let T=M.jsonFiller(e,s),N=JSON.stringify(T).replace(/null/gi,"");X(N)}).onCancel(()=>{}).onDismiss(()=>{})};async function X(t){try{let e=await te(t);be.notifyView(e)}catch(e){console.log("Error while saving data:",e)}}const Y=t=>{const e=t.target.value;o("#progTree").jstree("search",e)};function h(t,e){C.dialog({dark:!0,title:t,message:e}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})}const U=()=>{ee(),c.value=[],q.post("/api/sys/sys5020_prog_list",{}).then(t=>{c.value=t.data.data;for(let e=0;e<c.value.length;e++)if(c.value[e].parent!=="#"){let s={};s.progId=c.value[e].id,s.type="file",c.value[e].a_attr=s}else{let s={};s.progId="",s.type="folder",c.value[e].a_attr=s}o("#progTree").jstree(!0).settings.core.data=c.value,o("#progTree").jstree(!0).refresh()}).catch(t=>{console.error("Error fetching users:",t)})},z=()=>{d.value=[],console.log("menuReloadBtn"),q.post("/api/sys/sys5030_fav_menu_list",{paramUserId:f.value}).then(t=>{if(console.log("res :::: ",t.data),t.data.data.length>0){d.value=t.data.data;for(let e=0;e<d.value.length;e++){let s=new Object;s.opened=d.value[e].stateOpened,d.value[e].state=s,s=new Object,s.progId=d.value[e].progId,s.type=d.value[e].type,d.value[e].a_attr=s}}else d.value={id:"j1_1",parent:"#",seq:0,text:"\uC0C8\uB85C\uC6B4 \uADF8\uB8F9\uBA85",icon:"fa fa-folder-open"};o("#menuTree").jstree(!0).settings.core.data=d.value,o("#menuTree").jstree(!0).refresh()}).catch(t=>{console.error("Error fetching users:",t)})},b=p([]),f=p(null),ee=async()=>{try{const t=await q.post("/api/sys/sys1010_list",{paramDeptCd:""});b.value=t.data.data,b.value.sort((e,s)=>e.userNm<s.userNm?-1:e.userNm>s.userNm?1:0),b.value.forEach(e=>{f.value||(f.value=e.userId),b.value.push({userId:e.userId,userNm:e.userNm})}),z()}catch(t){console.error("Error fetching users:",t)}},te=async t=>{console.log("saveData:: ",JSON.stringify(t));let e=0;try{await q.post("/api/sys/sys5030_fav_save",t).then(s=>{e=s.data.rtn}).catch(s=>{console.error("Error fetching users:",s),e=3})}catch(s){console.log("error >> ",s),e=4}return e},se=t=>{console.log("selected user: ",t),z()},E=p(500),V=ne(()=>({height:`${E.value}px`})),J=p(0),ae=t=>(J.value=t,{minHeight:t?`calc(100vh - ${t}px)`:"100vh"}),Q=()=>{E.value=window.innerHeight-J.value-380};return oe(()=>{window.removeEventListener("resize",Q)}),A(()=>{window.addEventListener("resize",Q),Q()}),(t,e)=>(H(),P(re,{class:"q-pa-xs-xs q-pa-sm-md","style-fn":ae},{default:l(()=>[a(ge,{rounded:"",class:ie(de(C).dark.isActive?"bg-grey-9":"bg-grey-3")},{avatar:l(()=>[a(g,{name:"menu_book",color:"primary"})]),default:l(()=>[xe,je,r(" 1. \uD504\uB85C\uADF8\uB7A8 \uBAA9\uB85D\uC740 \uBAA8\uB4E0 \uD504\uB85C\uADF8\uB7A8\uC758 \uBAA9\uB85D\uC744 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."),Se,we,r(" 2. \uBA54\uB274\uC131\uC815 \uBAA9\uB85D\uC740 \uBA54\uC778\uADF8\uB8F9\uBA85\uC744 \uC120\uD0DD\uD558\uBA74 \uC124\uC815\uB418\uC5B4 \uC788\uB294 \uBAA9\uB85D\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. (\uCD08\uAE30\uC2DC \uD5E4\uB354\uD3F4\uB354\uB9CC \uBCF4\uC5EC\uC90D\uB2C8\uB2E4) "),Ie,r(" 3. "),a(m,{disable:"",padding:"0 sm",outline:"",size:"sm",icon:"add",label:"Root"}),r(" \uBC84\uD2BC\uC740 \uBA54\uB274\uC758 \uCC98\uC74C \uADF8\uB8F9\uBA85\uC744 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4. "),ze,r(" 4. "),a(m,{disable:"",padding:"0 sm",outline:"",size:"sm",icon:"add",label:"Select"}),r(" \uBC84\uD2BC\uC740 \uBA54\uB274\uC5D0\uC11C \uC120\uD0DD\uB41C \uADF8\uB8F9\uBA54\uB274\uBA85 \uC548\uC5D0 \uADF8\uB8F9\uBA85\uC744 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4. "),ke,r(" 5. \uBA54\uB274\uC124\uC815 \uBAA9\uB85D\uC5D0\uC11C \uBA54\uB274\uB97C \uC120\uD0DD\uD558\uACE0 \uC6B0\uCE21\uB9C8\uC6B0\uC2A4\uB97C \uD074\uB9AD\uD558\uBA74 \uC791\uC5C5\uBA54\uB274\uAC00 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. (\uC2E0\uADDC\uB4F1\uB85D, \uC774\uB984\uBCC0\uACBD, \uD56D\uBAA9\uC0AD\uC81C) "),Te,r(" 6. \uD504\uB85C\uADF8\uB7A8\uC758 \uBAA9\uB85D\uC744 \uC120\uD0DD\uD558\uACE0 \uBA54\uB274\uC124\uC815 \uBAA9\uB85D\uC73C\uB85C \uB4DC\uB798\uADF8\uD558\uC5EC \uC6D0\uD558\uB294 \uC704\uCE58\uC5D0 \uD504\uB85C\uADF8\uB7A8\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. (\uC124\uC815\uC774 \uC644\uB8CC\uB418\uBA74 "),a(m,{disable:"",padding:"0 sm",outline:"",size:"sm",icon:"save_alt",label:"\uC800\uC7A5"}),r(" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uC124\uC815\uB41C \uBA54\uB274\uB97C \uB4F1\uB85D \uD569\uB2C8\uB2E4. (\uC791\uC5C5\uC644\uB8CC) ")]),_:1},8,["class"]),a(v,{class:"q-my-md /"}),n("div",Ne,[n("div",qe,[a(y,null,{default:l(()=>[a(D,{class:"text-center"},{default:l(()=>[a(B,{class:"text-h6"},{default:l(()=>[r("\uD504\uB85C\uADF8\uB7A8 \uBAA9\uB85D")]),_:1})]),_:1}),a(v,{size:"3px",class:"q-mb-xs"}),a(ce,null,{default:l(()=>[a(m,{padding:"xs sm",outline:"",size:"sm",onClick:U},{default:l(()=>[a(g,{name:"refresh"}),r("\uB2E4\uC2DC\uBD88\uB7EC\uC624\uAE30")]),_:1}),a(L),a(ue,{dense:"",class:"super-small",label:"\uAC80\uC0C9",modelValue:I.value,"onUpdate:modelValue":e[1]||(e[1]=s=>I.value=s),"input-style":{fontSize:"14px",width:"100px"},onKeyup:Y},{append:l(()=>[I.value!==""?(H(),P(g,{key:0,name:"close",onClick:e[0]||(e[0]=s=>I.value=""),class:"cursor-pointer",size:"xs"})):pe("",!0),a(g,{size:"xs",name:"search"})]),_:1},8,["modelValue"])]),_:1}),a(v,{size:"2px",class:"q-mb-sm"}),a(y,{class:"q-pa-md scrollable-card",style:O(V.value)},{default:l(()=>[n("div",Ce,null,512)]),_:1},8,["style"])]),_:1})]),n("div",Ve,[a(y,null,{default:l(()=>[a(D,{class:"text-center"},{default:l(()=>[a(B,{class:"text-h6"},{default:l(()=>[r("\uBA54\uB274\uC124\uC815 \uBAA9\uB85D")]),_:1})]),_:1}),a(v,{size:"3px",class:"q-mb-xs"}),n("div",Qe,[n("div",De,[a(ve,{style:{width:"100px"},dense:"","label-color":"orange",class:"super-small",label:"\uC0AC\uC6A9\uC790",modelValue:f.value,"onUpdate:modelValue":[e[2]||(e[2]=s=>f.value=s),se],options:b.value,"option-value":"userId","option-label":"userNm","options-dense":"","emit-value":"","map-options":""},null,8,["modelValue","options"])]),n("div",Oe,[a(m,{padding:"xs sm",outline:"",size:"sm",icon:"refresh",onClick:z}),a(m,{padding:"xs sm",outline:"",size:"sm",onClick:G},{default:l(()=>[a(g,{name:"add"}),r("\uADF8\uB8F9\uBA85")]),_:1}),a(m,{padding:"xs sm",outline:"",size:"sm",onClick:K},{default:l(()=>[a(g,{name:"add"}),r("\uC120\uD0DD\uADF8\uB8F9\uBA85")]),_:1}),a(m,{padding:"xs sm",outline:"",size:"sm",onClick:W},{default:l(()=>[a(g,{name:"save_alt"}),r("\uC800\uC7A5")]),_:1})])]),a(v,{size:"2px",class:"q-mb-sm"}),a(y,{class:"q-pa-md scrollable-card",style:O(V.value)},{default:l(()=>[n("div",Be,null,512)]),_:1},8,["style"])]),_:1})]),n("div",Re,[a(y,null,{default:l(()=>[a(D,{class:"text-center"},{default:l(()=>[a(B,{class:"text-h6"},{default:l(()=>[r("\uC544\uC774\uCF58 \uBAA9\uB85D")]),_:1})]),_:1}),a(v,{size:"3px",class:"q-mb-xs"}),n("div",Ue,[n("span",null,"Icon : "+me(R.value),1),a(L),a(m,{padding:"xs sm",outline:"",size:"sm",icon:"refresh",label:"\uC544\uC774\uCF58 \uB418\uB3CC\uB9AC\uAE30",onClick:F})]),a(v,{size:"2px",class:"q-mb-sm"}),a(y,{class:"q-pa-md scrollable-card",style:O(V.value)},{default:l(()=>[a(he,{"icon-value":Z.value,onUpdate:$},null,8,["icon-value"])]),_:1},8,["style"])]),_:1})])])]),_:1}))}};var tt=le(Ee,[["__scopeId","data-v-3c861c28"]]);export{tt as default};
