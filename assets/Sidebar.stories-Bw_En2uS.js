import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as o}from"./Sidebar-BexZuUgI.js";import"./index-CbwltWip.js";import"./Icon-DPzMwpZZ.js";const m={title:"04. Organisms/SandSidebar",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{items:[{icon:"dashboard",label:"Dashboard",active:!0},{icon:"bar_chart",label:"Analytics"},{icon:"settings",label:"Settings"},{icon:"person",label:"Profile"}]}},n={args:{items:[{icon:"dashboard",label:"Dashboard"},{icon:"bar_chart",label:"Analytics",active:!0},{icon:"settings",label:"Settings"}]}},a={args:{items:[{icon:"dashboard",label:"Dashboard"},{icon:"settings",label:"Settings"}],style:{opacity:.5,pointerEvents:"none"}}},t={name:"With Extra Content",render:()=>r.jsx(o,{items:[{icon:"home",label:"Home",active:!0},{icon:"folder",label:"Projects"},{icon:"code",label:"Code"}],children:r.jsx("div",{style:{padding:"16px",marginTop:"auto",fontSize:"12px",color:"var(--theme-text-muted)"},children:"SandUI v0.1.0"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  args: {
    items: [{
      icon: 'dashboard',
      label: 'Dashboard'
    }, {
      icon: 'bar_chart',
      label: 'Analytics',
      active: true
    }, {
      icon: 'settings',
      label: 'Settings'
    }]
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: 'dashboard',
      label: 'Dashboard'
    }, {
      icon: 'settings',
      label: 'Settings'
    }],
    style: {
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["Default","Active","Disabled","WithNestedContent"];export{n as Active,e as Default,a as Disabled,t as WithNestedContent,b as __namedExportsOrder,m as default};
