import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as t}from"./Icon-yTymsffE.js";import"./index-CbwltWip.js";const m={title:"02. Atoms/SandIcon",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"SandUI integrates Google Material Symbols (Rounded). We prefer this over custom icons for scalability. Use any valid Material symbol name as the `name` prop. View all icons at [Google Fonts - Icons](https://fonts.google.com/icons)."}}},argTypes:{name:{control:"text"},size:{control:{type:"range",min:16,max:48,step:4}},filled:{control:"boolean"}}},n={args:{name:"settings"}},r={args:{name:"rocket_launch",size:36}},a={args:{name:"favorite",size:24,filled:!1}},s={name:"Icon Gallery",render:()=>{const i=["home","settings","search","add","delete","person","cloud","image","edit","done"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:i.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"72px",padding:"12px 4px",borderRadius:"8px",border:"1px solid var(--theme-border)",gap:"6px"},children:[e.jsx(t,{name:o,size:24}),e.jsx("span",{style:{fontSize:"10px",color:"var(--theme-text-muted)",textAlign:"center"},children:o})]},o))})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'settings'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'rocket_launch',
    size: 36
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'favorite',
    size: 24,
    filled: false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const x=["Default","Large","Outlined","IconGallery"];export{n as Default,s as IconGallery,r as Large,a as Outlined,x as __namedExportsOrder,m as default};
