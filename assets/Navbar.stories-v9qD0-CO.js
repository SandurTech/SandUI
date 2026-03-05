import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as d}from"./Navbar-Bt0YLvDG.js";import{S as m}from"./Button-t0QF1ika.js";import{u as g}from"./SandThemeContext-POLRXX96.js";import"./index-CbwltWip.js";const p=({name:r,style:l})=>e.jsx("span",{className:"material-symbols-rounded",style:{fontSize:18,...l},children:r}),y={title:"04. Organisms/SandNavbar",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{title:{control:"text",description:"Brand title."},logo:{control:"text",description:"Logo image URL."},fixed:{control:"boolean",description:"Fixed positioning."}}},a={args:{title:"SandurTech"}},t={args:{title:"SandurTech (Active)",className:"active"}},o={args:{title:"SandurTech",style:{opacity:.5,pointerEvents:"none"}}},s={args:{title:"SandurTech",logo:"https://sandurtech.vercel.app/images/SandurTech-Logo-SVG.svg"}},n={args:{title:"SandurTech"},render:r=>e.jsxs(d,{...r,children:[e.jsx("a",{href:"#",style:{color:"var(--sandui-secondary)",textDecoration:"none",fontSize:"14px"},children:"About"}),e.jsx("a",{href:"#",style:{color:"var(--sandui-secondary)",textDecoration:"none",fontSize:"14px"},children:"Tools"}),e.jsxs(m,{variant:"primary",children:[e.jsx(p,{name:"arrow_forward"})," Get Started"]})]})},i={name:"Glassmorphism Demo",render:()=>e.jsxs("div",{style:{backgroundImage:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",minHeight:"400px"},children:[e.jsx(d,{title:"SandurTech",children:e.jsxs(m,{variant:"ghost",style:{color:"#fff",borderColor:"rgba(255,255,255,0.3)"},children:[e.jsx(p,{name:"login"})," Sign In"]})}),e.jsxs("div",{style:{padding:"48px 16px",color:"#fff",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Glassmorphism"}),e.jsx("p",{style:{opacity:.8},children:"backdrop-filter: blur(12px) with rgba(255, 255, 255, 0.1) border."})]})]})};function h(){const{theme:r,toggleTheme:l}=g();return e.jsxs("div",{children:[e.jsx(d,{title:"SandurTech",children:e.jsx(m,{variant:"primary",onClick:l,children:e.jsx(p,{name:r==="light"?"dark_mode":"light_mode"})})}),e.jsxs("div",{style:{padding:"48px 16px",background:"var(--theme-bg)",color:"var(--theme-text)",minHeight:"300px",transition:"all 0.3s ease"},children:[e.jsxs("h2",{children:["Theme: ",r]}),e.jsx("p",{style:{color:"var(--theme-text-muted)",marginTop:"8px"},children:"Navbar and content respond to the data-theme attribute."})]})]})}const c={name:"Theme Toggle",render:()=>e.jsx(h,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech (Active)',
    className: 'active'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech',
    style: {
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech',
    logo: 'https://sandurtech.vercel.app/images/SandurTech-Logo-SVG.svg'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech'
  },
  render: args => <SandNavbar {...args}>
      <a href="#" style={{
      color: 'var(--sandui-secondary)',
      textDecoration: 'none',
      fontSize: '14px'
    }}>About</a>
      <a href="#" style={{
      color: 'var(--sandui-secondary)',
      textDecoration: 'none',
      fontSize: '14px'
    }}>Tools</a>
      <SandButton variant="primary"><Icon name="arrow_forward" /> Get Started</SandButton>
    </SandNavbar>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Glassmorphism Demo',
  render: () => <div style={{
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '400px'
  }}>
      <SandNavbar title="SandurTech">
        <SandButton variant="ghost" style={{
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.3)'
      }}>
          <Icon name="login" /> Sign In
        </SandButton>
      </SandNavbar>
      <div style={{
      padding: '48px 16px',
      color: '#fff',
      fontFamily: 'Inter, sans-serif'
    }}>
        <h2 style={{
        marginBottom: '8px'
      }}>Glassmorphism</h2>
        <p style={{
        opacity: 0.8
      }}>
          backdrop-filter: blur(12px) with rgba(255, 255, 255, 0.1) border.
        </p>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Theme Toggle',
  render: () => <NavbarThemeToggle />
}`,...c.parameters?.docs?.source}}};const T=["Default","Active","Disabled","WithLogo","WithActions","Glassmorphism","ThemeToggle"];export{t as Active,a as Default,o as Disabled,i as Glassmorphism,c as ThemeToggle,n as WithActions,s as WithLogo,T as __namedExportsOrder,y as default};
