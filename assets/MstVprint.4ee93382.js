import{p as e}from"./print.22a271a6.js";import{U as p,a8 as l,$ as t,bQ as d}from"./index.07fc3cde.js";import"./_commonjsHelpers.b8add541.js";const r=d('<div>\uD504\uB9B0\uD2B8 \uD14C\uC2A4\uD2B8</div><div id="content"><div id="print-section"><div class="header"><span class="text-h5 text-bold text-red"> This will be printed.</span></div></div><div class="no-print">This will not be printed.</div></div>',2),f={__name:"MstVprint",setup(c){const o=()=>{e({printable:"print-section",type:"html",css:"src/css/quasar.css",scanStyles:!1})},n=()=>{e({printable:a,properties:[{field:"name",displayName:"\uC774\uB984"},{field:"email",displayName:"\uC774\uBA54\uC77C"},{field:"phone",displayName:"\uC804\uD654\uBC88\uD638"},{field:"phone1",displayName:"\uBC88\uD6381"},{field:"phone2",displayName:"\uBC88\uD6382"},{field:"phone3",displayName:"\uBC88\uD6383"},{field:"phone4",displayName:"\uBC88\uD6384"},{field:"phone5",displayName:"\uBC88\uD6385"}],type:"json",gridHeaderStyle:"color: red;  border: 2px solid #3971A5;",gridStyle:"border: 2px solid #3971A5;",header:`
    <h3 class="custom-h3">My custom header</h3>
    <p class="custom-title">Start Date: 2024-01-01 ~ 2024-02-29</p>
  `,style:".custom-h3 { color: red; text-align: center} .custom-title { text-align: right; color: blue}"})},a=[{name:"John Doe",email:"john@doe.com",phone:"111-111-1111",phone1:"111-111-1111",phone2:"111-111-1111",phone3:"111-111-1111",phone4:"111-111-1111",phone5:"111-111-1111"},{name:"Barry Allen",email:"barry@flash.com",phone:"222-222-2222",phone1:"111-111-1111",phone2:"111-111-1111",phone3:"111-111-1111",phone4:"111-111-1111",phone5:"111-111-1111"},{name:"Cool Dude",email:"cool@dude.com",phone:"333-333-3333",phone1:"111-111-1111",phone2:"111-111-1111",phone3:"111-111-1111",phone4:"111-111-1111",phone5:"111-111-1111"}];return(i,s)=>(p(),l("div",null,[r,t("button",{onClick:o},"Print"),t("button",{onClick:n},"Print")]))}};export{f as default};
