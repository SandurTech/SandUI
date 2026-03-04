import{j as s}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./index-CqIc3cxq.js";import{P as e}from"./index-CbwltWip.js";const g="_box_160ue_51",f={box:g},n=y.forwardRef(function({as:i="div",className:c,children:l,p:o,m:d,style:p,...m},u){const x=i,h={...o!==void 0?{padding:`${o*8}px`}:{},...d!==void 0?{margin:`${d*8}px`}:{},...p};return s.jsx(x,{ref:u,className:`${f.box} sandui-globals ${c||""}`,style:h,...m,children:l})});n.propTypes={as:e.elementType,className:e.string,children:e.node,p:e.number,m:e.number,style:e.object};n.displayName="SandBox";n.__docgenInfo={description:"",methods:[],displayName:"SandBox",props:{as:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"elementType"},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},p:{description:"",type:{name:"number"},required:!1},m:{description:"",type:{name:"number"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};const N={title:"03. Molecules/SandBox",component:n,tags:["autodocs"],argTypes:{as:{control:"select",options:["div","section","article","aside","main"],description:"HTML element to render as."},children:{control:"text"}}},r={args:{children:"The foundational Box layout primitive with inherited SandUI styles."}},t={name:"As <section>",args:{as:"section",children:"Rendered as a semantic <section> element.",style:{padding:"32px"}}},a={name:"Nested Boxes",render:()=>s.jsxs(n,{style:{padding:"24px"},children:[s.jsx("h3",{style:{marginBottom:"16px",color:"var(--theme-text)"},children:"Parent Box"}),s.jsx(n,{style:{padding:"16px",background:"var(--theme-surface)",borderRadius:"8px",border:"1px solid var(--theme-border)"},children:s.jsx("p",{style:{color:"var(--theme-text-muted)"},children:"Nested child with surface background."})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'The foundational Box layout primitive with inherited SandUI styles.'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'As <section>',
  args: {
    as: 'section',
    children: 'Rendered as a semantic <section> element.',
    style: {
      padding: '32px'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Nested Boxes',
  render: () => <SandBox style={{
    padding: '24px'
  }}>
      <h3 style={{
      marginBottom: '16px',
      color: 'var(--theme-text)'
    }}>Parent Box</h3>
      <SandBox style={{
      padding: '16px',
      background: 'var(--theme-surface)',
      borderRadius: '8px',
      border: '1px solid var(--theme-border)'
    }}>
        <p style={{
        color: 'var(--theme-text-muted)'
      }}>Nested child with surface background.</p>
      </SandBox>
    </SandBox>
}`,...a.parameters?.docs?.source}}};const j=["Default","AsSection","Nested"];export{t as AsSection,r as Default,a as Nested,j as __namedExportsOrder,N as default};
