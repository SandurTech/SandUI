import{j as a}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as t}from"./Sidebar-ByCfkj_-.js";import"./index-CbwltWip.js";import"./Icon-yTymsffE.js";const l={title:"04. Organisms/SandSidebar",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{items:[{icon:"dashboard",label:"Dashboard",active:!0},{icon:"bar_chart",label:"Analytics"},{icon:"settings",label:"Settings"},{icon:"person",label:"Profile"}]}},n={name:"With Extra Content",render:()=>a.jsx(t,{items:[{icon:"home",label:"Home",active:!0},{icon:"folder",label:"Projects"},{icon:"code",label:"Code"}],children:a.jsx("div",{style:{padding:"16px",marginTop:"auto",fontSize:"12px",color:"var(--theme-text-muted)"},children:"SandUI v0.1.0"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: 'dashboard',
      label: 'Dashboard',
      active: true
    }, {
      icon: 'bar_chart',
      label: 'Analytics'
    }, {
      icon: 'settings',
      label: 'Settings'
    }, {
      icon: 'person',
      label: 'Profile'
    }]
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Extra Content',
  render: () => <SandSidebar items={[{
    icon: 'home',
    label: 'Home',
    active: true
  }, {
    icon: 'folder',
    label: 'Projects'
  }, {
    icon: 'code',
    label: 'Code'
  }]}>
      <div style={{
      padding: '16px',
      marginTop: 'auto',
      fontSize: '12px',
      color: 'var(--theme-text-muted)'
    }}>
        SandUI v0.1.0
      </div>
    </SandSidebar>
}`,...n.parameters?.docs?.source}}};const d=["Default","WithNestedContent"];export{e as Default,n as WithNestedContent,d as __namedExportsOrder,l as default};
