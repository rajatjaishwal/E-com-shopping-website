(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(4),c=a.n(r),s=(a(14),a(2));var i=()=>{const[e,t]=Object(l.useState)(""),[a,r]=Object(l.useState)(""),[c,i]=Object(l.useState)(""),[o,u]=Object(l.useState)(!1);return n.a.createElement("div",null,n.a.createElement("center",null,n.a.createElement("h2",null,"User Authentication")),o?n.a.createElement("p",null,"Welcome, you are authenticated!"):n.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{const t=await fetch("/sample_user_data.xlsx"),l=await t.arrayBuffer(),n=s.a(l,{type:"array"}),r=n.Sheets[n.SheetNames[0]];(t=>{t.find(t=>t.Email===e&&t.Password.toString()===a)?u(!0):(u(!1),i("Invalid email or password."))})(s.b.sheet_to_json(r))}catch(c){i("Failed to load user data from Excel."),console.error(c)}},style:{maxWidth:"300px",margin:"0 auto"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("label",{style:{display:"block",width:"100%"}},"Email:"),n.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Enter email",required:!0,style:{display:"block",width:"100%"}})),n.a.createElement("br",null),n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("label",{style:{display:"block",width:"100%"}},"Password:"),n.a.createElement("input",{type:"password",value:a,onChange:e=>r(e.target.value),placeholder:"Enter password",required:!0,style:{display:"block",width:"100%"}})),n.a.createElement("br",null),c&&n.a.createElement("p",{style:{color:"red",textAlign:"center"}},c),n.a.createElement("center",null,n.a.createElement("button",{type:"submit"},"Submit"))))};var o=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),o()},5:function(e,t,a){e.exports=a(15)}},[[5,1,2]]]);
//# sourceMappingURL=main.ab0e7587.chunk.js.map