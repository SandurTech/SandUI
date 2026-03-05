import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as s}from"./Button-t0QF1ika.js";import{S as t}from"./Input-DTci7br5.js";import{S as i}from"./Icon-DPzMwpZZ.js";import{S as o}from"./Link-MC4Br6F-.js";import"./index-CbwltWip.js";const y={title:"05. Templates/AuthLayout",parameters:{layout:"fullscreen"}},a={name:"AuthLayout Active",render:()=>e.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--theme-bg)",fontFamily:"Inter, sans-serif"},children:e.jsx("div",{style:{width:"100%",maxWidth:"400px",padding:"40px",background:"var(--theme-surface)",borderRadius:"12px",boxShadow:"0 20px 40px rgba(0,0,0,0.3)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Email",placeholder:"you@sandurtech.com",type:"email",autoFocus:!0}),e.jsx(t,{label:"Password",placeholder:"Enter your password",type:"password"}),e.jsxs(s,{variant:"primary",style:{width:"100%",justifyContent:"center"},children:[e.jsx(i,{name:"login",size:16})," Sign In"]})]})})})},r={name:"AuthLayout Disabled",render:()=>e.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--theme-bg)",fontFamily:"Inter, sans-serif",opacity:.5,pointerEvents:"none"},children:e.jsx("div",{style:{width:"100%",maxWidth:"400px",padding:"40px",background:"var(--theme-surface)",borderRadius:"12px",boxShadow:"0 20px 40px rgba(0,0,0,0.3)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Email",placeholder:"you@sandurtech.com",type:"email",disabled:!0}),e.jsx(t,{label:"Password",placeholder:"Enter your password",type:"password",disabled:!0}),e.jsxs(s,{variant:"primary",style:{width:"100%",justifyContent:"center"},disabled:!0,children:[e.jsx(i,{name:"login",size:16})," Sign In"]})]})})})},n={name:"AuthLayout",render:()=>e.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--theme-bg)",fontFamily:"Inter, sans-serif"},children:e.jsxs("div",{style:{width:"100%",maxWidth:"400px",padding:"40px",background:"var(--theme-surface)",borderRadius:"12px",boxShadow:"0 20px 40px rgba(0,0,0,0.3)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[e.jsx(i,{name:"lock",size:36,style:{color:"var(--sandui-accent)",marginBottom:"12px"}}),e.jsx("h1",{style:{fontSize:"24px",fontFamily:"Outfit, sans-serif",color:"var(--theme-text)",margin:"0 0 4px"},children:"Welcome Back"}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px",margin:0},children:"Sign in to your SandurTech account"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Email",placeholder:"you@sandurtech.com",type:"email"}),e.jsx(t,{label:"Password",placeholder:"Enter your password",type:"password"}),e.jsxs(s,{variant:"primary",style:{width:"100%",justifyContent:"center"},children:[e.jsx(i,{name:"login",size:16})," Sign In"]})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"24px"},children:e.jsx(o,{href:"#",variant:"muted",children:"Forgot password?"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'AuthLayout Active',
  render: () => <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--theme-bg)',
    fontFamily: 'Inter, sans-serif'
  }}>
      <div style={{
      width: '100%',
      maxWidth: '400px',
      padding: '40px',
      background: 'var(--theme-surface)',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <SandInput label="Email" placeholder="you@sandurtech.com" type="email" autoFocus />
          <SandInput label="Password" placeholder="Enter your password" type="password" />
          <SandButton variant="primary" style={{
          width: '100%',
          justifyContent: 'center'
        }}>
            <SandIcon name="login" size={16} /> Sign In
          </SandButton>
        </div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'AuthLayout Disabled',
  render: () => <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--theme-bg)',
    fontFamily: 'Inter, sans-serif',
    opacity: 0.5,
    pointerEvents: 'none'
  }}>
      <div style={{
      width: '100%',
      maxWidth: '400px',
      padding: '40px',
      background: 'var(--theme-surface)',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <SandInput label="Email" placeholder="you@sandurtech.com" type="email" disabled />
          <SandInput label="Password" placeholder="Enter your password" type="password" disabled />
          <SandButton variant="primary" style={{
          width: '100%',
          justifyContent: 'center'
        }} disabled>
            <SandIcon name="login" size={16} /> Sign In
          </SandButton>
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'AuthLayout',
  render: () => <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--theme-bg)',
    fontFamily: 'Inter, sans-serif'
  }}>
      <div style={{
      width: '100%',
      maxWidth: '400px',
      padding: '40px',
      background: 'var(--theme-surface)',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    }}>
        <div style={{
        textAlign: 'center',
        marginBottom: '32px'
      }}>
          <SandIcon name="lock" size={36} style={{
          color: 'var(--sandui-accent)',
          marginBottom: '12px'
        }} />
          <h1 style={{
          fontSize: '24px',
          fontFamily: 'Outfit, sans-serif',
          color: 'var(--theme-text)',
          margin: '0 0 4px'
        }}>
            Welcome Back
          </h1>
          <p style={{
          color: 'var(--theme-text-muted)',
          fontSize: '14px',
          margin: 0
        }}>
            Sign in to your SandurTech account
          </p>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <SandInput label="Email" placeholder="you@sandurtech.com" type="email" />
          <SandInput label="Password" placeholder="Enter your password" type="password" />
          <SandButton variant="primary" style={{
          width: '100%',
          justifyContent: 'center'
        }}>
            <SandIcon name="login" size={16} /> Sign In
          </SandButton>
        </div>

        <div style={{
        textAlign: 'center',
        marginTop: '24px'
      }}>
          <SandLink href="#" variant="muted">Forgot password?</SandLink>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const h=["Active","Disabled","Default"];export{a as Active,n as Default,r as Disabled,h as __namedExportsOrder,y as default};
