import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-vuvGCCVO.js";import{M as d}from"./index-8rLfRsGp.js";import"./index-CqIc3cxq.js";import"./iframe-IQPjzxL5.js";import"./index-Cj_otjQe.js";import"./index-DFVzyPiA.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function t(o){const n={code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"01. Foundations/Shadows"}),`
`,e.jsx(n.h1,{id:"shadows",children:"Shadows"}),`
`,e.jsx(n.p,{children:"SandUI provides three shadow levels for elevation hierarchy."}),`
`,e.jsx("div",{style:{fontFamily:"Inter, sans-serif",display:"flex",gap:"24px",flexWrap:"wrap",marginTop:"24px"},children:[{name:"Small",token:"$shadow-sm",value:"0 4px 12px rgba(0,0,0,0.05)"},{name:"Medium",token:"$shadow-md",value:"0 12px 30px rgba(0,0,0,0.1)"},{name:"Large",token:"$shadow-lg",value:"0 20px 40px rgba(0,0,0,0.15)"}].map(({name:s,token:a,value:i})=>e.jsxs(n.div,{style:{width:"200px",height:"120px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:i,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"4px"},children:[e.jsx(n.strong,{style:{fontSize:"15px"},children:s}),e.jsx(n.code,{style:{fontSize:"12px",color:"#888"},children:a})]},s))}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use "styles/variables" as *;

.card {
  box-shadow: $shadow-sm;
}
.card:hover {
  box-shadow: $shadow-md;
}
.modal {
  box-shadow: $shadow-lg;
}
`})}),`
`,e.jsx(n.h2,{id:"glow-effect",children:"Glow Effect"}),`
`,e.jsxs(n.p,{children:["For accent-highlighted elements, use the ",e.jsx(n.code,{children:"$glow"})," token:"]}),`
`,e.jsx("div",{style:{marginTop:"16px"},children:e.jsx("div",{style:{width:"200px",height:"60px",backgroundColor:"orange",borderRadius:"8px",boxShadow:"0 8px 20px rgba(255,165,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:600,fontSize:"14px"},children:e.jsx(n.p,{children:"$glow"})})})]})}function j(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{j as default};
