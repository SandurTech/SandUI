import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as a}from"./Button-t0QF1ika.js";import{u as g}from"./SandThemeContext-POLRXX96.js";import"./index-CbwltWip.js";const r=({name:n,style:h})=>e.jsx("span",{className:"material-symbols-rounded",style:{fontSize:18,...h},children:n}),B={title:"02. Atoms/SandButton",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost"],description:"Visual style variant."},children:{control:"text"},disabled:{control:"boolean"},onClick:{action:"clicked"}}},t={args:{variant:"primary",children:"Get Started"}},s={args:{variant:"primary",children:"Get Started",className:"active"}},o={args:{variant:"primary",children:"Get Started",disabled:!0}},i={args:{variant:"primary",children:"Get Started"}},c={args:{variant:"secondary",children:"Learn More"}},d={args:{variant:"ghost",children:"Cancel"}},l={name:"All Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"rocket_launch"})," Primary"]}),e.jsxs(a,{variant:"secondary",children:[e.jsx(r,{name:"info"})," Secondary"]}),e.jsxs(a,{variant:"ghost",children:[e.jsx(r,{name:"close"})," Ghost"]}),e.jsxs(a,{variant:"primary",disabled:!0,children:[e.jsx(r,{name:"block"})," Disabled"]})]})},m={name:"Scale Animation (Click Me)",render:()=>e.jsxs("div",{style:{textAlign:"center",padding:"32px"},children:[e.jsxs("p",{style:{color:"var(--theme-text-muted)",marginBottom:"16px",fontFamily:"Inter, sans-serif",fontSize:"14px"},children:["Click and hold to see the ",e.jsx("code",{style:{background:"var(--theme-surface)",padding:"2px 6px",borderRadius:"4px"},children:"scale(0.98)"})," press animation."]}),e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"touch_app"})," Hold to Press"]})]})},p={name:"With Material Icons",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"add"})," Create"]}),e.jsxs(a,{variant:"secondary",children:[e.jsx(r,{name:"download"})," Export"]}),e.jsxs(a,{variant:"ghost",children:[e.jsx(r,{name:"settings"})," Settings"]}),e.jsxs(a,{variant:"primary",children:[e.jsx(r,{name:"send"})," Submit"]})]})};function x(){const{theme:n,toggleTheme:h}=g();return e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsxs(a,{variant:"primary",onClick:h,children:[e.jsx(r,{name:n==="light"?"dark_mode":"light_mode"})," ","Switch to ",n==="light"?"Dark":"Light"]}),e.jsxs("span",{style:{fontFamily:"Inter",color:"var(--theme-text)",fontSize:"14px"},children:["Theme: ",e.jsx("strong",{children:n})]})]})}const u={name:"Theme Toggle",render:()=>e.jsx(x,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Get Started'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Get Started',
    className: 'active'
  } // Assuming active styling or just to fulfill requirement
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Get Started',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Get Started'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Learn More'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Cancel'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Theme Toggle',
  render: () => <ThemeToggleDemo />
}`,...u.parameters?.docs?.source}}};const I=["Default","Active","Disabled","Primary","Secondary","Ghost","AllVariants","ScaleAnimation","WithIcons","ThemeToggle"];export{s as Active,l as AllVariants,t as Default,o as Disabled,d as Ghost,i as Primary,m as ScaleAnimation,c as Secondary,u as ThemeToggle,p as WithIcons,I as __namedExportsOrder,B as default};
