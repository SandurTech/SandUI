import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-vuvGCCVO.js";import{M as o}from"./index-DFAA0bQn.js";import"./index-CqIc3cxq.js";import"./iframe-D5pLEWME.js";import"./index-Cj_otjQe.js";import"./index-DFVzyPiA.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function i(n){const s={code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"01. Foundations/Spacing"}),`
`,e.jsx(s.h1,{id:"spacing-system",children:"Spacing System"}),`
`,e.jsxs(s.p,{children:["SandUI uses a strict ",e.jsx(s.strong,{children:"8px grid"})," for all spacing. This ensures visual consistency across every component and layout."]}),`
`,e.jsx(s.h2,{id:"scale",children:"Scale"}),`
`,e.jsx("div",{style:{fontFamily:"Inter, sans-serif"},children:[{token:"$space-1",value:"8px"},{token:"$space-2",value:"16px"},{token:"$space-3",value:"24px"},{token:"$space-4",value:"32px"},{token:"$space-5",value:"40px"},{token:"$space-6",value:"48px"}].map(({token:t,value:a})=>e.jsxs(s.div,{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px"},children:[e.jsx(s.code,{style:{width:"100px",fontSize:"13px"},children:t}),e.jsx(s.span,{style:{width:"48px",fontSize:"13px",color:"#666"},children:a}),e.jsx(s.div,{style:{width:a,height:"24px",backgroundColor:"orange",borderRadius:"4px",opacity:.8}})]},t))}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-scss",children:`@use "styles/variables" as *;

.component {
  padding: $space-2; // 16px
  margin-bottom: $space-3; // 24px
  gap: $space-1; // 8px
}
`})}),`
`,e.jsx(s.h2,{id:"why-8px",children:"Why 8px?"}),`
`,e.jsx(s.p,{children:`The 8px grid is the industry standard used by Material Design, Ant Design, and most professional design systems.
It scales cleanly across device densities and makes spacing decisions systematic rather than arbitrary.`})]})}function y(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default};
