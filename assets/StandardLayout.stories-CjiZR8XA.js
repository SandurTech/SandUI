import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as s}from"./Navbar-Bt0YLvDG.js";import{S as o}from"./Sidebar-BexZuUgI.js";import{S as d}from"./Footer-FEvq2JTP.js";import{S as l}from"./Button-t0QF1ika.js";import{S as c}from"./Card-dT27Pkbc.js";import{S as r}from"./Icon-DPzMwpZZ.js";import{S as a}from"./Link-MC4Br6F-.js";import"./index-CbwltWip.js";const f={title:"05. Templates/StandardLayout",parameters:{layout:"fullscreen"}},t={name:"StandardLayout Active",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--theme-bg)"},children:[e.jsxs(s,{title:"SandurTech",children:[e.jsx(a,{href:"#",children:"Products"}),e.jsx(a,{href:"#",children:"Docs"}),e.jsxs(l,{variant:"primary",children:[e.jsx(r,{name:"login",size:16})," Sign In"]})]}),e.jsx("div",{style:{display:"flex",flex:1},children:e.jsx(o,{items:[{icon:"dashboard",label:"Dashboard",active:!0},{icon:"bar_chart",label:"Analytics"},{icon:"settings",label:"Settings"}]})}),e.jsx(d,{brandLogo:"/SandurTech-Logo-SVG.svg"})]})},n={name:"StandardLayout Disabled",render:()=>e.jsxs("div",{style:{opacity:.5,pointerEvents:"none",display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--theme-bg)"},children:[e.jsxs(s,{title:"SandurTech",children:[e.jsx(a,{href:"#",children:"Products"}),e.jsx(a,{href:"#",children:"Docs"}),e.jsxs(l,{variant:"primary",disabled:!0,children:[e.jsx(r,{name:"login",size:16})," Sign In"]})]}),e.jsx("div",{style:{display:"flex",flex:1},children:e.jsx(o,{items:[{icon:"dashboard",label:"Dashboard",active:!0},{icon:"bar_chart",label:"Analytics"},{icon:"settings",label:"Settings"}]})}),e.jsx(d,{brandLogo:"/SandurTech-Logo-SVG.svg"})]})},i={name:"StandardLayout",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--theme-bg)"},children:[e.jsxs(s,{title:"SandurTech",children:[e.jsx(a,{href:"#",children:"Products"}),e.jsx(a,{href:"#",children:"Docs"}),e.jsxs(l,{variant:"primary",children:[e.jsx(r,{name:"login",size:16})," Sign In"]})]}),e.jsxs("div",{style:{display:"flex",flex:1},children:[e.jsx(o,{items:[{icon:"dashboard",label:"Dashboard",active:!0},{icon:"bar_chart",label:"Analytics"},{icon:"settings",label:"Settings"}]}),e.jsxs("main",{style:{flex:1,padding:"32px",maxWidth:"960px"},children:[e.jsx("h1",{style:{color:"var(--theme-text)",fontFamily:"Outfit, sans-serif",fontSize:"28px",marginBottom:"8px"},children:"Dashboard"}),e.jsx("p",{style:{color:"var(--theme-text-muted)",marginBottom:"24px",fontSize:"14px"},children:"Welcome back. Here is an overview of your projects."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px"},children:[e.jsxs(c,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[e.jsx(r,{name:"code",size:20,style:{color:"var(--sandui-accent)"}}),e.jsx("h3",{style:{color:"var(--theme-text)",margin:0},children:"SandUI"})]}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px"},children:"Design system library"})]}),e.jsxs(c,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[e.jsx(r,{name:"qr_code",size:20,style:{color:"var(--sandui-accent)"}}),e.jsx("h3",{style:{color:"var(--theme-text)",margin:0},children:"Bulk Barcode"})]}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px"},children:"Barcode generation tool"})]})]})]})]}),e.jsx(d,{brandLogo:"/SandurTech-Logo-SVG.svg"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'StandardLayout Active',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'var(--theme-bg)'
  }}>
      <SandNavbar title="SandurTech">
        <SandLink href="#">Products</SandLink>
        <SandLink href="#">Docs</SandLink>
        <SandButton variant="primary"><SandIcon name="login" size={16} /> Sign In</SandButton>
      </SandNavbar>

      <div style={{
      display: 'flex',
      flex: 1
    }}>
        <SandSidebar items={[{
        icon: 'dashboard',
        label: 'Dashboard',
        active: true
      }, {
        icon: 'bar_chart',
        label: 'Analytics'
      }, {
        icon: 'settings',
        label: 'Settings'
      }]} />
      </div>
      <SandFooter brandLogo="/SandurTech-Logo-SVG.svg" />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'StandardLayout Disabled',
  render: () => <div style={{
    opacity: 0.5,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'var(--theme-bg)'
  }}>
      <SandNavbar title="SandurTech">
        <SandLink href="#">Products</SandLink>
        <SandLink href="#">Docs</SandLink>
        <SandButton variant="primary" disabled><SandIcon name="login" size={16} /> Sign In</SandButton>
      </SandNavbar>

      <div style={{
      display: 'flex',
      flex: 1
    }}>
        <SandSidebar items={[{
        icon: 'dashboard',
        label: 'Dashboard',
        active: true
      }, {
        icon: 'bar_chart',
        label: 'Analytics'
      }, {
        icon: 'settings',
        label: 'Settings'
      }]} />
      </div>
      <SandFooter brandLogo="/SandurTech-Logo-SVG.svg" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'StandardLayout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'var(--theme-bg)'
  }}>
      <SandNavbar title="SandurTech">
        <SandLink href="#">Products</SandLink>
        <SandLink href="#">Docs</SandLink>
        <SandButton variant="primary"><SandIcon name="login" size={16} /> Sign In</SandButton>
      </SandNavbar>

      <div style={{
      display: 'flex',
      flex: 1
    }}>
        <SandSidebar items={[{
        icon: 'dashboard',
        label: 'Dashboard',
        active: true
      }, {
        icon: 'bar_chart',
        label: 'Analytics'
      }, {
        icon: 'settings',
        label: 'Settings'
      }]} />

        <main style={{
        flex: 1,
        padding: '32px',
        maxWidth: '960px'
      }}>
          <h1 style={{
          color: 'var(--theme-text)',
          fontFamily: 'Outfit, sans-serif',
          fontSize: '28px',
          marginBottom: '8px'
        }}>
            Dashboard
          </h1>
          <p style={{
          color: 'var(--theme-text-muted)',
          marginBottom: '24px',
          fontSize: '14px'
        }}>
            Welcome back. Here is an overview of your projects.
          </p>

          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px'
        }}>
            <SandCard>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
                <SandIcon name="code" size={20} style={{
                color: 'var(--sandui-accent)'
              }} />
                <h3 style={{
                color: 'var(--theme-text)',
                margin: 0
              }}>SandUI</h3>
              </div>
              <p style={{
              color: 'var(--theme-text-muted)',
              fontSize: '14px'
            }}>Design system library</p>
            </SandCard>
            <SandCard>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
                <SandIcon name="qr_code" size={20} style={{
                color: 'var(--sandui-accent)'
              }} />
                <h3 style={{
                color: 'var(--theme-text)',
                margin: 0
              }}>Bulk Barcode</h3>
              </div>
              <p style={{
              color: 'var(--theme-text-muted)',
              fontSize: '14px'
            }}>Barcode generation tool</p>
            </SandCard>
          </div>
        </main>
      </div>

      <SandFooter brandLogo="/SandurTech-Logo-SVG.svg" />
    </div>
}`,...i.parameters?.docs?.source}}};const j=["Active","Disabled","Default"];export{t as Active,i as Default,n as Disabled,j as __namedExportsOrder,f as default};
