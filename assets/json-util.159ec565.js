import{bf as g}from"./index.7f77393b.js";g.registerType("my-notify",{icon:"announcement",progress:!0,color:"brown",textColor:"white",classes:"glossy"});const c=[{color:"positive",message:"\uC790\uB8CC\uB97C \uC800\uC7A5\uD558\uC600\uC2B5\uB2C8\uB2E4",caption:"\uC790\uB8CC\uC800\uC7A5",icon:"thumb_up",type:"positive",textColor:"dark"},{color:"negative",message:"\uBE44\uC815\uC0C1 \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4",caption:"\uCC98\uB9AC\uC2E4\uD328",icon:"thumb_up",type:"positive",textColor:"white"},{color:"info",message:"\uC790\uB8CC\uB97C \uC800\uC7A5\uD558\uC600\uC2B5\uB2C8\uB2E4",caption:"\uC120\uD0DD\uB41C \uC790\uB8CC\uC0AD\uC81C",icon:"thumb_up",type:"positive",textColor:"red"},{color:"negative",message:"\uC800\uC7A5\uC2E4\uD328!",caption:"error",icon:"warning",type:"negative",textColor:""},{color:"teal",message:"\uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694!",caption:"error",icon:"tag_faces",type:"warning",textColor:""},{multiLine:!0,message:"Lorem ipsum dolor sit amet, consecrate radicalising elite. Hic squamous non ad sit assume consequent ease inventory official. Corrupt cisgendered impeded vel, fugit edit squamous qua poor excitation event quasi."}];var D={notifyView(o){g.create({type:"my-notify",position:"top-right",color:c[o.rtn].color,textColor:c[o.rtn].textColor,caption:c[o.rtn].caption,message:o.rtnMsg,group:!1,actions:[{label:"\uB2EB\uAE30",color:"dark",handler:()=>{}}],timeout:5e3})}},j={dataJsonParse(o,s){let e=JSON.stringify(s),i=[],n=[];o==="I"?i[0]='{"mode":"I","data":'+e+"}":o==="U"?i[0]='{"mode":"U","data":'+e+"}":o==="A"?i[0]='{"mode":"A","data":'+e+"}":o==="S"?i[0]='{"mode":"S","data":'+e+"}":o==="R"?i[0]='{"mode":"R","data":'+e+"}":o==="N"?i[0]='{"mode":"N","data":'+e+"}":o==="D"&&(n[0]='{"mode":"D","data":'+e+"}");let r=this.jsonFiller(i,n);return JSON.stringify(r).replace(/null/gi,"")},jsonFiller(o,s){let e={},i=[],n=[],r=[],p=[],m=[],f=[],d=[];if(o.length>0){for(let l=0;l<o.length;l++){let t=JSON.parse(o[l]);t.mode==="I"?(Object.keys(t.data).forEach(a=>{t.data[a]=t.data[a]===null?"":t.data[a]}),i.push(t.data)):t.mode==="U"?(Object.keys(t.data).forEach(a=>{t.data[a]=t.data[a]===null?"":t.data[a]}),n.push(t.data)):t.mode==="N"?(Object.keys(t.data).forEach(a=>{t.data[a]=t.data[a]===null?"":t.data[a]}),r.push(t.data)):t.mode==="R"?(Object.keys(t.data).forEach(a=>{t.data[a]=t.data[a]===null?"":t.data[a]}),f.push(t.data)):t.mode==="A"?(Object.keys(t.data).forEach(a=>{t.data[a]=t.data[a]===null?"":t.data[a]}),p.push(t.data)):t.mode==="S"&&(Object.keys(t.data).forEach(a=>{t.data[a]=t.data[a]===null?"":t.data[a]}),m.push(t.data))}e.I=i,e.U=n,e.N=r,e.A=p,e.S=m,e.R=f}else e.I=[],e.U=[],e.N=[],e.A=[],e.S=[],e.R=[];if(d=[],s.length>0){for(let l=0;l<s.length;l++){let t=JSON.parse(s[l]);Object.keys(t.data).forEach(a=>{t.data[a]=t.data[a]===null?"":t.data[a]}),d.push(t.data)}e.D=d}else e.D=[];let u={};return u.no1=e,u}};export{j,D as n};
