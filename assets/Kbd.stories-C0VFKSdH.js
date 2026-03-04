import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as i}from"./index-CqIc3cxq.js";import{P as a}from"./index-CbwltWip.js";const p="_kbd_r4nzw_1",l={kbd:p},e=i.forwardRef(function({className:t,children:d,...o},c){return n.jsx("kbd",{ref:c,className:`${l.kbd} sandui-globals ${t||""}`,...o,children:d})});e.propTypes={className:a.string,children:a.node};e.displayName="SandKbd";e.__docgenInfo={description:"",methods:[],displayName:"SandKbd",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const b={title:"02. Atoms/SandKbd",component:e,tags:["autodocs"]},s={args:{children:"⌘"}},r={render:()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--theme-text)",fontFamily:"Inter, sans-serif",fontSize:"14px"},children:["Save document ",n.jsx(e,{children:"⌘"})," + ",n.jsx(e,{children:"S"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌘'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const x=["Default","Shortcut"];export{s as Default,r as Shortcut,x as __namedExportsOrder,b as default};
