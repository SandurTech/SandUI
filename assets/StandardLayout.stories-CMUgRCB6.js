import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as o}from"./Navbar-CDRB59sj.js";import{S as i}from"./Sidebar-ByCfkj_-.js";import{S as s}from"./Footer-BvG9aPO9.js";import{S as d}from"./Button-DW8W7Trf.js";import{S as r}from"./Card-BIORmNpu.js";import{S as t}from"./Icon-yTymsffE.js";import{S as n}from"./Link-zEkvIw8s.js";import"./index-CbwltWip.js";const u={title:"05. Templates/StandardLayout",parameters:{layout:"fullscreen"}},a={name:"StandardLayout",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--theme-bg)"},children:[e.jsxs(o,{title:"SandurTech",children:[e.jsx(n,{href:"#",children:"Products"}),e.jsx(n,{href:"#",children:"Docs"}),e.jsxs(d,{variant:"primary",children:[e.jsx(t,{name:"login",size:16})," Sign In"]})]}),e.jsxs("div",{style:{display:"flex",flex:1},children:[e.jsx(i,{items:[{icon:"dashboard",label:"Dashboard",active:!0},{icon:"bar_chart",label:"Analytics"},{icon:"settings",label:"Settings"}]}),e.jsxs("main",{style:{flex:1,padding:"32px",maxWidth:"960px"},children:[e.jsx("h1",{style:{color:"var(--theme-text)",fontFamily:"Outfit, sans-serif",fontSize:"28px",marginBottom:"8px"},children:"Dashboard"}),e.jsx("p",{style:{color:"var(--theme-text-muted)",marginBottom:"24px",fontSize:"14px"},children:"Welcome back. Here is an overview of your projects."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px"},children:[e.jsxs(r,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[e.jsx(t,{name:"code",size:20,style:{color:"var(--sandui-accent)"}}),e.jsx("h3",{style:{color:"var(--theme-text)",margin:0},children:"SandUI"})]}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px"},children:"Design system library"})]}),e.jsxs(r,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[e.jsx(t,{name:"qr_code",size:20,style:{color:"var(--sandui-accent)"}}),e.jsx("h3",{style:{color:"var(--theme-text)",margin:0},children:"Bulk Barcode"})]}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px"},children:"Barcode generation tool"})]})]})]})]}),e.jsx(s,{brandLogo:"/SandurTech-Logo-SVG.svg"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,u as default};
