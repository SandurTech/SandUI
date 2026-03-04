import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as f}from"./index-CqIc3cxq.js";import{P as d}from"./index-CbwltWip.js";const v="_badge_1432t_1",_="_info_1432t_20",S="_success_1432t_26",h="_warning_1432t_32",x="_error_1432t_38",o={badge:v,default:"_default_1432t_15",info:_,success:S,warning:h,error:x},e=f.forwardRef(({className:i,variant:l="default",children:u,...g},p)=>{const m=[o.badge,o[l],i||""].filter(Boolean).join(" ");return a.jsx("span",{ref:p,className:m,...g,children:u})});e.propTypes={className:d.string,variant:d.oneOf(["default","success","warning","error"]),children:d.node.isRequired};e.displayName="SandBadge";e.__docgenInfo={description:`SandBadge - A small status label.
@param {string} variant - 'default' | 'success' | 'warning' | 'error'.
@param {string} className - Additional CSS class for overrides.`,methods:[],displayName:"SandBadge",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1}]},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};const j={title:"02. Atoms/SandBadge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error"]},children:{control:"text"}}},r={args:{children:"Default"}},s={args:{variant:"success",children:"Active"}},n={args:{variant:"warning",children:"Pending"}},t={args:{variant:"error",children:"Failed"}},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(e,{children:"Default"}),a.jsx(e,{variant:"success",children:"Active"}),a.jsx(e,{variant:"warning",children:"Pending"}),a.jsx(e,{variant:"error",children:"Failed"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Active'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Pending'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Failed'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <SandBadge>Default</SandBadge>
      <SandBadge variant="success">Active</SandBadge>
      <SandBadge variant="warning">Pending</SandBadge>
      <SandBadge variant="error">Failed</SandBadge>
    </div>
}`,...c.parameters?.docs?.source}}};const A=["Default","Success","Warning","Error","AllVariants"];export{c as AllVariants,r as Default,t as Error,s as Success,n as Warning,A as __namedExportsOrder,j as default};
