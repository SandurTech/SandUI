import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as S}from"./index-CqIc3cxq.js";import{P as i}from"./index-CbwltWip.js";const h="_badge_1432t_1",_="_info_1432t_20",y="_success_1432t_26",B="_warning_1432t_32",x="_error_1432t_38",l={badge:h,default:"_default_1432t_15",info:_,success:y,warning:B,error:x},e=S.forwardRef(({className:p,variant:u="default",children:g,...m},f)=>{const v=[l.badge,l[u],p||""].filter(Boolean).join(" ");return a.jsx("span",{ref:f,className:v,...m,children:g})});e.propTypes={className:i.string,variant:i.oneOf(["default","success","warning","error"]),children:i.node.isRequired};e.displayName="SandBadge";e.__docgenInfo={description:`SandBadge - A small status label.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for overrides.
@param {string} [props.variant='default'] - Visual style: 'default', 'success', 'warning', or 'error'.
@param {React.ReactNode} props.children - Badge content.
@returns {React.ReactElement} The rendered badge component.

@example
return (
  <SandBadge variant="success">New</SandBadge>
)`,methods:[],displayName:"SandBadge",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1}]},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};const j={title:"02. Atoms/SandBadge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error"]},children:{control:"text"}}},r={args:{children:"Default"}},s={args:{variant:"success",children:"Active"}},n={args:{children:"Disabled",style:{opacity:.5}}},t={args:{variant:"success",children:"Success"}},c={args:{variant:"warning",children:"Pending"}},o={args:{variant:"error",children:"Failed"}},d={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(e,{children:"Default"}),a.jsx(e,{variant:"success",children:"Active"}),a.jsx(e,{variant:"warning",children:"Pending"}),a.jsx(e,{variant:"error",children:"Failed"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    children: 'Disabled',
    style: {
      opacity: 0.5
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Pending'
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Failed'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const D=["Default","Active","Disabled","Success","Warning","Error","AllVariants"];export{s as Active,d as AllVariants,r as Default,n as Disabled,o as Error,t as Success,c as Warning,D as __namedExportsOrder,j as default};
