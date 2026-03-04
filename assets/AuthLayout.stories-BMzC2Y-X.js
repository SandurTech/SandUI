import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as n}from"./Button-DW8W7Trf.js";import{S as a}from"./Input-DTnwM0iD.js";import{S as r}from"./Icon-yTymsffE.js";import{S as i}from"./Link-zEkvIw8s.js";import"./index-CbwltWip.js";const x={title:"05. Templates/AuthLayout",parameters:{layout:"fullscreen"}},t={name:"AuthLayout",render:()=>e.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--theme-bg)",fontFamily:"Inter, sans-serif"},children:e.jsxs("div",{style:{width:"100%",maxWidth:"400px",padding:"40px",background:"var(--theme-surface)",borderRadius:"12px",boxShadow:"0 20px 40px rgba(0,0,0,0.3)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[e.jsx(r,{name:"lock",size:36,style:{color:"var(--sandui-accent)",marginBottom:"12px"}}),e.jsx("h1",{style:{fontSize:"24px",fontFamily:"Outfit, sans-serif",color:"var(--theme-text)",margin:"0 0 4px"},children:"Welcome Back"}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px",margin:0},children:"Sign in to your SandurTech account"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Email",placeholder:"you@sandurtech.com",type:"email"}),e.jsx(a,{label:"Password",placeholder:"Enter your password",type:"password"}),e.jsxs(n,{variant:"primary",style:{width:"100%",justifyContent:"center"},children:[e.jsx(r,{name:"login",size:16})," Sign In"]})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"24px"},children:e.jsx(i,{href:"#",variant:"muted",children:"Forgot password?"})})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,x as default};
