import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as a}from"./Button-DW8W7Trf.js";import{u as p}from"./SandThemeContext-B-0_jwSK.js";import"./index-CbwltWip.js";const r=({name:n,style:m})=>e.jsx("span",{className:"material-symbols-rounded",style:{fontSize:18,...m},children:n}),v={title:"02. Atoms/SandButton",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost"],description:"Visual style variant."},children:{control:"text"},disabled:{control:"boolean"},onClick:{action:"clicked"}}},t={args:{variant:"primary",children:"Get Started"}},s={args:{variant:"secondary",children:"Learn More"}},o={args:{variant:"ghost",children:"Cancel"}},i={name:"All Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"rocket_launch"})," Primary"]}),e.jsxs(a,{variant:"secondary",children:[e.jsx(r,{name:"info"})," Secondary"]}),e.jsxs(a,{variant:"ghost",children:[e.jsx(r,{name:"close"})," Ghost"]}),e.jsxs(a,{variant:"primary",disabled:!0,children:[e.jsx(r,{name:"block"})," Disabled"]})]})},d={name:"Scale Animation (Click Me)",render:()=>e.jsxs("div",{style:{textAlign:"center",padding:"32px"},children:[e.jsxs("p",{style:{color:"var(--theme-text-muted)",marginBottom:"16px",fontFamily:"Inter, sans-serif",fontSize:"14px"},children:["Click and hold to see the ",e.jsx("code",{style:{background:"var(--theme-surface)",padding:"2px 6px",borderRadius:"4px"},children:"scale(0.98)"})," press animation."]}),e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"touch_app"})," Hold to Press"]})]})},c={name:"With Material Icons",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"add"})," Create"]}),e.jsxs(a,{variant:"secondary",children:[e.jsx(r,{name:"download"})," Export"]}),e.jsxs(a,{variant:"ghost",children:[e.jsx(r,{name:"settings"})," Settings"]}),e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"send"})," Submit"]})]})};function h(){const{theme:n,toggleTheme:m}=p();return e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsxs(a,{variant:"primary",onClick:m,children:[e.jsx(r,{name:n==="light"?"dark_mode":"light_mode"})," ","Switch to ",n==="light"?"Dark":"Light"]}),e.jsxs("span",{style:{fontFamily:"Inter",color:"var(--theme-text)",fontSize:"14px"},children:["Theme: ",e.jsx("strong",{children:n})]})]})}const l={name:"Theme Toggle",render:()=>e.jsx(h,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Get Started'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Learn More'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Cancel'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <SandButton variant="primary"><Icon name="rocket_launch" /> Primary</SandButton>
      <SandButton variant="secondary"><Icon name="info" /> Secondary</SandButton>
      <SandButton variant="ghost"><Icon name="close" /> Ghost</SandButton>
      <SandButton variant="primary" disabled><Icon name="block" /> Disabled</SandButton>
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Scale Animation (Click Me)',
  render: () => <div style={{
    textAlign: 'center',
    padding: '32px'
  }}>
      <p style={{
      color: 'var(--theme-text-muted)',
      marginBottom: '16px',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px'
    }}>
        Click and hold to see the <code style={{
        background: 'var(--theme-surface)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>scale(0.98)</code> press animation.
      </p>
      <SandButton variant="primary"><Icon name="touch_app" /> Hold to Press</SandButton>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Material Icons',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <SandButton variant="primary"><Icon name="add" /> Create</SandButton>
      <SandButton variant="secondary"><Icon name="download" /> Export</SandButton>
      <SandButton variant="ghost"><Icon name="settings" /> Settings</SandButton>
      <SandButton variant="primary"><Icon name="send" /> Submit</SandButton>
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Theme Toggle',
  render: () => <ThemeToggleDemo />
}`,...l.parameters?.docs?.source}}};const j=["Primary","Secondary","Ghost","AllVariants","ScaleAnimation","WithIcons","ThemeToggle"];export{i as AllVariants,o as Ghost,t as Primary,d as ScaleAnimation,s as Secondary,l as ThemeToggle,c as WithIcons,j as __namedExportsOrder,v as default};
