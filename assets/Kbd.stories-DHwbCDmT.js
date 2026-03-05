import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./index-CqIc3cxq.js";import{P as o}from"./index-CbwltWip.js";const m="_kbd_r4nzw_1",u={kbd:m},e=l.forwardRef(function({className:d,children:c,...i},p){return t.jsx("kbd",{ref:p,className:`${u.kbd} sandui-globals ${d||""}`,...i,children:c})});e.propTypes={className:o.string,children:o.node};e.displayName="SandKbd";e.__docgenInfo={description:`SandKbd - Represents user input from a keyboard.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for external overrides.
@param {React.ReactNode} [props.children] - Keyboard input content.
@returns {React.ReactElement} The rendered kbd component.

@example
return (
  <SandKbd>Ctrl + C</SandKbd>
)`,methods:[],displayName:"SandKbd",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const g={title:"02. Atoms/SandKbd",component:e,tags:["autodocs"]},r={args:{children:"⌘"}},n={args:{children:"⌘",style:{background:"var(--sandui-primary)",color:"white"}}},a={args:{children:"⌘",style:{opacity:.5}}},s={render:()=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--theme-text)",fontFamily:"Inter, sans-serif",fontSize:"14px"},children:["Save document ",t.jsx(e,{children:"⌘"})," + ",t.jsx(e,{children:"S"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌘'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌘',
    style: {
      background: 'var(--sandui-primary)',
      color: 'white'
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌘',
    style: {
      opacity: 0.5
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'var(--theme-text)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px'
  }}>
      Save document <SandKbd>⌘</SandKbd> + <SandKbd>S</SandKbd>
    </div>
}`,...s.parameters?.docs?.source}}};const h=["Default","Active","Disabled","Shortcut"];export{n as Active,r as Default,a as Disabled,s as Shortcut,h as __namedExportsOrder,g as default};
