import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as c}from"./Icon-DPzMwpZZ.js";import"./index-CbwltWip.js";const u={title:"02. Atoms/SandIcon",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"SandUI integrates Google Material Symbols (Rounded). We prefer this over custom icons for scalability. Use any valid Material symbol name as the `name` prop. View all icons at [Google Fonts - Icons](https://fonts.google.com/icons)."}}},argTypes:{name:{control:"text"},size:{control:{type:"range",min:16,max:48,step:4}},filled:{control:"boolean"}}},n={args:{name:"settings"}},r={args:{name:"settings",style:{color:"var(--sandui-primary)"}}},s={args:{name:"settings",style:{opacity:.5}}},a={args:{name:"rocket_launch",size:36}},o={args:{name:"favorite",size:24,filled:!1}},t={name:"Icon Gallery",render:()=>{const l=["home","settings","search","add","delete","person","cloud","image","edit","done"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:l.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"72px",padding:"12px 4px",borderRadius:"8px",border:"1px solid var(--theme-border)",gap:"6px"},children:[e.jsx(c,{name:i,size:24}),e.jsx("span",{style:{fontSize:"10px",color:"var(--theme-text-muted)",textAlign:"center"},children:i})]},i))})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'settings'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'settings',
    style: {
      color: 'var(--sandui-primary)'
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'settings',
    style: {
      opacity: 0.5
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'rocket_launch',
    size: 36
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'favorite',
    size: 24,
    filled: false
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Icon Gallery',
  render: () => {
    const icons = ['home', 'settings', 'search', 'add', 'delete', 'person', 'cloud', 'image', 'edit', 'done'];
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }}>
        {icons.map(icon => <div key={icon} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '72px',
        padding: '12px 4px',
        borderRadius: '8px',
        border: '1px solid var(--theme-border)',
        gap: '6px'
      }}>
            <SandIcon name={icon} size={24} />
            <span style={{
          fontSize: '10px',
          color: 'var(--theme-text-muted)',
          textAlign: 'center'
        }}>{icon}</span>
          </div>)}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const x=["Default","Active","Disabled","Large","Outlined","IconGallery"];export{r as Active,n as Default,s as Disabled,t as IconGallery,a as Large,o as Outlined,x as __namedExportsOrder,u as default};
