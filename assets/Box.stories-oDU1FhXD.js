import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./index-CqIc3cxq.js";import{P as e}from"./index-CbwltWip.js";const f="_box_160ue_51",v={box:f},r=b.forwardRef(function({as:p="div",className:l,children:m,p:i,m:c,style:u,...x},y){const g=p,h={...i!==void 0?{padding:`${i*8}px`}:{},...c!==void 0?{margin:`${c*8}px`}:{},...u};return a.jsx(g,{ref:y,className:`${v.box} sandui-globals ${l||""}`,style:h,...x,children:m})});r.propTypes={as:e.elementType,className:e.string,children:e.node,p:e.number,m:e.number,style:e.object};r.displayName="SandBox";r.__docgenInfo={description:`SandBox - A fundamental layout building block.
Uses an 8px scale for padding and margin props.

@component
@param {Object} props
@param {React.ElementType} [props.as='div'] - The HTML element to render.
@param {string} [props.className] - Additional CSS class for external overrides.
@param {React.ReactNode} [props.children] - Box content.
@param {number} [props.p] - Padding multiplier (x 8px).
@param {number} [props.m] - Margin multiplier (x 8px).
@param {Object} [props.style] - Additional inline styles.
@returns {React.ReactElement} The rendered box component.

@example
return (
  <SandBox as="section" p={2} m={1}>
    Box Content
  </SandBox>
)`,methods:[],displayName:"SandBox",props:{as:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"elementType"},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},p:{description:"",type:{name:"number"},required:!1},m:{description:"",type:{name:"number"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};const T={title:"03. Molecules/SandBox",component:r,tags:["autodocs"],argTypes:{as:{control:"select",options:["div","section","article","aside","main"],description:"HTML element to render as."},children:{control:"text"}}},n={args:{children:"The foundational Box layout primitive with inherited SandUI styles."}},s={args:{children:"Active box state",style:{background:"var(--theme-surface-variant)"}}},t={args:{children:"Disabled box state",style:{opacity:.5}}},o={name:"As <section>",args:{as:"section",children:"Rendered as a semantic <section> element.",style:{padding:"32px"}}},d={name:"Nested Boxes",render:()=>a.jsxs(r,{style:{padding:"24px"},children:[a.jsx("h3",{style:{marginBottom:"16px",color:"var(--theme-text)"},children:"Parent Box"}),a.jsx(r,{style:{padding:"16px",background:"var(--theme-surface)",borderRadius:"8px",border:"1px solid var(--theme-border)"},children:a.jsx("p",{style:{color:"var(--theme-text-muted)"},children:"Nested child with surface background."})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'The foundational Box layout primitive with inherited SandUI styles.'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Active box state',
    style: {
      background: 'var(--theme-surface-variant)'
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled box state',
    style: {
      opacity: 0.5
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'As <section>',
  args: {
    as: 'section',
    children: 'Rendered as a semantic <section> element.',
    style: {
      padding: '32px'
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const j=["Default","Active","Disabled","AsSection","Nested"];export{s as Active,o as AsSection,n as Default,t as Disabled,d as Nested,j as __namedExportsOrder,T as default};
